import { useEffect } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

import { gallery } from "@/data/site";

type GalleryLightboxProps = { index: number; onChange: (index: number | null) => void };

export function GalleryLightbox({ index, onChange }: GalleryLightboxProps) {
  const previous = (index - 1 + gallery.length) % gallery.length;
  const next = (index + 1) % gallery.length;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onChange(null);
      if (event.key === "ArrowRight") onChange(next);
      if (event.key === "ArrowLeft") onChange(previous);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, previous, onChange]);

  const selectedGallery = gallery[index];
  if (!selectedGallery) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Galeria ampliada"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onChange(null);
      }}
    >
      <div className="relative flex w-full max-w-4xl flex-col items-center">
        <div className="absolute -top-12 right-0 flex items-center gap-2">
          <span className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white">
            {index + 1} / {gallery.length}
          </span>
          <button
            type="button"
            onClick={() => onChange(null)}
            aria-label="Fechar galeria"
            className="grid size-10 place-items-center rounded-xl bg-white/10 text-white hover:bg-white/20"
          >
            <X size={18} />
          </button>
        </div>
        <div className="relative w-full overflow-hidden rounded-[2rem] bg-black shadow-2xl">
          <img
            src={selectedGallery.image}
            alt={selectedGallery.title}
            className="max-h-[78vh] w-full object-contain"
          />
          <button
            type="button"
            onClick={() => onChange(previous)}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => onChange(next)}
            aria-label="Próxima foto"
            className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70"
          >
            <ArrowRight size={20} />
          </button>
        </div>
        <div className="mt-4 text-center text-white">
          <p className="font-display text-xl font-bold">{selectedGallery.title}</p>
          <p className="mt-1 text-sm text-white/55">{selectedGallery.label}</p>
        </div>
      </div>
    </div>
  );
}
