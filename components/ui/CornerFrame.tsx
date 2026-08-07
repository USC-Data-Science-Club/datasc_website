import type { ReactNode } from "react";

export default function CornerFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative p-[18px]">
      <span className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-gold-raw" />
      <span className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-gold-raw" />
      <span className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-gold-raw" />
      <span className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-gold-raw" />
      {children}
    </div>
  );
}
