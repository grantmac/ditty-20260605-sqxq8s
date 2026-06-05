const statusStyles = {
  Fulfilled: "bg-emerald-50 text-emerald-700",
  Processing: "bg-amber-50 text-amber-700",
  Shipped: "bg-sky-50 text-sky-700",
};

export default function RecentOrders({ orders }) {
  return (
    <section className="rounded-xl border border-stone-200/80 bg-white shadow-sm shadow-stone-200/40">
      <div className="flex items-center justify-between border-b border-stone-100 px-5 py-4">
        <div>
          <h2 className="text-base font-semibold text-stone-900">Recent orders</h2>
          <p className="mt-0.5 text-sm text-stone-500">Latest activity from your store</p>
        </div>
        <a href="#" className="text-sm font-medium text-stone-600 transition hover:text-stone-900">View all</a>
      </div>
      <div className="divide-y divide-stone-100">
        {orders.map((order) => (
          <div key={order.id} className="flex flex-col gap-3 px-5 py-4 transition hover:bg-stone-50/60 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold text-stone-900">{order.id}</p>
                <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[order.status]}`}>{order.status}</span>
              </div>
              <p className="mt-1 truncate text-sm text-stone-600">{order.customer} · {order.product}</p>
            </div>
            <div className="flex shrink-0 items-center gap-4 sm:text-right">
              <p className="text-sm font-semibold text-stone-900">{order.amount}</p>
              <p className="text-xs text-stone-400">{order.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
