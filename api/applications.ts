import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless";
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { z } from "zod";

const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  quoteTweet: text("quote_tweet").notNull(),
  xUsername: text("x_username").notNull(),
  evmAddress: text("evm_address").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

const insertSchema = z.object({
  quoteTweet: z.string().min(1, "Quote tweet is required"),
  xUsername: z.string().min(1, "X link/username is required"),
  evmAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/, "Invalid EVM address"),
});

export interface Env {
  DATABASE_URL: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  const { request, env } = context;

  if (!env.DATABASE_URL) {
    return new Response(
      JSON.stringify({ error: "DATABASE_URL is missing" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const pool = new Pool({ connectionString: env.DATABASE_URL });
  const db = drizzle(pool);

  try {
    const body = await request.json();
    const data = insertSchema.parse(body);

    const [application] = await db
      .insert(applications)
      .values(data)
      .returning();

    return new Response(JSON.stringify(application), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ error: error.errors[0].message }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    console.error("Database Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
