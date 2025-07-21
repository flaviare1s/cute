import { useTranslation } from "react-i18next";
import levelsPt from "../data/levels-pt.json";
import levelsEn from "../data/levels-en.json";

export const useLevels = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const rawLevels = lang === "en" ? levelsEn : levelsPt;

  const levels = Object.values(rawLevels).map((level) => ({
    solution: level.solucao || level.solution,
    hints: level.dicas || level.hints,
  }));

  return levels;
};
