import { HERO_LOGO_SVG } from "@/components/hero-logo-svg";

/**
 * Logo do hero, animada.
 *
 * Aqui o SVG entra INLINE, e não como <img>, porque cada lâmina do leque é um
 * <g class="fanblade"> com seu próprio ângulo em --r. Dentro de um <img> o
 * conteúdo do SVG fica inacessível ao CSS da página e nada disso anima — foi o
 * que aconteceu quando este componente foi removido.
 *
 * O recorte da moldura é o mesmo do componente Logo (classe .lockup): o arquivo
 * tem margem vazia em volta do desenho, então mostramos só a área de tinta.
 */
export default function HeroLogo() {
  return (
    <span
      className="lockup"
      style={{ ["--w" as string]: "500px" }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: HERO_LOGO_SVG }}
    />
  );
}
