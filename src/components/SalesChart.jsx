export default function SalesChart({ data }) {
  const max = Math.max(...data.map((d) => d.amount));
  const total = data.reduce((sum, d) => sum + d.amount, 0);
  return (
    <section className="rounded-xl border border-stone-200/80 bg-white p-5 shadow-sm shadow-stone-200/40 lg:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-stone-900">Sales overview</h2>
          <p className="mt-1 text-sm text-stone-500">Daily revenue for the past 7 days</p>
        </div>
        <div className="text-left sm:text-right">
          <p className="text-xs font-medium uppercase tracking-wide text-stone-400">Weekly total</p>
          <p className="font-display text-2xl text-stone-900">${total.toLocaleString()}</p>
        </div>
      </div>
      <div className="mt-8 flex h-48 items-end justify-between gap-2 sm:gap-3">
        {data.map((point) => {
          const height = (point.amount / max) * 100;
          return (
            <div key={point.day} className="flex flex-1 flex-col items-center gap-2">
              <div className="relative flex h-full w-full items-end">
                <div className="w-full rounded-t-md bg-gradient-to-t from-stone-300 to-stone-800 transition-all hover:from-stone-400 hover:to-stone-900" style={{ height: `${height}%` }} title={`$${point.amount.toLocaleString()}`} />
              </div>
              <span className="text-xs font-medium text-stone-500">{point.day}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
