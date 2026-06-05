const stockStyles = {
  "In stock": "text-emerald-600",
  "Low stock": "text-amber-600",
};

export default function ProductTable({ products }) {
  return (
    <section className="rounded-xl border border-stone-200/80 bg-white shadow-sm shadow-stone-200/40">
      <div className="border-b border-stone-100 px-5 py-4">
        <h2 className="text-base font-semibold text-stone-900">Product performance</h2>
        <p className="mt-0.5 text-sm text-stone-500">Top sellers by revenue this month</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-stone-100 text-xs font-medium uppercase tracking-wide text-stone-400">
              <th className="px-5 py-3 font-medium">Product</th>
              <th className="px-5 py-3 font-medium">SKU</th>
              <th className="px-5 py-3 font-medium text-right">Units</th>
              <th className="px-5 py-3 font-medium text-right">Revenue</th>
              <th className="px-5 py-3 font-medium text-right">Conv.</th>
              <th className="px-5 py-3 font-medium text-right">Stock</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {products.map((product) => (
              <tr key={product.sku} className="transition hover:bg-stone-50/60">
                <td className="px-5 py-3.5 font-medium text-stone-900">{product.name}</td>
                <td className="px-5 py-3.5 font-mono text-xs text-stone-500">{product.sku}</td>
                <td className="px-5 py-3.5 text-right text-stone-700">{product.units}</td>
                <td className="px-5 py-3.5 text-right font-medium text-stone-900">{product.revenue}</td>
                <td className="px-5 py-3.5 text-right text-stone-700">{product.conversion}</td>
                <td className={`px-5 py-3.5 text-right text-xs font-medium ${stockStyles[product.stock]}`}>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
