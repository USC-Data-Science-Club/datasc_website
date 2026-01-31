export default function CurriculumUpdatesPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-4xl mx-auto w-full">
        <a
          href="/#curriculum"
          className="text-xs uppercase tracking-[0.2em] text-white/60"
        >
          ← Back to Curriculum
        </a>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          Weekly Curriculum Updates
        </h1>
        <p className="mt-4 text-lg text-white/70">
          We share weekly collab notebook updates here. Check back for new
          notes, recordings, and practice materials.
        </p>
        {/* <div className="mt-10 space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Week 1
            </p>
            <p className="mt-2 text-lg font-semibold">Getting Set Up</p>
            <p className="mt-2 text-sm text-white/70">
              Environment setup, tooling, and first data exploration notebook.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Week 2
            </p>
            <p className="mt-2 text-lg font-semibold">Data Cleaning & EDA</p>
            <p className="mt-2 text-sm text-white/70">
              Cleaning workflows, missing data strategies, and basic plots.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Week 3
            </p>
            <p className="mt-2 text-lg font-semibold">Intro to Modeling</p>
            <p className="mt-2 text-sm text-white/70">
              Regression basics, evaluation metrics, and model pitfalls.
            </p>
          </div>
        </div> */}
      </div>
    </main>
  );
}
