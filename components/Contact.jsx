import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        tansition: {
            staggerChildren: 0.15
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

export default function Contact(){
    return(
        <section className="w-full py-24 px-6 flex justify-center">
            <div className="max-w-xl w-full text-center">
                <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold mb-6">Contact</motion.h2>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="text-gray-400 mb-10">
                    Feel free to reach out for opportunities or just to talk.
                </motion.p>
                <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col gap-4">
                    <motion.a variants={item} href="mailto:pedropereirarodrigues16@gmail.com" className="flex items-center justify-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 px-6 py-3 rounded-xl duration-300 hover:scale-[1.03] hover:shadow-lg">
                        <FaEnvelope /><span>Email</span>
                    </motion.a>
                    <motion.a variants={item} href="https:github.com/pedroprdgs" target="_blank" className="flex items-center justify-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 px-6 py-3 rounded-xl duration-300 hover:scale-[1.03] hover:shadow-lg">
                        <FaGithub /><span>Github</span>
                    </motion.a>
                    <motion.a variants={item} href="https://linkedin.com/in/pedro-rodrigues-aa7001274/" target="_blank" className="flex items-center justify-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 px-6 py-3 rounded-xl duration-300 hover:scale-[1.03] hover:shadow-lg">
                        <FaLinkedin /><span>Linkedin</span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}