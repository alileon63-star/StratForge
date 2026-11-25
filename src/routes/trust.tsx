import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Lock, UserCheck, FileLock2 } from "lucide-react";
import { CtaBand, Disclaimer, PageHero, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/trust")({
  head: () => meta("Trust, responsible use and data protection", "How StratForge approaches POPIA-aware data handling, confidentiality, access controls, human review and the boundaries of its advisory and platform services.", "/trust"),
  component: Trust,
});

function Trust() {
  return (
    <>
      <PageHero eyebrow="Trust & governance" title="Responsible use and data protection" intro="Clients trust us with financial, commercial and operational information. These are the principles we apply to it." />
      <section className="container-site py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          {[[ShieldCheck, "POPIA-aware data handling", "We collect and use personal information only for the purpose it was provided, and in line with the Protection of Personal Information Act."], [FileLock2, "Confidentiality", "Client information is treated as confidential and used only for the agreed engagement."], [Lock, "Access controls", "Access to client information is limited to the people who need it for the work."], [UserCheck, "Human review", "Automated and AI-assisted analysis is reviewed by a person before it informs advice or decisions."]].map(([I, t, d]) => {
            const Icon = I as typeof Lock;
            return <article key={t as string} className="rounded-xl border border-border p-8"><Icon className="h-5 w-5 text-brand" /><h2 className="mt-5 text-xl font-semibold text-navy">{t as string}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{d as string}</p></article>;
          })}
        </div>
        <div className="mt-12 space-y-4">
          <Disclaimer>We do not claim any compliance certification. Our approach is guided by POPIA principles and good practice.</Disclaimer>
          <Disclaimer>No legal advice is offered through automated tools or by StratForge as an advisory company. Legal services, where required, are engaged separately through an appropriately authorised independent legal practice, with separate scope and fees.</Disclaimer>
          <Disclaimer>Platform insights are informational decision support. They are not legal opinions, audit assurance, tax opinions or guaranteed forecasts; professional advice must be obtained separately.</Disclaimer>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
