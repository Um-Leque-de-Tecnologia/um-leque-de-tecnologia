/**
 * Logo oficial (public/logo-nickdeve.svg).
 *
 * O arquivo é um lockup completo — símbolo + wordmark "NickDev" + tagline —
 * num viewBox 1080x1350 com bastante margem vazia em volta. Em vez de manter
 * dois SVGs, recortamos por CSS a partir das coordenadas reais do desenho
 * (as classes .mark e .lockup em globals.css fazem a conta).
 *
 * `variant="mark"`   → só o leque. Usar em navbar e rodapé: nesses tamanhos o
 *                      wordmark vetorizado fica ilegível, então o nome vai ao
 *                      lado em Space Grotesk.
 * `variant="lockup"` → o conjunto inteiro. Usar no hero.
 */
type Props = {
  variant?: "mark" | "lockup";
  /** largura em px do recorte */
  width: number;
  className?: string;
};

export default function Logo({ variant = "mark", width, className }: Props) {
  const base = variant === "lockup" ? "lockup" : "mark";
  const classes = [base, className].filter(Boolean).join(" ");

  return (
    <span className={classes} style={{ ["--w" as string]: `${width}px` }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-nickdeve.svg" alt="" aria-hidden="true" />
    </span>
  );
}
