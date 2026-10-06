import Link from "next/link";
import { links, semesterBanner } from "@/lib/content";

const nav = [
  { href: "/#wednesdays", label: "Wednesdays" },
  { href: "/#curriculum", label: "Curriculum" },
  { href: "/#projects", label: "Projects" },
  { href: "/#events", label: "Events" },
  { href: "/#board", label: "Board" },
];

export default function Navbar() {
  return (
    <>
      <div className="bg-slate text-xs tracking-[0.08em] text-mist">
        <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-2 px-7 py-2">
          <span className="uppercase">{semesterBanner}</span>
          <span>DATASC.ORG</span>
        </div>
      </div>
      <header className="border-b border-mist">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-7 py-4">
          <Link href="/" className="flex items-center gap-2.5 text-slate no-underline">
            <img src="/logo.png" alt="DataSC logo" className="h-[34px] w-[34px] object-contain" />
            <span className="font-pixel text-[22px] text-cyan">DataSC</span>
          </Link>
          <nav aria-label="Main" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray no-underline hover:text-slate">
                {item.label}
              </Link>
            ))}
            <a href={`mailto:${links.email}`} className="underline underline-offset-4">
              {links.email}
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
