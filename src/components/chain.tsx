/**
 * A cadeia — a trilha por áreas da tecnologia.
 *
 * O fio existe SÓ aqui. Uma versão anterior atravessava a página inteira e
 * cortava o layout ao meio, passando por cima do conteúdo. Aqui ele é o próprio
 * conteúdo: liga os elos e vive no vão entre as duas colunas de cards.
 */

type Elo = {
  n: string;
  title: string;
  desc: string;
  tags: string[];
  /** elo já disponível (aceso) ou ainda por vir */
  on: boolean;
};

const ELOS: Elo[] = [
  {
    n: "01",
    title: "Fundamentos",
    desc:
      "Lógica, algoritmos, versionamento e como a web realmente funciona por baixo. É a base que sustenta qualquer especialização depois.",
    tags: ["Lógica", "Git", "HTTP"],
    on: true,
  },
  {
    n: "02",
    title: "Desenvolvimento",
    desc:
      "Construir o que as pessoas usam de fato: interfaces, servidores, APIs e aplicativos — do protótipo ao que roda em produção.",
    tags: ["Frontend", "Backend", "Mobile"],
    on: true,
  },
  {
    n: "03",
    title: "Dados",
    desc:
      "Coletar, tratar e enxergar. Sair da planilha bagunçada e chegar numa decisão que se sustenta em evidência.",
    tags: ["SQL", "Análise", "Visualização"],
    on: true,
  },
  {
    n: "04",
    title: "IA & Automação",
    desc:
      "Modelos, agentes e processos que trabalham por você — com critério, avaliação e responsabilidade sobre o resultado.",
    tags: ["Modelos", "Agentes", "Ética"],
    on: true,
  },
  {
    n: "05",
    title: "Produto & Carreira",
    desc:
      "Nada disso existe sem gente. Pesquisa com usuário, trabalho em time, comunidade e a construção de um caminho profissional.",
    tags: ["UX", "Time", "Comunidade"],
    on: false,
  },
];

export default function Chain() {
  return (
    <section className="section" id="trilha">
      <div className="chain-head" data-reveal>
        <div className="eyebrow">02 — A trilha</div>
        <h2 className="h2">
          Uma cadeia que <span className="grad-text">cresce</span>
        </h2>
        <p className="lead-2">
          A tecnologia não é uma lista de ferramentas soltas — é uma corrente.
          Cada área se apoia na anterior e abre a próxima. Você entra pelo elo
          que faz sentido pra você.
        </p>
      </div>

      <div className="chain" data-reveal>
        <span className="rail" aria-hidden="true" />
        <ol>
          {ELOS.map((elo, i) => (
            <li
              key={elo.n}
              className={elo.on ? "on" : "off"}
              data-reveal
              style={{ ["--d" as string]: `${i * 0.09}s` }}
            >
              <span className="node" aria-hidden="true">{elo.n}</span>
              <article className="card">
                <div className="step">
                  Área {elo.n}
                  {!elo.on && " · em breve"}
                </div>
                <h3>{elo.title}</h3>
                <p>{elo.desc}</p>
                <div className="tags">
                  {elo.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
