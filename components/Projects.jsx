import ProjectCard from '../components/ProjectCard';

export default function Projects(){
    return(
        <section className="max-w-7xl mx-auto px-6 pb-16">
            <h2 className='text-3xl font-bold mb-8'>Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
                <ProjectCard
                    title="TRex Discord Bot"
                    description="XP system with ranking, data persistence in PostgreSQL and activity-based programming logic"
                    techs={["TypeScript", "PostgreSQL", "Discord.js"]}
                    github="https://github.com/pedroprdgs/trex-discordbot"
                />
                <ProjectCard
                    title="CRUD World"
                    description="A CRUD aplication focusing in geographic data management, including integration with REST Countries and OpenWeatherMap APIs"
                    techs={["HTML", "PHP", "CSS", "React", "TypeScript", "PostgreSQL"]}
                    github="https://github.com/pedroprdgs/CRUD-World"
                    demo="https://crudworld.up.railway.app/"
                />
                <ProjectCard
                    title="Red Inquiry"
                    description="A Game I made as my capstone project in high school, developed in godot aiming to help exercising teens and young adults' brains"
                    techs={["Godot"]}
                    github="https://github.com/TCCRedInquiryEtec2025/Red-Inquiry"
                    demo="https://pauloonada.itch.io/red-inquiry"
                />
                <ProjectCard
                    title="Radar Cidadão"
                    description="A live application integrated with the API of the deputy chamber of Brazil, providing information about the deputies and their activities"
                    techs={["Python", "HTML", "CSS", "MySQL"]}
                    github="https://github.com/NoClip-API/radar-cidadao"
                />
                <ProjectCard 
                    title="YouFoodie"
                    description="A web application focused on integrating database with python, using flask and MySQL "
                    techs={["Python", "HTML", "CSS", "JavaScript", "Docker", "MySQL"]}
                    github="https://github.com/pedroprdgs/YouFoodie"
                />
            </div>
        </section>
    )
}