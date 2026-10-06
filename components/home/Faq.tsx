import { faqs } from "@/lib/content";
import SplitSection from "./SplitSection";

export default function Faq() {
  return (
    <SplitSection id="faq" title="Questions">
      {faqs.map((f, i) => (
        <details key={f.q} open={i === 0} className="border-b border-mist py-4">
          <summary className="font-medium">{f.q}</summary>
          <p className="mt-2 text-gray">{f.a}</p>
        </details>
      ))}
    </SplitSection>
  );
}
