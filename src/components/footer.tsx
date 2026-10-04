import { ADDRESS } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-10 flex flex-col gap-3 border-t border-ink/10 py-6 pb-24 text-sm text-ink/50 sm:flex-row sm:items-center sm:justify-between sm:pb-6">
      <p>FOLICULA Barber Studio — 2026</p>
      <p>{ADDRESS} · Atendimento por agendamento</p>
    </footer>
  );
}
