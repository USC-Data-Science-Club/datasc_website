export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-32 max-w-5xl mx-auto flex flex-col"
    >
      <div>
        <h1 className="text-5xl font-semibold mb-6">
          About DataSC
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl">
          DataSC is a student-led organization dedicated to exploring data science
          through learning, collaboration, and hands-on experience.
        </p>
      </div>
      <div className="mt-auto pt-12 flex justify-center">
        <a
          href="#curriculum"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white/50 hover:text-white"
          aria-label="Scroll to Curriculum section"
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