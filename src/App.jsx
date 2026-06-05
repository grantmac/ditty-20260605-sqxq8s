import TopNav from "./components/TopNav";
import KpiCard from "./components/KpiCard";
import SalesChart from "./components/SalesChart";
import RecentOrders from "./components/RecentOrders";
import ProductTable from "./components/ProductTable";
import { kpis, salesData, recentOrders, products } from "./data/mockData";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-100">
      <TopNav />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-stone-500">Store analytics</p>
            <h1 className="mt-1 font-display text-3xl text-stone-900 sm:text-4xl">Dashboard</h1>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm font-medium text-stone-600 shadow-sm transition hover:border-stone-300 hover:text-stone-900">Last 7 days</button>
            <button type="button" className="rounded-lg bg-stone-900 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-stone-800">+ New report</button>
          </div>
        </div>
        <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.label} {...kpi} />
          ))}
        </section>
        <section className="mt-6 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3"><SalesChart data={salesData} /></div>
          <div className="lg:col-span-2"><RecentOrders orders={recentOrders} /></div>
        </section>
        <section className="mt-6"><ProductTable products={products} /></section>
      </main>
    </div>
  );
}
