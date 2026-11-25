import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { CtaBand, Disclaimer, PageHero, SectionHead, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/solutions")({
  head: () => meta("Advisory services", "Financial and performance advisory, costing and operational improvement, commercial governance and contract-risk support, and automation and business intelligence for South African SMEs.", "/solutions"),
  component: Solutions,
});

const services = [
  { n: "01", t: "Financial and performance advisory", d: "Turn your financial information into a clear, regular view of performance.", o: ["Management accounts and monthly review", "Budgeting and rolling forecasts", "Cash-flow planning and scenarios", "Profitability by product, customer or site", "KPI and performance reporting"] },
  { n: "02", t: "Costing and operational improvement", d: "Understand true costs and remove friction — with specialist depth for manufacturing, distribution and inventory-intensive businesses.", o: ["Product and job costing", "Inventory valuation and stock control", "Margin and pricing analysis", "Process mapping and bottleneck review", "Practical improvement roadmaps"] },
  { n: "03", t: "Commercial governance and contract-risk support", d: "Business-side support to organise contracts, obligations and governance so management can see and manage commercial risk.", o: ["Contract registers and renewal tracking", "Obligation and expiry monitoring", "Governance frameworks and delegations", "Compliance calendars", "Commercial risk visibility reporting"] },
  { n: "04", t: "Digital transformation, automation and business intelligence", d: "Sensible, maintainable technology that reduces manual work and connects your data.", o: ["Power BI dashboards and reporting", "Data integration across systems", "Workflow and reporting automation", "Predictive and trend analysis", "AI-assisted management insight (human-reviewed)"] },
];

function Solutions() {
  return (
    <>
      <PageHero eyebrow="Advisory services" title="Integrated advisory across finance, governance and technology" intro="Each engagement is scoped to your business and the decisions in front of you. Outcomes depend on your circumstances; our aim is clarity and a practical way forward." />
      <section className="container-site py-20 md:py-28">
        <div className="divide-y divide-border border-y border-border">
          {services.map((i) => (
            <article key={i.n} className="grid gap-6 py-10 md:grid-cols-12 md:gap-10">
              <span className="text-sm font-semibold tabular-nums text-brand md:col-span-1">{i.n}</span>
              <div className="md:col-span-5"><h2 className="text-2xl font-semibold text-navy">{i.t}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{i.d}</p></div>
              <div className="md:col-span-6">
                <p className="eyebrow text-muted-foreground">Typical scope</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {i.o.map((x) => <li key={x} className="flex gap-3 text-sm text-navy"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />{x}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Disclaimer>
            <strong className="text-navy">Advisory and technology services vs regulated legal services.</strong> StratForge (Pty) Ltd is a business advisory and technology company. It is not an attorney practice and does not provide legal advice, legal opinions or legal representation. Where a matter needs legal advice, it is engaged separately through an appropriately authorised independent legal practice, under that practice's own engagement terms, scope and fees.
          </Disclaimer>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-site">
          <SectionHead eyebrow="Engagement model" title="How working with us is structured" intro="Scope and fees (in ZAR) are agreed upfront in writing after a discovery conversation." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[["Diagnostic engagement", "Fixed scope", "A focused review of performance, controls, contracts and systems, ending in prioritised findings and a recommended plan."], ["Implementation project", "Defined deliverables", "Delivering agreed work — costing models, reporting, governance registers or automation — with clear milestones."], ["Ongoing advisory", "Monthly or quarterly", "Regular performance review and management support to keep improvements on track."]].map(([t, k, d]) => (
              <article key={t} className="rounded-xl border border-border bg-background p-8">
                <p className="eyebrow text-gold">{k}</p>
                <h3 className="mt-4 text-xl font-semibold text-navy">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
