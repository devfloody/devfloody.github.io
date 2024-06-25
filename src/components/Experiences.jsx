import { motion } from 'framer-motion'
import React from 'react'
import { EXPERIENCES } from '../constants'

const Experiences = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2 whileInView={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.5 }} className='text-4xl my-20 text-center'>Experiences</motion.h2 >
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1 }} className="w-full lg:w-1/4">
                            <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                        </motion.div>
                        <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1 }} className="w-full max-w-xl lg:w-3/4">
                            <h6 className='mb-2 font-semibold'>{experience.role} - <span className='text-sm text-purple-100'>{experience.company}</span></h6>
                            <p className='mb-4 text-neutral-400'>{experience.description}</p>
                            {experience.technologies.map((tech, i) => (
                                <span key={i} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experiences