import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="flex justify-center items-center h-screen">
        <Hero />
      </main>
    </>
  );
}
