import { UserRound } from "lucide-react";

import { SectionHeading } from "@/components/primitives";
import { barbers } from "@/data/site";
import type { BookingPreset } from "@/lib/booking";

export function Barbers({ onBook }: { onBook: (preset?: BookingPreset) => void }) {
  return (
    <section id="barbeiros" data-reveal className="mt-14 scroll-mt-24">
      <SectionHeading
        eyebrow="Nossa equipe"
        title="Barbeiros que entendem seu estilo"
        text="Profissionais com especialidades diferentes para você escolher quem combina com seu visual."
      />
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {barbers.map((barber) => (
          <div
            key={barber.name}
            className="group rounded-3xl border border-white/70 bg-white/65 p-4 shadow-xl shadow-ink/5 backdrop-blur-xl"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={barber.image}
                alt={`Retrato do barbeiro ${barber.name}`}
                loading="lazy"
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold text-ink backdrop-blur">
                Disponível para agendamento
              </span>
            </div>
            <div className="px-1 pb-1 pt-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-xl font-bold">{barber.name}</p>
                  <p className="mt-1 text-sm leading-5 text-ink/50">{barber.specialty}</p>
                </div>
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                  <UserRound size={16} />
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4">
                <span className="text-sm font-bold text-brand">{barber.price}</span>
                <button
                  type="button"
                  onClick={() => onBook({ barber: barber.name })}
                  className="text-sm font-bold hover:text-brand"
                >
                  Escolher →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
