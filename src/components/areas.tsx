const AULAS = "https://aulas.umlequedetecnologia.com.br";

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 8h9M8.5 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AREAS = [
  ["Frontend", "Interfaces, acessibilidade e performance no navegador."],
  ["Backend & APIs", "Servidores, bancos de dados e integração entre sistemas."],
  ["Mobile", "Aplicativos nativos e multiplataforma, da ideia à loja."],
  ["Dados", "Coleta, modelagem, análise e visualização de dados."],
  ["IA aplicada", "Modelos, agentes e automação — com avaliação de resultado."],
  ["Cloud & DevOps", "Deploy, integração contínua e infraestrutura que aguenta."],
  ["UX & Produto", "Pesquisa, design de interface e decisão junto do usuário."],
  ["Carreira & Comunidade", "Transição, portfólio, entrevistas e networking em tech."],
];

export default function Areas() {
  return (
    <section className="section" id="areas">
      <div data-reveal>
        <div className="eyebrow">03 — Cursos &amp; materiais</div>
        <h2 className="h2">
          O que nós <span className="grad-text">ensinamos</span>
        </h2>
        <p className="lead-2">
          Material aberto espalhado por várias frentes da tecnologia — slides,
          guias e projetos pra aprender fazendo. Escolha a área que te chama e
          comece por ali.
        </p>
      </div>

      <div className="areas">
        {AREAS.map(([name, desc], i) => (
          <article
            className="area"
            key={name}
            data-reveal
            style={{ ["--d" as string]: `${(i % 4) * 0.07}s` }}
          >
            <span className="blade" aria-hidden="true" />
            <h3>{name}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>

      <div className="areas-cta" data-reveal>
        <a className="btn btn-primary" href={AULAS} target="_blank" rel="noreferrer">
          Ver todos os cursos <Arrow />
        </a>
      </div>
    </section>
  );
}
