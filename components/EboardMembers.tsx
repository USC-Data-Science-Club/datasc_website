export default function EboardMembers() {
  const members = [
    { name: "Claire He", role: "Co-President", image: "/Claire.jpg", studying: "Quantitative Biology & Business Administration", linkedin: "https://www.linkedin.com/company/datasc/" },
    { name: "Nathan Nguyen", role: "Co-President", image: "/Nathan.jpeg", studying: "Health and Human Sciences & Mathematics", linkedin: "https://www.linkedin.com/in/nathann3/" },
    { name: "Selina Hui", role: "Vice President", image: "/Selina.jpeg", studying: "Computational Neuroscience", linkedin: "https://www.linkedin.com/in/selina-wai-yan-hui/" },
    { name: "Matthew Hall", role: "Head of Curriculum", image: "", studying: "", linkedin: "" },
    { name: "Ojas Nimase", role: "Director of Curriculum", image: "/Ojas.jpeg", studying: "Mathematics", linkedin: "https://www.linkedin.com/in/ojasnimase/" },
    { name: "Natalie Lam Johnson", role: "VP of Operations", image: "/Natalie.jpeg", studying: "AI for Business", linkedin: "http://www.linkedin.com/in/natalie-lam-johnson" },
    { name: "Lauren Lu", role: "Head of Marketing", image: "/Lauren.png", studying: "Cognitive Science", linkedin: "https://www.linkedin.com/in/lauren-lu-b51180210/" },
    { name: "Jaden Lin", role: "Director of Finance", studying: "Industrial and Systems Engineering", linkedin: "https://www.linkedin.com/in/lauren-lu-3a2b19276/" },
    { name: "Michelle Zhu", role: "Web Dev Lead", image: "/Michelle.jpg", major: "Computer Science", linkedin: "https://www.linkedin.com/in/zhu-michelle/" },
    { name: "Colin Quan Leung", role: "Project Lead", image: "/Colin.jpeg", studying: "Applied Data Science", linkedin: "https://www.linkedin.com/in/colin-leung-1059ab210" },
    { name: "Nolen Johnson", role: "Project Lead", image: "/Nolen.png", studying: "Applied Data Science", linkedin: "https://www.linkedin.com/in/nolen-johnson/" },
    { name: "Dominic Woetzel", role: "Project Lead", image: "/Dominic.jpeg", studying: "Computer Science", linkedin: "https://www.linkedin.com/in/dominic-woetzel/" },
  ];

  return (
    <section id="eboard" className="min-h-screen px-6 py-32 flex flex-col">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl uppercase tracking-wide text-white/80">
            Meet the Eboard
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Leading the way to empower students in data science.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-4">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`${member.name} headshot`}
                    className="h-14 w-14 rounded-full object-cover border border-white/20"
                  />
                ) : (
                  <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold text-white/80">
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                )}
                <div>
                  <p className="text-sm uppercase tracking-wide font-semibold">
                    {member.name}
                  </p>
                  <p className="text-sm text-white/60">{member.role}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-1 text-white/50">
                {member.studying && (
                  <p className="text-xs uppercase tracking-[0.2em]">
                    {member.studying}
                  </p>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="text-xs uppercase tracking-[0.2em] underline decoration-white/60 underline-offset-4"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto pt-4 pb-2 flex justify-center">
        <a
          href="#faq"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white/50 hover:text-white"
          aria-label="Scroll to FAQ section"
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