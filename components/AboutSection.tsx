export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-24 max-w-5xl mx-auto flex flex-col"
    >
      <div className="relative flex flex-col items-center text-center">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="h-72 w-72 rounded-full bg-[#990000]/10 blur-3xl" />
        </div>
        <img
          src="/logo.png"
          alt="DataSC logo"
          className="h-32 w-32 sm:h-40 sm:w-40 opacity-90"
        />
        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-white/60">
          About DataSC
        </p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
          Build, learn, and ship with a data-driven community.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-gray-300">
          DataSC is USC&apos;s home for hands-on data science learning, built to be
          welcoming, practical, and career-relevant. We bring together students
          of every major and experience level through a structured curriculum,
          real-world projects, industry speakers, and support for internships
          and careers. If you want to build skills, meet people who care about
          data, and work on problems that matter, you&apos;ll feel right at home
          here.
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