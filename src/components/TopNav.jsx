const navItems = ["Overview", "Orders", "Products", "Customers"];

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-900 text-sm font-semibold text-white">M</span>
            <span className="hidden font-display text-lg text-stone-900 sm:block">Meridian</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item, i) => (
              <a key={item} href="#" className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${i === 0 ? "bg-stone-100 text-stone-900" : "text-stone-500 hover:bg-stone-50 hover:text-stone-800"}`}>{item}</a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-lg border border-stone-200 bg-stone-50 px-3 py-1.5 sm:flex">
            <svg className="h-4 w-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
            </svg>
            <input type="search" placeholder="Search orders, products…" className="w-44 bg-transparent text-sm text-stone-700 placeholder:text-stone-400 outline-none lg:w-56" />
          </div>
          <button type="button" className="hidden rounded-lg border border-stone-200 px-3 py-1.5 text-sm font-medium text-stone-600 transition hover:border-stone-300 hover:text-stone-900 sm:block">Export</button>
          <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-200 text-sm font-semibold text-stone-700" aria-label="Account">GC</button>
        </div>
      </div>
    </header>
  );
}
