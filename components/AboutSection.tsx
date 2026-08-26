import CornerFrame from "./ui/CornerFrame";
import GridBackdrop from "./ui/GridBackdrop";
import ScrollArrow from "./ui/ScrollArrow";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col overflow-hidden px-6 pt-44 pb-24"
      style={{
        backgroundImage:
          "radial-gradient(circle at 15% 0%, rgba(153,0,0,0.22), transparent 45%), radial-gradient(circle at 85% 100%, rgba(255,199,44,0.12), transparent 45%)",
      }}
    >
      <GridBackdrop />
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col">
        <div className="flex flex-col items-center text-center">
          <CornerFrame>
            <img
              src="/logo.png"
              alt="DataSC logo"
              className="h-32 w-32 opacity-95 sm:h-[130px] sm:w-[130px]"
            />
          </CornerFrame>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-gold">
            $ whoami — about datasc
          </p>
          <h1 className="mt-4 max-w-4xl bg-gradient-to-br from-ink to-ink/60 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl">
            Build, learn, and ship with a data-driven community.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/70 text-justify">
            DataSC is USC's home for hands-on data science learning, built to be
            welcoming, practical, and career-relevant. We bring together students
            of every major and experience level through real-world projects,
            workshops, and community support. If you want to build skills, meet people
            who care about data, and work on problems that matter, you'll feel
            right at home here.
          </p>
        </div>
        <div className="mt-auto flex justify-center pb-2 pt-4">
          <ScrollArrow href="#curriculum" label="Scroll to Curriculum section" />
        </div>
      </div>
    </section>
  );
}
