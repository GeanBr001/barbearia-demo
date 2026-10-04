import { ChevronDown } from "lucide-react";

import { SectionHeading } from "@/components/primitives";
import { brand } from "@/data/brand";
import { faq } from "@/data/site";

export function Faq() {
  return (
    <section id="duvidas" data-reveal className="mt-14 scroll-mt-24">
      <SectionHeading
        eyebrow="Dúvidas rápidas"
        title="Antes de marcar, tudo bem explicado"
        text={`As principais perguntas para quem está conhecendo a ${brand.name} pela primeira vez.`}
      />
      <div className="mt-6 grid gap-3 lg:grid-cols-2">
        {faq.map(({ question, answer }) => (
          <details
            key={question}
            className="group rounded-2xl border border-white/70 bg-white/65 p-5 shadow-lg shadow-ink/5 backdrop-blur-xl"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold [&::-webkit-details-marker]:hidden">
              {question}
              <ChevronDown className="size-5 shrink-0 text-brand transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 max-w-xl text-sm leading-6 text-ink/55">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
