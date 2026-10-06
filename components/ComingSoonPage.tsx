import Link from "next/link";

export default function ComingSoonPage({
  title,
  intro,
  backHref,
  backLabel,
  message,
}: {
  title: string;
  intro: string;
  backHref: string;
  backLabel: string;
  message: string;
}) {
  return (
    <main className="mx-auto min-h-[60vh] max-w-[1180px] px-7 pt-16">
      <Link href={backHref} className="text-sm underline underline-offset-4">
        ← {backLabel}
      </Link>
      <h1 className="mt-6 font-display text-4xl font-bold tracking-[-0.015em]">{title}</h1>
      <p className="mt-3 max-w-[640px] text-gray">{intro}</p>
      <div className="mt-10 max-w-[640px] border-t-2 border-slate pt-5">
        <p className="font-medium">Coming soon</p>
        <p className="mt-1 text-gray">{message}</p>
      </div>
    </main>
  );
}
