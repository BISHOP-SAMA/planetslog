import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// 1. Updated Table Definition with Slogs branding
export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  quoteTweet: text("quote_tweet").notNull(),
  favoriteSlog: text("favorite_slog").notNull(), // Changed from favoriteJunk
  xUsername: text("x_username").notNull(),
  evmAddress: text("evm_address").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// 2. Updated Schema for Backend Validation
// We explicitly define rules here to prevent "Validation failed"
export const insertApplicationSchema = createInsertSchema(applications, {
  quoteTweet: z.string().url("Please provide a valid Twitter/X URL"),
  xUsername: z.string().min(1, "X link or username is required"),
  evmAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/, "Invalid EVM wallet address"),
  favoriteSlog: z.string().min(1, "Slog info is required"),
}).omit({ 
  id: true, 
  createdAt: true 
});

export type Application = typeof applications.$inferSelect;
export type InsertApplication = z.infer<typeof insertApplicationSchema>;
