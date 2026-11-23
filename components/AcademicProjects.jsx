import { motion } from "framer-motion"
import Detail from "./Detail";
import Skills from "./Skills";

export default function AcademicProjects({ projects = [] }) {
    return(
        <section id="academic-projects" className="max-w-5xl mx-auto px-6 pb-16">
            <h2 className='text-3xl font-bold mb-4'>Academic Projects (API)</h2>
            <p className="text-zinc-400 mb-10">Projects developed throughout my Cross-platform Software Development degree.</p>
            <div className="space-y-8">
                {projects.map((project) => (
                    <motion.article 
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity:1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-800 border border-zinc-700 rounded-2xl p-8"
                    >
                        <span className="text-blue-400 text-sm">{project.semester}</span>
                        <h3 className="text-2xl font-bold mt-2 mb-4">{project.name}</h3>
                        <p className="text-zinc-400 mb-6">Partner: {project.partner}</p>

                        <div className="space-y-5">
                            <Detail title="Problem" value={project.problem} />
                            <Detail title="Solution" value={project.solution} />
                            <Detail title="My Contributions" value={project.contributions} />
                        </div>

                        <div className="mt-6">
                            <h4 className="font-semibold mb-3">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="bg-zinc-700 px-3 py-1 rounded-lg text-sm">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <Skills title="Hard Skills" skills={project.hardSkills} />
                        <Skills title="Soft Skills" skills={project.softSkills} />

                        <div className="flex flex-wrap gap-5 mt-8">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Github Repository</a>

                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Live Demo</a>
                            )}
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}