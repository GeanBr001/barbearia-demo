# FOLICULA Barber Studio

Site demonstrativo de uma barbearia moderna, feito como projeto de portfólio. O visitante conhece os serviços e os barbeiros, monta um pedido de agendamento em um formulário e envia pelo WhatsApp.

> **Projeto demonstrativo:** endereço, telefone, preços, nomes, avaliações e disponibilidade são fictícios.

## Funcionalidades

- Landing page responsiva: hero, serviços, galeria, barbeiros, avaliações, horários, FAQ e localização
- Modo claro/escuro (usa a preferência do sistema e lembra a escolha do visitante)
- Galeria com lightbox e navegação por teclado (← → Esc)
- Agendamento em um modal: dados, serviço, barbeiro, data e horário
  - máscara e validação de telefone
  - domingos e datas passadas bloqueados; horários que já passaram hoje não aparecem
  - agenda demonstrativa: a mesma data + barbeiro sempre mostra os mesmos horários livres/ocupados
  - resumo do pedido e mensagem pronta para o WhatsApp
- Barra de progresso de rolagem, botão de voltar ao topo e CTA fixo no mobile
- Animações suaves com suporte a `prefers-reduced-motion` e foco visível para teclado

## Tecnologias

React 19 · TypeScript · Vite · Tailwind CSS 4 · TanStack Router/Start · Lucide Icons · Vitest

## Estrutura

```text
src/
├── components/
│   ├── sections/        # uma seção da página por arquivo (hero, serviços, galeria…)
│   ├── booking-modal.tsx
│   ├── gallery-lightbox.tsx
│   └── header.tsx · footer.tsx · floating-actions.tsx · form-fields.tsx · primitives.tsx
├── data/brand.ts        # nome, contato, endereço, textos do hero (edite aqui para um novo cliente)
├── data/site.ts         # serviços, barbeiros, galeria, depoimentos e FAQ
├── hooks/               # tema, rolagem, revelar ao rolar e estado do formulário
├── lib/booking.ts       # regras do agendamento (datas, horários, telefone, mensagem)
├── routes/              # rotas (TanStack Router, baseado em arquivos)
└── styles.css           # tema e tokens de design
```

## Como rodar

```bash
npm install
npm run dev
```

O Vite mostra no terminal o endereço local (normalmente `http://localhost:5173`).

| Script              | O que faz                               |
| ------------------- | --------------------------------------- |
| `npm run dev`       | servidor de desenvolvimento             |
| `npm run build`     | build de produção (saída em `.output/`) |
| `npm run preview`   | serve o build localmente                |
| `npm run typecheck` | verifica os tipos                       |
| `npm run lint`      | ESLint + Prettier                       |
| `npm run test`      | testes (Vitest)                         |

## Agendamento e WhatsApp

Não há banco de dados: a disponibilidade é **simulada no navegador** e a confirmação real acontece pelo WhatsApp. O número fica em `src/data/brand.ts` (`whatsappNumber`) — troque pelo número do cliente antes de qualquer uso real.

Para virar um produto de verdade, o próximo passo seria conectar a agenda a um backend/banco de dados e criar uma área para a equipe cadastrar, bloquear e confirmar horários.

## Adaptar para um novo cliente

1. `src/data/brand.ts`: nome, WhatsApp, Instagram, endereço, horários e textos do topo da página.
2. `src/data/site.ts`: serviços e preços, barbeiros, galeria, depoimentos e FAQ.
3. `src/styles.css`: a cor da marca está em `--brand` (e `--ink` para o tom escuro).
4. `src/assets/`: troque as fotos mantendo os nomes, ou ajuste os imports em `data/site.ts`.
5. `public/favicon.ico`: ícone da aba.

Textos, nome e links vêm todos desses arquivos, então não é preciso mexer nos componentes.

## Autor

Gean Ribeiro
