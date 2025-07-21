import { useTheme } from "../context/ThemeContext";

export const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 text-2xl rounded bg-transparent cursor-pointer"
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
};
