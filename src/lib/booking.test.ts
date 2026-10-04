import { describe, expect, it } from "vitest";

import {
  buildBookingMessage,
  formatPhone,
  getAvailableSlots,
  getLocalDateString,
  isSunday,
  isValidPhone,
  reconcileTime,
  timeSlots,
} from "./booking";

// 2026-10-05 é segunda-feira; 2026-10-04 é domingo.
const MONDAY = "2026-10-05";
const SUNDAY = "2026-10-04";
const earlyMorning = new Date("2026-10-01T06:00:00");

describe("datas", () => {
  it("formata a data local como YYYY-MM-DD", () => {
    expect(getLocalDateString(new Date(2026, 0, 5))).toBe("2026-01-05");
  });

  it("identifica domingos", () => {
    expect(isSunday(SUNDAY)).toBe(true);
    expect(isSunday(MONDAY)).toBe(false);
    expect(isSunday("")).toBe(false);
  });
});

describe("getAvailableSlots", () => {
  it("não oferece horários sem data ou aos domingos", () => {
    expect(getAvailableSlots("", "Rafael Duarte", earlyMorning)).toEqual([]);
    expect(getAvailableSlots(SUNDAY, "Rafael Duarte", earlyMorning)).toEqual([]);
  });

  it("é determinístico e deixa pelo menos 6 horários livres", () => {
    const first = getAvailableSlots(MONDAY, "Rafael Duarte", earlyMorning);
    const second = getAvailableSlots(MONDAY, "Rafael Duarte", earlyMorning);
    expect(first).toEqual(second);
    expect(first.length).toBeGreaterThanOrEqual(timeSlots.length - 2);
  });

  it("remove horários que já passaram no dia de hoje", () => {
    const now = new Date("2026-10-05T15:00:00");
    const slots = getAvailableSlots(MONDAY, "Rafael Duarte", now);
    expect(slots.every((slot) => slot > "15:00")).toBe(true);
  });
});

describe("reconcileTime", () => {
  it("mantém o horário se ainda estiver livre e limpa se não estiver", () => {
    const free = getAvailableSlots(MONDAY, "Rafael Duarte", earlyMorning)[0]!;
    expect(reconcileTime(free, MONDAY, "Rafael Duarte", earlyMorning)).toBe(free);
    expect(reconcileTime(free, SUNDAY, "Rafael Duarte", earlyMorning)).toBe("");
  });

  it("não mexe no horário enquanto não há data escolhida", () => {
    expect(reconcileTime("10:00", "", "Rafael Duarte")).toBe("10:00");
  });
});

describe("telefone", () => {
  it("aplica a máscara brasileira", () => {
    expect(formatPhone("46999990000")).toBe("(46) 99999-0000");
    expect(formatPhone("469")).toBe("(46) 9");
  });

  it("exige pelo menos 10 dígitos", () => {
    expect(isValidPhone("(46) 9999-000")).toBe(false);
    expect(isValidPhone("(46) 99999-0000")).toBe(true);
  });
});

describe("buildBookingMessage", () => {
  it("monta a mensagem do WhatsApp com os dados do pedido", () => {
    const message = buildBookingMessage({
      name: " Ana ",
      phone: "(46) 99999-0000",
      service: "Corte clássico",
      price: "R$ 45",
      duration: "40 min",
      barber: "Rafael Duarte",
      date: MONDAY,
      time: "10:00",
    });
    expect(message).toContain("Nome: Ana");
    expect(message).toContain("Serviço: Corte clássico — R$ 45 (40 min)");
    expect(message).toContain("Horário: 10:00");
  });
});
