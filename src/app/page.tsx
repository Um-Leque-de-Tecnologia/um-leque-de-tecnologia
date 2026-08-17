import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import About from "@/components/about";
import Chain from "@/components/chain";
import Areas from "@/components/areas";
import Articles from "@/components/articles";
import Cta from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Chain />
        <Areas />
        <Articles />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
