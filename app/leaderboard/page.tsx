import GridBackdrop from "@/components/ui/GridBackdrop";

export default function LeaderboardPage() {
  return (
    <main className="relative min-h-screen px-6 py-32">
      <GridBackdrop />
      <div className="relative mx-auto w-full max-w-5xl">
        <a
          href="/#curriculum"
          className="font-mono text-xs text-ink/50 underline underline-offset-4 transition hover:text-gold"
        >
          ← back_to_curriculum()
        </a>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          Leaderboard
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          Track weekly progress and friendly competition across the curriculum.
        </p>

        <section className="relative mt-12 overflow-hidden rounded-[36px] border border-ink/10 bg-ink/3 px-6 py-16">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-raw/10 blur-[100px]" />
          <div className="relative flex flex-col items-center gap-4 text-center">
            <span className="text-4xl">📅</span>
            <h2 className="text-2xl font-semibold">Coming Soon</h2>
            <p className="max-w-sm text-ink/60">
              The leaderboard will return at the start of the new semester.
              Track your progress and compete with fellow members!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
