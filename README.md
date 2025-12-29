# 😺 Cute 🐶

> **[Read in English](README-en.md)** | **Português**

Jogo educativo de lógica com múltiplos níveis, suporte a idiomas, tema escuro/claro e sistema de vidas. Uma experiência interativa e divertida para aprender e praticar raciocínio lógico!

## 📖 Sobre o Projeto

**Cute** é um jogo de lógica desenvolvido com React que desafia os jogadores com uma série de níveis progressivos. O jogo oferece uma interface moderna e responsiva, com suporte completo a temas e internacionalização.

## ✨ Funcionalidades

- 🧠 **Níveis Progressivos**: Dificuldade crescente com desafios únicos
- 💡 **Tema Claro/Escuro**: Alternância de temas com persistência automática
- 🌍 **Multilíngue**: Suporte completo para Português e Inglês
- ❤️ **Sistema de Vidas**: Visualização intuitiva com emojis
- 💾 **Salvamento Automático**: Progresso salvo automaticamente no navegador
- 📱 **Design Responsivo**: Interface adaptável para todos os dispositivos
- 🎯 **Dicas Contextuais**: Sistema de dicas para auxiliar nos níveis

## 🛠️ Tecnologias

Este projeto foi construído com tecnologias modernas:

- **React 19** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool rápida e moderna
- **Tailwind CSS 4** - Framework CSS utilitário
- **React Router DOM** - Roteamento para aplicações React
- **i18next** - Framework de internacionalização
- **React Hot Toast** - Notificações elegantes
- **LocalStorage API** - Persistência de dados local

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/flaviare1s/cute.git
cd cute
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra o navegador em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Visualiza a versão de produção
- `npm run lint` - Executa o linter ESLint

## 📁 Estrutura do Projeto

```
cute/
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── GameGrid.jsx
│   │   ├── Header.jsx
│   │   ├── LanguageSwitcher.jsx
│   │   ├── LevelInfo.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/         # Context API
│   │   ├── LanguageContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/            # Dados dos níveis e dicas
│   │   ├── levels-en.json
│   │   ├── levels-pt.json
│   │   └── tips.json
│   ├── hooks/           # Custom hooks
│   │   └── useLevels.js
│   ├── i18n/            # Configuração de idiomas
│   │   ├── en.json
│   │   ├── pt.json
│   │   └── index.js
│   ├── pages/           # Páginas da aplicação
│   │   ├── Home.jsx
│   │   └── About.jsx
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Ponto de entrada
├── package.json
└── vite.config.js
```

## 🎮 Como Jogar

1. Selecione seu idioma preferido (Português ou Inglês)
2. Escolha o tema (claro ou escuro)
3. Resolva os níveis em sequência
4. Utilize as dicas quando necessário
5. Gerenciamento de vidas: cada erro reduz uma vida
6. Seu progresso é salvo automaticamente!

## 🌐 Deploy

O projeto está configurado para deploy no Vercel através do arquivo `vercel.json`.

## 📄 Licença

Este projeto é de código aberto e está disponível para uso educacional e pessoal.

## 👨‍💻 Autor

Desenvolvido por **Flávio Reis**

- GitHub: [@flaviare1s](https://github.com/flaviare1s)

---

⭐ Se você gostou deste projeto, considere dar uma estrela no repositório!
