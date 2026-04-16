export default function CurriculumUpdatesPage() {
  const updates = [
    {
      week: 1,
      slides: "https://docs.google.com/presentation/d/1vz71LWBwj1Ce5VGl5v4vySU2_oeU6fiiRFIHn4FsJyQ/edit?slide=id.p#slide=id.p",
      homework: "https://colab.research.google.com/drive/1ufmaPRWY4wI0dpS2t6MC0DqCOFf390KG?authuser=2",
      additional_resources: "",
    },
    {
      week: 2,
      slides: "https://docs.google.com/presentation/d/1jlp63zbqsX2zVv_uRaocN4GWeH0Sefi8/edit?slide=id.p1#slide=id.p1",
      homework: "https://colab.research.google.com/drive/1ufmaPRWY4wI0dpS2t6MC0DqCOFf390KG?authuser=2",
      additional_resources: "https://www.kaggle.com/groups/datasc-curriculum-spring-2026",
    },
    {
      week: 4,
      slides: "https://docs.google.com/presentation/d/1yVTQ3yxbdsuORM8U4z62Pcu87Fh_3gbSVc9X9m5Yqb0/edit?usp=sharing",
      homework: "https://colab.research.google.com/drive/1ufmaPRWY4wI0dpS2t6MC0DqCOFf390KG?authuser=2",
    },
    {
      week: 5,
      slides: "https://docs.google.com/presentation/d/1s0QMeClvEyzqjnEbXIasnvtGyXJk96tJ/edit?usp=sharing&ouid=115585438195965334407&rtpof=true&sd=true",
      homework: "https://colab.research.google.com/drive/1ufmaPRWY4wI0dpS2t6MC0DqCOFf390KG?authuser=2",
    },
    {
      week: 7,
      slides: "https://docs.google.com/presentation/d/1-n8Rckm0XbgRoNHbpmpHkwVEwK3foqhw/edit?slide=id.p1#slide=id.p1",
      additional_resources: "https://colab.research.google.com/drive/1luy_fJgpiCZIUhKDClOEJMutSXOiGAx9",
    },
    {
      week: 8,
      slides: "https://docs.google.com/presentation/d/1cYcRwXpFjY7w5jBM5jFx7t32QtAgxQr_/edit?slide=id.p1#slide=id.p1",
      additional_resources: "https://colab.research.google.com/drive/1ApmshufJmzAmeWfxI3fY3iAJEnZAnWEm",
    },
    {
      week: 9,
      slides: "https://docs.google.com/presentation/d/1qZv6aBbutgnw2Qf85UVMP1VNp6l232lB/edit?slide=id.p1#slide=id.p1",
      homework: "https://colab.research.google.com/drive/1ufmaPRWY4wI0dpS2t6MC0DqCOFf390KG?authuser=2",
    },
  ];
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-4xl mx-auto w-full">
        <a
          href="/#curriculum"
          className="text-xs uppercase tracking-[0.2em] text-white/60 underline underline-offset-4"
        >
          ← Back to Curriculum
        </a>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          Weekly Curriculum Updates
        </h1>
        <p className="mt-4 text-lg text-white/70">
          We share weekly collab notebook updates here. Check back for new
          notes, recordings, and practice materials.
        </p>
        <div className="mt-12 space-y-8">
          {updates.map((update) => (
            <section
              key={update.week}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h2 className="text-2xl font-semibold">Week {update.week}</h2>
              <div className="mt-4 space-y-4 text-sm text-white/80">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Slides
                  </p>
                  <a
                    className="mt-2 inline-block text-white/80 underline underline-offset-4 hover:text-white"
                    href={update.slides}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View slides
                  </a>
                </div>
                <div>
                  {update.homework ? (
                    <>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                        HW
                      </p>
                      <a
                        className="mt-2 inline-block text-white/80 underline underline-offset-4 hover:text-white"
                        href={update.homework}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View homework
                      </a>
                    </>
                  ) : null}
                </div>
                {update.additional_resources?.trim() ? (
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      Additional Resources
                    </p>
                    <a
                      className="mt-2 inline-block text-white/80 underline underline-offset-4 hover:text-white"
                      href={update.additional_resources}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {update.week === 2
                        ? "Join Our Kaggle Notebook"
                        : "View resources"}
                    </a>
                  </div>
                ) : null}
              </div>
            </section>
          ))}
        </div>
        <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Feedback Form</h2>
          <p className="mt-2 text-sm text-white/70">
            Share anonymous feedback about the curriculum and the club.
          </p>
          <a
            className="mt-4 inline-block text-white/80 underline underline-offset-4 hover:text-white"
            href="https://forms.gle/SgHZgH6oeeHmkaFx8"
            target="_blank"
            rel="noreferrer"
          >
            Open feedback form
          </a>
        </section>
      </div>
    </main>
  );
}
