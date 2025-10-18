import Navigation from '../views/Navigation';
import Hero from '../views/Hero';
import About from '../views/About';
import Projects from '../views/Projects';
import Contact from '../views/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
