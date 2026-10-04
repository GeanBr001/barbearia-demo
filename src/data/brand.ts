/**
 * Identidade e dados de contato do negócio — é o arquivo a editar para adaptar o site a um novo cliente.
 *
 * Também ficam por conta de outros arquivos:
 *   - cor da marca ........ `--brand` em src/styles.css
 *   - serviços, equipe, FAQ, galeria e depoimentos ... src/data/site.ts
 *   - fotos ............... src/assets/
 *
 * Todos os dados abaixo são fictícios (projeto demonstrativo de portfólio).
 */
const name = "FOLICULA";
const descriptor = "Barber Studio";

export const brand = {
  name,
  descriptor,
  fullName: `${name} ${descriptor}`,
  /** Usado em chaves internas (ex.: preferência de tema salva no navegador). */
  slug: "folicula",
  initial: "F",
  author: "Gean Ribeiro",
  themeColor: "#0f172a",

  seo: {
    title: "Cortes, barba e estilo",
    description:
      "Barbearia premium com cortes, barba e atendimento personalizado. Escolha seu serviço, barbeiro e agende pelo WhatsApp.",
    shortDescription:
      "Cortes, barba e estilo com atendimento personalizado. Agende seu horário pelo WhatsApp.",
  },

  hero: {
    badge: "Barbearia premium",
    title: "Seu estilo começa na cadeira certa.",
    text: "Corte, barba e acabamento feito por profissionais que entendem de estilo. Escolha seu serviço e agende em poucos passos.",
    stats: [
      { value: "12h", label: "Por dia" },
      { value: "+500", label: "Clientes" },
      { value: "4.9", label: "Avaliação" },
    ],
  },

  /** Nota média exibida na seção de avaliações. */
  rating: "4.9",

  whatsappNumber: "5546999075054",
  instagram: "@foliculabarber",

  address: "Rua das Tesouras, 128",
  neighborhood: "Centro",
  locationTitle: "Centro da cidade",
  hoursSummary: "Seg–Sex 09h–21h · Sáb 08h–20h",
} as const;

export const whatsappUrl = `https://wa.me/${brand.whatsappNumber}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(brand.address)}`;
