import { motion } from "framer-motion";

export default function Experience() {
    return (
        <section id="experience" className="max-w-5xl mx-auto px-6 py-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-zinc-800 border border-zinc-700 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-5">Professional Experience</h2>

                <p className="text-zinc-400 leading-relaxed">I am currently seeking my first professional opportunity in software development, particularly in backend engineering. Through academic and personal projects, I have gained practical experience building APIs, working with relational databases, and collaborating on software projects.</p>
            </motion.div>
        </section>
    );
}