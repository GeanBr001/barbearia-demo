import { ArrowRight, CalendarDays, Clock3, Instagram, MapPin, MessageCircle } from "lucide-react";

import { SectionHeading, InfoRow } from "@/components/primitives";
import { WHATSAPP_URL, ADDRESS } from "@/data/site";
import type { BookingPreset } from "@/lib/booking";

export function Location({ onBook }: { onBook: (preset?: BookingPreset) => void }) {
  return (
    <section id="localizacao" data-reveal className="mt-14 scroll-mt-24 grid gap-5 lg:grid-cols-12">
      <div className="rounded-[2rem] border border-white/70 bg-white/65 p-7 shadow-xl shadow-ink/5 backdrop-blur-xl lg:col-span-7 sm:p-9">
        <SectionHeading
          eyebrow="Onde estamos"
          title="Seu próximo corte começa aqui"
          text="Atendimento com hora marcada em um ambiente pensado para você relaxar e sair com o visual em dia."
        />
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <InfoRow icon={<MapPin size={17} />} title="Endereço" text={`${ADDRESS} · Centro`} />
          <InfoRow
            icon={<Clock3 size={17} />}
            title="Horários"
            text="Seg–Sex 09h–21h · Sáb 08h–20h"
          />
          <InfoRow
            icon={<MessageCircle size={17} />}
            title="WhatsApp"
            text="Agendamento e dúvidas"
          />
          <InfoRow icon={<Instagram size={17} />} title="Instagram" text="@foliculabarber" />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onBook({})}
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-brand-foreground"
          >
            <CalendarDays size={17} /> Agendar agora
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-ink/10 bg-white/70 px-5 py-3 font-semibold"
          >
            <MessageCircle size={17} /> WhatsApp
          </a>
        </div>
      </div>
      <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] bg-ink p-7 text-white shadow-xl shadow-ink/15 lg:col-span-5">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative flex h-full flex-col justify-between">
          <div className="grid size-12 place-items-center rounded-2xl bg-brand text-brand-foreground">
            <MapPin size={22} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Localização</p>
            <h3 className="mt-2 font-display text-3xl font-extrabold">Centro da cidade</h3>
            <p className="mt-2 max-w-xs text-sm leading-6 text-white/55">
              {ADDRESS} · fácil acesso e estacionamento próximo.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua%20das%20Tesouras%2C%20128"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand"
            >
              Como chegar <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
