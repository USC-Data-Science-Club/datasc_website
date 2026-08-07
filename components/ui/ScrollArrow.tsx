interface ScrollArrowProps {
  href: string;
  label: string;
}

export default function ScrollArrow({ href, label }: ScrollArrowProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/20 text-ink/60 transition hover:border-gold-raw/50 hover:text-gold"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </a>
  );
}
