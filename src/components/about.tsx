export default function About() {
  return (
    <section className="section about" id="sobre">
      <div className="photo-wrap" data-reveal>
        <div className="photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/nicoly-almeida.jpeg" alt="Nicoly Almeida — NickDev" />
        </div>
        <span className="badge">
          <i />
          GDG João Pessoa · Mulher Tech Sim Senhor
        </span>
      </div>

      <div data-reveal style={{ ["--d" as string]: "0.12s" }}>
        <div className="eyebrow">01 — Sobre</div>
        <h2 className="h2">
          Hey, eu sou a <span className="grad-text">NickDev</span>
        </h2>

        <p className="bio">
          Minha jornada na tecnologia começou aos 14 anos, quando me apaixonei
          por programação e dados. Desde então, transformei a curiosidade em uma
          carreira construída entre engenharia de software, experiência do
          usuário e educação.
        </p>
        <p className="bio">
          Atuei em empresas como PicPay, Serasa Experian e Santander,
          desenvolvendo soluções para os setores financeiro, imobiliário e de
          tecnologia — aplicações web de grande escala e experiências digitais
          para milhões de usuários.
        </p>
        <p className="bio">
          Hoje sigo estudando e compartilhando: mestranda em Tecnologia da
          Informação, professora de pós-graduação, palestrante, organizadora do
          GDG João Pessoa e vice-presidente do Mulher Tech Sim Senhor.
        </p>
      </div>
    </section>
  );
}
