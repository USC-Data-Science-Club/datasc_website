import GridBackdrop from "./ui/GridBackdrop";

export default function GetInvolvedSection() {
  const applicationForms = [
    {
      title: "Fall 2026 Interest Form",
      description: "Receive updates about info sessions and our membership application form.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdisBltIsZSba-H3YurnIgIAUW1OH7SRkTnG6_gBVKdSEnofw/viewform?usp=dialog"
    }, 
    {
      title: "General Member Application",
      description: "Join the community and get updates on events and projects.",
      link: "https://forms.gle/fqtSuRbbPs11vVDu9ll",
    },
    {
      title: "Project Lead Application",
      description: "Apply to lead a hands-on, semester-long project team.",
      link: null,
      checkBackMessage: true,
    },
    {
      title: "Returning Members Form",
      description: "Fill out this form to update your information.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSePK43xOZRwLL_5tO_QKVKGUGc8_vxh3Pb0aAUu4rBPT5s3Kw/viewform?usp=dialog",
    },
  ];

  return (
    <section
      id="get-involved"
      className="relative flex min-h-screen flex-col px-6 pt-24 pb-28"
    >
      <GridBackdrop />
      <div className="relative mx-auto w-full max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-gold">
          {"// join_datasc"}
        </p>
        <h2 className="mt-2 text-4xl font-semibold">Get involved</h2>
        <p className="mt-4 text-lg text-ink/70">
          Join DataSC to build skills, collaborate on projects, and connect with
          peers and industry mentors.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=datasc@usc.edu"
            className="rounded-md border border-gold-raw/30 bg-gold-raw/5 px-5 py-2 font-mono text-xs uppercase tracking-wide text-gold transition hover:border-gold-raw/60 hover:bg-gold-raw/10"
          >
            [ email_us ]
          </a>
          <a
            href="https://usc.enterprise.slack.com/archives/C0B9S4D8MT3"
            className="rounded-md border border-gold-raw/30 bg-gold-raw/5 px-5 py-2 font-mono text-xs uppercase tracking-wide text-gold transition hover:border-gold-raw/60 hover:bg-gold-raw/10"
          >
            [ slack ]
          </a>
          <a
            href="https://www.instagram.com/datasc.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="rounded-md border border-gold-raw/30 bg-gold-raw/5 px-5 py-2 font-mono text-xs uppercase tracking-wide text-gold transition hover:border-gold-raw/60 hover:bg-gold-raw/10"
          >
            [ instagram ]
          </a>
          <a
            href="https://www.linkedin.com/company/datasc/"
            className="rounded-md border border-gold-raw/30 bg-gold-raw/5 px-5 py-2 font-mono text-xs uppercase tracking-wide text-gold transition hover:border-gold-raw/60 hover:bg-gold-raw/10"
          >
            [ linkedin ]
          </a>
        </div>
        <div className="mt-12">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-ink/50">
            {"// application forms"}
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {applicationForms.map((form) => {
              const isCheckBackForm = form.checkBackMessage;
              
              if (isCheckBackForm) {
                return (
                  <div
                    key={form.title}
                    className="rounded-xl border border-ink/8 bg-ink/3 p-5 opacity-60"
                  >
                    <p className="text-lg font-semibold text-ink">{form.title}</p>
                    <p className="mt-2 text-base text-ink/55">{form.description}</p>
                    <p className="mt-3 font-mono text-xs text-gold-raw">check back for updates</p>
                  </div>
                );
              }
              
              return (
                <a
                  key={form.title}
                  href={form.link ?? undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-ink/8 bg-ink/3 p-5 transition hover:border-gold-raw/30 hover:bg-ink/5"
                >
                  <p className="text-lg font-semibold text-ink">{form.title}</p>
                  <p className="mt-2 text-base text-ink/55">{form.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
