import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  RotateCcw,
  Clock3,
  Instagram,
  MapPin,
  Maximize2,
  Menu,
  MessageCircle,
  Phone,
  Moon,
  Scissors,
  Sun,
  Star,
  UserRound,
  ChevronDown,
  X,
} from "lucide-react";

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
          "Barbearia premium com cortes, barba e atendimento personalizado. Escolha seu serviço, barbeiro e agende pelo WhatsApp.",
      },
      {
        property: "og:title",
        content: "Folicula Barber Studio — Cortes, barba e estilo",
      },
      {
        property: "og:description",
        content:
          "Cortes, barba e estilo com atendimento personalizado. Agende seu horário pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "5546999075054";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Barbeiros", href: "#barbeiros" },
  { label: "Galeria", href: "#galeria" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Horários", href: "#agenda" },
  { label: "Localização", href: "#localizacao" },
];

const barbers = [
  {
    name: "Rafael Duarte",
    specialty: "Especialista em degradê e cortes modernos",
    price: "A partir de R$ 45",
    image: rafaelImage,
  },
  {
    name: "Marcos Lima",
    specialty: "Especialista em barba e navalha",
    price: "A partir de R$ 50",
    image: marcosImage,
  },
  {
    name: "Thiago Alves",
    specialty: "Cortes clássicos e acabamento",
    price: "A partir de R$ 40",
    image: thiagoImage,
  },
];

const services = [
  { name: "Corte clássico", detail: "Tesoura + máquina + acabamento", price: "R$ 45", duration: "40 min" },
  { name: "Degradê / fade", detail: "Degradê + acabamento na navalha", price: "R$ 55", duration: "50 min" },
  { name: "Corte + barba", detail: "Pacote completo para renovar o visual", price: "R$ 75", duration: "1h" },
  { name: "Barba completa", detail: "Toalha quente + navalha + acabamento", price: "R$ 40", duration: "30 min" },
  { name: "Sobrancelha", detail: "Alinhamento e acabamento na navalha", price: "R$ 25", duration: "15 min" },
];

const timeSlots = ["09:00", "10:00", "11:20", "14:00", "14:40", "16:00", "18:20", "19:00"];

const schedule = [
  { day: "Segunda a sexta", hours: "09h – 21h" },
  { day: "Sábado", hours: "08h – 20h" },
  { day: "Domingo", hours: "Fechado", closed: true },
];

const gallery = [
  { image: heroImage, title: "Fade + barba", label: "Acabamento preciso" },
  { image: rafaelImage, title: "Corte moderno", label: "Estilo personalizado" },
  { image: marcosImage, title: "Barba na navalha", label: "Toalha quente" },
  { image: thiagoImage, title: "Corte clássico", label: "Tesoura e máquina" },
  { image: heroImage, title: "Degradê", label: "Detalhes que fazem diferença" },
  { image: rafaelImage, title: "Visual completo", label: "Corte + acabamento" },
];

const testimonials = [
  { name: "Lucas Ferreira", text: "Ambiente muito bom e o corte ficou exatamente como eu queria. Atendimento rápido e caprichado.", rating: 5 },
  { name: "Pedro Henrique", text: "Já virei cliente. O acabamento do fade é muito bom e dá para agendar sem complicação.", rating: 5 },
  { name: "Matheus Costa", text: "Fiz corte e barba. Profissionais atenciosos e resultado muito bom.", rating: 5 },
];

