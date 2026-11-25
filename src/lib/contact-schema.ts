import { z } from "zod";

export const interests = ["Financial and performance advisory", "Costing and operational improvement", "Commercial governance and contract risk", "Automation and business intelligence", "StratForge Intelligence (early access)", "Other"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name must be under 100 characters"),
  company: z.string().trim().max(120, "Company must be under 120 characters").optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  interest: z.enum(interests, { errorMap: () => ({ message: "Please choose an area of interest" }) }),
  message: z.string().trim().min(10, "Please tell us a little more (at least 10 characters)").max(2000, "Message must be under 2000 characters"),
  consent: z.literal(true, { errorMap: () => ({ message: "Please consent so we can respond to your enquiry" }) }),
});
export type ContactInput = z.infer<typeof contactSchema>;
