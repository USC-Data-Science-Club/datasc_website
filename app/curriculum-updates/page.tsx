import GridBackdrop from "@/components/ui/GridBackdrop";

export default function CurriculumUpdatesPage() {
  return (
    <main className="relative min-h-screen px-6 py-32">
      <GridBackdrop />
      <div className="relative mx-auto w-full max-w-4xl">
        <a
          href="/"
          className="font-mono text-xs text-ink/50 underline underline-offset-4 transition hover:text-gold"
        >
          ← back_to_home()
        </a>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          Curriculum Updates
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          Check back for weekly collab notebook updates, slides, and practice materials.
        </p>

        <section className="relative mt-12 overflow-hidden rounded-2xl border border-ink/10 bg-ink/3 p-8 text-center">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-raw/10 blur-[100px]" />
          <div className="relative">
            <span className="text-4xl">📅</span>
            <h2 className="mt-4 text-2xl font-semibold">Coming Soon</h2>
            <p className="mx-auto mt-2 max-w-md text-ink/70">
              The curriculum for the new semester is being prepared. Check back in a few weeks for updates!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
