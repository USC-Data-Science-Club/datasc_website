import { curriculum } from "@/lib/content";

export default function Curriculum() {
  return (
    <section id="curriculum" className="mt-[104px] bg-slate text-paper">
      <div className="mx-auto flex max-w-[1180px] flex-wrap gap-12 px-7 py-[72px]">
        <div className="min-w-0 flex-[1_1_340px]">
          <h2 className="font-display text-3xl font-bold tracking-[-0.015em]">The curriculum</h2>
          <p className="mt-3.5 text-mist">
            Ten weeks, from your first DataFrame to a capstone project. No experience needed.
          </p>
          <figure className="mt-8">
            <img
              src="/Events/curriculum-lecture.jpg"
              alt="A curriculum lecture on linear regression"
              className="block h-60 w-full rounded-sm object-cover"
            />
            <figcaption className="mt-2.5 text-xs text-mist">
              Week 7: predicting a player&apos;s points with linear regression.
            </figcaption>
          </figure>
        </div>
        <ol className="m-0 min-w-0 flex-[999_1_520px] list-none border-t border-gray p-0">
          {curriculum.map((topic, i) => (
            <li key={topic} className="flex gap-5 border-b border-gray py-3">
              <span className="flex-[0_0_64px] text-teal-light">Wk {String(i + 1).padStart(2, "0")}</span>
              <span>{topic}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
