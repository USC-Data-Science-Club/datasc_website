export default function CurriculumSection() {
  const weeks = [
    { label: "Weeks 1–3", content: "Setup, data wrangling, and EDA" },
    { label: "Weeks 4–6", content: "Regression, classification, and metrics" },
    { label: "Weeks 7–9", content: "Projects, teamwork, and deployment basics" },
    { label: "Weeks 10–12", content: "Presentations and portfolio polish" },
  ];

  return (
    <section id="curriculum" className="min-h-screen px-6 py-32 flex flex-col">
      <div>
        <h2 className="text-4xl font-semibold">Curriculum</h2>
        <p className="mt-4 text-lg text-white/70">
          The curriculum starts with a practical foundation in tools, setup, and
          core statistical and machine learning concepts, helping members build
          confidence in managing data and tradeoffs. It then shifts toward
          applied topics and project work, preparing students to tackle
          competitions or join a project team with real-world problems.
        </p>
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">
            Semester Flow
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {weeks.map((week) => (
              <div
                key={week.label}
                className="rounded-xl border border-white/10 bg-black/40 px-4 py-3"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[#FFC72C]">
                  {week.label}
                </p>
                <p className="mt-2 text-sm text-white/70">{week.content}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/70">
            Looking for weekly curriculum updates?
          </p>
          <a
            href="/curriculum-updates"
            className="mt-2 inline-flex text-xs uppercase tracking-[0.2em] text-[#FFC72C] underline decoration-[#990000] underline-offset-4"
          >
            View Weekly Curriculum Updates →
          </a>
        </div>
      </div>
      <div className="mt-auto pt-4 pb-2 flex justify-center">
        <a
          href="#projects"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white/50 hover:text-white"
          aria-label="Scroll to Projects section"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}