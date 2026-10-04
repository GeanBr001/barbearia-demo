import { ArrowRight } from "lucide-react";
import type { BookingPreset } from "@/lib/booking";

export function Cta({ onBook }: { onBook: (preset?: BookingPreset) => void }) {
  return (
    <section
      data-reveal
      className="mt-14 rounded-[2rem] border border-brand/20 bg-brand/10 p-7 text-center sm:p-10"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
        Pronto para renovar o visual?
      </p>
      <h2 className="mx-auto mt-2 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
        Escolha seu horário e deixe o resto com a gente.
      </h2>
      <button
        type="button"
        onClick={() => onBook({})}
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3.5 font-semibold text-white shadow-xl shadow-ink/15"
      >
        Agendar meu horário <ArrowRight size={17} />
      </button>
    </section>
  );
}
