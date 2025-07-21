import { useTranslation } from "react-i18next";

export const LevelInfo = ({ levelIndex, dicas }) => {
  const { t } = useTranslation();
  return (
    <section className="mb-5">
      <h2 className="text-xl font-bold">{t("level")} {levelIndex + 1}</h2>
      <ul className="list-disc ml-5 mt-2">
        {dicas.map((dica, i) => (
          <li key={i}>{dica}</li>
        ))}
      </ul>
    </section>
  );
};
