import Logo from "@/components/logo";

const AULAS = "https://aulas.umlequedetecnologia.com.br";

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="NickDev — início">
        <Logo variant="mark" width={52} />
        <span className="word">NickDev</span>
      </a>

      <nav className="nav" aria-label="Principal">
        <a className="link-underline" href="#sobre">Sobre</a>
        <a className="link-underline" href="#areas">Cursos</a>
        <a className="link-underline" href="#artigos">Artigos</a>
        <a className="link-underline" href="#contato">Contato</a>
        <a className="btn btn-primary btn-sm" href={AULAS} target="_blank" rel="noreferrer">
          Ver as aulas ↗
        </a>
      </nav>
    </header>
  );
}
