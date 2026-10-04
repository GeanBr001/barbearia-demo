import { ArrowRight, Scissors } from "lucide-react";

import { SectionHeading } from "@/components/primitives";
import { services } from "@/data/site";
import type { BookingPreset } from "@/lib/booking";

export function Services({ onBook }: { onBook: (preset?: BookingPreset) => void }) {
  return (
    <section id="servicos" data-reveal className="mt-14 scroll-mt-24">
      <SectionHeading
        eyebrow="Menu de serviços"
        title="Cortes e preços"
        text="Serviços pensados para deixar seu visual alinhado do começo ao fim."
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((item, index) => (
          <button
            type="button"
            key={item.name}
            onClick={() => onBook({ service: item.name })}
            className={`group text-left rounded-3xl border p-5 shadow-lg shadow-ink/5 transition-all hover:-translate-y-1 hover:shadow-xl ${index === 1 ? "border-brand/40 bg-brand/10" : "border-white/70 bg-white/65"}`}
          >
            <div className="flex items-center justify-between">
              <span className="grid size-9 place-items-center rounded-xl bg-ink text-white">
                <Scissors size={16} />
              </span>
              {index === 1 && (
                <span className="rounded-full bg-brand px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
                  Popular
                </span>
              )}
            </div>
            <h3 className="mt-5 font-display text-lg font-bold">{item.name}</h3>
            <p className="mt-2 min-h-10 text-xs leading-5 text-ink/50">{item.detail}</p>
            <div className="mt-5 flex items-end justify-between gap-2">
              <div>
                <p className="font-display text-xl font-extrabold text-brand">{item.price}</p>
                <p className="mt-1 text-[11px] text-ink/45">{item.duration}</p>
              </div>
              <ArrowRight className="size-4 text-ink/30 transition group-hover:text-brand" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
