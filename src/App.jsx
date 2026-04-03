import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function App() {
  return(
    <div className="bg-zinc-900 text-white min-h-screen">
      <section className="flex items-center justify-center h-screen text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
          <h1 className="text-5xl font-bold">Pedro Rodrigues</h1>
          <p className="text-zinc-400 mt-3 text-lg">Backend Developer • Node.js • PostgreSQL</p>
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className="mt-4 flex items-center justify-center gap-6">
            <div className="mt-6 flex justify-center gap-4">
              <a href="https://github.com/pedroprdgs" target="_blank" className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:scale-105 transition"><FaGithub/>Github</a>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <a href="https://www.linkedin.com/in/pedro-pereira-aa7001274/" target="_blank" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:scale-105 transition"><FaLinkedin/>Linkedin</a>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className='text-3xl font-bold mb-8'>Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="TRex Discord Bot"
            description="XP system with ranking, data persistence in PostgreSQL and activity-based programming logic"
            techs={["TypeScript", "PostgreSQL", "Discord.js"]}
            github="https://github.com/pedroprdgs/trex-discordbot"
          />
          <ProjectCard
            title="CRUD World"
            description="A CRUD aplication focusing in geographic data management, including integration with REST Countries and OpenWeatherMap APIs."
            techs={["HTML", "PHP", "CSS", "TypeScript", "PostgreSQL"]}
            github="https://github.com/pedroprdgs/CRUD-World"
            demo="https://crudworld.up.railway.app/"
          />
        </div>
      </section>
    </div>
  );
}