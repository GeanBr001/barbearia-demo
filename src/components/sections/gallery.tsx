import { Maximize2 } from "lucide-react";

import { SectionHeading } from "@/components/primitives";
import { gallery } from "@/data/site";

export function Gallery({ onOpen }: { onOpen: (index: number) => void }) {
  return (
    <section id="galeria" data-reveal className="mt-14 scroll-mt-24">
      <SectionHeading
        eyebrow="Nosso trabalho"
        title="Galeria de estilos"
        text="Alguns dos estilos que fazem parte da experiência FOLICULA."
      />
      <div className="mt-6 grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[210px] sm:grid-cols-4">
        {gallery.map((item, index) => (
          <button
            type="button"
            key={`${item.title}-${index}`}
            onClick={() => onOpen(index)}
            aria-label={`Abrir foto: ${item.title}`}
            className={`group relative overflow-hidden rounded-3xl border border-white/70 bg-white text-left shadow-lg shadow-ink/5 ${index === 0 ? "col-span-2 row-span-2" : index === 3 ? "col-span-2" : ""}`}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
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
  );
}
