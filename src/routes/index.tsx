import { createFileRoute } from "@tanstack/react-router";

import heroImage from "@/assets/hero-barber.jpg";
import rafaelImage from "@/assets/barber-rafael.jpg";
import marcosImage from "@/assets/barber-marcos.jpg";
import thiagoImage from "@/assets/barber-thiago.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Folicula Barber Studio — Cortes, barba e estilo" },
      {
        name: "description",
        content:
          "Barbearia premium: agende seu horário, escolha o barbeiro e veja o menu completo de cortes e serviços com preço transparente.",
      },
      {
        property: "og:title",
        content: "Folicula Barber Studio — Cortes, barba e estilo",
      },
      {
        property: "og:description",
        content:
          "Agende seu horário, escolha o barbeiro e veja o menu completo de cortes e serviços com preço transparente.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Cortes", href: "#cortes" },
  { label: "Barbeiros", href: "#barbeiros" },
  { label: "Horários", href: "#horarios" },
  { label: "Preços", href: "#cortes" },
];

const barbers = [
  {
    name: "Rafael Duarte",
    specialty: "Especialista em degradê",
    price: "a partir de R$ 45",
    image: rafaelImage,
  },
  {
    name: "Marcos Lima",
    specialty: "Barba e navalha",
    price: "a partir de R$ 50",
    image: marcosImage,
  },
  {
    name: "Thiago Alves",
    specialty: "Cortes clássicos",
    price: "a partir de R$ 40",
    image: thiagoImage,
  },
];

const services = [
  { name: "Corte clássico", detail: "Tesoura e máquina", price: "R$ 45" },
  { name: "Degradê / fade", detail: "Acabamento na navalha", price: "R$ 55" },
  { name: "Corte + barba", detail: "Pacote completo", price: "R$ 75" },
  { name: "Sobrancelha na navalha", detail: "Alinhamento rápido", price: "R$ 25" },
];

const schedule = [
  { day: "Seg – Sex", hours: "09h – 21h" },
  { day: "Sábado", hours: "08h – 20h" },
  { day: "Domingo", hours: "Fechado", closed: true },
];

