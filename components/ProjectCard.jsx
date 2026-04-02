import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ title, description, techs, github, demo }){
    return(
        <div className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition">
            <h3 className="text-zl font-semibold">{title}</h3>

            <p className="text-zinc-400 mt-2">{description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
                {techs.map((tech, i) => (
                    <span key={i} className={`px-2 py-1 rounded text-sm ${techColors[tech] || "bg-zinc-700"}`}>
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
        </div>
    );
}

const techColors = {
    TypeScript: "bg-blue-600",
    JavaScript: "bg-yellow-500 text-black",
    PostgreSQL: "bg-blue-800",
    "Node.js": "bg-green-600",
    PHP: "bg-purple-600",
    React: "bg-cyan-600 text-black",
    HTML: "bg-orange-500 text-black",
    CSS: "bg-blue-500 text-black",
}