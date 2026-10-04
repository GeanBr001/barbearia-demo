import { brand } from "@/data/brand";

export function Footer() {
  return (
    <footer className="mt-10 flex flex-col gap-3 border-t border-ink/10 py-6 pb-24 text-sm text-ink/50 sm:flex-row sm:items-center sm:justify-between sm:pb-6">
      <p>
        {brand.fullName} — {new Date().getFullYear()}
      </p>
      <p>{brand.address} · Atendimento por agendamento</p>
    </footer>
  );
}
