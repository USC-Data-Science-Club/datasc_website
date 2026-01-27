export default function FaqSection() {
  return (
    <section id="faq" className="min-h-screen px-6 py-32 flex flex-col">
      <div>
        <h2 className="text-4xl font-semibold">FAQ</h2>
      </div>
      <div className="mt-auto pt-12 flex justify-center">
        <a
          href="#about"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white/50 hover:text-white"
          aria-label="Back to About section"
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