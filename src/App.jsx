import About from '../components/About';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

export default function App() {
  return(
    <div className="bg-zinc-900 text-white min-h-screen">
      <Hero />
      <About />
      <Projects />
    </div>
  );
}