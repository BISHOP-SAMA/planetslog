import type { VercelRequest, VercelResponse } from "@vercel/node";
import { drizzle } from "drizzle-orm/node-postgres";
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import pg from "pg";
import { z } from "zod";

const { Pool } = pg;

// Define Slogs Schema
const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  quoteTweet: text("quote_tweet").notNull(),
  favoriteSlog: text("favorite_slog").notNull(),
  xUsername: text("x_username").notNull(),
  evmAddress: text("evm_address").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Validate Slogs Input
const insertSchema = z.object({
  quoteTweet: z.string().min(1, "Quote tweet is required"),
  favoriteSlog: z.string().min(1),
  xUsername: z.string().min(1, "X link/username is required"),
  evmAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/, "Invalid EVM address"),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== "POST") return res.status(405).end();

  if (!process.env.DATABASE_URL) {
    return res.status(500).json({ error: "DATABASE_URL is missing in environment variables" });
  }

  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle(pool);

  try {
    // 1. Parse and validate the rebranded data
    const data = insertSchema.parse(req.body);

    // 2. Insert into Neon
    const [application] = await db.insert(applications).values(data).returning();

    // 3. Success response
    return res.status(201).json(application);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors[0].message });
    }
    console.error("Database Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Clean up connection
    await pool.end();
  }
}
