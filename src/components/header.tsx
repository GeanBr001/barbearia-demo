import { useState } from "react";
import { CalendarDays, Menu, Moon, Sun, X } from "lucide-react";

import { brand } from "@/data/brand";
import { navLinks } from "@/data/site";

type HeaderProps = {
  darkMode: boolean;
  scrolled: boolean;
  onToggleTheme: () => void;
  onBook: () => void;
};

export function Header({ darkMode, scrolled, onToggleTheme, onBook }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className={`sticky top-3 z-40 flex items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 ${scrolled ? "border-white/80 bg-white/85 shadow-xl shadow-ink/10" : "border-white/70 bg-white/70 shadow-lg shadow-ink/5"}`}
      >
        <a href="#inicio" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <div className="grid size-10 place-items-center rounded-xl border border-brand/30 bg-brand/15 font-display text-lg font-bold text-brand">
            F
          </div>
          <div>
            <p className="font-display text-lg font-bold leading-none tracking-tight">
              {brand.name}
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-ink/50">
              {brand.descriptor}
            </p>
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
            onClick={() => onToggleTheme()}
            className="grid size-10 place-items-center rounded-xl border border-ink/10 bg-white/70 text-ink transition-colors hover:bg-white dark:bg-slate-900/70 dark:text-white dark:hover:bg-slate-800"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => onBook()}
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
              onBook();
            }}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 font-semibold text-brand-foreground"
          >
            <CalendarDays size={17} /> Agendar horário
          </button>
        </div>
      )}
    </>
  );
}
