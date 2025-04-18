import About from '@/components/About';
import Hero from '@/components/Hero';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ScrollProgress } from '@/components/magicui/scroll-progress';
import NavBar from '@/components/NavBar';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
        <ScrollProgress className="top-[72px]" />
      </header>
      <main>
        <Hero />
        <section className="grid px-4 py-8 sm:px-16 gap-12 sm:py-12 lg:px-24 lg:gap-20 lg:py-20 xl:px-36 xl:py-28 xl:gap-28">
          <About />
          <Projects />
        </section>
      </main>
    </>
  );
}
