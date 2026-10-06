import { links } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-28 bg-footer text-footer-ink">
      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-8 px-7 pt-14 pb-10">
        <div>
          <p className="font-pixel text-[34px] leading-none">DataSC</p>
          <p className="mt-2.5 text-[13px] tracking-[0.08em]">
            DATA SCIENCE CLUB OF UNIVERSITY OF SOUTHERN CALIFORNIA
          </p>
        </div>
        <div className="flex flex-wrap gap-10 text-sm">
          <div className="flex flex-col gap-1">
            <span className="font-medium">Contact</span>
            <a href={`mailto:${links.email}`} className="text-footer-ink">{links.email}</a>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-medium">Follow</span>
            <a href={links.slack} className="text-footer-ink">Slack</a>
            <a href={links.instagram} className="text-footer-ink">Instagram</a>
            <a href={links.linkedin} className="text-footer-ink">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1180px] px-7 pb-7 text-xs">
        University Park, Los Angeles, CA 90089
      </div>
    </footer>
  );
}
