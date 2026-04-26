import { motion } from "framer-motion"

export default function About(){
    return(
        <section className="w-full mb-50 py-20 px-6 flex justify-center">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="max-w-3xl text-center">
                <motion.h2 initial={{ y: 80 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="text-4xl font-bold mb-6">About me</motion.h2>
                <motion.h3 initial={{ y: 80 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="text-4xl font-bold mb-2">Pedro Pereira Rodrigues</motion.h3>
                <motion.p initial={{ y: 80 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="text-2xl text-gray-500 font-bold mb-6">Backend Developer</motion.p>

                <motion.div initial={{ y: 60 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="space-y-6 text-gray-400 leading-relaxed">
                    <motion.p initial={{ y: 80 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
                        I'm a <span className="text-white font-semibold">backend</span> developer focused on <span className="text-white font-medium">TypeScript</span>, with an interest in building APIs and scalable systems.
                    </motion.p>
                    <motion.p initial={{ y: 80 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
                        I graduated in System Development at <a href="https://www.etecsjcampos.com.br/" target="_blank" className="text-white font-medium text-lg hover:text-zinc-300">ETEC</a>
                        {" "}and I'm currently coursing Cross-platform Software Development at{" "}
                        <a href="https://fatecsjc-prd.azurewebsites.net/" target="_blank" className="text-white font-medium text-lg hover:text-zinc-300">FATEC</a>.
                    </motion.p>
                    <motion.p initial={{ y: 80 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
                        I enjoy solving problems in a practical way and I'm always looking to improve my skills in development and in the english language.
                    </motion.p>
                    <motion.p initial={{ y: 80 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
                        I'm actually searching for a first job opportunity in the area, so I can start my career and gain experience in the field.
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    )
}