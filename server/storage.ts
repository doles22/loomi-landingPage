import { type AndroidWaitlist, type InsertAndroidWaitlist, androidWaitlist } from "@shared/schema";
import { db } from "../db/db";
import { eq } from "drizzle-orm";

export interface IStorage {
  addToAndroidWaitlist(data: InsertAndroidWaitlist): Promise<AndroidWaitlist>;
  getAndroidWaitlistByEmail(email: string): Promise<AndroidWaitlist | undefined>;
}

export class DatabaseStorage implements IStorage {
  async addToAndroidWaitlist(data: InsertAndroidWaitlist): Promise<AndroidWaitlist> {
    const [result] = await db.insert(androidWaitlist).values(data).returning();
    return result;
  }

  async getAndroidWaitlistByEmail(email: string): Promise<AndroidWaitlist | undefined> {
    const [result] = await db.select().from(androidWaitlist).where(eq(androidWaitlist.email, email));
    return result;
  }
}

export const storage = new DatabaseStorage();
