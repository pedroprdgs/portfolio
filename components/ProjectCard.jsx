import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, techs, github, demo }){
    return(
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700 hover:border-zinc-500 justify-between flex flex-col"
        >
            <h3 className="text-zl font-semibold">{title}</h3>

            <p className="text-zinc-400 mt-2">{description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
                {techs.map((tech, i) => (
                    <span key={i} className={`px-2 py-1 rounded text-sm font-medium ${techColors[tech] || "bg-zinc-700"}`}>
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex gap-6 mt-4">
                {github && (
                    <a href={github} target="_blank" className="flex items-center gap-2 text-sm hover:underline">
                        <FaGithub size={22}/>
                    </a>
                )}

                {demo && (
                    <a href={demo} target="_blank" className="flex items-center gap-2 text-sm hover:underline">
                        <FaExternalLinkAlt size={22}/>
                    </a>
                )}
            </div>
        </motion.div>
    );
}

const techColors = {
    TypeScript: "bg-blue-600",
    JavaScript: "bg-yellow-400 text-black",
    PostgreSQL: "bg-blue-900",
    "Node.js": "bg-green-600",
    Python: "bg-yellow-500",
    PHP: "bg-purple-600",
    React: "bg-cyan-600",
    HTML: "bg-orange-500",
    CSS: "bg-blue-500",
    MySQL: "bg-blue-800",
    Docker: "bg-blue-700",
    Godot: "bg-blue-400",
}