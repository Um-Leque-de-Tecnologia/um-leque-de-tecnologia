/**
 * Névoa da marca.
 *
 * UMA camada só, atrás da página inteira. Não fazer uma névoa por seção: cada
 * camada precisaria apagar nas pontas pra não cortar reto, e a soma dessas
 * emendas vira uma faixa escura em cada divisa — o oposto de fluidez.
 *
 * Cada mancha é um radial-gradient, não um elemento com filter:blur(). O
 * resultado visual é o mesmo e evita rasterizar dezenas de camadas borradas a
 * cada quadro. A deriva anima só `transform`, então roda no compositor.
 *
 * Os tempos de deriva são primos entre si de propósito — se fossem múltiplos,
 * as manchas sincronizariam e a fumaça passaria a repetir um desenho.
 */

type Wisp = {
  color: string;
  /** posição e tamanho em % da altura do documento */
  top: string;
  left: string;
  w: string;
  h: string;
  opacity: number;
  dur: string;
  delay: string;
  dx: string;
  dy: string;
};

const WISPS: Wisp[] = [
  // hero
  { color: "#F24487", top: "-2%", left: "58%", w: "820px", h: "740px", opacity: 0.17, dur: "22s", delay: "0s", dx: "-40px", dy: "30px" },
  { color: "#7B4FD0", top: "4%", left: "-16%", w: "780px", h: "740px", opacity: 0.24, dur: "27s", delay: "-4s", dx: "50px", dy: "-26px" },
  { color: "#F24487", top: "3%", left: "56%", w: "520px", h: "480px", opacity: 0.2, dur: "19s", delay: "-2s", dx: "26px", dy: "22px" },
  // sobre
  { color: "#7B4FD0", top: "16%", left: "-8%", w: "700px", h: "680px", opacity: 0.2, dur: "31s", delay: "-6s", dx: "44px", dy: "28px" },
  { color: "#F24487", top: "19%", left: "62%", w: "720px", h: "700px", opacity: 0.15, dur: "24s", delay: "-1s", dx: "-36px", dy: "-30px" },
  // trilha
  { color: "#7B4FD0", top: "34%", left: "12%", w: "1040px", h: "1000px", opacity: 0.13, dur: "35s", delay: "-9s", dx: "-30px", dy: "34px" },
  { color: "#F24487", top: "38%", left: "-14%", w: "700px", h: "760px", opacity: 0.16, dur: "21s", delay: "-3s", dx: "48px", dy: "-24px" },
  { color: "#E73982", top: "46%", left: "66%", w: "720px", h: "740px", opacity: 0.14, dur: "26s", delay: "-7s", dx: "-42px", dy: "26px" },
  // cursos
  { color: "#F24487", top: "58%", left: "58%", w: "760px", h: "680px", opacity: 0.17, dur: "23s", delay: "-5s", dx: "-38px", dy: "30px" },
  { color: "#7B4FD0", top: "64%", left: "-16%", w: "740px", h: "680px", opacity: 0.16, dur: "29s", delay: "-2s", dx: "46px", dy: "-28px" },
  // artigos — mais fraco que as outras seções e concentrado na metade de cima,
  // pra o fim da seção chegar escuro na divisa com o CTA
  { color: "#7B4FD0", top: "71%", left: "-20%", w: "700px", h: "520px", opacity: 0.09, dur: "25s", delay: "-8s", dx: "44px", dy: "30px" },
  { color: "#F24487", top: "73%", left: "64%", w: "700px", h: "540px", opacity: 0.1, dur: "33s", delay: "-4s", dx: "-40px", dy: "-26px" },
];

export default function Fog() {
  return (
    <div className="fog" aria-hidden="true">
      {WISPS.map((w, i) => (
        <span
          key={i}
          style={
            {
              top: w.top,
              left: w.left,
              width: w.w,
              height: w.h,
              background: `radial-gradient(closest-side, ${w.color}, transparent)`,
              opacity: w.opacity,
              "--dur": w.dur,
              "--delay": w.delay,
              "--dx": w.dx,
              "--dy": w.dy,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
