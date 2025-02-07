import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/guillaumeProfile.jpg'
import { motion} from 'framer-motion'

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-500 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                    >
                      Guillaume Ozoux
                    </motion.h1>
                    <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-4xl tracking-tight text-transparent"
                    >
                      Recherche Alternance en infrastructure système et réseau
                    </motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my- max-w-xl py-6 font-light tracking-tighter"
                    >
                      <p className="mb-4 text-neutral-200 text-2xl">{HERO_CONTENT}</p>
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center items-center">
                    <motion.img 
                    initial={{x: 100, opacity: 0}} 
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, delay: 1.2}}
                    className="rounded" src={profilePic} alt="profile" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero