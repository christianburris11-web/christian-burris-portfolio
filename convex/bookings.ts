import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    startTime: v.number(),
  },
  returns: v.id("bookings"),
  handler: async (ctx, args) => {
    const bookingId = await ctx.db.insert("bookings", {
      name: args.name,
      email: args.email,
      startTime: args.startTime,
    });

    // Schedule notification email
    await ctx.scheduler.runAfter(0, internal.notifications.sendBookingNotification, {
      name: args.name,
      email: args.email,
      startTime: args.startTime,
    });

    return bookingId;
  },
});

export const list = query({
  args: {},
  returns: v.array(
    v.object({
      _id: v.id("bookings"),
      _creationTime: v.number(),
      name: v.string(),
      email: v.string(),
      startTime: v.number(),
    })
  ),
  handler: async (ctx) => {
    return await ctx.db
      .query("bookings")
      .withIndex("by_start_time")
      .collect();
  },
});
