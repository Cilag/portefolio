import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion} from 'framer-motion'

const About = () => {
  return (
    <div className="border-b border-neutral-500 pb-4">
        <h1 className="my-20 text-center text-4xl">Un peu plus sur
        <span className="text-neutral-500"> Moi</span>
        </h1>
        <div className="flex flex-wrap">
            <motion.div
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 lg:p-8 ">
                <div className="flex items-cente justify-center">
                  <img className="mb-6 rounded" src={aboutImg} alt="about" />
                </div>
            </motion.div>
            <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6 text-2xl ">{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About