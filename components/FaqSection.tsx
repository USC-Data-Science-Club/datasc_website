export default function FaqSection() {
  const faqs = [
    {
      question: "Who can join DataSC?",
      answer:
        "Anyone at USC is welcome, regardless of major or experience level.",
    },
    {
      question: "Do I need prior data science experience?",
      answer:
        "No. We teach fundamentals and provide pathways for beginners and advanced members.",
    },
    {
      question: "What do members do each semester?",
      answer:
        "You can follow the curriculum, join project teams, attend workshops, or help lead initiatives.",
    },
    {
      question: "How do project teams work?",
      answer:
        "Teams are formed by interest and skill balance, and work on scoped, real-world problems.",
    },
    {
      question: "When do applications open?",
      answer:
        "We typically open applications at the start of each semester. Follow our updates for specificdates.",
    },
    {
      question: "How can I stay updated?",
      answer:
        "Follow our social channels and check the weekly curriculum updates page.",
    },
  ];

  return (
    <section id="faq" className="min-h-screen px-6 py-32 flex flex-col">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-4xl font-semibold">FAQ</h2>
        <p className="mt-4 text-lg text-white/70 max-w-2xl">
          Answers to the most common questions about joining and participating in
          DataSC.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                {faq.question}
              </p>
              <p className="mt-3 text-sm text-white/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto pt-4 pb-2 flex justify-center">
        <a
          href="#get-involved"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white/50 hover:text-white"
          aria-label="Scroll to Get Involved section"
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