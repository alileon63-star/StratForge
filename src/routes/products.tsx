import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Scale, Cpu, ShieldCheck, UserCheck, Lock, Eye } from "lucide-react";
import { ButtonLink, Disclaimer, PageHero, SectionHead, meta } from "@/components/site/Layout";
import { DashboardPreview } from "@/components/site/DashboardPreview";

export const Route = createFileRoute("/products")({
  head: () => meta("StratForge Intelligence — in development", "StratForge Intelligence is an in-development platform connecting financial, legal & governance and operational information to support management decisions. Early access planned.", "/products"),
  component: Products,
});

const modules = [
  { I: BarChart3, t: "Financial Intelligence", d: "Financial data analysis, profitability views, cash-flow forecasts and management reporting." },
  { I: Scale, t: "Legal & Governance Intelligence", d: "Contract registers, expiry and obligation tracking, compliance calendars and policy and document management." },
  { I: Cpu, t: "AI & Operational Intelligence", d: "Cross-functional insights, risk flags and management recommendations for people to review and decide on." },
];

function Products() {
  return (
    <>
      <PageHero eyebrow="StratForge Intelligence · In development" title="One connected view of finance, governance and operations" intro="StratForge Intelligence is a platform in development and is not yet commercially available. We plan to offer it on an early-access, subscription basis once ready." />
      <section className="container-site grid items-center gap-14 py-20 md:py-28 lg:grid-cols-2">
        <SectionHead eyebrow="Intended direction" title="Three connected modules" intro="The concept below reflects our intended direction. Features, timing and scope may change as development progresses." />
        <div className="rounded-2xl bg-navy p-4"><DashboardPreview label="Concept only" /></div>
      </section>
      <section className="bg-surface py-20 md:py-28">
        <div className="container-site grid gap-6 md:grid-cols-3">
          {modules.map(({ I, t, d }) => (
            <article key={t} className="rounded-xl border border-border bg-background p-8"><I className="h-5 w-5 text-brand" /><h2 className="mt-5 text-lg font-semibold text-navy">{t}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p><p className="mt-5 text-xs font-medium text-muted-foreground">Status: in development</p></article>
          ))}
        </div>
      </section>
      <section className="container-site py-20 md:py-28">
        <SectionHead eyebrow="Responsible by design" title="How the platform is being designed" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[[UserCheck, "Human review", "Outputs are suggestions for management to review, not automatic decisions."], [Lock, "Role-based access", "Users see only the information their role requires."], [ShieldCheck, "Data protection", "Designed with POPIA principles and confidentiality in mind."], [Eye, "Transparency", "Insights show the information they are based on, with assumptions stated."]].map(([I, t, d]) => {
            const Icon = I as typeof Lock;
            return <div key={t as string} className="border-t-2 border-navy pt-6"><Icon className="h-5 w-5 text-brand" /><h3 className="mt-4 font-semibold text-navy">{t as string}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d as string}</p></div>;
          })}
        </div>
        <div className="mt-12"><Disclaimer><strong className="text-navy">Decision support only.</strong> StratForge Intelligence outputs, including AI-generated insights, are informational decision support. They are not legal opinions, audit assurance, tax opinions or guaranteed forecasts. Professional advice must be obtained separately from appropriately qualified and authorised providers.</Disclaimer></div>
      </section>
      <section className="bg-surface py-20 text-center md:py-28">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-navy">Interested in early access?</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Register your interest through the enquiry form. Our advisory services apply the same thinking today.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3"><ButtonLink to="/contact">Register interest</ButtonLink><ButtonLink to="/solutions" variant="outline">See current services</ButtonLink></div>
      </section>
    </>
  );
}
