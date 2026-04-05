import About from '../components/About';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Stack from '../components/Stack';
import Contact from '../components/Contact';

export default function App() {
  return(
    <div className="bg-zinc-900 text-white min-h-screen">
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </div>
  );
}