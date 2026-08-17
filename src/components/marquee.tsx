const WORDS = [
  "FRONTEND",
  "DADOS",
  "NEXT.JS",
  "EDUCAÇÃO",
  "TYPESCRIPT",
  "ARQUITETURA",
  "PYTHON",
  "CARREIRA",
  "CLOUD",
  "REACT",
  "COMUNIDADE",
];

const HOT = new Set(["EDUCAÇÃO", "ARQUITETURA", "COMUNIDADE"]);

/**
 * A lista é renderizada duas vezes e a faixa desliza -50%: no momento em que a
 * primeira cópia sai de cena, a segunda está exatamente onde ela começou, então
 * o loop não tem emenda.
 */
export default function Marquee() {
  const run = WORDS.map((w) => (
    <span key={w} style={{ display: "contents" }}>
      <b className={HOT.has(w) ? "grad-text" : undefined}>{w}</b>
      <i />
    </span>
  ));

  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {run}
        {WORDS.map((w) => (
          <span key={`dup-${w}`} style={{ display: "contents" }}>
            <b className={HOT.has(w) ? "grad-text" : undefined}>{w}</b>
            <i />
          </span>
        ))}
      </div>
    </div>
  );
}
