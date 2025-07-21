import { useTheme } from "../context/ThemeContext";

export const ThemeToggle = () => {
  const { lightMode, setLightMode } = useTheme();

  return (
    <button
      onClick={() => setLightMode(!lightMode)}
      className="p-2 text-2xl rounded bg-transparent cursor-pointer"
    >
      {lightMode ? "🌙" : "☀️"}
    </button>
  );
};
