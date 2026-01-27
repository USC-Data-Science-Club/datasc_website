export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm">
        <a href="#about" className="flex items-center gap-3">
          <img src="/logo.png" alt="DataSC Logo" className="h-7 w-7" />
          <span className="text-lg font-semibold">DataSC</span>
        </a>
        <div className="flex items-center gap-8 text-white/80">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#curriculum" className="hover:text-white">Curriculum</a>
          <a href="#events" className="hover:text-white">Events</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#eboard" className="hover:text-white">Eboard</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </div>
        <a
          href="#get-involved"
          className="rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-wide text-white/90 hover:border-white/60 hover:text-white"
        >
          Get Involved →
        </a>
      </div>
    </nav>
  );
}