import GridBackdrop from "./ui/GridBackdrop";
import ScrollArrow from "./ui/ScrollArrow";
import WindowChrome from "./ui/WindowChrome";

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
    <section id="curriculum" className="relative flex min-h-screen flex-col px-6 pt-24 pb-28">
      <GridBackdrop />
      <div className="relative mx-auto w-full max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-gold">
          {"// syllabus.json"}
        </p>
        <h2 className="mt-2 text-4xl font-semibold">Curriculum</h2>
        <p className="mt-4 max-w-3xl text-lg text-ink/70">
          The curriculum builds from data science foundations and Python/Pandas
          skills into data cleaning, visualization, statistics, and core machine
          learning workflows. The semester culminates in a capstone project that
          combines EDA, modeling, and communication.
        </p>

        <WindowChrome label="semester_flow.log" className="mt-10">
          <div className="grid gap-4 p-6 lg:grid-cols-2">
            {weeks.map((week) => (
              <div
                key={week.label}
                className="rounded-lg border border-ink/8 border-l-2 border-l-gold-raw bg-ink/[0.02] px-4 py-3"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-gold">
                  {week.label}
                </p>
                <p className="mt-2 text-sm text-ink/70">{week.content}</p>
              </div>
            ))}
          </div>
        </WindowChrome>

        <div className="mt-12 rounded-xl border border-ink/10 bg-ink/3 p-6">
          <p className="text-sm text-ink/70">
            Looking for weekly curriculum updates?
          </p>
          <a
            href="/curriculum-updates"
            className="mt-3 inline-flex font-mono text-xs uppercase tracking-[0.05em] text-gold transition hover:text-gold-raw"
          >
            → view_weekly_updates()
          </a>
          <br />
          <a
            href="/leaderboard"
            className="mt-2 inline-flex font-mono text-xs uppercase tracking-[0.05em] text-gold transition hover:text-gold-raw"
          >
            → view_kahoot_leaderboard()
          </a>
        </div>
      </div>
      <div className="relative mt-auto flex justify-center pb-2 pt-4">
        <ScrollArrow href="#projects" label="Scroll to Projects section" />
      </div>
    </section>
  );
}
