import GridBackdrop from "./ui/GridBackdrop";
import ScrollArrow from "./ui/ScrollArrow";

interface TimelineStep {
  step: string;
  title: string;
  date: string;
}

const TIMELINE_STEPS: TimelineStep[] = [
  { step: "Step 01", title: "Info Session (Zoom)", date: "Sept 2" },
  { step: "Step 02", title: "General Member Applications Due", date: "Sept 9" },
  { step: "Step 03", title: "Curriculum Member Applications Due", date: "Sept 9" },
  { step: "Step 04", title: "Project Team Member Applications Due", date: "Sept 9" },
  { step: "Step 05", title: "First GM", date: "Sept 16" },
];

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="relative flex min-h-screen flex-col px-6 pt-24 pb-28"
    >
      <GridBackdrop />
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-gold">
          {"// fall.schedule"}
        </p>
        <h2 className="mt-2 text-4xl font-semibold">Fall semester timeline</h2>
        <p className="mt-4 text-lg text-ink/70">
          Key dates for joining DataSC this semester.
        </p>

        {/* Tablet / desktop: horizontal timeline */}
        <div className="relative mt-36 hidden pb-24 md:block">
          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-ink/10" />
          <div className="relative flex justify-between">
            {TIMELINE_STEPS.map((item, index) => {
              const isFirst = index === 0;
              const isTop = index % 2 === 0;
              const alignClass = "left-1/2 -translate-x-1/2 items-center text-center";

              return (
                <div
                  key={item.title}
                  className="relative flex flex-1 flex-col items-center"
                >
                  {isTop && (
                    <div
                      className={`absolute bottom-[calc(100%_+_1.25rem)] flex w-max max-w-[180px] flex-col ${alignClass}`}
                    >
                      <span className="font-mono text-xs italic text-gold-raw">
                        {item.date}
                      </span>
                      <span className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-ink/40">
                        {item.step}
                      </span>
                      <span className="mt-2 text-lg font-semibold text-ink">
                        {item.title}
                      </span>
                    </div>
                  )}
                  <span
                    className={`relative z-10 h-4 w-4 rounded-full border-2 border-gold-raw ${
                      isFirst ? "bg-gold-raw" : "bg-surface"
                    }`}
                  />
                  {!isTop && (
                    <div
                      className={`absolute top-[calc(100%_+_1.25rem)] flex w-max max-w-[180px] flex-col ${alignClass}`}
                    >
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink/40">
                        {item.step}
                      </span>
                      <span className="mt-2 text-lg font-semibold text-ink">
                        {item.title}
                      </span>
                      <span className="mt-2 font-mono text-xs italic text-gold-raw">
                        {item.date}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="relative mt-16 md:hidden">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-ink/10" />
          <ul className="space-y-10">
            {TIMELINE_STEPS.map((item, index) => (
              <li key={item.title} className="relative pl-10">
                <span
                  className={`absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-gold-raw ${
                    index === 0 ? "bg-gold-raw" : "bg-surface"
                  }`}
                />
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink/40">
                  {item.step}
                </span>
                <p className="mt-1 text-lg font-semibold text-ink">
                  {item.title}
                </p>
                <span className="mt-1 block font-mono text-xs italic text-gold-raw">
                  {item.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative mt-auto flex justify-center pb-2 pt-10">
        <ScrollArrow href="#get-involved" label="Scroll to Get Involved section" />
      </div>
    </section>
  );
}
