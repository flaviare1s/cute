# 😺 Cute 🐶

> **English** | **[Ler em Português](README.md)**

Educational logic game with multiple levels, language support, dark/light theme, and life system. An interactive and fun experience to learn and practice logical reasoning!

## 📖 About the Project

**Cute** is a logic game developed with React that challenges players with a series of progressive levels. The game offers a modern and responsive interface with complete support for themes and internationalization.

## ✨ Features

- 🧠 **Progressive Levels**: Increasing difficulty with unique challenges
- 💡 **Light/Dark Theme**: Theme switching with automatic persistence
- 🌍 **Multilingual**: Full support for Portuguese and English
- ❤️ **Life System**: Intuitive visualization with emojis
- 💾 **Auto-Save**: Progress automatically saved in the browser
- 📱 **Responsive Design**: Adaptive interface for all devices
- 🎯 **Contextual Hints**: Hint system to assist with levels

## 🛠️ Technologies

This project was built with modern technologies:

- **React 19** - JavaScript library for interfaces
- **Vite** - Fast and modern build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router DOM** - Routing for React applications
- **i18next** - Internationalization framework
- **React Hot Toast** - Elegant notifications
- **LocalStorage API** - Local data persistence

## 🚀 How to Run

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/flaviare1s/cute.git
cd cute
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates the production build
- `npm run preview` - Previews the production build
- `npm run lint` - Runs ESLint linter

## 📁 Project Structure

```
cute/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   ├── GameGrid.jsx
│   │   ├── Header.jsx
│   │   ├── LanguageSwitcher.jsx
│   │   ├── LevelInfo.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/         # Context API
│   │   ├── LanguageContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/            # Level and hint data
│   │   ├── levels-en.json
│   │   ├── levels-pt.json
│   │   └── tips.json
│   ├── hooks/           # Custom hooks
│   │   └── useLevels.js
│   ├── i18n/            # Language configuration
│   │   ├── en.json
│   │   ├── pt.json
│   │   └── index.js
│   ├── pages/           # Application pages
│   │   ├── Home.jsx
│   │   └── About.jsx
│   ├── App.jsx          # Main component
│   └── main.jsx         # Entry point
├── package.json
└── vite.config.js
```

## 🎮 How to Play

1. Select your preferred language (Portuguese or English)
2. Choose your theme (light or dark)
3. Solve the levels in sequence
4. Use hints when needed
5. Life management: each mistake reduces one life
6. Your progress is saved automatically!

## 🌐 Deploy

The project is configured for deployment on Vercel through the `vercel.json` file.

## 📄 License

This project is open source and available for educational and personal use.

## 👨‍💻 Author

Developed by **Flávio Reis**

- GitHub: [@flaviare1s](https://github.com/flaviare1s)

---

⭐ If you liked this project, consider giving it a star on the repository!
