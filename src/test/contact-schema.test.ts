import { describe, expect, it } from "vitest";
import { contactSchema } from "@/lib/contact-schema";
const ok = { name: "Thabo", company: "", email: "t@example.co.za", interest: "Costing and operational improvement", message: "We need help with cash flow.", consent: true };
describe("contact form rules", () => {
  it("accepts a valid enquiry", () => expect(contactSchema.safeParse(ok).success).toBe(true));
  it("requires POPIA consent", () => expect(contactSchema.safeParse({ ...ok, consent: false }).success).toBe(false));
  it("rejects invalid email", () => expect(contactSchema.safeParse({ ...ok, email: "nope" }).success).toBe(false));
});
