export const timeSlots = ["09:00", "10:00", "11:20", "14:00", "14:40", "16:00", "18:20", "19:00"];

export const SUNDAY_MESSAGE = "A FOLICULA não atende aos domingos. Escolha outro dia.";

export type BookingPreset = Partial<{ service: string; barber: string; time: string }>;

export type BookingSummary = {
  name: string;
  phone: string;
  service: string;
  price: string;
  duration: string;
  barber: string;
  date: string;
  time: string;
};

const pad = (value: number) => String(value).padStart(2, "0");

// Meio-dia evita que fusos horários empurrem a data para o dia anterior/seguinte.
const toLocalDate = (date: string) => new Date(`${date}T12:00:00`);

export function getLocalDateString(now = new Date()) {
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

export function isSunday(date: string) {
  return date ? toLocalDate(date).getDay() === 0 : false;
}

export function formatLongDate(date: string) {
  if (!date) return "a combinar";
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "full" }).format(toLocalDate(date));
}

/**
 * Agenda demonstrativa: a mesma data + barbeiro sempre gera a mesma disponibilidade.
 * Domingos não têm horários e, no dia de hoje, horários que já passaram ficam de fora.
 */
export function getAvailableSlots(date: string, barber: string, now = new Date()) {
  if (!date || isSunday(date)) return [];

  const seed = [...`${date}-${barber}`].reduce((total, char) => total + char.charCodeAt(0), 0);
  const occupied = new Set([seed % timeSlots.length, (seed * 3 + 1) % timeSlots.length]);
  const isToday = date === getLocalDateString(now);
  const currentTime = `${pad(now.getHours())}:${pad(now.getMinutes())}`;

  return timeSlots.filter(
    (slot, index) => !occupied.has(index) && (!isToday || slot > currentTime),
  );
}

/** Mantém o horário escolhido se ele continuar livre para a nova data/barbeiro; senão limpa. */
export function reconcileTime(time: string, date: string, barber: string, now = new Date()) {
  if (!time || !date) return time;
  return getAvailableSlots(date, barber, now).includes(time) ? time : "";
}

export function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function isValidPhone(value: string) {
  return value.replace(/\D/g, "").length >= 10;
}

export function buildBookingMessage(booking: BookingSummary) {
  return (
    `Olá! Quero agendar um horário na FOLICULA Barber Studio.\n\n` +
    `Nome: ${booking.name.trim()}\n` +
    `Telefone: ${booking.phone.trim()}\n` +
    `Serviço: ${booking.service} — ${booking.price} (${booking.duration})\n` +
    `Barbeiro: ${booking.barber}\n` +
    `Data: ${formatLongDate(booking.date)}\n` +
    `Horário: ${booking.time}\n\n` +
    `Podem confirmar a disponibilidade?`
  );
}
