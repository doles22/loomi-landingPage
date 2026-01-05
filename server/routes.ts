import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAndroidWaitlistSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/android-waitlist", async (req, res) => {
    try {
      const data = insertAndroidWaitlistSchema.parse(req.body);
      
      // Check if email already exists
      const existing = await storage.getAndroidWaitlistByEmail(data.email);
      if (existing) {
        return res.status(200).json({ message: "Already subscribed" });
      }
      
      const result = await storage.addToAndroidWaitlist(data);
      res.status(201).json(result);
    } catch (error) {
      console.error("Error adding to waitlist:", error);
      res.status(400).json({ error: "Invalid request" });
    }
  });

  return httpServer;
}
