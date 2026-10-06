import { board, boardTitle } from "@/lib/content";

export default function Board() {
  return (
    <section id="board" className="mt-[104px] scroll-mt-6">
      <div className="mx-auto max-w-[1180px] px-7">
        <h2 className="font-display text-3xl font-bold tracking-[-0.015em]">{boardTitle}</h2>
        {board.map((group, gi) => (
          <div key={group.group}>
            <h3 className={`${gi === 0 ? "mt-8" : "mt-11"} mb-4 border-b border-mist pb-2 text-[13px] font-medium text-gray`}>
              {group.group}
            </h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(118px,1fr))] gap-x-[18px] gap-y-6">
              {group.members.map((m) => (
                <div key={m.name}>
                  <img src={m.image} alt={m.name} className="block aspect-square w-full rounded-sm object-cover" />
                  <p className="mt-2 font-display text-sm leading-[1.3] font-semibold">{m.name}</p>
                  <p className="mt-px text-xs leading-[1.4] text-cyan">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
