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

/**
 * O pico da névoa.
 *
 * As manchas transbordam MUITO além da seção (ver `.cta-fog` em globals.css:
 * -420px acima, -300px abaixo). É essa sobreposição longa que faz a densidade
 * subir e descer em rampa, sem nenhuma fronteira visível com os Artigos acima
 * e o rodapé abaixo. Nenhum ancestral pode ter overflow:hidden.
 */
/*
 * Posições em px a partir do topo da seção — de propósito, e não em %: com %
 * o valor depende da altura do contêiner, que muda junto com o transbordo, e
 * qualquer ajuste vira tentativa e erro. Em px dá pra garantir que nenhuma
 * mancha comece acima de 0, isto é, que nenhuma delas encoste nos Artigos.
 */
const WISPS = [
  // entram na borda da seção com opacidade zero e crescem pra baixo
  { c: "#F24487", top: "0px", left: "-14%", w: "960px", h: "700px", o: 0.34, dur: "27s", delay: "-6s", dx: "36px", dy: "-24px" },
  { c: "#7B4FD0", top: "0px", left: "44%", w: "1000px", h: "720px", o: 0.36, dur: "23s", delay: "-1s", dx: "-32px", dy: "26px" },
  // o corpo denso
  { c: "#F24487", top: "60px", left: "-18%", w: "1000px", h: "820px", o: 0.5, dur: "22s", delay: "0s", dx: "44px", dy: "-30px" },
  { c: "#7B4FD0", top: "40px", left: "48%", w: "1080px", h: "860px", o: 0.54, dur: "26s", delay: "-5s", dx: "-40px", dy: "28px" },
  { c: "#5341B8", top: "300px", left: "-20%", w: "980px", h: "760px", o: 0.46, dur: "30s", delay: "-9s", dx: "50px", dy: "24px" },
  { c: "#E73982", top: "340px", left: "52%", w: "1000px", h: "760px", o: 0.44, dur: "24s", delay: "-3s", dx: "-46px", dy: "-26px" },
  { c: "#C77DB0", top: "200px", left: "22%", w: "560px", h: "400px", o: 0.28, dur: "19s", delay: "-2s", dx: "30px", dy: "22px" },
  { c: "#A98CE0", top: "80px", left: "40%", w: "580px", h: "440px", o: 0.22, dur: "31s", delay: "-7s", dx: "-28px", dy: "26px" },
  { c: "#F24487", top: "420px", left: "24%", w: "740px", h: "460px", o: 0.3, dur: "28s", delay: "-4s", dx: "34px", dy: "-22px" },
];

export default function Cta() {
  return (
    <section className="section cta" id="contato">
      <div className="cta-fog" aria-hidden="true">
        {WISPS.map((w, i) => (
          <span
            key={i}
            style={
              {
                top: w.top,
                left: w.left,
                width: w.w,
                height: w.h,
                background: `radial-gradient(closest-side, ${w.c}, transparent)`,
                opacity: w.o,
                "--dur": w.dur,
                "--delay": w.delay,
                "--dx": w.dx,
                "--dy": w.dy,
              } as React.CSSProperties
            }
          />
        ))}
        <span className="seat" />
      </div>

      <div data-reveal>
        <h2>
          Bora abrir esse <span className="grad-text">leque</span>?
        </h2>
        <p>
          Escolhe um elo e começa. Os materiais são abertos, e o caminho continua
          crescendo junto com quem percorre.
        </p>
        <div className="actions">
          <a className="btn btn-primary" href="#trilha">
            Começar pelos fundamentos <Arrow />
          </a>
          <a className="btn btn-ghost" href="mailto:nicolyejady@gmail.com">
            Falar com a NickDev
          </a>
        </div>
      </div>
    </section>
  );
}
