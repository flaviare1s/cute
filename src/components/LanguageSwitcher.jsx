import { useLanguage } from "../context/LanguageContext";


export const LanguageSwitcher = () => {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className="relative inline-block">
  <select
    value={language}
    onChange={(e) => switchLanguage(e.target.value)}
    className="appearance-none p-2 pr-8 rounded bg-[var(--color-highlight-light)] dark:bg-[var(--color-highlight-dark)] dark:text-bg-dark"
  >
    <option value="pt">Português</option>
    <option value="en">English</option>
  </select>
  <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-bg-dark">
        <i class="fa-solid fa-chevron-down"></i>
  </div>
</div>

  );
};
