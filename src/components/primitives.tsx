import type { ReactNode } from "react";

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/80 bg-white/60 p-3 sm:p-4">
      <p className="font-display text-xl font-bold sm:text-2xl">{value}</p>
      <p className="mt-1 text-[10px] text-ink/45 sm:text-xs">{label}</p>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
      <h2 className="mt-1 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-ink/50 sm:text-base">{text}</p>
    </div>
  );
}

export function InfoRow({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/60 p-4">
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
        {icon}
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-ink/40">{title}</p>
        <p className="mt-1 text-sm font-semibold">{text}</p>
      </div>
    </div>
  );
}
