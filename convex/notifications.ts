"use node";

import { v } from "convex/values";
import { internalAction } from "./_generated/server";
import { Resend } from "resend";

export const sendBookingNotification = internalAction({
  args: {
    name: v.string(),
    email: v.string(),
    startTime: v.number(),
  },
  returns: v.null(),
  handler: async (_ctx, args) => {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not set in Convex environment variables.");
      return null;
    }

    const resend = new Resend(resendApiKey);
    const date = new Date(args.startTime).toLocaleString("en-US", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    try {
      await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: "christianburris11@gmail.com",
        subject: `New Consultation: ${args.name}`,
        html: `
          <h1>New Consultation Scheduled</h1>
          <p><strong>Name:</strong> ${args.name}</p>
          <p><strong>Email:</strong> ${args.email}</p>
          <p><strong>Time:</strong> ${date}</p>
          <hr />
          <p>This is an automated notification from your personal portfolio website.</p>
        `,
      });
    } catch (error) {
      console.error("Failed to send email notification:", error);
    }
    
    return null;
  },
});
