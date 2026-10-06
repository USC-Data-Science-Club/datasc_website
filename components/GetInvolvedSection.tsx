import GridBackdrop from "./ui/GridBackdrop";

export default function GetInvolvedSection() {
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
            href="https://www.instagram.com/uscdatasc?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
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
      </div>
    </section>
  );
}
