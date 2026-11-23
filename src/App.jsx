import About from '../components/About';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Stack from '../components/Stack';
import Contact from '../components/Contact';
import Curriculum from '../components/Curriculum';
import Experience from '../components/Experience';
import Education from '../components/Education';
import AcademicProjects from '../components/AcademicProjects';
import { academicProjects } from './data/academicProjects';

export default function App() {
  return(
    <div className="bg-zinc-900 text-white min-h-screen">
      <Hero />
      <About />
      <AcademicProjects projects={academicProjects} />
      <Experience />
      <Projects />
      <Stack />
      <Education />
      <Curriculum />
      <Contact />
    </div>
  );
}