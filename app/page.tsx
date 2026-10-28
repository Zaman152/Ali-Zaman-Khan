import Nav from "./components/Nav";
import StarField from "./components/StarField";
import Hero from "./components/Hero";
import DotMatrix from "./components/DotMatrix";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import BotReveal from "./components/BotReveal";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <StarField count={50} />
      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <DotMatrix />
        <Services />
        <DotMatrix />
        <Projects />
        <DotMatrix />
        <About />
        <TechStack />
        <Contact />
        <BotReveal />
      </main>
      <Footer />
    </>
  );
}
