import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";

export const GameGrid = ({ levelIndex, onLevelComplete, levelData }) => {
  const { emojiMap, solution, gridSize } = levelData;
  const { t } = useTranslation();

  const nomes = useMemo(() => Object.keys(emojiMap), [emojiMap]);
  const [resposta, setResposta] = useState(() => Array(gridSize).fill(nomes[0]));
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setResposta(Array(gridSize).fill(nomes[0]));
    setChecked(false);
  }, [levelIndex, nomes, gridSize]);

  const alterarEmoji = (index) => {
    setResposta((atual) => {
      const nova = [...atual];
      const atualNome = nova[index];
      const proximoIndex = (nomes.indexOf(atualNome) + 1) % nomes.length;
      nova[index] = nomes[proximoIndex];
      return nova;
    });
    setChecked(false);
  };

  const verificarResposta = () => {
    const acertou = resposta.join() === solution.join();
    setChecked(true);
    if (acertou) {
      onLevelComplete();
    }
  };

  const colsClass = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
  }[Math.min(gridSize, 5)] || "grid-cols-3";

  return (
    <div>
      <div className={`grid ${colsClass} gap-2 justify-center my-5`}>
        {resposta.map((nome, i) => (
          <button
            key={i}
            onClick={() => alterarEmoji(i)}
            className="flex justify-center items-center text-4xl p-2 bg-bg-light rounded shadow hover:scale-105 transition"
            type="button"
            aria-label={`${t("position")} ${i + 1}: ${nome}`}
          >
            {emojiMap[nome]}
          </button>
        ))}
      </div>

      <button
        onClick={verificarResposta}
        className="mt-4 px-6 py-2 bg-text-light text-bg-light rounded hover:bg-accent-dark hover:text-text-light font-bold transition"
      >
        {t("checkAnswer")}
      </button>

      {checked && resposta.join() !== solution.join() && (
        <p className={`mt-2 font-semibold text-red-400`}>
          {t("wrongAnswer")}
        </p>
      )}
    </div>
  );
};
