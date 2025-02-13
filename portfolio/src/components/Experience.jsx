import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'
import cheops from '../assets/cheopsimg.png'

const Experience = () => {
  return (
    <div className="border-b border-neutral-500 pb-4 lg:mb-35">
        <motion.h1
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl">Experience</motion.h1>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mr-10 flex flex-wrap lg:justify-center">
                    <motion.div
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-1/10 justify-end">
                        <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                    </motion.div>
                    <motion.div
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, delay: 1.2}}
                    className="w-full lg:w-1/4">
                        <div className="flex-wrap items-center justify-center mr-20 mt-10">
                            <img className="" src={cheops} alt="about" />
                        </div>
                    </motion.div>
                    <motion.div
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">
                            {experience.role} -{' '}
                            <span className="txt-sm ">{experience.company}</span>
                        </h6>
                        <p className="mb-4 text-neutral-400">{experience.description}</p>
                        {experience.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium"
                            >
                              {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience
