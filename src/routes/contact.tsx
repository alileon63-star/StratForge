import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { PageHero, meta } from "@/components/site/Layout";
import { contactSchema, interests } from "@/lib/contact-schema";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact", "Book a discovery call or discuss your business with StratForge — finance, commercial governance and technology advisory for South African SMEs.", "/contact"),
  component: Contact,
});

const field = "mt-2 block w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-navy placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-ring/30";

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const r = contactSchema.safeParse({
      name: fd.get("name"), company: fd.get("company"), email: fd.get("email"),
      interest: fd.get("interest"), message: fd.get("message"), consent: fd.get("consent") === "on",
    });
    if (!r.success) {
      const errs: Record<string, string> = {};
      for (const i of r.error.issues) { const k = String(i.path[0]); if (!errs[k]) errs[k] = i.message; }
      setErrors(errs);
      const first = Object.keys(errs)[0];
      if (first) (e.currentTarget.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    setErrors({});
    setDone(true);
  }

  const Err = ({ k }: { k: string }) => errors[k] ? <p id={`${k}-err`} className="mt-1.5 text-xs text-destructive">{errors[k]}</p> : null;
  const a = (k: string) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <>
      <PageHero eyebrow="Contact" title="Discuss your business" intro="Tell us a little about your business and what you would like to understand or improve. We will respond to arrange a discovery conversation." />
      <section className="container-site grid gap-14 py-20 md:py-28 lg:grid-cols-[1fr_1.4fr]">
        <aside className="space-y-8">
          <div><h2 className="text-xl font-semibold text-navy">What happens next</h2>
            <ol className="mt-5 space-y-4 text-sm text-muted-foreground">
              {["We review your enquiry.", "We get in touch to arrange a short discovery conversation.", "If there is a fit, we propose a scoped engagement."].map((s, i) => <li key={s} className="flex gap-3"><span className="font-semibold text-brand">{i + 1}.</span>{s}</li>)}
            </ol>
          </div>
          <div className="rounded-xl border-l-4 border-gold bg-surface p-6 text-sm leading-relaxed text-muted-foreground" role="note">
            <h3 className="font-semibold text-navy">Setup note</h3>
            <p className="mt-2">Online enquiries are not yet connected to an inbox, so the form below does not send messages yet.</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6 text-sm leading-relaxed text-muted-foreground">
            <h3 className="font-semibold text-navy">Your privacy</h3>
            <p className="mt-2">In line with the Protection of Personal Information Act (POPIA), we only use the details you provide to respond to your enquiry. We do not sell or share your personal information, and you may ask us to correct or delete it at any time.</p>
          </div>
        </aside>
        <div className="rounded-2xl border border-border bg-background p-7 shadow-panel md:p-10">
          {done ? (
            <div className="py-12 text-center" role="status" aria-live="polite">
              <CheckCircle2 className="mx-auto h-12 w-12 text-brand" />
              <h2 className="mt-5 text-2xl font-semibold text-navy">Thank you for your enquiry</h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">Your details have been captured on this page. Online submission is not yet connected, so this message has not been sent or stored. Please keep a copy; a working enquiry channel will be added before launch.</p>
              <button onClick={() => setDone(false)} className="mt-8 text-sm font-semibold text-brand hover:underline">Send another enquiry</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <div><label htmlFor="name" className="text-sm font-medium text-navy">Name *</label><input id="name" name="name" autoComplete="name" className={field} {...a("name")} /><Err k="name" /></div>
              <div><label htmlFor="company" className="text-sm font-medium text-navy">Company</label><input id="company" name="company" autoComplete="organization" className={field} {...a("company")} /><Err k="company" /></div>
              <div className="sm:col-span-2"><label htmlFor="email" className="text-sm font-medium text-navy">Email *</label><input id="email" name="email" type="email" autoComplete="email" className={field} {...a("email")} /><Err k="email" /></div>
              <div className="sm:col-span-2"><label htmlFor="interest" className="text-sm font-medium text-navy">Area of interest *</label>
                <select id="interest" name="interest" defaultValue="" className={field} {...a("interest")}><option value="" disabled>Select an option</option>{interests.map((i) => <option key={i}>{i}</option>)}</select><Err k="interest" /></div>
              <div className="sm:col-span-2"><label htmlFor="message" className="text-sm font-medium text-navy">Message *</label><textarea id="message" name="message" rows={5} className={field} placeholder="What would you like to understand or improve?" {...a("message")} /><Err k="message" /></div>
              <div className="sm:col-span-2">
                <label className="flex items-start gap-3 text-sm text-muted-foreground"><input type="checkbox" name="consent" className="mt-0.5 h-4 w-4 accent-brand" {...a("consent")} />I consent to StratForge processing my personal information to respond to this enquiry, in accordance with POPIA. *</label><Err k="consent" />
              </div>
              <div className="sm:col-span-2"><button type="submit" className="inline-flex h-12 items-center rounded-md bg-brand px-7 text-[15px] font-semibold text-on-navy transition-colors hover:bg-navy-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Send enquiry</button></div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
