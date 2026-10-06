// Two-column section used across the page: a heading column on the left,
// content on the right. Stacks on narrow screens.
export default function SplitSection({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-[104px] scroll-mt-6">
      <div className="mx-auto flex max-w-[1180px] flex-wrap gap-12 px-7">
        <div className="flex-[1_1_300px]">
          <h2 className="font-display text-3xl font-bold tracking-[-0.015em]">{title}</h2>
          {intro && <p className="mt-3.5 text-gray">{intro}</p>}
        </div>
        <div className="min-w-0 flex-[999_1_560px] border-t-2 border-slate">{children}</div>
      </div>
    </section>
  );
}
