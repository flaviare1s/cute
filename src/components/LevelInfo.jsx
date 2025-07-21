export const LevelInfo = ({ levelIndex, dicas }) => {
  return (
    <section className="mb-5">
      <h2 className="text-xl font-bold">Nível {levelIndex + 1}</h2>
      <ul className="list-disc ml-5 mt-2">
        {dicas.map((dica, i) => (
          <li key={i}>{dica}</li>
        ))}
      </ul>
    </section>
  );
};
