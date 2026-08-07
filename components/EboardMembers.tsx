import GridBackdrop from "./ui/GridBackdrop";
import ScrollArrow from "./ui/ScrollArrow";

export default function EboardMembers() {
  const members = [
    {
      name:     "Natalie",
      role:     "Co-President",
      image:    "/Board Headshots/cropped/Natalie.jpg",
      studying: "Artificial Intelligence for Business",
      linkedin: "http://www.linkedin.com/in/natalie-lam-johnson",
    },
    {
      name:     "Jaden",
      role:     "Co-President",
      image:    "/Board Headshots/cropped/Jaden.jpg",
      studying: "Industrial and Systems Engineering",
      linkedin: "http://www.linkedin.com/in/jadenwlin",
    },
    {
      name:     "Ojas",
      role:     "External Vice President",
      image:    "/Board Headshots/cropped/Ojas.jpg",
      studying: "Mathematics & Computer Science",
      linkedin: "https://www.linkedin.com/in/ojasnimase/",
    },
    {
      name:     "Theo",
      role:     "Social Chair",
      image:    "/Board Headshots/cropped/Theo.jpg",
      studying: "Industrial and Systems Engineering",
      linkedin: "https://www.linkedin.com/in/theo-chutitad-singkarin-410357390/",
    },
    {
      name:     "Anvitha",
      role:     "Director of Operations",
      image:    "/Board Headshots/cropped/Anvitha_Komarraju_Headshot.jpg",
      studying: "Computer Science",
      linkedin: "https://www.linkedin.com/in/anvithakomarraju/",
    },
    // {
    //   name:     "Selina",
    //   role:     "Admin",
    //   image:    "/Board Headshots/cropped/Selina.jpg",
    //   studying: "Computational Neuroscience",
    //   linkedin: "https://www.linkedin.com/in/selina-wai-yan-hui/",
    // },
    {
      name:     "Connor",
      role:     "Finance",
      image:    "/Board Headshots/cropped/Connor_Mao_Headshot.jpg",
      studying: "Computer Science",
      linkedin: "https://www.linkedin.com/in/connor-mao/",
    },
    {
      name:     "Danica",
      role:     "Sponsorship & Outreach",
      image:    "/Board Headshots/cropped/Danica.jpg",
      studying: "Applied Data Science",
      linkedin: "https://www.linkedin.com/in/danica-pham-bb1a51268/",
    },
    {
      name:     "Anh",
      role:     "Sponsorship & Outreach",
      image:    "/Board Headshots/cropped/Anh.jpg",
      studying: "Business/Managerial Economics",
      linkedin: "https://www.linkedin.com/in/anh-phan-ka11/",
    },
    {
      name:     "Lauren",
      role:     "Marketing",
      image:    "/Board Headshots/cropped/Lauren.jpg",
      studying: "Cognitive Science",
      linkedin: "https://www.linkedin.com/in/lauren-lu-3a2b19276/",
    },
    {
      name:     "Michelle",
      role:     "Web Dev Lead",
      image:    "/Board Headshots/cropped/Michelle.jpg",
      studying: "Computer Science & Business Administration",
      linkedin: "https://www.linkedin.com/in/zhu-michelle/",
    },
    {
      name:     "Matthew",
      role:     "Senior Curriculum Lead",
      image:    "/Board Headshots/cropped/Matthew.jpg",
      studying: "Applied Mathematics",
      linkedin: "https://www.linkedin.com/in/matthew-hall-350a19b1/",
    },
    {
      name:     "Nathan",
      role:     "Senior Curriculum Lead",
      image:    "/Board Headshots/cropped/Nathan.jpg",
      studying: "Health & Human Sciences, Mathematics",
      linkedin: "https://www.linkedin.com/in/nathann3/",
    },
    {
      name:     "Emin",
      role:     "Curriculum Lead",
      image:    "/Board Headshots/cropped/Emin.jpg",
      studying: "Intelligence and Cyber Operations",
      linkedin: "https://www.linkedin.com/in/emin-cilingiroglu-843159361/",
    },
    {
      name:     "Aaron",
      role:     "Project Lead",
      image:    "/Board Headshots/cropped/Aaron.jpg",
      studying: "Computational & Applied Mathematics",
      linkedin: "https://www.linkedin.com/in/aaron-lo-a08441378/",
    },
  ];

  return (
    <section id="eboard" className="relative flex min-h-screen flex-col px-6 pt-24 pb-28">
      <GridBackdrop />
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-gold">
            {"// team.roster"}
          </p>
          <h2 className="text-4xl uppercase tracking-wide text-ink/90 md:text-5xl">
            Meet the Eboard
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Leading the way to empower students in data science.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div
              key={member.name}
              className="relative overflow-hidden rounded-xl border border-ink/8 bg-ink/3 p-5"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-maroon to-gold-raw" />
              <div className="flex items-center gap-3.5">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`${member.name} headshot`}
                    className="h-13 w-13 rounded-full border-2 border-gold-raw/40 object-cover"
                  />
                ) : (
                  <div className="flex h-13 w-13 items-center justify-center rounded-full border-2 border-gold-raw/40 bg-ink/8 text-sm font-semibold text-gold">
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                )}
                <div>
                  <p className="text-[13px] font-semibold tracking-wide">{member.name}</p>
                  <p className="mt-0.5 font-mono text-xs text-gold/70">{member.role}</p>
                </div>
              </div>
              <div className="mt-3.5 flex flex-col gap-1 text-ink/45">
                {member.studying && (
                  <p className="font-mono text-[10px] tracking-[0.05em]">
                    {member.studying}
                  </p>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="font-mono text-[10px] tracking-[0.05em] text-ink/50 underline decoration-ink/30 underline-offset-4 transition hover:text-gold-raw"
                  >
                    → linkedin
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-auto flex justify-center pb-2 pt-4">
        <ScrollArrow href="#socials" label="Scroll to Socials section" />
      </div>
    </section>
  );
}
