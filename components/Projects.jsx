import ProjectCard from '../components/ProjectCard';

export default function Projects(){
    return(
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
    )
}