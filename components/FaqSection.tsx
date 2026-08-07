import GridBackdrop from "./ui/GridBackdrop";
import ScrollArrow from "./ui/ScrollArrow";

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
        "Follow our social channels and check our website for the latest updates.",
    },
  ];

  return (
    <section id="faq" className="relative flex min-h-screen flex-col px-6 pt-24 pb-28">
      <GridBackdrop />
      <div className="relative mx-auto w-full max-w-6xl">
        <h2 className="text-4xl font-semibold">FAQ</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink/70">
          Answers to the most common questions about joining and participating in
          DataSC.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-xl border border-ink/8 bg-ink/3 p-6"
            >
              <p className="flex gap-2 text-[13px] text-ink/90">
                <span className="font-mono text-gold">Q·</span>
                {faq.question}
              </p>
              <p className="mt-3 pl-[22px] text-sm text-ink/65">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-auto flex justify-center pb-2 pt-4">
        <ScrollArrow href="#get-involved" label="Scroll to Get Involved section" />
      </div>
    </section>
  );
}
