import { Clock3 } from "lucide-react";

import { SectionHeading } from "@/components/primitives";
import { schedule } from "@/data/site";
import { timeSlots, type BookingPreset } from "@/lib/booking";

export function Schedule({ onBook }: { onBook: (preset?: BookingPreset) => void }) {
  return (
    <section id="agenda" data-reveal className="mt-14 scroll-mt-24">
      <SectionHeading
        eyebrow="Horários"
        title="Veja quando atendemos"
        text="Escolha um horário abaixo para abrir o agendamento já com a opção selecionada."
      />
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {schedule.map((item) => (
          <div
            key={item.day}
            className={`rounded-3xl border p-5 shadow-lg shadow-ink/5 ${item.closed ? "border-ink/10 bg-white/45 opacity-75" : "border-white/70 bg-white/65"}`}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-display text-lg font-bold">{item.day}</p>
                <p className="mt-1 text-xs text-ink/45">
                  {item.closed ? "Não atendemos neste dia" : item.hours}
                </p>
              </div>
              <span
                className={`grid size-10 place-items-center rounded-xl ${item.closed ? "bg-slate-200 text-slate-400" : "bg-brand/10 text-brand"}`}
              >
                <Clock3 size={18} />
              </span>
            </div>
            {!item.closed && (
              <div className="mt-4 grid grid-cols-3 gap-2">
                {timeSlots.slice(0, 6).map((slot) => (
                  <button
                    key={`${item.day}-${slot}`}
                    type="button"
                    onClick={() => onBook({ time: slot })}
                    className="rounded-xl border border-ink/10 bg-white/70 px-2 py-2 text-xs font-bold transition hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand dark:bg-slate-900/50"
                  >
                    {slot}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
