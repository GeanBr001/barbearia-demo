import { useEffect } from "react";
import {
  CalendarDays,
  Check,
  CheckCircle2,
  RotateCcw,
  MessageCircle,
  Phone,
  UserRound,
  X,
} from "lucide-react";

import { InputField, SelectField } from "@/components/form-fields";
import { whatsappUrl } from "@/data/brand";
import { barbers, services } from "@/data/site";
import type { BookingForm } from "@/hooks/use-booking-form";
import { isValidPhone, timeSlots } from "@/lib/booking";

type BookingModalProps = { form: BookingForm; onClose: () => void };

export function BookingModal({ form, onClose }: BookingModalProps) {
  const {
    service,
    setService,
    barber,
    date,
    time,
    clientName,
    setClientName,
    clientPhone,
    handlePhoneChange,
    bookingError,
    bookingSent,
    setBookingSent,
    selectedService,
    availableSlots,
    isSunday,
    canSubmit,
    minDate,
    formattedDate,
    whatsappMessage,
    handleDateChange,
    handleBarberChange,
    handleTimeChange,
    startNewBooking,
  } = form;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-ink/55 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl dark:bg-slate-900 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
              Agendamento online
            </p>
            <h2
              id="booking-title"
              className="mt-1 font-display text-3xl font-extrabold tracking-tight"
            >
              {bookingSent ? "Pedido enviado!" : "Reserve seu horário"}
            </h2>
            <p className="mt-2 text-sm text-ink/50">
              {bookingSent
                ? "Agora é só aguardar a confirmação pelo WhatsApp."
                : "Escolha o atendimento e envie seu pedido em poucos passos."}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onClose()}
            aria-label="Fechar"
            className="grid size-10 shrink-0 place-items-center rounded-xl bg-slate-100"
          >
            <X size={18} />
          </button>
        </div>

        {bookingSent ? (
          <div className="mt-8 space-y-5">
            <div className="grid place-items-center rounded-[1.5rem] bg-brand/10 px-6 py-8 text-center">
              <div className="grid size-16 place-items-center rounded-full bg-brand text-brand-foreground shadow-lg shadow-brand/20">
                <CheckCircle2 size={30} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-extrabold">
                Tudo certo, {clientName.trim() || "cliente"}!
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-ink/55">
                Sua solicitação foi preparada e o WhatsApp foi aberto. A equipe confirma a
                disponibilidade por lá.
              </p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-slate-50 p-4 dark:bg-slate-800">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-ink/40">
                    Seu pedido
                  </p>
                  <p className="mt-1 font-display font-bold">{service}</p>
                  <p className="mt-1 text-xs text-ink/50">
                    {barber} · {date ? formattedDate : "Data a combinar"} · {time}
                  </p>
                </div>
                <p className="font-display text-xl font-extrabold text-brand">
                  {selectedService.price}
                </p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={startNewBooking}
                className="flex items-center justify-center gap-2 rounded-xl border border-ink/10 bg-white px-4 py-3 font-bold dark:bg-slate-900"
              >
                <RotateCcw size={17} /> Novo agendamento
              </button>
              <button
                type="button"
                onClick={() => onClose()}
                className="rounded-xl bg-brand px-4 py-3 font-bold text-brand-foreground"
              >
                Fechar
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-7 space-y-5">
            <div className="grid grid-cols-4 gap-2">
              {[
                [Boolean(clientName.trim() && isValidPhone(clientPhone)), "Dados"],
                [Boolean(service), "Serviço"],
                [Boolean(barber), "Barbeiro"],
                [Boolean(date && time && !isSunday), "Horário"],
              ].map(([done, label], index) => (
                <div key={String(label)} className="space-y-1.5">
                  <div
                    className={`h-1.5 rounded-full ${done ? "bg-brand" : "bg-slate-200 dark:bg-slate-700"}`}
                  />
                  <p
                    className={`text-[9px] font-bold uppercase tracking-wider ${done ? "text-brand" : "text-ink/35"}`}
                  >
                    {index + 1}. {label}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <InputField
                label="Seu nome"
                value={clientName}
                onChange={setClientName}
                placeholder="Como podemos te chamar?"
                icon={<UserRound size={16} />}
              />
              <InputField
                label="WhatsApp"
                value={clientPhone}
                onChange={handlePhoneChange}
                placeholder="(46) 99999-9999"
                type="tel"
                icon={<Phone size={16} />}
              />
            </div>

            <SelectField
              label="Serviço"
              value={service}
              onChange={setService}
              options={services.map((item) => item.name)}
            />
            <SelectField
              label="Barbeiro"
              value={barber}
              onChange={handleBarberChange}
              options={barbers.map((item) => item.name)}
            />

            <div className="rounded-2xl border border-ink/10 bg-slate-50 p-4 dark:bg-slate-800/70">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ink/50">
                    1. Escolha a data
                  </span>
                  <p className="mt-1 text-xs text-ink/45">
                    Domingos ficam bloqueados automaticamente.
                  </p>
                </div>
                <CalendarDays className="size-5 text-brand" />
              </div>
              <input
                type="date"
                min={minDate}
                value={date}
                onChange={(event) => handleDateChange(event.target.value)}
                className="mt-4 w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand dark:bg-slate-900"
              />
            </div>

            <div className="rounded-2xl border border-ink/10 bg-slate-50 p-4 dark:bg-slate-800/70">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ink/50">
                    2. Horários disponíveis
                  </span>
                  <p className="mt-1 text-xs text-ink/45">
                    Disponibilidade simulada para demonstração.
                  </p>
                </div>
                {date && !isSunday && (
                  <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[10px] font-bold text-brand">
                    {availableSlots.length} livres
                  </span>
                )}
              </div>
              {!date ? (
                <div className="mt-4 rounded-xl border border-dashed border-ink/10 px-4 py-5 text-center text-xs text-ink/45">
                  Selecione uma data para ver os horários.
                </div>
              ) : isSunday ? (
                <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-5 text-center text-xs font-medium text-red-600 dark:text-red-300">
                  Domingo: barbearia fechada.
                </div>
              ) : (
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {timeSlots.map((slot) => {
                    const available = availableSlots.includes(slot);
                    const selected = time === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        disabled={!available}
                        onClick={() => handleTimeChange(slot)}
                        className={`rounded-xl border px-3 py-3 text-sm font-bold transition ${selected ? "border-brand bg-brand text-brand-foreground shadow-lg shadow-brand/20" : available ? "border-ink/10 bg-white hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand dark:bg-slate-900" : "cursor-not-allowed border-ink/5 bg-slate-200/70 text-ink/25 line-through dark:bg-slate-900/60 dark:text-white/20"}`}
                      >
                        {slot}
                        <span className="mt-1 block text-[9px] font-medium no-underline opacity-70">
                          {available ? "Livre" : "Ocupado"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {bookingError && (
              <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-sm font-medium text-red-600 dark:text-red-300">
                {bookingError}
              </div>
            )}

            <div className="rounded-2xl border border-ink/10 bg-slate-50 p-4 dark:bg-slate-800">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-ink/40">
                    Resumo
                  </p>
                  <p className="mt-1 font-display font-bold">{selectedService.name}</p>
                  <p className="mt-1 text-xs text-ink/50">
                    {barber} · {date ? formattedDate : "Escolha uma data"} ·{" "}
                    {time || "Escolha um horário"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display text-xl font-extrabold text-brand">
                    {selectedService.price}
                  </p>
                  <p className="text-[11px] text-ink/45">{selectedService.duration}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-brand/10 p-4 text-sm">
              <div className="flex items-center gap-2 font-semibold">
                <Check className="size-4 text-brand" /> Quase lá!
              </div>
              <p className="mt-2 text-xs leading-5 text-ink/50">
                Seu pedido será enviado pelo WhatsApp. O horário só fica confirmado depois que a
                barbearia responder.
              </p>
            </div>

            {canSubmit ? (
              <a
                href={`${whatsappUrl}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => setBookingSent(true)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3.5 font-bold text-brand-foreground shadow-lg shadow-brand/20 transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle size={18} /> Enviar pelo WhatsApp
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-slate-200 px-5 py-3.5 font-bold text-slate-400 dark:bg-slate-800 dark:text-slate-500"
              >
                <Check size={18} /> Preencha os dados para continuar
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
