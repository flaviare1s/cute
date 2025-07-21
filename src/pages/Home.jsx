import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-hot-toast";

import { GameGrid } from "../components/GameGrid";
import { LevelInfo } from "../components/LevelInfo";

import levelsPt from "../data/levels-pt.json";
import levelsEn from "../data/levels-en.json";

export const Home = () => {
  const { i18n } = useTranslation();
  const [levelIndex, setLevelIndex] = useState(0);
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    if (i18n.language.startsWith("pt")) {
      setLevels(levelsPt.levels);
    } else {
      setLevels(levelsEn.levels);
    }
    setLevelIndex(0);
  }, [i18n.language]);

  if (levels.length === 0) {
    return <p>{i18n.t("loading") || "Carregando..."}</p>;
  }

  const currentLevel = levels[levelIndex];

  if (!currentLevel) {
    return <p>{i18n.t("loading") || "Carregando..."}</p>;
  }

  const handleLevelComplete = () => {
    toast.success(i18n.t("levelComplete"));
    const nextLevelIndex = levelIndex + 1;
    if (nextLevelIndex < levels.length) {
      setLevelIndex(nextLevelIndex);
    } else {
      toast.success(i18n.t("allLevelsComplete") || "Você completou todos os níveis!");
    }
  };

  return (
    <main className="p-5 sm:p-8 transition-all max-w-[600px] w-full mx-auto text-xl">
      <LevelInfo levelIndex={levelIndex} dicas={currentLevel.hints} />
      <GameGrid
        levelIndex={levelIndex}
        onLevelComplete={handleLevelComplete}
        levelData={currentLevel}
      />
    </main>
  );
};
