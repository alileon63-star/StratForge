import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const nav = [
  { to: "/solutions", label: "Solutions" },
  { to: "/products", label: "StratForge Intelligence" },
  { to: "/trust", label: "Trust" },
  { to: "/about", label: "About" },
  { to: "/insights", label: "Insights" },
] as const;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="StratForge home">
      <span className={`grid h-8 w-8 place-items-center rounded-md ${light ? "bg-on-navy text-navy" : "bg-navy text-on-navy"}`}>
        <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden><path d="M3 15 8 9l3 3 6-8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
      <span className="leading-none">
        <span className={`block text-[15px] font-bold tracking-[0.12em] ${light ? "text-on-navy" : "text-navy"}`}>STRATFORGE</span>
        <span className={`block text-[10px] font-medium tracking-wide ${light ? "text-on-navy-muted" : "text-muted-foreground"}`}>Intelligent Business Solutions</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy" activeProps={{ className: "text-navy" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink to="/contact" size="sm">Book a discovery call</ButtonLink>
        </div>
        <button className="rounded-md p-2 text-navy lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-border bg-background lg:hidden" aria-label="Mobile">
          <div className="container-site flex flex-col py-4">
            {[{ to: "/", label: "Home" } as const, ...nav].map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="border-b border-border py-3 text-base font-medium text-navy">{n.label}</Link>
            ))}
            <div className="pt-4"><ButtonLink to="/contact" onClick={() => setOpen(false)}>Book a discovery call</ButtonLink></div>
          </div>
        </nav>
      )}
    </header>
  );
}

type To = "/" | "/solutions" | "/products" | "/about" | "/insights" | "/contact" | "/trust";
export function ButtonLink({ to, children, variant = "primary", size = "md", onClick }: { to: To; children: ReactNode; variant?: "primary" | "outline" | "light" | "ghostLight"; size?: "sm" | "md"; onClick?: () => void }) {
  const v = {
    primary: "bg-brand text-on-navy hover:bg-navy-2",
    outline: "border border-input bg-background text-navy hover:border-navy",
    light: "bg-on-navy text-navy hover:bg-brand-soft",
    ghostLight: "border border-navy-line text-on-navy hover:bg-navy-2",
  }[variant];
  const s = size === "sm" ? "h-9 px-4 text-sm" : "h-12 px-6 text-[15px]";
  return (
    <Link to={to} onClick={onClick} className={`group inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${v} ${s}`}>
      {children}
      {size === "md" && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-on-navy-muted">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">Integrated finance, commercial governance and technology advisory for South African SMEs.</p>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow text-on-navy">Company</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-on-navy">About</Link></li>
            <li><Link to="/insights" className="hover:text-on-navy">Insights</Link></li>
            <li><Link to="/trust" className="hover:text-on-navy">Trust &amp; data protection</Link></li>
            <li><Link to="/contact" className="hover:text-on-navy">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow text-on-navy">Offering</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/solutions" className="hover:text-on-navy">Advisory services</Link></li>
            <li><Link to="/products" className="hover:text-on-navy">StratForge Intelligence (early access)</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow text-on-navy">Service boundaries</p>
          <p className="mt-4 text-xs leading-relaxed">StratForge provides business advisory and technology services. It is not a law firm and does not provide legal advice or representation. Where legal services are needed, they are engaged separately through an appropriately authorised independent legal practice, under its own scope and fees. Platform insights are informational decision support only.</p>
          <div className="mt-5"><ButtonLink to="/contact" variant="light" size="sm">Send an enquiry</ButtonLink></div>
        </div>
      </div>
      <div className="border-t border-navy-line">
        <div className="container-site flex flex-col gap-2 py-6 text-xs sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} StratForge Financial Services. All rights reserved.</p>
          <p>Contact us through the <Link to="/contact" className="underline hover:text-on-navy">enquiry form</Link>. Personal information handled in line with POPIA.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-gradient text-on-navy">
      <div className="grid-lines absolute inset-0" aria-hidden />
      <div className="container-site relative py-20 md:py-28">
        <p className="eyebrow text-on-navy-muted">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-navy-muted">{intro}</p>
      </div>
    </section>
  );
}

export function Disclaimer({ children }: { children: ReactNode }) {
  return <aside className="rounded-xl border-l-4 border-gold bg-surface p-6 text-sm leading-relaxed text-muted-foreground" role="note">{children}</aside>;
}

export function SectionHead({ eyebrow, title, intro, center = false }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow text-brand">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-navy md:text-[2.6rem]">{title}</h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="container-site py-20 md:py-28">
      <div className="relative overflow-hidden rounded-2xl bg-navy-gradient px-8 py-14 text-on-navy md:px-16 md:py-20">
        <div className="grid-lines absolute inset-0" aria-hidden />
        <div className="relative grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow text-gold">Discovery conversation</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">Start with a clear view of where your business stands.</h2>
            <p className="mt-4 max-w-xl text-on-navy-muted">A short, no-obligation conversation to understand your situation and whether we can help.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink to="/contact" variant="light">Book a discovery call</ButtonLink>
            <ButtonLink to="/products" variant="ghostLight">Explore StratForge Intelligence</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function meta(title: string, description: string, path: string) {
  const full = `${title} | StratForge`;
  const url = `https://stratforge-decision-compass.lovable.app${path === "/" ? "" : path}`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