function Index() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [service, setService] = useState(services[1]!.name);
  const [barber, setBarber] = useState(barbers[0]!.name);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [bookingError, setBookingError] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const [bookingSent, setBookingSent] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("folicula-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(savedTheme ? savedTheme === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem("folicula-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    if (!bookingOpen && galleryIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setBookingOpen(false);
        setGalleryIndex(null);
      }
      if (galleryIndex !== null && event.key === "ArrowRight") {
        setGalleryIndex((current) => current === null ? null : (current + 1) % gallery.length);
      }
      if (galleryIndex !== null && event.key === "ArrowLeft") {
        setGalleryIndex((current) => current === null ? null : (current - 1 + gallery.length) % gallery.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [bookingOpen, galleryIndex]);

  const selectedService = services.find((item) => item.name === service) ?? services[0]!;
  const minDate = new Date().toISOString().split("T")[0];
  const formattedDate = date
    ? new Intl.DateTimeFormat("pt-BR", { dateStyle: "full" }).format(new Date(`${date}T12:00:00`))
    : "a combinar";
  const isSunday = date ? new Date(`${date}T12:00:00`).getDay() === 0 : false;
  const canSubmit = Boolean(clientName.trim() && clientPhone.replace(/\D/g, "").length >= 10 && date && time && !isSunday);

  const bookingMessage = encodeURIComponent(
    `Olá! Quero agendar um horário na FOLICULA Barber Studio.\n\n` +
      `Nome: ${clientName.trim()}\n` +
      `Telefone: ${clientPhone.trim()}\n` +
      `Serviço: ${service} — ${selectedService.price} (${selectedService.duration})\n` +
      `Barbeiro: ${barber}\n` +
      `Data: ${formattedDate}\n` +
      `Horário: ${time}\n\n` +
      `Podem confirmar a disponibilidade?`,
  );

  const openBooking = (changes: Partial<{ service: string; barber: string; time: string }>) => {
    if (changes.service) setService(changes.service);
    if (changes.barber) setBarber(changes.barber);
    if (changes.time) setTime(changes.time);
    setBookingError("");
    setBookingSent(false);
    setBookingOpen(true);
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handlePhoneChange = (value: string) => setClientPhone(formatPhone(value));

  const handleDateChange = (value: string) => {
    setDate(value);
    if (!value) {
      setBookingError("");
      return;
    }

    const selectedDate = new Date(`${value}T12:00:00`);
    if (selectedDate.getDay() === 0) {
      setBookingError("A FOLICULA não atende aos domingos. Escolha outro dia.");
    } else {
      setBookingError("");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-indigo-50 to-teal-50 font-body text-ink">
      <div className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-brand/25 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10rem] top-80 size-[30rem] rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-40 left-1/3 size-80 rounded-full bg-brand/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 py-5 sm:px-6 sm:py-8">
        {/* Header */}
        <header className="sticky top-3 z-40 flex items-center justify-between rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-lg shadow-ink/5 backdrop-blur-xl">
          <a href="#inicio" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <div className="grid size-10 place-items-center rounded-xl border border-brand/30 bg-brand/15 font-display text-lg font-bold text-brand">
              F
            </div>
            <div>
              <p className="font-display text-lg font-bold leading-none tracking-tight">FOLICULA</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-ink/50">Barber Studio</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-ink/65 lg:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
              title={darkMode ? "Modo claro" : "Modo escuro"}
              onClick={() => setDarkMode((enabled) => !enabled)}
              className="grid size-10 place-items-center rounded-xl border border-ink/10 bg-white/70 text-ink transition-colors hover:bg-white dark:bg-slate-900/70 dark:text-white dark:hover:bg-slate-800"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              onClick={() => openBooking({})}
              className="hidden rounded-xl bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-ink/20 transition-transform hover:-translate-y-0.5 sm:block"
            >
              Agendar horário
            </button>
            <button
              type="button"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMobileOpen((open) => !open)}
              className="grid size-10 place-items-center rounded-xl border border-ink/10 bg-white/70 lg:hidden"
            >
              {mobileOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </header>

        {mobileOpen && (
          <div className="sticky top-20 z-30 mt-2 rounded-2xl border border-white/70 bg-white/95 p-3 shadow-xl backdrop-blur-xl lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-slate-100"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openBooking({});
              }}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 font-semibold text-brand-foreground"
            >
              <CalendarDays size={17} /> Agendar horário
            </button>
          </div>
        )}

        {/* Hero */}
        <section id="inicio" className="mt-7 grid gap-5 lg:grid-cols-12 lg:pt-3">
          <div className="rounded-[2rem] border border-white/70 bg-white/65 p-6 shadow-xl shadow-ink/5 backdrop-blur-2xl sm:p-8 lg:col-span-7 lg:p-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
              <span className="size-1.5 rounded-full bg-brand" /> Barbearia premium
            </span>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              Seu estilo começa na cadeira certa.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-ink/60 sm:text-lg">
              Corte, barba e acabamento feito por profissionais que entendem de estilo. Escolha seu serviço e agende em poucos passos.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => openBooking({})}
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
              <span className="rounded-full bg-brand/10 px-3 py-1.5 text-xs font-bold text-brand">Agende</span>
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={heroImage}
                alt="Barbeiro realizando um corte em cliente"
                width={1088}
                height={1088}
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
                  onClick={() => openBooking({ time: slot })}
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

        {/* Serviços */}
        <section id="servicos" className="mt-14 scroll-mt-24">
          <SectionHeading eyebrow="Menu de serviços" title="Cortes e preços" text="Serviços pensados para deixar seu visual alinhado do começo ao fim." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((item, index) => (
              <button
                type="button"
                key={item.name}
                onClick={() => openBooking({ service: item.name })}
                className={`group text-left rounded-3xl border p-5 shadow-lg shadow-ink/5 transition-all hover:-translate-y-1 hover:shadow-xl ${index === 1 ? "border-brand/40 bg-brand/10" : "border-white/70 bg-white/65"}`}
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-9 place-items-center rounded-xl bg-ink text-white">
                    <Scissors size={16} />
                  </span>
                  {index === 1 && <span className="rounded-full bg-brand px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-white">Popular</span>}
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

        {/* Galeria */}
        <section id="galeria" className="mt-14 scroll-mt-24">
          <SectionHeading eyebrow="Nosso trabalho" title="Galeria de estilos" text="Alguns dos estilos que fazem parte da experiência FOLICULA." />
          <div className="mt-6 grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[210px] sm:grid-cols-4">
            {gallery.map((item, index) => (
              <button
                type="button"
                key={`${item.title}-${index}`}
                onClick={() => setGalleryIndex(index)}
                aria-label={`Abrir foto: ${item.title}`}
                className={`group relative overflow-hidden rounded-3xl border border-white/70 bg-white text-left shadow-lg shadow-ink/5 ${index === 0 ? "col-span-2 row-span-2" : index === 3 ? "col-span-2" : ""}`}
              >
                <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/15" />
                <div className="absolute right-3 top-3 grid size-9 place-items-center rounded-xl bg-black/45 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                  <Maximize2 size={16} />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 pt-12 text-white">
                  <p className="font-display font-bold">{item.title}</p>
                  <p className="text-xs text-white/70">{item.label}</p>
                </div>
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-ink/40">Clique em uma foto para ampliar.</p>
        </section>

        {/* Barbeiros */}
        <section id="barbeiros" className="mt-14 scroll-mt-24">
          <SectionHeading eyebrow="Nossa equipe" title="Barbeiros que entendem seu estilo" text="Profissionais com especialidades diferentes para você escolher quem combina com seu visual." />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {barbers.map((barber) => (
              <div key={barber.name} className="group rounded-3xl border border-white/70 bg-white/65 p-4 shadow-xl shadow-ink/5 backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-2xl">
                  <img src={barber.image} alt={`Retrato do barbeiro ${barber.name}`} loading="lazy" className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold text-ink backdrop-blur">Disponível para agendamento</span>
                </div>
                <div className="px-1 pb-1 pt-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-display text-xl font-bold">{barber.name}</p>
                      <p className="mt-1 text-sm leading-5 text-ink/50">{barber.specialty}</p>
                    </div>
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand"><UserRound size={16} /></span>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4">
                    <span className="text-sm font-bold text-brand">{barber.price}</span>
                    <button type="button" onClick={() => openBooking({ barber: barber.name })} className="text-sm font-bold hover:text-brand">Escolher →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Depoimentos */}
        <section id="avaliacoes" className="mt-14 scroll-mt-24">
          <div className="rounded-[2rem] bg-ink p-6 text-white shadow-2xl shadow-ink/20 sm:p-8 lg:p-10">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">Quem já passou por aqui</p>
                <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">O que nossos clientes dizem</h2>
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3">
                <Star className="fill-current text-brand" size={18} />
                <div><p className="font-bold">4.9 / 5</p><p className="text-xs text-white/50">avaliação média</p></div>
              </div>
            </div>
            <div className="mt-7 grid gap-4 lg:grid-cols-3">
              {testimonials.map((item) => (
                <article key={item.name} className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <div className="flex gap-1">{Array.from({ length: item.rating }).map((_, index) => <Star key={index} size={14} className="fill-current text-brand" />)}</div>
                  <p className="mt-4 text-sm leading-6 text-white/75">“{item.text}”</p>
                  <p className="mt-5 text-sm font-bold">{item.name}</p>
                  <p className="mt-1 text-xs text-white/40">Cliente FOLICULA</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Agenda */}
        <section id="agenda" className="mt-14 scroll-mt-24">
          <SectionHeading eyebrow="Horários" title="Veja quando atendemos" text="Escolha um horário abaixo para abrir o agendamento já com a opção selecionada." />
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {schedule.map((item) => (
              <div key={item.day} className={`rounded-3xl border p-5 shadow-lg shadow-ink/5 ${item.closed ? "border-ink/10 bg-white/45 opacity-75" : "border-white/70 bg-white/65"}`}>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-display text-lg font-bold">{item.day}</p>
                    <p className="mt-1 text-xs text-ink/45">{item.closed ? "Não atendemos neste dia" : item.hours}</p>
                  </div>
                  <span className={`grid size-10 place-items-center rounded-xl ${item.closed ? "bg-slate-200 text-slate-400" : "bg-brand/10 text-brand"}`}>
                    <Clock3 size={18} />
                  </span>
                </div>
                {!item.closed && (
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {timeSlots.slice(0, 6).map((slot) => (
                      <button key={`${item.day}-${slot}`} type="button" onClick={() => openBooking({ time: slot })} className="rounded-xl border border-ink/10 bg-white/70 px-2 py-2 text-xs font-bold transition hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand dark:bg-slate-900/50">
                        {slot}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="mt-14 scroll-mt-24">
          <SectionHeading eyebrow="Dúvidas rápidas" title="Antes de marcar, tudo bem explicado" text="As principais perguntas para quem está conhecendo a FOLICULA pela primeira vez." />
          <div className="mt-6 grid gap-3 lg:grid-cols-2">
            {[
              ["O horário fica confirmado na hora?", "Não. O pedido é enviado pelo WhatsApp e a equipe confirma a disponibilidade antes de considerar o horário reservado."],
              ["Posso escolher o barbeiro?", "Sim. No agendamento você pode escolher Rafael, Marcos, Thiago ou trocar a opção antes de enviar a mensagem."],
              ["Posso cancelar ou remarcar?", "Sim. Fale pelo WhatsApp assim que possível para a equipe verificar uma nova opção de horário."],
              ["Vocês atendem aos domingos?", "Não. A FOLICULA funciona de segunda a sábado. O formulário também bloqueia a escolha de domingo."],
              ["Preciso pagar antecipado?", "Não nesta versão demonstrativa. O site apenas envia a solicitação de agendamento pelo WhatsApp."],
              ["O endereço é real?", "Não. Este é um projeto demonstrativo de portfólio. Endereço, preços, nomes e contatos podem ser substituídos para um cliente real."],
            ].map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-white/70 bg-white/65 p-5 shadow-lg shadow-ink/5 backdrop-blur-xl">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold [&::-webkit-details-marker]:hidden">
                  {question}
                  <ChevronDown className="size-5 shrink-0 text-brand transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 max-w-xl text-sm leading-6 text-ink/55">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Localização */}
        <section id="localizacao" className="mt-14 scroll-mt-24 grid gap-5 lg:grid-cols-12">
          <div className="rounded-[2rem] border border-white/70 bg-white/65 p-7 shadow-xl shadow-ink/5 backdrop-blur-xl lg:col-span-7 sm:p-9">
            <SectionHeading eyebrow="Onde estamos" title="Seu próximo corte começa aqui" text="Atendimento com hora marcada em um ambiente pensado para você relaxar e sair com o visual em dia." />
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <InfoRow icon={<MapPin size={17} />} title="Endereço" text="Rua das Tesouras, 128 · Centro" />
              <InfoRow icon={<Clock3 size={17} />} title="Horários" text="Seg–Sex 09h–21h · Sáb 08h–20h" />
              <InfoRow icon={<MessageCircle size={17} />} title="WhatsApp" text="Agendamento e dúvidas" />
              <InfoRow icon={<Instagram size={17} />} title="Instagram" text="@foliculabarber" />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" onClick={() => openBooking({})} className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-brand-foreground"><CalendarDays size={17} /> Agendar agora</button>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-ink/10 bg-white/70 px-5 py-3 font-semibold"><MessageCircle size={17} /> WhatsApp</a>
            </div>
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] bg-ink p-7 text-white shadow-xl shadow-ink/15 lg:col-span-5">
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`, backgroundSize: "32px 32px" }} />
            <div className="relative flex h-full flex-col justify-between">
              <div className="grid size-12 place-items-center rounded-2xl bg-brand text-brand-foreground"><MapPin size={22} /></div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Localização</p>
                <h3 className="mt-2 font-display text-3xl font-extrabold">Centro da cidade</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-white/55">Rua das Tesouras, 128 · fácil acesso e estacionamento próximo.</p>
                <a href="https://www.google.com/maps/search/?api=1&query=Rua%20das%20Tesouras%2C%20128" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand">Como chegar <ArrowRight size={16} /></a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 rounded-[2rem] border border-brand/20 bg-brand/10 p-7 text-center sm:p-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">Pronto para renovar o visual?</p>
          <h2 className="mx-auto mt-2 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Escolha seu horário e deixe o resto com a gente.</h2>
          <button type="button" onClick={() => openBooking({})} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3.5 font-semibold text-white shadow-xl shadow-ink/15">Agendar meu horário <ArrowRight size={17} /></button>
        </section>

        <footer className="mt-10 flex flex-col gap-3 border-t border-ink/10 py-6 pb-24 text-sm text-ink/50 sm:flex-row sm:items-center sm:justify-between sm:pb-6">
          <p>FOLICULA Barber Studio — 2026</p>
          <p>Rua das Tesouras, 128 · Atendimento por agendamento</p>
        </footer>
      </div>

      {/* CTA fixo no mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/90 p-3 shadow-2xl backdrop-blur-xl dark:bg-slate-950/90 sm:hidden">
        <div className="mx-auto flex max-w-md items-center gap-2">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp" className="grid size-12 shrink-0 place-items-center rounded-xl border border-ink/10 bg-white text-brand dark:bg-slate-900">
            <MessageCircle size={20} />
          </a>
          <button type="button" onClick={() => openBooking({})} className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-brand px-4 font-bold text-brand-foreground shadow-lg shadow-brand/20">
            <CalendarDays size={18} /> Agendar horário
          </button>
        </div>
      </div>

      {/* Lightbox da galeria */}
      {galleryIndex !== null && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Galeria ampliada"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setGalleryIndex(null);
          }}
        >
          <div className="relative flex w-full max-w-4xl flex-col items-center">
            <div className="absolute -top-12 right-0 flex items-center gap-2">
              <span className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white">
                {(galleryIndex ?? 0) + 1} / {gallery.length}
              </span>
              <button type="button" onClick={() => setGalleryIndex(null)} aria-label="Fechar galeria" className="grid size-10 place-items-center rounded-xl bg-white/10 text-white hover:bg-white/20">
                <X size={18} />
              </button>
            </div>
            <div className="relative w-full overflow-hidden rounded-[2rem] bg-black shadow-2xl">
              <img src={gallery[galleryIndex].image} alt={gallery[galleryIndex].title} className="max-h-[78vh] w-full object-contain" />
              <button type="button" onClick={() => setGalleryIndex((current) => current === null ? null : (current - 1 + gallery.length) % gallery.length)} aria-label="Foto anterior" className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70">
                <ArrowLeft size={20} />
              </button>
              <button type="button" onClick={() => setGalleryIndex((current) => current === null ? null : (current + 1) % gallery.length)} aria-label="Próxima foto" className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70">
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="mt-4 text-center text-white">
              <p className="font-display text-xl font-bold">{gallery[galleryIndex].title}</p>
              <p className="mt-1 text-sm text-white/55">{gallery[galleryIndex].label}</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal de agendamento */}
      {bookingOpen && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-ink/55 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setBookingOpen(false);
          }}
        >
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl dark:bg-slate-900 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">Agendamento online</p>
                <h2 id="booking-title" className="mt-1 font-display text-3xl font-extrabold tracking-tight">{bookingSent ? "Pedido enviado!" : "Reserve seu horário"}</h2>
                <p className="mt-2 text-sm text-ink/50">{bookingSent ? "Agora é só aguardar a confirmação pelo WhatsApp." : "Escolha o atendimento e envie seu pedido em poucos passos."}</p>
              </div>
              <button type="button" onClick={() => setBookingOpen(false)} aria-label="Fechar" className="grid size-10 shrink-0 place-items-center rounded-xl bg-slate-100"><X size={18} /></button>
            </div>

            {bookingSent ? (
              <div className="mt-8 space-y-5">
                <div className="grid place-items-center rounded-[1.5rem] bg-brand/10 px-6 py-8 text-center">
                  <div className="grid size-16 place-items-center rounded-full bg-brand text-brand-foreground shadow-lg shadow-brand/20"><CheckCircle2 size={30} /></div>
                  <h3 className="mt-5 font-display text-2xl font-extrabold">Tudo certo, {clientName.trim() || "cliente"}!</h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-ink/55">Sua solicitação foi preparada e o WhatsApp foi aberto. A equipe confirma a disponibilidade por lá.</p>
                </div>
                <div className="rounded-2xl border border-ink/10 bg-slate-50 p-4 dark:bg-slate-800">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-ink/40">Seu pedido</p>
                      <p className="mt-1 font-display font-bold">{service}</p>
                      <p className="mt-1 text-xs text-ink/50">{barber} · {date ? formattedDate : "Data a combinar"} · {time}</p>
                    </div>
                    <p className="font-display text-xl font-extrabold text-brand">{selectedService.price}</p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <button type="button" onClick={() => setBookingSent(false)} className="flex items-center justify-center gap-2 rounded-xl border border-ink/10 bg-white px-4 py-3 font-bold dark:bg-slate-900"><RotateCcw size={17} /> Novo agendamento</button>
                  <button type="button" onClick={() => setBookingOpen(false)} className="rounded-xl bg-brand px-4 py-3 font-bold text-brand-foreground">Fechar</button>
                </div>
              </div>
            ) : (
            <div className="mt-7 space-y-5">
              <div className="grid grid-cols-4 gap-2">
                {[
                  [Boolean(clientName.trim() && clientPhone.replace(/\D/g, "").length >= 10), "Dados"],
                  [Boolean(service), "Serviço"],
                  [Boolean(barber), "Barbeiro"],
                  [Boolean(date && time && !isSunday), "Horário"],
                ].map(([done, label], index) => (
                  <div key={String(label)} className="space-y-1.5">
                    <div className={`h-1.5 rounded-full ${done ? "bg-brand" : "bg-slate-200 dark:bg-slate-700"}`} />
                    <p className={`text-[9px] font-bold uppercase tracking-wider ${done ? "text-brand" : "text-ink/35"}`}>{index + 1}. {label}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <InputField label="Seu nome" value={clientName} onChange={setClientName} placeholder="Como podemos te chamar?" icon={<UserRound size={16} />} />
                <InputField label="WhatsApp" value={clientPhone} onChange={handlePhoneChange} placeholder="(46) 99999-9999" type="tel" icon={<Phone size={16} />} />
              </div>

              <SelectField label="Serviço" value={service} onChange={setService} options={services.map((item) => item.name)} />
              <SelectField label="Barbeiro" value={barber} onChange={setBarber} options={barbers.map((item) => item.name)} />

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/50">Data</span>
                  <input
                    type="date"
                    min={minDate}
                    value={date}
                    onChange={(event) => handleDateChange(event.target.value)}
                    className="w-full rounded-xl border border-ink/10 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand dark:bg-slate-800"
                  />
                </label>
                <SelectField label="Horário" value={time} onChange={setTime} options={timeSlots} disabled={isSunday} />
              </div>

              {bookingError && (
                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-sm font-medium text-red-600 dark:text-red-300">
                  {bookingError}
                </div>
              )}

              <div className="rounded-2xl border border-ink/10 bg-slate-50 p-4 dark:bg-slate-800">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-ink/40">Resumo</p>
                    <p className="mt-1 font-display font-bold">{selectedService.name}</p>
                    <p className="mt-1 text-xs text-ink/50">{barber} · {date ? formattedDate : "Escolha uma data"} · {time}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-xl font-extrabold text-brand">{selectedService.price}</p>
                    <p className="text-[11px] text-ink/45">{selectedService.duration}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-brand/10 p-4 text-sm">
                <div className="flex items-center gap-2 font-semibold"><Check className="size-4 text-brand" /> Quase lá!</div>
                <p className="mt-2 text-xs leading-5 text-ink/50">Seu pedido será enviado pelo WhatsApp. O horário só fica confirmado depois que a barbearia responder.</p>
              </div>

              {canSubmit ? (
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${bookingMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    window.localStorage.setItem("folicula-last-booking", JSON.stringify({
                      name: clientName.trim(),
                      phone: clientPhone.trim(),
                      service,
                      barber,
                      date,
                      time,
                    }));
                    setBookingSent(true);
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3.5 font-bold text-brand-foreground shadow-lg shadow-brand/20 transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle size={18} /> Enviar pelo WhatsApp
                </a>
              ) : (
                <button type="button" disabled className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-slate-200 px-5 py-3.5 font-bold text-slate-400 dark:bg-slate-800 dark:text-slate-500">
                  <Check size={18} /> Preencha os dados para continuar
                </button>
              )}
            </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/80 bg-white/60 p-3 sm:p-4">
      <p className="font-display text-xl font-bold sm:text-2xl">{value}</p>
      <p className="mt-1 text-[10px] text-ink/45 sm:text-xs">{label}</p>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
      <h2 className="mt-1 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-ink/50 sm:text-base">{text}</p>
    </div>
  );
}

function InfoRow({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/60 p-4">
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">{icon}</span>
      <div><p className="text-xs font-bold uppercase tracking-wider text-ink/40">{title}</p><p className="mt-1 text-sm font-semibold">{text}</p></div>
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  icon: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/50">{label}</span>
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink/35">{icon}</span>
        <input
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl border border-ink/10 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-ink/30 focus:border-brand dark:bg-slate-800"
        />
      </div>
    </label>
  );
}

function SelectField({ label, value, onChange, options, disabled = false }: { label: string; value: string; onChange: (value: string) => void; options: string[]; disabled?: boolean }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/50">{label}</span>
      <select disabled={disabled} value={value} onChange={(event) => onChange(event.target.value)} className="w-full rounded-xl border border-ink/10 bg-slate-50 px-4 py-3 text-sm font-medium outline-none transition focus:border-brand disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-800">
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  );
}
