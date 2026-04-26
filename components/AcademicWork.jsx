export default function AcademicWork(){
    return(
        <section className="max-w-5xl mx-auto px-6 pb-16">
            <h2 className='text-3xl font-bold mb-8'>Academic Work</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700 hover:border-zinc-500">
                    <h3 className="text-xl font-semibold mb-4">Final Paper - ETEC</h3>
                    <p className="text-gray-400 mb-4">
                        "Development of a CRUD application for geographic data management, integrating REST Countries and OpenWeatherMap APIs."
                    </p>
                    <a href="https://drive.google.com/file/d/1FQ3YSfx0AGEC9C6YvH6GjHNHGjdPFrva/view?usp=sharing" target="_blank" className="text-white font-medium hover:text-zinc-300">
                        View Paper
                    </a>
                </div>
            </div>
        </section>
    )
}