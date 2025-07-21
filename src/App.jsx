
import { useTranslation } from "react-i18next";
import "./i18n";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeToggle } from "./components/ThemeToggle";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen p-5 sm:p-8 transition-all max-w-[600px] mx-auto">
          <div className="flex justify-between items-center mb-4">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
          <h1 className="text-2xl text-center">{t("welcome")}</h1>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
