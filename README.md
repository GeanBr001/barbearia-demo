# FOLICULA Barber Studio

Landing page demonstrativa para uma barbearia moderna, criada como projeto de portfólio.

## ✂️ Sobre o projeto

O FOLICULA Barber Studio é um site institucional responsivo para apresentar uma barbearia, seus profissionais, serviços e informações de atendimento.

O projeto foi prototipado com Lovable e preparado para desenvolvimento local, versionamento com Git/GitHub e deploy na Vercel.

> **Projeto demonstrativo:** informações como endereço, telefone, preços e nomes são fictícias e devem ser substituídas antes de qualquer uso comercial.

## 🚀 Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- TanStack Router
- shadcn/ui / Radix UI
- Lucide Icons

## 📋 Funcionalidades

- Hero section com CTA de agendamento
- Modo claro e escuro com preferência salva no navegador
- Apresentação da barbearia
- Serviços com preços e duração
- Galeria de estilos
- Perfis dos barbeiros
- Depoimentos
- Localização e link para Google Maps
- Modal de agendamento
- Seleção de serviço, barbeiro, data e horário
- Validação básica de data e dados do cliente
- Resumo do agendamento com preço e duração
- Geração de mensagem para WhatsApp
- Layout responsivo para desktop e celular

## 📅 Agendamento

O agendamento da V4 funciona sem banco de dados. O cliente preenche os dados no site e o pedido é enviado pelo WhatsApp da barbearia.

O horário **não é confirmado automaticamente**: a confirmação acontece após a resposta da barbearia no WhatsApp.

Antes de publicar para uma empresa real, substitua o número em `src/routes/index.tsx`:

```ts
const WHATSAPP_NUMBER = "5511999999999";
```

## 📦 Instalação

```bash
npm install
```

## ▶️ Desenvolvimento

```bash
npm run dev
```

O Vite disponibiliza o projeto localmente, normalmente em:

```text
http://localhost:5173
```

## 🏗️ Build

```bash
npm run build
```

## 🧪 TypeScript

```bash
npx tsc --noEmit
```

## 🌐 Deploy

O projeto pode ser conectado ao GitHub e publicado na Vercel.

Fluxo recomendado:

```text
VS Code → Git → GitHub → Vercel
```

## 🌿 Branches

- `main` → versão estável
- `dev` → desenvolvimento

Fluxo:

```text
main
  └── dev
```

Desenvolva em `dev` e faça Pull Request para `main` quando uma versão estiver pronta.

## 🔒 Segurança

Não coloque senhas, tokens ou chaves privadas no código ou no GitHub. Use variáveis de ambiente (`.env`) quando um projeto precisar de informações sensíveis.

## 👨‍💻 Desenvolvedor

Gean Ribeiro


## 🆕 V5

- Modo claro/escuro com preferência salva no navegador
- Agendamento pelo WhatsApp
- Número de atendimento configurado para teste
- Galeria com visualização ampliada e navegação por setas
- Seção de horários com atalhos para iniciar o agendamento
- Navegação atualizada para a seção de horários

> **Demonstração:** o número de WhatsApp configurado nesta versão é o número de teste do desenvolvedor. Substitua antes de entregar o projeto a um cliente.
