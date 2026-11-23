import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaCode } from "react-icons/fa";
import activities from "../src/data/activities";
import certifications from "../src/data/certifications";
import education from "../src/data/education";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
};

export default function Education() {
    return (
        <section id="education" className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold mb-4">Education & Certifications</h2>

            <p className="text-zinc-400 mb-10">My academic backgroun, technical training and participation in programming events.</p>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
                {/* Education */}
                <motion.div variants={item} className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 hover:border-zinc-500 duration-300">
                    <h3 className="flex items-center gap-3 text-xl font-semibold mb-6"><FaGraduationCap className="text-blue-400" />Academic Background</h3>

                    <div className="space-y-6">
                        {education.map((entry) => (
                            <div key={entry.title}>
                                <h4 className="font-semibold">{entry.title}</h4>
                                <p className="text-zinc-400">{entry.institution}</p>
                                <p className="text-sm text-zinc-500 mt-1">{entry.detail}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Academic Activities */}
                <motion.div variants={item} className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 hover:border-zinc-500 duration-300">
                    <h3 className="flex items-center gap-3 text-xl font-semibold mb-6"><FaCode className="text-blue-400" />Academic Activities</h3>

                    <div className="space-y-6">
                        {activities.map((activity) => (
                            <div key={activity.title}>
                                <h4 className="font-semibold">{activity.title}</h4>
                                <p className="text-zinc-500 text-sm mt-1">{activity.institution}</p>
                                <p className="text-zinc-400 mt-3 leading-relaxed">{activity.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Certifications */}
                <motion.div variants={item} className="md:col-span-2 bg-zinc-800 border border-zinc-700 rounded-2xl p-6 hover:border-zinc-500 duration-300">
                    <h3 className="flex items-center gap-3 text-xl font-semibold mb-6"><FaCertificate className="text-blue-400" />Technical Certificates</h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {certifications.map((certificate) => (
                            <div key={certificate.title} className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 hover:border-zinc-500 duration-300">
                                <h4 className="font-semibold">{certificate.title}</h4>
                                <p className="text-sm text-blue-400 mt-1">{certificate.institution}</p>
                                <p className="text-zinc-400 text-sm mt-3 leading-relaxed">{certificate.description}</p>

                                {certificate.url && (
                                    <a
                                        href={certificate.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-blue-400 text-sm mt-4 hover:underline"
                                    >
                                        View Certificate
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}