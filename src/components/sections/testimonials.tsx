import { Star } from "lucide-react";

import { brand } from "@/data/brand";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section id="avaliacoes" data-reveal className="mt-14 scroll-mt-24">
      <div className="rounded-[2rem] bg-ink p-6 text-white shadow-2xl shadow-ink/20 sm:p-8 lg:p-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
              Quem já passou por aqui
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              O que nossos clientes dizem
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3">
            <Star className="fill-current text-brand" size={18} />
            <div>
              <p className="font-bold">{brand.rating} / 5</p>
              <p className="text-xs text-white/50">avaliação média</p>
            </div>
          </div>
        </div>
        <div className="mt-7 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <div className="flex gap-1">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={index} size={14} className="fill-current text-brand" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-white/75">“{item.text}”</p>
              <p className="mt-5 text-sm font-bold">{item.name}</p>
              <p className="mt-1 text-xs text-white/40">Cliente {brand.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
