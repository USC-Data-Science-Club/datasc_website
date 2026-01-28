export default function CurriculumSection() {
  const tracks = [
    {
      title: "Foundations",
      description:
        "Intro to Python, data wrangling, and statistical fundamentals.",
      topics: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
    },
    {
      title: "Machine Learning",
      description: "Supervised learning, model evaluation, and feature work.",
      topics: ["Scikit-learn", "Modeling", "Evaluation"],
    },
    {
      title: "Applied Data",
      description: "Projects, storytelling, and real-world problem solving.",
      topics: ["Projects", "Visualization", "Collaboration"],
    },
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
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tracks.map((track) => (
            <div
              key={track.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{track.title}</h3>
              <p className="mt-3 text-sm text-white/70">{track.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {track.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/70">
            Looking for weekly curriculum updates?
          </p>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="mt-2 inline-flex text-xs uppercase tracking-[0.2em] text-[#FFC72C] underline decoration-[#990000] underline-offset-4"
          >
            View Weekly Curriculum Updates →
          </a>
        </div>
      </div>
      <div className="mt-auto pt-12 flex justify-center">
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