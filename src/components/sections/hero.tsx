import { ArrowRight, Clock3 } from "lucide-react";

import { Stat } from "@/components/primitives";
import heroImage from "@/assets/hero-barber.jpg";
import type { BookingPreset } from "@/lib/booking";

export function Hero({ onBook }: { onBook: (preset?: BookingPreset) => void }) {
  return (
    <section id="inicio" data-reveal className="mt-7 grid gap-5 lg:grid-cols-12 lg:pt-3">
      <div className="rounded-[2rem] border border-white/70 bg-white/65 p-6 shadow-xl shadow-ink/5 backdrop-blur-2xl sm:p-8 lg:col-span-7 lg:p-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
          <span className="size-1.5 rounded-full bg-brand" /> Barbearia premium
        </span>
        <h1 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
          Seu estilo começa na cadeira certa.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-ink/60 sm:text-lg">
          Corte, barba e acabamento feito por profissionais que entendem de estilo. Escolha seu
          serviço e agende em poucos passos.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onBook({})}
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition-transform hover:-translate-y-0.5"
          >
            Agendar horário <ArrowRight size={17} />
          </button>
          <a
            href="#servicos"
            className="inline-flex items-center rounded-xl border border-white/80 bg-white/70 px-6 py-3.5 font-semibold transition-colors hover:bg-white"
          >
            Ver serviços
          </a>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
          <Stat value="12h" label="Por dia" />
          <Stat value="+500" label="Clientes" />
          <Stat value="4.9" label="Avaliação" />
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/70 bg-white/65 p-4 shadow-xl shadow-ink/5 backdrop-blur-2xl sm:p-5 lg:col-span-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="font-display text-lg font-bold">Próximos horários</p>
            <p className="text-xs text-ink/45">Horários populares para começar</p>
          </div>
          <span className="rounded-full bg-brand/10 px-3 py-1.5 text-xs font-bold text-brand">
            Agende
          </span>
        </div>
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={heroImage}
            alt="Barbeiro realizando um corte em cliente"
            width={1088}
            height={1088}
            fetchPriority="high"
            className="aspect-[4/4.5] w-full object-cover"
          />
          <div className="absolute bottom-3 left-3 rounded-xl bg-ink/80 px-3 py-2 text-white backdrop-blur-md">
            <p className="text-xs text-white/60">Destaque</p>
            <p className="text-sm font-bold">Corte + barba</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {["10:00", "11:20", "14:40"].map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => onBook({ time: slot })}
              className="rounded-xl border border-white/80 bg-white/70 px-2 py-2.5 text-center transition hover:-translate-y-0.5 hover:border-brand/40"
            >
              <Clock3 className="mx-auto mb-1 size-3.5 text-brand" />
              <span className="text-xs font-bold">{slot}</span>
              <span className="block text-[10px] text-brand">Sugestão</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
