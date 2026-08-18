import HeroLogo from "@/components/hero-logo";

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

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div data-reveal>
        {/* A tagline da logo já diz "um leque de tecnologia", então esta pílula
            traz outra informação pra não repetir o mesmo texto duas vezes na
            mesma tela. */}
        <span className="pill">
          <i />
          Artigos · Aulas · Experimentos
        </span>

        <h1>
          Tecnologia aberta em <span className="grad-text">leque</span>
          <br />
          <span className="serif">Para aprender, ensinar e criar</span>
        </h1>

        <p className="lead">
          Artigos, materiais de aula e experimentos sobre desenvolvimento, dados
          e educação em tecnologia. Um espaço para desdobrar ideias complexas —
          uma lâmina de cada vez.
        </p>

        <div className="actions">
          <a className="btn btn-primary" href="#areas">
            Explorar os cursos <Arrow />
          </a>
          <a className="btn btn-ghost" href="#artigos">
            Ler os artigos
          </a>
        </div>

        <div className="stats">
          <div>
            <div className="num" data-count="1000" data-count-prefix="+">+1000</div>
            <div className="label">alunos vivendo a TI</div>
          </div>
          <div>
            <div className="num" data-count="7">7</div>
            <div className="label">anos de experiência</div>
          </div>
          <div>
            <div className="num" data-count="4">4</div>
            <div className="label">anos ensinando</div>
          </div>
        </div>
      </div>

      <div className="hero-art" aria-hidden="true">
        <span className="halo" />
        <HeroLogo />
      </div>
    </section>
  );
}
