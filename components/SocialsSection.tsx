import GridBackdrop from "./ui/GridBackdrop";
import ScrollArrow from "./ui/ScrollArrow";

interface Photo {
  id: string;
  url: string;
}

const PHOTOS: Photo[] = [
  { id: "event-1", url: "/Events/DSC07625.JPG" },
  { id: "event-2", url: "/Events/DSC07628.JPG" },
  { id: "event-3", url: "/Events/DSC07659.JPG" },
  { id: "event-4", url: "/Events/DSC07667.JPG" },
  { id: "event-5", url: "/Events/DSC07672.JPG" },
  { id: "event-6", url: "/Events/DSC07676.JPG" },
  { id: "team-2027", url: "/2027.png" },
];

// Desktop (3-col): tiles 0 and 3 span 2 rows. Mobile (2-col): tiles 0 and 4 span 2 rows.
const TILE_SPAN_CLASSES: Record<number, string> = {
  0: "row-span-2",
  3: "lg:row-span-2",
  4: "row-span-2 lg:row-span-1",
};

// The 2027 team photo is a transparent cutout, not a full-bleed rectangle,
// so it uses object-contain to display in full instead of getting cropped.
const TILE_FIT_CLASSES: Record<number, string> = {
  6: "object-contain",
};

export default function SocialsSection() {
  return (
    <section id="socials" className="relative flex min-h-screen flex-col px-6 pt-24 pb-28">
      <GridBackdrop />
      <div className="relative mx-auto w-full max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-gold">
          {"// socials.gallery"}
        </p>
        <h2 className="mt-2 text-4xl font-semibold">Socials</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink/70">
          Photos from workshops, meetups, and hangouts.
        </p>

        <div className="mt-8 grid grid-cols-2 auto-rows-[130px] gap-3 lg:grid-cols-3 lg:auto-rows-[150px] lg:gap-4">
          {PHOTOS.map((photo, index) => (
            <img
              key={photo.id}
              src={photo.url}
              alt="DataSC event"
              className={`h-full w-full rounded-xl transition hover:brightness-110 ${
                TILE_FIT_CLASSES[index] ?? "object-cover"
              } ${TILE_SPAN_CLASSES[index] ?? ""}`}
            />
          ))}
        </div>
      </div>
      <div className="relative mt-auto flex justify-center pb-2 pt-4">
        <ScrollArrow href="#faq" label="Scroll to FAQ section" />
      </div>
    </section>
  );
}
