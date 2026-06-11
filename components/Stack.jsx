import { motion } from "framer-motion"
import { FaNodeJs, FaPython, FaDocker, FaLinux, FaGitAlt, FaGithubAlt } from "react-icons/fa"
import { SiTypescript, SiPostgresql, SiFlask, SiPhp, SiDocker } from "react-icons/si"
import { GrMysql } from "react-icons/gr"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            sttagerChildren: 0.15
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
}

export default function Stack(){
    return(
        <section className="w-full py-24 px-6 flex justify-center">
            <div className="max-w-5xl w-full">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">My Stack</h2>

                <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
                    <motion.div variants={item} className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 hover:scale-[1.03] hover:border-zinc-600 duration-300 shadow-lg">
                        <h3 className="text-xl font-semibold mb-6 text-white">Backend</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-2">
                                <FaNodeJs className="text-green-500" /> Node.js
                            </li>
                            <li className="flex items-center gap-2">
                                <SiTypescript className="text-blue-500" /> TypeScript
                            </li>
                            <li className="flex items-center gap-2">
                                <SiPhp className="text-indigo-400" /> PHP
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPython className="text-yellow-400" /> Python
                            </li>
                            <li className="flex items-center gap-2">
                                <SiFlask className="text-gray-300" /> Flask
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div variants={item} className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 hover:scale-[1.03] hover:border-zinc-600 duration-300 shadow-lg">
                        <h3 className="text-xl font-semibold mb-6 text-white">Database</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-2">
                                <SiPostgresql className="text-blue-400" /> PostgreSQL
                            </li>
                            <li className="flex items-center gap-2">
                                <GrMysql className="text-blue-300" /> MySQL
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div variants={item} className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 hover:scale-[1.03] hover:border-zinc-600 duration-300 shadow-lg">
                        <h3 className="text-xl font-semibold mb-6 text-white">Tools</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-2">
                                <FaGitAlt className="text-orange-500" /> Git
                            </li>
                            <li className="flex items-center gap-2">
                                <FaDocker className="text-blue-400" /> Docker
                            </li>
                            <li className="flex items-center gap-2">
                                <FaLinux className="text-white" /> Linux
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}