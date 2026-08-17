// Artigos — conteúdo PLACEHOLDER. Substitua títulos, resumos, datas, tags e os
// href pelos artigos reais (ou ligue a um CMS / arquivos MDX depois).
const posts = [
  {
    tag: "Frontend",
    title: "Como a web funciona, do jeito que eu queria ter aprendido",
    excerpt:
      "Do endereço que você digita ao pixel na tela — uma volta sem jargão pra entender o que acontece por baixo.",
    date: "Em breve",
    href: "#",
  },
  {
    tag: "Dados",
    title: "Ciência de dados sem mistério: o primeiro passo",
    excerpt:
      "O mínimo que você precisa pra sair do zero e fazer uma primeira análise que faz sentido.",
    date: "Em breve",
    href: "#",
  },
  {
    tag: "Educação",
    title: "Ensinar programação pra quem começa do zero",
    excerpt:
      "O que funciona (e o que atrapalha) quando a sala é de transição de carreira.",
    date: "Em breve",
    href: "#",
  },
];

export default function Articles() {
  return (
    <section className="section" id="artigos">
      <div data-reveal>
        <div className="eyebrow">04 — Escrita</div>
        <h2 className="h2">
          Últimos <span className="grad-text">artigos</span>
        </h2>
        <p className="lead-2">
          Textos sem pressa sobre desenvolvimento, dados e educação em tecnologia
          — pra desdobrar ideias complexas uma lâmina de cada vez.
        </p>
      </div>

      <div className="articles">
        {posts.map((post, i) => (
          <a
            className="article"
            key={post.title}
            href={post.href}
            data-reveal
            style={{ ["--d" as string]: `${i * 0.08}s` }}
          >
            <span className="tag">{post.tag}</span>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className="date">{post.date}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
