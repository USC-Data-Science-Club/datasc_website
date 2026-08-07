import type { ReactNode } from "react";

interface WindowChromeProps {
  label: string;
  children: ReactNode;
  className?: string;
}

export default function WindowChrome({ label, children, className = "" }: WindowChromeProps) {
  return (
    <div className={`overflow-hidden rounded-xl border border-ink/10 bg-ink/3 backdrop-blur ${className}`}>
      <div className="flex items-center gap-2 border-b border-ink/10 px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-maroon" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold-raw" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/30" />
        <span className="ml-2 font-mono text-[11px] text-ink/50">{label}</span>
      </div>
      {children}
    </div>
  );
}
