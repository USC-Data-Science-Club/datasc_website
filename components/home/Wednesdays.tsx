import { wednesdaySchedule } from "@/lib/content";
import SplitSection from "./SplitSection";

export default function Wednesdays() {
  return (
    <SplitSection
      id="wednesdays"
      title="What a Wednesday looks like"
      intro="Every session has the same three parts, so you always know what you're walking into."
    >
      {wednesdaySchedule.map((slot) => (
        <div key={slot.time} className="flex flex-wrap gap-x-8 gap-y-2 border-b border-mist py-5">
          <span className="flex-[0_0_150px] font-medium text-cyan">{slot.time}</span>
          <div className="flex-[1_1_320px]">
            <p className="font-display text-[19px] font-semibold">{slot.title}</p>
            <p className="mt-1 text-gray">{slot.description}</p>
          </div>
        </div>
      ))}
    </SplitSection>
  );
}
