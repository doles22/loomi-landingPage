import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const androidWaitlist = pgTable("android_waitlist", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertAndroidWaitlistSchema = createInsertSchema(androidWaitlist).omit({
  id: true,
  createdAt: true,
});

export type InsertAndroidWaitlist = z.infer<typeof insertAndroidWaitlistSchema>;
export type AndroidWaitlist = typeof androidWaitlist.$inferSelect;
