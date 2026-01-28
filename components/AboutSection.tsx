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
        No exclusivity, No BS.
        Creating an approachable and diverse environment for Data Science exploration at USC.
        DataSC fosters an environment where individuals across subjects and experience levels learn Data Science and collaboratively engage in cross-disciplinary topics. From ground-up curriculum to hands-on projects, industry speaker sessions with leaders from NVIDIA, Microsoft, Google, and Meta, to career support and genuinely fun social events. Whether you're a complete beginner or experienced practitioner, there's a place for you in our community of data enthusiasts.
        </p>
      </div>
      <div className="mt-auto pt-4 pb-2 flex justify-center">
        <a
          href="#eboard"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white/50 hover:text-white"
          aria-label="Scroll to Eboard section"
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