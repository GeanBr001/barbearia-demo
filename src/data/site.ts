import heroImage from "@/assets/hero-barber.jpg";
import rafaelImage from "@/assets/barber-rafael.jpg";
import marcosImage from "@/assets/barber-marcos.jpg";
import thiagoImage from "@/assets/barber-thiago.jpg";

import { brand } from "./brand";

// Conteúdo do site. Nome, contato e endereço ficam em ./brand.ts. Dados fictícios (demo).

export const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Barbeiros", href: "#barbeiros" },
  { label: "Galeria", href: "#galeria" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Horários", href: "#agenda" },
  { label: "Localização", href: "#localizacao" },
];

export const barbers = [
  {
    name: "Rafael Duarte",
    specialty: "Especialista em degradê e cortes modernos",
    price: "A partir de R$ 45",
    image: rafaelImage,
  },
  {
    name: "Marcos Lima",
    specialty: "Especialista em barba e navalha",
    price: "A partir de R$ 50",
    image: marcosImage,
  },
  {
    name: "Thiago Alves",
    specialty: "Cortes clássicos e acabamento",
    price: "A partir de R$ 40",
    image: thiagoImage,
  },
];

export const services = [
  {
    name: "Corte clássico",
    detail: "Tesoura + máquina + acabamento",
    price: "R$ 45",
    duration: "40 min",
  },
  {
    name: "Degradê / fade",
    detail: "Degradê + acabamento na navalha",
    price: "R$ 55",
    duration: "50 min",
  },
  {
    name: "Corte + barba",
    detail: "Pacote completo para renovar o visual",
    price: "R$ 75",
    duration: "1h",
  },
  {
    name: "Barba completa",
    detail: "Toalha quente + navalha + acabamento",
    price: "R$ 40",
    duration: "30 min",
  },
  {
    name: "Sobrancelha",
    detail: "Alinhamento e acabamento na navalha",
    price: "R$ 25",
    duration: "15 min",
  },
];

export const schedule = [
  { day: "Segunda a sexta", hours: "09h – 21h" },
  { day: "Sábado", hours: "08h – 20h" },
  { day: "Domingo", hours: "Fechado", closed: true },
];

export const gallery = [
  { image: heroImage, title: "Fade + barba", label: "Acabamento preciso" },
  { image: rafaelImage, title: "Corte moderno", label: "Estilo personalizado" },
  { image: marcosImage, title: "Barba na navalha", label: "Toalha quente" },
  { image: thiagoImage, title: "Corte clássico", label: "Tesoura e máquina" },
];

export const testimonials = [
  {
    name: "Lucas Ferreira",
    text: "Ambiente muito bom e o corte ficou exatamente como eu queria. Atendimento rápido e caprichado.",
    rating: 5,
  },
  {
    name: "Pedro Henrique",
    text: "Já virei cliente. O acabamento do fade é muito bom e dá para agendar sem complicação.",
    rating: 5,
  },
  {
    name: "Matheus Costa",
    text: "Fiz corte e barba. Profissionais atenciosos e resultado muito bom.",
    rating: 5,
  },
];

const firstNames = barbers.map((barber) => barber.name.split(" ")[0]);
const barberNames = `${firstNames.slice(0, -1).join(", ")} ou ${firstNames.at(-1)}`;

export const faq = [
  {
    question: "O horário fica confirmado na hora?",
    answer:
      "Não. O pedido é enviado pelo WhatsApp e a equipe confirma a disponibilidade antes de considerar o horário reservado.",
  },
  {
    question: "Posso escolher o barbeiro?",
    answer: `Sim. No agendamento você pode escolher ${barberNames} ou trocar a opção antes de enviar a mensagem.`,
  },
  {
    question: "Posso cancelar ou remarcar?",
    answer:
      "Sim. Fale pelo WhatsApp assim que possível para a equipe verificar uma nova opção de horário.",
  },
  {
    question: "Vocês atendem aos domingos?",
    answer: `Não. A ${brand.name} funciona de segunda a sábado. O formulário também bloqueia a escolha de domingo.`,
  },
  {
    question: "Preciso pagar antecipado?",
    answer:
      "Não nesta versão demonstrativa. O site apenas envia a solicitação de agendamento pelo WhatsApp.",
  },
  {
    question: "O endereço é real?",
    answer:
      "Não. Este é um projeto demonstrativo de portfólio. Endereço, preços, nomes e contatos podem ser substituídos para um cliente real.",
  },
];