const slots = [
  { time: "10:00", service: "Corte + barba", status: "Livre", free: true },
  { time: "10:40", service: "Degradê", status: "Reservado", free: false },
  { time: "11:20", service: "Sobrancelha", status: "Livre", free: true },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-indigo-50 to-teal-50 font-body text-ink">
      <div className="pointer-events-none absolute -top-24 -left-20 size-96 rounded-full bg-brand/30 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-24 size-[28rem] rounded-full bg-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 size-80 rounded-full bg-brand/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-8">
        {/* Header */}
        <header className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-xl border border-brand/30 bg-brand/15 font-display text-lg font-bold text-brand">
              F
            </div>
            <div>
              <p className="font-display text-xl font-bold leading-none tracking-tight">
                FOLICULA
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ink/50">
                Barber Studio
              </p>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#cortes"
            className="rounded-xl bg-ink px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-ink/20"
          >
            Agendar
          </a>
        </header>

        {/* Hero */}
        <section className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="rounded-3xl border border-white/60 bg-card/55 p-8 shadow-xl shadow-ink/5 backdrop-blur-2xl lg:col-span-7">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
              Barbearia premium
            </span>
            <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-tight lg:text-6xl">
              Corte, barba e estilo no mesmo lugar.
            </h1>
            <p className="mt-4 max-w-md text-lg text-ink/60">
              Agende seu horário, escolha o barbeiro e veja o menu completo de
              cortes e serviços com preço transparente.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#cortes"
                className="rounded-xl bg-brand px-6 py-3 font-semibold text-brand-foreground shadow-lg shadow-brand/30"
              >
                Agendar horário
              </a>
              <a
                href="#barbeiros"
                className="rounded-xl border border-white/70 bg-card/70 px-6 py-3 font-semibold"
              >
                Ver serviços
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/60 bg-card/60 p-4">
                <p className="font-display text-2xl font-bold">12h</p>
                <p className="mt-1 text-xs text-ink/50">Por dia</p>
              </div>
              <div className="rounded-2xl border border-white/60 bg-card/60 p-4">
                <p className="font-display text-2xl font-bold">6</p>
                <p className="mt-1 text-xs text-ink/50">Barbeiros</p>
              </div>
              <div className="rounded-2xl border border-white/60 bg-card/60 p-4">
                <p className="font-display text-2xl font-bold">4.9</p>
                <p className="mt-1 text-xs text-ink/50">Avaliação</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/60 bg-card/55 p-5 shadow-xl shadow-ink/5 backdrop-blur-2xl lg:col-span-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-display text-lg font-bold">Próximos horários hoje</p>
              <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-foreground/80">
                Seg, 09:00
              </span>
            </div>
            <img
              src={heroImage}
              alt="Barbeiro fazendo um corte em um cliente na barbearia"
              width={1088}
              height={1088}
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
            <div className="mt-4 space-y-2">
              {slots.map((slot) => (
                <div
                  key={slot.time}
                  className="flex items-center justify-between rounded-xl border border-white/60 bg-card/60 px-4 py-2.5"
                >
                  <span className="text-sm font-medium">{slot.time}</span>
                  <span className="text-sm text-ink/50">{slot.service}</span>
                  <span
                    className={`text-xs font-semibold ${
                      slot.free ? "text-brand" : "text-ink/40"
                    }`}
                  >
                    {slot.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Barbeiros */}
        <section id="barbeiros" className="mt-10 scroll-mt-8">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                Nossa equipe
              </p>
              <h2 className="mt-1 font-display text-3xl font-extrabold tracking-tight">
                Barbeiros
              </h2>
            </div>
            <span className="text-sm text-ink/50">6 profissionais</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {barbers.map((barber) => (
              <div
                key={barber.name}
                className="rounded-3xl border border-white/60 bg-card/55 p-5 shadow-xl shadow-ink/5 backdrop-blur-2xl"
              >
                <img
                  src={barber.image}
                  alt={`Retrato do barbeiro ${barber.name}`}
                  loading="lazy"
                  width={816}
                  height={816}
                  className="aspect-square w-full rounded-2xl object-cover"
                />
                <p className="mt-4 font-display text-lg font-bold">{barber.name}</p>
                <p className="text-sm text-ink/50">{barber.specialty}</p>
                <p className="mt-3 text-sm font-semibold text-brand">{barber.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Serviços + Horários */}
        <section id="cortes" className="mt-10 grid gap-6 scroll-mt-8 lg:grid-cols-12">
          <div className="rounded-3xl border border-white/60 bg-card/55 p-7 shadow-xl shadow-ink/5 backdrop-blur-2xl lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
              Menu de serviços
            </p>
            <h2 className="mt-1 font-display text-3xl font-extrabold tracking-tight">
              Cortes e preços
            </h2>
            <div className="mt-5 divide-y divide-ink/10">
              {services.map((service) => (
                <div key={service.name} className="flex items-center justify-between py-3.5">
                  <div>
                    <p className="font-semibold">{service.name}</p>
                    <p className="text-sm text-ink/50">{service.detail}</p>
                  </div>
                  <span className="font-display text-lg font-bold text-brand">
                    {service.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            id="horarios"
            className="rounded-3xl bg-ink p-7 text-primary-foreground shadow-xl shadow-ink/20 lg:col-span-5 scroll-mt-8"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand/80">
              Horários de atendimento
            </p>
            <h2 className="mt-1 font-display text-2xl font-extrabold tracking-tight">
              Quando estamos abertos
            </h2>
            <div className="mt-5 space-y-2.5 text-sm">
              {schedule.map((row) => (
                <div
                  key={row.day}
                  className="flex items-center justify-between rounded-xl bg-primary-foreground/10 px-4 py-2.5"
                >
                  <span>{row.day}</span>
                  <span
                    className={`font-semibold ${
                      row.closed ? "text-primary-foreground/70" : "text-brand"
                    }`}
                  >
                    {row.hours}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="mt-6 block w-full rounded-xl bg-brand py-3 text-center font-semibold text-brand-foreground"
            >
              Fale conosco
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-6 text-sm text-ink/50">
          <p>FOLICULA Barber Studio — 2026</p>
          <p>Rua das Tesouras, 128 · Atendimento por agendamento</p>
        </footer>
      </div>
    </div>
  );
}
