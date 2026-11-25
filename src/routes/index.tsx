import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Scale, Cpu, Check, Search, Wrench, RefreshCw, Store, Factory, Briefcase, Truck, Package, Building2 } from "lucide-react";
import { ButtonLink, CtaBand, Disclaimer, SectionHead, meta } from "@/components/site/Layout";
import { DashboardPreview } from "@/components/site/DashboardPreview";

export const Route = createFileRoute("/")({
  head: () => meta("Financial clarity. Commercial confidence. Better business decisions.", "StratForge helps South African SMEs understand performance, strengthen controls, manage commercial risk and improve operations — combining finance, commercial governance and technology.", "/"),
  component: Home,
});

const pillars = [
  { icon: BarChart3, n: "01", title: "Financial Intelligence", text: "Know how the business is really performing and where cash and margin are going.", items: ["Management accounts", "Costing and profitability", "Budgeting and forecasting", "Cash flow", "Inventory", "Power BI and reporting"] },
  { icon: Scale, n: "02", title: "Legal & Governance Intelligence", text: "See commercial obligations and risks before they become problems.", items: ["Commercial contract management", "Governance frameworks", "Compliance calendars", "Commercial risk visibility", "Document and obligation tracking"] },
  { icon: Cpu, n: "03", title: "AI & Operational Intelligence", text: "Reduce manual work and bring information together for better management insight.", items: ["Workflow automation", "Data integration", "Predictive analysis", "AI-assisted management insights"] },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-gradient text-on-navy">
        <div className="grid-lines absolute inset-0" aria-hidden />
        <div className="container-site relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="eyebrow text-gold">StratForge — Intelligent Business Solutions</p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] md:text-[3.6rem]">Financial clarity. Commercial confidence. Better business decisions.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-navy-muted">StratForge helps South African SMEs understand performance, strengthen controls, manage commercial risk and improve operations — bringing finance, commercial governance and technology together in one practical advisory relationship.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink to="/contact" variant="light">Book a discovery call</ButtonLink>
              <ButtonLink to="/products" variant="ghostLight">Explore StratForge Intelligence</ButtonLink>
            </div>
          </div>
          <DashboardPreview />
        </div>
      </section>

      <section className="container-site py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHead eyebrow="The challenge" title="Numbers, contracts and systems rarely speak to each other." />
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>Financial results sit in the accounting system. Supplier and customer contracts sit in inboxes and folders. Operational data sits in spreadsheets. Each tells part of the story.</p>
            <p>We help owners and management teams connect these views so that performance, controls and commercial risk can be managed together — and so decisions are based on evidence rather than instinct.</p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-site">
          <SectionHead eyebrow="Three integrated pillars" title="Finance, governance and technology — working as one" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, n, title, text, items }) => (
              <article key={title} className="flex flex-col rounded-xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-panel">
                <div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand"><Icon className="h-5 w-5" /></span><span className="text-xs font-semibold tabular-nums text-muted-foreground">{n}</span></div>
                <h3 className="mt-6 text-xl font-semibold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                  {items.map((x) => <li key={x} className="flex gap-2.5 text-sm text-navy"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />{x}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-10"><Disclaimer><strong className="text-navy">Legal services boundary.</strong> StratForge provides commercial advisory and technology support for governance and contract management. Legal professional advice is delivered only through an appropriately authorised independent legal practice, engaged separately — never by our software or by StratForge as an advisory company.</Disclaimer></div>
        </div>
      </section>

      <section className="container-site py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHead eyebrow="Who we work with" title="Broad SME focus, with specialist depth" intro="We work with South African SMEs across sectors. Manufacturing, distribution and other inventory-intensive businesses are specialist segments where costing, stock and supplier contracts matter most." />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {([[Factory, "Manufacturing", true], [Truck, "Distribution", true], [Package, "Inventory-intensive", true], [Store, "Retail & trade", false], [Briefcase, "Professional services", false], [Building2, "Property & construction", false]] as const).map(([I, l, s]) => (
              <div key={l} className={`rounded-lg border bg-background p-5 ${s ? "border-brand" : "border-border"}`}><I className="h-5 w-5 text-brand" /><p className="mt-4 text-sm font-medium text-navy">{l}</p>{s && <p className="mt-1 text-xs text-brand">Specialist segment</p>}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-site">
          <SectionHead eyebrow="How we engage" title="Diagnose. Implement. Support." center />
          <ol className="mt-16 grid gap-8 md:grid-cols-3">
            {([[Search, "Diagnostic engagement", "A scoped review of finances, controls, contracts and systems to establish where the business stands and what to prioritise."], [Wrench, "Implementation projects", "Defined projects to put costing, reporting, governance tools or automation in place, with agreed deliverables."], [RefreshCw, "Ongoing advisory support", "Regular management insight and review so improvements hold and new issues surface early."]] as const).map(([I, t, d], i) => (
              <li key={t} className="border-t-2 border-navy pt-8">
                <span className="text-sm font-semibold text-brand">Stage {i + 1}</span>
                <div className="mt-4 flex items-center gap-3"><I className="h-5 w-5 text-navy" /><h3 className="text-xl font-semibold text-navy">{t}</h3></div>
                <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex justify-center"><ButtonLink to="/solutions" variant="outline">See our services</ButtonLink></div>
        </div>
      </section>

      <section className="container-site py-20 md:py-28">
        <div className="relative overflow-hidden rounded-2xl bg-navy-gradient text-on-navy">
          <div className="grid-lines absolute inset-0" aria-hidden />
          <div className="relative grid items-center gap-12 p-8 md:p-14 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-navy-line px-3 py-1 text-xs font-medium text-on-navy-muted"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />In development · Early access planned</span>
              <h2 className="mt-6 text-4xl font-semibold md:text-5xl">StratForge Intelligence</h2>
              <p className="mt-4 max-w-lg leading-relaxed text-on-navy-muted">A platform we are building to connect financial, governance and operational information in one place. Its outputs are decision support for management, reviewed by people — not legal, audit or tax opinions.</p>
              <div className="mt-8"><ButtonLink to="/products" variant="light">Explore StratForge Intelligence</ButtonLink></div>
            </div>
            <div className="grid gap-3">
              {pillars.map((p) => (
                <div key={p.title} className="flex items-center gap-5 rounded-lg border border-navy-line bg-navy-2/40 p-4">
                  <span className="text-xs font-semibold tabular-nums text-gold">{p.n}</span>
                  <div><p className="font-semibold">{p.title}</p><p className="text-sm text-on-navy-muted">{p.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
