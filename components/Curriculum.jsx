import { motion } from "framer-motion";

export default function Curriculum(){
    return(
        <section className="w-full h-auto py-20">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="max-w-3xl text-center mx-auto py-20 px-6">
                <motion.h2 initial={{ y: 80 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="text-4xl font-bold mb-6">Curriculum</motion.h2>
                <motion.p initial={{ y: 80 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="text-2xl text-gray-500 font-bold mb-6">
                    You can{" "}
                    <a href="src/assets/files/curriculumPedroPereiraEnglish.pdf" download="CurriculumPedroRodrigues.pdf" className="text-white font-medium hover:text-zinc-300">
                        download
                    </a> my curriculum (in english) or check it{" "}
                    <a href="https://drive.google.com/drive/folders/1cEKHcHR0b2crsAw1GznAmtk64pGncHLl?usp=sharing" target="_blank" className="text-white font-medium hover:text-zinc-300">
                        here
                    </a>, both in{" "}
                    <a href="https://drive.google.com/file/d/16uaClrLO4_pgTa_V1iAeI9GcoZdESp2m/view?usp=sharing" target="_blank" className="text-white font-medium hover:text-zinc-300">
                        portuguese
                    </a> and in{" "}
                    <a href="https://drive.google.com/file/d/1FQ3YSfx0AGEC9C6YvH6GjHNHGjdPFrva/view?usp=sharing" target="_blank" className="text-white font-medium hover:text-zinc-300">
                        english
                    </a>.
                </motion.p>
            </motion.div>
        </section>
    )
}