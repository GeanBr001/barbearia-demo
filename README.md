# FOLICULA Barber Studio

Site demonstrativo de uma barbearia moderna, criado como projeto de portfólio e preparado para desenvolvimento local, Git/GitHub e deploy na Vercel.

> **Projeto demonstrativo:** endereço, telefone, preços, nomes, avaliações e disponibilidade são fictícios e devem ser substituídos antes de qualquer uso comercial.

## ✂️ Visão geral

A FOLICULA apresenta serviços, barbeiros, galeria, avaliações, FAQ, horários e localização em uma landing page responsiva. O visitante também pode montar um pedido de agendamento e enviá-lo pelo WhatsApp.

## 🚀 Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS
- TanStack Router / Start
- shadcn/ui / Radix UI
- Lucide Icons
- Vitest

## 📋 Funcionalidades

- Hero com chamadas para agendamento
- Modo claro/escuro com preferência salva no navegador
- Serviços com preço e duração
- Perfis dos barbeiros
- Galeria com lightbox e navegação por teclado
- Avaliações e FAQ
- Horários e localização
- Agendamento em etapas
- Validação de telefone e data
- Bloqueio de domingos e datas anteriores
- Agenda demonstrativa com horários livres/ocupados por data + barbeiro
- Resumo do pedido antes do envio
- Mensagem automática para WhatsApp
- Tela de confirmação após abrir o WhatsApp
- Último agendamento salvo localmente para demonstração
- Barra de progresso de navegação
- Animações suaves com suporte a `prefers-reduced-motion`
- Foco visível para teclado
- Botão voltar ao topo
- Layout responsivo para desktop e celular

## 📅 Agendamento

O fluxo atual funciona sem banco de dados. A disponibilidade da agenda é **simulada no navegador** para fins de demonstração.

Para transformar isso em um produto comercial, a próxima evolução seria conectar a agenda a um backend/banco de dados e criar uma área para a equipe cadastrar, bloquear e confirmar horários.

O número de teste está configurado em `src/routes/index.tsx`:

```ts
const WHATSAPP_NUMBER = "5546999075054";
```

Substitua esse número antes de entregar o projeto a um cliente.

## 📦 Instalação

```bash
npm install
```

## ▶️ Desenvolvimento

```bash
npm run dev
```

Normalmente o Vite disponibiliza o projeto em:

```text
http://localhost:5173
```

## 🧪 Verificações locais

Antes de publicar uma versão, rode:

```bash
npm run lint
npx tsc --noEmit
npm run test
npm run build
```

Se o ambiente não possuir as dependências instaladas, execute primeiro `npm install`.

## 🌐 Deploy

Fluxo recomendado:

```text
VS Code → Git → GitHub → Vercel
```

Antes do primeiro deploy comercial, confirme o build no ambiente da Vercel e substitua todos os dados fictícios.

## 🌿 Git

- `main` → versão estável
- `dev` → desenvolvimento

Fluxo recomendado:

```text
main
  └── dev
      └── Pull Request → main
```

Faça as alterações em `dev`. Quando uma versão estiver testada, abra um Pull Request para `main`.

## 🔒 Segurança

- `node_modules` e arquivos de build não entram no Git.
- `.env` é ignorado pelo Git.
- Nunca coloque senhas, tokens ou chaves privadas no código.
- Dados fictícios devem ser substituídos antes de um uso real.

## ✅ Checklist antes de entregar a um cliente

- [ ] Nome e identidade da empresa
- [ ] Logo e favicon
- [ ] Fotos reais
- [ ] Serviços e preços reais
- [ ] Nome dos profissionais
- [ ] WhatsApp real
- [ ] Endereço e mapa
- [ ] Horários reais
- [ ] Redes sociais
- [ ] Política de privacidade, se necessária
- [ ] Agenda/backend real, caso o cliente precise de disponibilidade em tempo real
- [ ] Teste em celular e desktop
- [ ] `npm run build` funcionando

## 👨‍💻 Desenvolvedor

Gean Ribeiro
