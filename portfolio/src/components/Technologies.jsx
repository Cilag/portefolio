import { SiMariadb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiVagrant } from "react-icons/si";
import { SiVmware } from "react-icons/si";
import { TbBrandAnsible } from "react-icons/tb";
import { SiVirtualbox } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiWindows } from "react-icons/di";
import { DiLinux } from "react-icons/di";
import { motion} from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -7},
    animate: {
      y: [7, -7],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
});

const Technologies = () => {
  return (
    <div>
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <motion.div
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-4">
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMariadb className="text-9xl text-cyan-600" />
            </motion.div>
            <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandAnsible className="text-9xl text-neutral-100" />
            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaDocker className="text-9xl text-blue-600" />
            </motion.div>
            <motion.div
            variants={iconVariants(8)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiVmware className="text-9xl text-neutral-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiVagrant className="text-9xl text-blue-600" />
            </motion.div> 
            <motion.div
            variants={iconVariants(7)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiVirtualbox className="text-9xl text-slate-600" />
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-9xl text-teal-700" />
            </motion.div>
            <motion.div
            variants={iconVariants(9)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiWindows className="text-9xl text-sky-600" />
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiLinux className="text-9xl text-neutral-100" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies