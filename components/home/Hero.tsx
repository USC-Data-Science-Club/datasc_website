export default function Hero() {
  return (
    <section id="top">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-end gap-14 px-7 pt-[72px] pb-10">
        <div className="min-w-0 flex-[1_1_420px]">
          <img src="/logo.png" alt="" className="block h-24 w-24 object-contain" />
          <p className="mt-5 font-pixel text-[56px] leading-none text-wordmark sm:text-[76px]">DataSC</p>
          <p className="mt-3.5 text-[13px] leading-normal tracking-[0.1em] text-gray">
            DATA SCIENCE CLUB OF
            <br />
            UNIVERSITY OF SOUTHERN CALIFORNIA
          </p>
        </div>
        <div className="min-w-0 flex-[1_1_420px]">
          <h1 className="font-display text-[28px] leading-[1.2] font-semibold tracking-[-0.015em] sm:text-[34px]">
            A student club built around three things: learning data science, building real
            projects, and the people you do it with.
          </h1>
          <p className="mt-4 text-gray">
            We meet every Wednesday night. Any USC student can join, at any experience level.
          </p>
        </div>
      </div>
      <figure className="mx-auto max-w-[1180px] px-7">
        <img
          src="/Events/members-watching-presentations.jpg"
          alt="DataSC members watching a project presentation"
          className="block h-[300px] w-full rounded-sm object-cover sm:h-[460px]"
        />
        <figcaption className="mt-2.5 text-xs text-gray">
          Members watching team presentations, Spring 2026.
        </figcaption>
      </figure>
    </section>
  );
}
