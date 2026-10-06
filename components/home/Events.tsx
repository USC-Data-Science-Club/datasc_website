import { events } from "@/lib/content";
import SplitSection from "./SplitSection";

export default function Events() {
  return (
    <SplitSection
      id="events"
      title="This semester"
      intro="Beyond Wednesdays: guest speakers, recruiting events, Kahoot competitions and game nights."
    >
      {events.map((e) => (
        <div key={e.title} className="flex flex-wrap gap-x-8 gap-y-1.5 border-b border-mist py-4">
          <span className="flex-[0_0_150px] text-cyan">{e.when}</span>
          <div className="flex-[1_1_320px]">
            <p className="font-medium">{e.title}</p>
            <p className="mt-0.5 text-sm text-gray">{e.description}</p>
          </div>
        </div>
      ))}
    </SplitSection>
  );
}
