export function DashboardPreview({ label = "Illustrative view" }: { label?: string }) {
  const bars = [42, 55, 48, 62, 58, 71, 66, 78, 74, 83, 79, 88];
  const line = bars.map((b, i) => `${i * 30 + 10},${120 - b}`).join(" ");
  return (
    <div className="rounded-xl border border-navy-line bg-navy-2/60 p-5 shadow-panel backdrop-blur" role="img" aria-label="Illustrative dashboard showing sample performance trends. Not real data.">
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-navy-line" /><span className="h-2.5 w-2.5 rounded-full bg-navy-line" /><span className="h-2.5 w-2.5 rounded-full bg-navy-line" /></div>
        <span className="rounded border border-navy-line px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-on-navy-muted">{label}</span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {["Financial", "Governance", "Operations"].map((k, i) => (
          <div key={k} className="rounded-lg border border-navy-line p-3">
            <p className="text-[10px] uppercase tracking-wider text-on-navy-muted">{k}</p>
            <div className="mt-2 h-2 w-3/4 rounded bg-on-navy/80" style={{ width: `${60 + i * 12}%` }} />
            <div className="mt-2 h-1.5 w-1/2 rounded bg-brand" />
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg border border-navy-line p-4">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-on-navy-muted"><span>Performance signal</span><span>12 periods</span></div>
        <svg viewBox="0 0 350 125" className="mt-3 h-32 w-full" aria-hidden>
          {bars.map((b, i) => <rect key={i} x={i * 30 + 3} y={125 - b} width="14" height={b} rx="2" className="fill-navy-line" />)}
          <polyline points={line} fill="none" className="stroke-brand" strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="mt-4 space-y-2">
        {["Margin pressure in one product line", "Supplier contract renewal due in 60 days", "Suggested for review: pricing assumptions"].map((t, i) => (
          <div key={t} className="flex items-center gap-3 rounded-md border border-navy-line px-3 py-2 text-xs text-on-navy">
            <span className={`h-1.5 w-1.5 rounded-full ${i === 2 ? "bg-brand" : "bg-on-navy-muted"}`} />{t}
          </div>
        ))}
      </div>
    </div>
  );
}
