import react, { useEffect } from 'react'
import logoIcon from '../assets/logoIcon.png'
import { useAnimation } from 'framer-motion'
import React, { useRef } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const ComingSoon = () => {

    const controls = useAnimation()
    const { scrollYProgress } = useViewportScroll();
    const target = useRef(null);

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

    const x = useTransform(scrollYProgress, [0, 0.5], [0, -100]);


    const imageControls = useAnimation()

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset
            imageControls.start({ y: scrollY * 0.5 }) // Adjust the scroll speed by multiplying with a factor
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [imageControls])

    const text = ['Dream', 'Develop', 'Deliver']
    
    return (
        <div className="flex justify-center items-center flex-col h-screen bg-[#03071C]">
            <motion.div
                className="flex justify-center items-center "
                initial={{ opacity: 0, x: -100 }} // Initial animation properties
                animate={{ opacity: 1, x: 0 }} // Animation properties when component is mounted
                transition={{ duration: 0.4, delay: 0.2 }}
            >
                <motion.img
                    className="w-[100px] sm:w-[250px] lg:w-[450px]"
                    src={logoIcon}
                    initial={{ opacity: 0, y: -100 }} // Initial animation properties
                    animate={{ opacity: 1, y: 0 }} // Animation properties when component is mounted
                    transition={{ duration: 1, delay: 1 }} // Transition duration with delay
                />

                <div className="flex justify-start flex-col gap-1 md:gap- font-oswald">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }} // Initial animation properties
                        animate={{ opacity: 1, x: 0 }} // Animation properties when component is mounted
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <h2 className="text-4xl sm:text-5xl lg:text-[120px] font-black text-[#23B6DF] uppercase">
                            Developer's
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }} // Initial animation properties
                        animate={{ opacity: 1, x: 0 }} // Animation properties when component is mounted
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <h2 className="text-[#23B6DF] text-4xl sm:text-6xl  lg:text-[140px] font-extrabold uppercase">
                            <span>Day</span>
                            <span> ‘24</span>
                        </h2>
                    </motion.div>
                    <h2 className="lg:mt-4 lg:ml-4 flex gap-1 md:gap-2 lg:gap-3 text-[#088097] text-base sm:text-3xl  lg:text-[40px] font-extrabold">
                        {text.map((el, i) => (
                            <div className="flex justify-center align-center ">
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 1.5,
                                        delay: i * 0.2 + 1.5,
                                    }}
                                >
                                    {el}{' '}
                                </motion.span>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 1.5,
                                        delay: i * 0.2 + 1.5,
                                    }}
                                    className="my-auto ml-1 md:ml-2 lg:ml-3"
                                >
                                    {i !== text.length - 1 && ( // Render the div if it's not the last item
                                        <div className="p-1 md:p-2 lg:p-3  rounded-full bg-[#23B6DF]"></div>
                                    )}
                                </motion.div>
                            </div>
                        ))}
                    </h2>
                </div>


            </motion.div>

            <motion.div
                        initial={{ opacity: 0, y: 100 }} // Initial animation properties
                        animate={{ opacity: 1, y: 0 }} // Animation properties when component is mounted
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <h2 className="text-5xl sm:text-6xl lg:text-[140px] font-black text-[#23B6DF] mt-24 sm:mt-2">
                            Coming Soon
                        </h2>
                    </motion.div>
        </div>
    )
}

export default ComingSoon
