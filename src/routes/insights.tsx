import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink, PageHero, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/insights")({
  head: () => meta("Insights", "Editorial topics StratForge plans to explore on business performance, cash flow, reporting and decision-making.", "/insights"),
  component: Insights,
});

const topics = [
  { c: "Cash flow", t: "Why profitable businesses still run short of cash", d: "Exploring the timing gap between earning revenue and collecting it." },
  { c: "Reporting", t: "Five measures every SME owner should review monthly", d: "A starting point for focused management reporting." },
  { c: "Profitability", t: "Finding margin you did not know you were losing", d: "How segment-level analysis can reveal hidden pressure." },
  { c: "Governance", t: "Building a contract register that management actually uses", d: "Tracking renewals, obligations and commercial risk in one place." },
  { c: "Costing", t: "Getting inventory costing right in manufacturing and distribution", d: "Why stock valuation drives margin accuracy." },
  { c: "Decisions", t: "Making assumptions visible in business decisions", d: "A simple discipline for better planning conversations." },
];

function Insights() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Thinking on performance, clarity and better decisions" intro="Our editorial programme is in preparation. The topics below are planned themes, not published articles." />
      <section className="container-site py-20 md:py-28">
        <div className="mb-10 flex items-center gap-3 rounded-lg border border-border bg-surface px-5 py-4 text-sm text-muted-foreground">
          <span className="rounded bg-brand-soft px-2 py-0.5 text-xs font-semibold text-brand">Sample topics</span>
          Articles will be published here in due course.
        </div>
        <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((p, i) => (
            <article key={p.t} className="group border-t border-navy pt-6">
              <div className="flex items-center justify-between text-xs"><span className="eyebrow text-brand">{p.c}</span><span className="text-muted-foreground">Planned topic · {String(i + 1).padStart(2, "0")}</span></div>
              <h2 className="mt-4 text-xl font-semibold leading-snug text-navy">{p.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              <p className="mt-5 text-xs font-medium text-muted-foreground">Coming soon</p>
            </article>
          ))}
        </div>
        <div className="mt-20 text-center">
          <p className="text-muted-foreground">Have a topic you would like us to cover?</p>
          <div className="mt-5"><ButtonLink to="/contact" variant="outline">Suggest a topic</ButtonLink></div>
        </div>
      </section>
    </>
  );
}
