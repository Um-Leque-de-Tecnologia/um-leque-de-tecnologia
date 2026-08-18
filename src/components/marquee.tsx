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

/** Quantas cópias da lista o track carrega. Ver comentário abaixo. */
const RUNS = 3;

/**
 * Esteira infinita.
 *
 * O track carrega N cópias idênticas da lista e desliza exatamente 100/N por
 * cento. No fim do ciclo a cópia seguinte está no lugar exato onde a anterior
 * começou, então o loop não tem emenda.
 *
 * Duas coisas que precisam ser verdade pra conta fechar:
 *
 * 1. O espaçamento vive DENTRO de cada cópia (gap entre itens + padding-right),
 *    e o track não tem gap nenhum. Se o gap fosse do track, ele entraria entre
 *    as cópias também: o track teria N·itens + (N·k − 1) lacunas, e 100/N por
 *    cento cairia meia lacuna antes do ponto certo — a esteira dava um pulinho
 *    a cada volta.
 *
 * 2. Cópias suficientes pra que uma sozinha cubra a tela mais larga possível.
 *    Com duas, uma cópia tem ~2680px: em monitor ultrawide sobrava um vazio
 *    andando junto com o fim da lista.
 */
export default function Marquee() {
  const run = (copy: number) => (
    <div className="run" key={copy}>
      {WORDS.map((w) => (
        <span className="pair" key={w}>
          <b className={HOT.has(w) ? "grad-text" : undefined}>{w}</b>
          <i />
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {Array.from({ length: RUNS }, (_, i) => run(i))}
      </div>
    </div>
  );
}
