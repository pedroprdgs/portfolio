import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import myPicture from '../src/assets/profile.jpg'

export default function Hero(){
    return(
        <section className="flex items-center justify-center h-screen text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
                <motion.img className="h-82 w-82 justify-self-center mb-8 rounded-full border-10 border-b-teal-900 border-neutral-700" initial={{ y: -200 }} animate={{ y: 0 }} transition={{ duration: 1.5 }} src={myPicture} alt="A photo of me 🎭" />
                <h1 className="text-5xl font-bold">Pedro Rodrigues</h1>
                <p className="text-zinc-400 mt-3 text-lg">TypeScript • Node.js • React • PostgreSQL</p>
                <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className="mt-4 flex items-center justify-center gap-6">
                    <div className="mt-6 flex justify-center gap-4">
                      <a href="https://github.com/pedroprdgs" target="_blank" className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:scale-105 transition"><FaGithub/>Github</a>
                    </div>
                    <div className="mt-6 flex justify-center gap-4">
                      <a href="https://www.linkedin.com/in/pedro-pereira-aa7001274/" target="_blank" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:scale-105 transition"><FaLinkedin/>Linkedin</a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}