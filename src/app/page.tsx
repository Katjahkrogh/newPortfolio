import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <Projects />
      </main>
    </>
  );
}
