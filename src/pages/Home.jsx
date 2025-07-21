import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-hot-toast";

import { GameGrid } from "../components/GameGrid";
import { LevelInfo } from "../components/LevelInfo";

import levelsPt from "../data/levels-pt.json";
import levelsEn from "../data/levels-en.json";

const MAX_LIVES = 5;

export const Home = () => {
  const { i18n } = useTranslation();

  const [levelIndex, setLevelIndex] = useState(() => {
    const saved = localStorage.getItem("levelIndex");
    return saved ? Number(saved) : 0;
  });

  const [lives, setLives] = useState(() => {
    const saved = localStorage.getItem("lives");
    return saved ? Number(saved) : MAX_LIVES;
  });

  const [levels, setLevels] = useState([]);

  useEffect(() => {
    if (i18n.language.startsWith("pt")) {
      setLevels(levelsPt.levels);
    } else {
      setLevels(levelsEn.levels);
    }
  }, [i18n.language]);

  useEffect(() => {
    localStorage.setItem("levelIndex", levelIndex);
  }, [levelIndex]);

  useEffect(() => {
    localStorage.setItem("lives", lives);
  }, [lives]);

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

  const handleWrongAnswer = () => {
    if (lives > 1) {
      setLives(lives - 1);
      toast.error(i18n.t("wrongAnswer"));
    } else {
      setLives(0);
      toast.error(i18n.t("gameOver"));
      setLevelIndex(0);
      setLives(MAX_LIVES);
    }
  };

  return (
    <main className="p-5 sm:p-8 transition-all max-w-[600px] w-full mx-auto text-xl">
      <p className="text-2xl mb-4">
        {Array.from({ length: lives }, (_, i) => (
          <span key={i}>❤️</span>
        ))}
      </p>
      <LevelInfo levelIndex={levelIndex} dicas={currentLevel.hints} lives={lives} />
      <GameGrid
        levelIndex={levelIndex}
        onLevelComplete={handleLevelComplete}
        onWrongAnswer={handleWrongAnswer}
        levelData={currentLevel}
      />
    </main>
  );
};
