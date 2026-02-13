export default function CurriculumUpdatesPage() {
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
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">Week 1</h2>
            <div className="mt-4 space-y-4 text-sm text-white/80">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Slides
                </p>
                <a
                  className="mt-2 inline-block text-white/80 underline underline-offset-4 hover:text-white"
                  href="https://docs.google.com/presentation/d/1vz71LWBwj1Ce5VGl5v4vySU2_oeU6fiiRFIHn4FsJyQ/edit?slide=id.p#slide=id.p"
                  target="_blank"
                  rel="noreferrer"
                >
                  View slides
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  HW
                </p>
                <a
                  className="mt-2 inline-block text-white/80 underline underline-offset-4 hover:text-white"
                  href="https://colab.research.google.com/drive/1ufmaPRWY4wI0dpS2t6MC0DqCOFf390KG?authuser=2"
                  target="_blank"
                  rel="noreferrer"
                >
                  View homework
                </a>
              </div>
            </div>
          </section>
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
