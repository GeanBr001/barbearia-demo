import { ArrowUp, CalendarDays, MessageCircle } from "lucide-react";

import { whatsappUrl } from "@/data/brand";

export function FloatingActions({
  showBackToTop,
  onBook,
}: {
  showBackToTop: boolean;
  onBook: () => void;
}) {
  return (
    <>
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo"
          title="Voltar ao topo"
          className="fixed bottom-24 right-4 z-40 grid size-11 place-items-center rounded-full border border-white/20 bg-ink text-white shadow-xl shadow-ink/20 transition-all hover:-translate-y-1 hover:bg-brand hover:text-brand-foreground sm:bottom-6 sm:right-6"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* CTA fixo no mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/90 p-3 shadow-2xl backdrop-blur-xl dark:bg-slate-950/90 sm:hidden">
        <div className="mx-auto flex max-w-md items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir WhatsApp"
            className="grid size-12 shrink-0 place-items-center rounded-xl border border-ink/10 bg-white text-brand dark:bg-slate-900"
          >
            <MessageCircle size={20} />
          </a>
          <button
            type="button"
            onClick={() => onBook()}
            className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-brand px-4 font-bold text-brand-foreground shadow-lg shadow-brand/20"
          >
            <CalendarDays size={18} /> Agendar horário
          </button>
        </div>
      </div>
    </>
  );
}
