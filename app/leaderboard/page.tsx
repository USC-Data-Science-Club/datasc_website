// Update only this list — ranks, trophies, and podium order are derived automatically.
// First name = 1st place, second = 2nd place, third = 3rd place.
const top3 = ["Jay", "emin", "Isabella"];

// Desktop podium display order: 2nd | 1st | 3rd
// Mobile display order: 1st, 2nd, 3rd (set via CSS order)
const PODIUM_ORDER = [1, 0, 2];

const trophyStyles = [
  "bg-[#FFC72C]/20 text-[#FFC72C] border-[#FFC72C]/40",
  "bg-white/15 text-white/80 border-white/30",
  "bg-[#C47A3C]/20 text-[#C47A3C] border-[#C47A3C]/40",
];

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-5xl mx-auto w-full">
        <a
          href="/#curriculum"
          className="text-xs uppercase tracking-[0.2em] text-white/60 underline underline-offset-4"
        >
          ← Back to Curriculum
        </a>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          Leaderboard
        </h1>
        <p className="mt-4 text-lg text-white/70">
          Track weekly progress and friendly competition across the curriculum.
        </p>

        <section className="mt-12">
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-white/5 via-black/60 to-black/80 px-6 py-12">
            <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-24 left-12 h-48 w-48 rounded-full bg-white/5 blur-[100px]" />

            <div className="relative flex flex-col items-center gap-2 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                Current Cycle
              </p>
              <h2 className="text-2xl font-semibold">Spring 2026</h2>
              <span className="mt-2 rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
                Updated weekly
              </span>
            </div>

            <div className="relative mt-10 flex flex-col items-center gap-8 md:flex-row md:items-end md:justify-center">
              {PODIUM_ORDER.map((rankIndex) => {
                const rank = rankIndex + 1;
                const name = top3[rankIndex];
                const isFirst = rank === 1;

                // On mobile show 1st on top, 2nd second, 3rd last
                const mobileOrder =
                  rank === 1 ? "order-first md:order-none" :
                  rank === 2 ? "order-2 md:order-none" :
                  "order-3 md:order-none";

                return (
                  <div
                    key={rank}
                    className={`flex w-full max-w-[220px] flex-col items-center gap-4 rounded-3xl border border-white/10 bg-black/40 px-6 py-6 text-center ${mobileOrder} ${
                      isFirst ? "md:-translate-y-6 md:bg-white/10" : ""
                    }`}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-xl font-semibold">
                      {name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .toUpperCase()}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                        Rank {rank}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold">{name}</h3>
                    </div>
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border text-lg ${trophyStyles[rankIndex]}`}
                    >
                      🏆
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}