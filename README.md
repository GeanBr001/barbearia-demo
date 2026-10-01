# FOLICULA Barber Studio

Landing page demonstrativa para uma barbearia moderna, evoluída para uma experiência comercial com galeria, avaliações, localização e fluxo de agendamento pelo WhatsApp.

## ✂️ Sobre o projeto

O FOLICULA Barber Studio é um site institucional responsivo para apresentar uma barbearia, seus profissionais, serviços e informações de atendimento.

O projeto faz parte de um portfólio de desenvolvimento web e utiliza dados fictícios. Antes de um uso comercial, substitua endereço, telefone, nomes, imagens, preços e links de redes sociais pelos dados reais do cliente.

## 🚀 Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- TanStack Router
- Lucide React

## 📋 V2 — funcionalidades

- Hero comercial com CTA de agendamento
- Menu responsivo para celular
- Serviços com preço e duração
- Galeria de estilos
- Perfil dos barbeiros
- Avaliações de clientes
- Horários de atendimento
- Localização e botão de rota
- CTA para WhatsApp
- Modal de agendamento
- Seleção de serviço, barbeiro, data e horário
- Geração automática da mensagem de agendamento para WhatsApp
- SEO básico e metadata da marca

## 📦 Instalação

```bash
npm install
```

## ▶️ Desenvolvimento

```bash
npm run dev
```

Normalmente o projeto ficará disponível em:

```text
http://localhost:5173
```

## 🏗️ Build

```bash
npm run build
```

## 🌐 Deploy

O projeto pode ser publicado na Vercel conectado ao repositório do GitHub.

Fluxo recomendado:

```text
VS Code → Git → GitHub → Vercel
```

## 🌿 Branches

- `main` → versão estável
- `dev` → desenvolvimento

Fluxo recomendado:

```text
dev → Pull Request → main
```

## 📱 WhatsApp

O número usado pelo agendamento está centralizado em `src/routes/index.tsx` na constante `WHATSAPP_NUMBER`.

Antes de entregar o site a um cliente, troque o número fictício pelo WhatsApp real da empresa.

## 🔒 Segurança

Não coloque chaves de API, senhas ou outros segredos diretamente no código ou no GitHub.

## 👨‍💻 Desenvolvedor

**Gean Ribeiro**

Projeto desenvolvido para estudo, portfólio e demonstração de desenvolvimento web.
