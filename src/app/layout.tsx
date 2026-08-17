import type { Metadata } from "next";
import Fog from "@/components/fog";
import Reveal from "@/components/reveal";
import "./globals.css";

export const metadata: Metadata = {
  title: "Um leque de tecnologia",
  description:
    "Site pessoal do NickDev: artigos, materiais de aula e experimentos sobre desenvolvimento, dados e educação em tecnologia.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Um leque de tecnologia",
    description:
      "Artigos, materiais de aula e experimentos sobre desenvolvimento, dados e educação em tecnologia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* suppressHydrationWarning: o script abaixo altera a className do <html>
       antes da hidratação, então servidor e cliente divergem de propósito. */
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Marca que há JS ANTES da primeira pintura. As entradas em fade só
            escondem conteúdo sob .has-js — sem isso, JS bloqueado deixaria a
            página em branco. Precisa ser inline e bloqueante: um efeito depois
            da hidratação causaria um flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('has-js')`,
          }}
        />
      </head>
      <body>
        {/* Uma camada de névoa pra página inteira — nunca uma por seção. */}
        <Fog />
        {children}
        <Reveal />
      </body>
    </html>
  );
}
