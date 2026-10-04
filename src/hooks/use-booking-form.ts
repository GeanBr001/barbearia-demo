import { useState } from "react";

import { barbers, services } from "@/data/site";
import {
  buildBookingMessage,
  formatLongDate,
  formatPhone,
  getAvailableSlots,
  getLocalDateString,
  isSunday,
  isValidPhone,
  reconcileTime,
  SUNDAY_MESSAGE,
  type BookingPreset,
} from "@/lib/booking";

export function useBookingForm() {
  const [service, setService] = useState(services[1]!.name);
  const [barber, setBarber] = useState(barbers[0]!.name);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [bookingError, setBookingError] = useState("");
  const [bookingSent, setBookingSent] = useState(false);

  const selectedService = services.find((item) => item.name === service) ?? services[0]!;
  const availableSlots = getAvailableSlots(date, barber);
  const sunday = isSunday(date);
  const canSubmit = Boolean(
    clientName.trim() &&
    isValidPhone(clientPhone) &&
    date &&
    time &&
    availableSlots.includes(time) &&
    !sunday,
  );

  const whatsappMessage = encodeURIComponent(
    buildBookingMessage({
      name: clientName,
      phone: clientPhone,
      service,
      price: selectedService.price,
      duration: selectedService.duration,
      barber,
      date,
      time,
    }),
  );

  const applyPreset = (preset: BookingPreset) => {
    const nextBarber = preset.barber ?? barber;
    if (preset.service) setService(preset.service);
    if (preset.barber) setBarber(preset.barber);
    setTime(reconcileTime(preset.time ?? time, date, nextBarber));
    setBookingError("");
    setBookingSent(false);
  };

  const handleDateChange = (value: string) => {
    setDate(value);
    setTime((current) => reconcileTime(current, value, barber));
    setBookingError(isSunday(value) ? SUNDAY_MESSAGE : "");
  };

  const handleBarberChange = (value: string) => {
    setBarber(value);
    setTime((current) => reconcileTime(current, date, value));
    setBookingError("");
  };

  const handleTimeChange = (value: string) => {
    setTime(value);
    setBookingError("");
  };

  /** Prepara um novo pedido mantendo nome e telefone preenchidos. */
  const startNewBooking = () => {
    setDate("");
    setTime("");
    setBookingError("");
    setBookingSent(false);
  };

  return {
    service,
    setService,
    barber,
    date,
    time,
    clientName,
    setClientName,
    clientPhone,
    handlePhoneChange: (value: string) => setClientPhone(formatPhone(value)),
    bookingError,
    bookingSent,
    setBookingSent,
    selectedService,
    availableSlots,
    isSunday: sunday,
    canSubmit,
    minDate: getLocalDateString(),
    formattedDate: formatLongDate(date),
    whatsappMessage,
    applyPreset,
    handleDateChange,
    handleBarberChange,
    handleTimeChange,
    startNewBooking,
  };
}

export type BookingForm = ReturnType<typeof useBookingForm>;
