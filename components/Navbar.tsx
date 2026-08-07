import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-ink/10 bg-surface/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="/#about" className="flex items-center gap-3">
          <img src="/logo.png" alt="DataSC Logo" className="h-7 w-7" />
          <span className="text-lg font-semibold">DataSC</span>
          <span className="rounded border border-gold-raw/30 px-1.5 py-0.5 font-mono text-[10px] text-gold/80">
            v2.6
          </span>
        </a>
        <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-ink/70 sm:gap-8 sm:text-[13px]">
          <a href="/#about" className="transition hover:text-gold">about</a>
          <a href="/#curriculum" className="transition hover:text-gold">curriculum</a>
          <a href="/#projects" className="transition hover:text-gold">projects</a>
          <a href="/#eboard" className="transition hover:text-gold">eboard</a>
          <a href="/#socials" className="transition hover:text-gold">socials</a>
          <a href="/#faq" className="transition hover:text-gold">faq</a>
        </div>
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <a
            href="/#get-involved"
            className="whitespace-nowrap rounded-md border border-gold-raw/40 bg-gradient-to-br from-maroon to-maroon-dark px-4 py-2 font-mono text-[11px] uppercase tracking-wide text-gold-raw transition hover:brightness-110"
          >
            [ get_involved ]
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
