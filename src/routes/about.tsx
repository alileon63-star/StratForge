import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Scale } from "lucide-react";
import { CtaBand, Disclaimer, PageHero, SectionHead, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => meta("About", "StratForge combines finance, commercial governance and technology capability to help South African SMEs make better business decisions.", "/about"),
  component: About,
});

// Founder details are intentionally generic; replace with verified names and credentials when approved.
const founders = [
  { I: BarChart3, role: "Founder — Finance & Technology", focus: ["Finance and management accounting", "Manufacturing cost expertise", "Business intelligence", "Technology and automation"] },
  { I: Scale, role: "Co-founder — Commercial Law & Governance", focus: ["Commercial law perspective", "Governance frameworks", "Contract and obligation management", "Legal-risk awareness"] },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About StratForge" title="Finance, commercial governance and technology — in one partner" intro="StratForge is an early-stage South African advisory and intelligence company built on a simple belief: SMEs make better decisions when financial, commercial and operational information is understood together." />
      <section className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-2">
        <SectionHead eyebrow="Why we exist" title="Closing the gap between reporting and improvement" />
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>Many SMEs receive financial statements, sign contracts and run systems — but few get help connecting them and deciding what to change.</p>
          <p>We bring practical finance, commercial governance and technology together, focusing on understanding performance and agreeing sensible actions rather than producing more paperwork.</p>
        </div>
      </section>
      <section className="bg-surface py-20 md:py-28">
        <div className="container-site">
          <SectionHead eyebrow="Founding team" title="A complementary capability model" intro="Two founders with deliberately different strengths, so finance, technology and commercial governance are considered together." />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {founders.map(({ I, role, focus }) => (
              <article key={role} className="rounded-xl border border-border bg-background p-8">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand"><I className="h-5 w-5" /></span>
                <h3 className="mt-6 text-xl font-semibold text-navy">{role}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">{focus.map((f) => <li key={f} className="rounded-full border border-border px-3 py-1.5 text-sm text-navy">{f}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="mt-8"><Disclaimer>The co-founder's commercial-law background informs how we design governance and contract-management support. StratForge itself does not provide legal services; any legal advice is engaged separately through an appropriately authorised independent legal practice.</Disclaimer></div>
        </div>
      </section>
      <section className="container-site py-20 md:py-28">
        <SectionHead eyebrow="What guides us" title="Our principles" />
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {[["Practical over theoretical", "Advice should lead to something a business can actually do."], ["Clarity over complexity", "Insight is only useful if it is understood."], ["Evidence-led", "Recommendations grounded in the information, with assumptions stated."], ["Clear boundaries", "We are explicit about what is advisory, what is technology and what needs separate legal advice."]].map(([t, d]) => (
            <div key={t} className="bg-background p-8"><h3 className="font-semibold text-navy">{t}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p></div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
