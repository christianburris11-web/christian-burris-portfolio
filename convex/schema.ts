import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  bookings: defineTable({
    name: v.string(),
    email: v.string(),
    startTime: v.number(), // Unix timestamp
  }).index("by_start_time", ["startTime"]),
});
