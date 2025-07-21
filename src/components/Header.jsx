import { useTranslation } from "react-i18next";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-medium text-center">Cute</h1>
        <div className="flex gap-2 justify-center items-center">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
      <h1 className="text-2xl text-center w-[380px]">{t("welcome")}</h1>
    </header>
  )
}
