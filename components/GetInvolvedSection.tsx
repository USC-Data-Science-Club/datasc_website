export default function GetInvolvedSection() {
  const applicationForms = [
    {
      title: "General Eboard Application",
      description: "Apply to be a part of the Eboard.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdZcjAO8rV_y1OcSEZ9_pHWWbI2nW51ZMviC0BcSmPZJpZwow/viewform",
    },
    {
      title: "General Member Application",
      description: "Join the community and get updates on events and projects.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScacxFr3e2Ip8oB_TgdSASegSoG-l3XzFme3ggaFC8T12sjXg/viewform",
    },
    {
      title: "Project Lead Application",
      description: "Apply to lead a hands-on, semester-long project team.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScaF-XcL4QnZG-h0hvbzGcZAkRIhRKtiQWceg3SxQzHCG8g6A/viewform?usp=header",
    },
    {
      title: "Returning Members Form",
      description: "Fill out this form to update your information.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeQnHauxWmE2fT3we10L4LGM2rSNZ5Vh4LQ_3IIm6Aj0uqg4Q/viewform",
    },
  ];

  return (
    <section
      id="get-involved"
      className="min-h-screen px-6 py-32 max-w-5xl mx-auto flex flex-col"
    >
      <div>
        <h2 className="text-4xl font-semibold">Get Involved</h2>
        <p className="mt-4 text-lg text-white/70 max-w-2xl">
          Join DataSC to build skills, collaborate on projects, and connect with
          peers and industry mentors.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=datasc@usc.edu"
            className="rounded-full border border-white/30 px-5 py-2 text-xs uppercase tracking-wide text-white/90 hover:border-white/60 hover:text-white"
          >
            Email Us
          </a>
          <a
            href="https://www.instagram.com/datasc.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="rounded-full border border-white/30 px-5 py-2 text-xs uppercase tracking-wide text-white/90 hover:border-white/60 hover:text-white"
          >
            Follow on Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/datasc/"
            className="rounded-full border border-white/30 px-5 py-2 text-xs uppercase tracking-wide text-white/90 hover:border-white/60 hover:text-white"
          >
            Connect on LinkedIn
          </a>
        </div>
        <div className="mt-12">
          <h3 className="text-sm uppercase tracking-wide text-white/80">
            Application Forms for Spring 2026
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {applicationForms.map((form) => (
              <a
                key={form.title}
                href={form.link}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/30 hover:bg-white/10"
              >
                <p className="text-sm uppercase tracking-wide text-white/80">
                  {form.title}
                </p>
                <p className="mt-2 text-sm text-white/60">{form.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
