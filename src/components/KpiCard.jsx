export default function KpiCard({ label, value, change, trend, sublabel }) {
  const isUp = trend === "up";
  return (
    <article className="rounded-xl border border-stone-200/80 bg-white p-5 shadow-sm shadow-stone-200/40">
      <p className="text-sm font-medium text-stone-500">{label}</p>
      <div className="mt-2 flex items-end justify-between gap-3">
        <p className="font-display text-3xl tracking-tight text-stone-900">{value}</p>
        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${isUp ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
          {isUp ? "↑" : "↓"} {change}
        </span>
      </div>
      <p className="mt-2 text-xs text-stone-400">{sublabel}</p>
    </article>
  );
}
