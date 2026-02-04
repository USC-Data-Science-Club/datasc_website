export default function CurriculumSection() {
  const weeks = [
    {
      label: "Week 1",
      content: "Intro to data science, ML pipeline, and Pandas basics.",
    },
    {
      label: "Week 2",
      content:
        "Python data structures, NumPy basics, Pandas Series/DataFrames, and data I/O.",
    },
    {
      label: "Week 3",
      content:
        "Data cleaning: missing values, types, normalization, duplicates/outliers, merges/reshapes.",
    },
    {
      label: "Week 4",
      content: "Visualization principles with Matplotlib/Seaborn.",
    },
    {
      label: "Week 5",
      content:
        "Exploratory data analysis, descriptive stats, correlation, and feature engineering basics.",
    },
    {
      label: "Week 6",
      content:
        "Intro to statistics: probability, sampling, hypothesis tests, confidence intervals.",
    },
    {
      label: "Week 7",
      content:
        "Intro to ML, scikit-learn, linear regression, train-test split, and CV.",
    },
    {
      label: "Week 8",
      content:
        "Classification with logistic regression and k-NN, plus evaluation metrics.",
    },
    {
      label: "Week 9",
      content: "Unsupervised learning: K-Means, PCA, and applications.",
    },
    {
      label: "Week 10",
      content:
        "Capstone project: end-to-end analysis, modeling, and storytelling.",
    },
  ];

  return (
    <section id="curriculum" className="min-h-screen px-6 py-32 flex flex-col">
      <div>
        <h2 className="text-4xl font-semibold">Curriculum</h2>
        <p className="mt-4 text-lg text-white/70">
          The curriculum builds from data science foundations and Python/Pandas
          skills into data cleaning, visualization, statistics, and core machine
          learning workflows. The semester culminates in a capstone project that
          combines EDA, modeling, and communication.
        </p>
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">
            Semester Flow
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
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