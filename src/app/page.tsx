import About from '@/components/About';
import Hero from '@/components/Hero';
import { ScrollProgress } from '@/components/magicui/scroll-progress';
import NavBar from '@/components/NavBar';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
        <ScrollProgress className="top-[72px]"/>
      </header>
      <main>
        <Hero />
        <section className="grid px-44 py-16 gap-16">
          <About />
          <Projects />
        </section>
      </main>
    </>
  );
}
