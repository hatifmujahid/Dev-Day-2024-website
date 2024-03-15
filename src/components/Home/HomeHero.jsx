import react, { useEffect } from 'react'
import logoIcon from '../../assets/logoIcon.png'
import Nav from '../Nav'
import { useAnimation } from 'framer-motion'
import Sponser from './Sponser'
import React, { useRef } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Competition from './Competition'
import Footer from "../Footer"

const HeroButton = ({ text, bgColor, link }) => {
    const colorClasses = {
        purple: 'bg-darkpurple',
        skyblue: 'bg-fadeblue',
    }

    // Use the full class name from the map based on the bgColor prop
    const colorClass = colorClasses[bgColor] || 'bg-secondary' // Default to "bg-primary" if no match
    return (
        <a href={link}>
        <motion.div
            initial={{ opacity: 0, x: 100 }} // Initial animation properties
            animate={{ opacity: 1, x: 0 }} // Animation properties when component is mounted
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`${colorClass} text-white border-2 border-[#22719E] px-4 md:px-5 lg:px-8 py-2 rounded-full font-black text-xl md:text-xl lg:text-3xl text-center w-full`}
        >
             {text}
        </motion.div>
       </a>
    )
}

const HeroSectionHome = () => {
    const herotext =
        "DevDay (Developer's Day) is a platform provided for innovative minds to come together in pursuit of a more technological tomorrow. It provides you with the opportunity to work your passion, expand your horizon of knowledge and skills and spread ideas for a new high. Not only does this boost your teamworking skills, but the sponsorship promoting DevDay also brings the chance for you to expand your networks for a more guaranteed place in the industry."

    return (
        <div className="flex justify-center items-center flex-col">
            <div className="flex mt-12 md:mt-18 flex-col gap-6 md:flex-row ">
                <HeroButton
                    text="Become a Sponsor!"
                    bgColor="purple"
                    link="/"
                />
                <div className="border border-[#4C878F]/[0.2] w-3/4 mx-auto md:w-0.5 md:h-12 h-0.5"></div>
                <HeroButton
                    text="Register Now!"
                    bgColor="skyblue"
                    link="/register"
                />
                <div className="border border-[#4C878F]/[0.2] w-3/4 mx-auto md:w-0.5 md:h-12 h-0.5"></div>
                <HeroButton
                    text="Become an Ambassador!"
                    bgColor="purple"
                    link="/"
                />
            </div>
        </div>
    )
}

const HomeHero = () => {
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
        <>
            <Nav />
            <div className="flex justify-center items-center flex-col h-screen bg-[#03071C]">
                <motion.div
                    className="flex justify-center items-center"
                    initial={{ opacity: 0, x: -100 }} // Initial animation properties
                    animate={{ opacity: 1, x: 0 }} // Animation properties when component is mounted
                    transition={{ duration: 0.4, delay: 0.2 }} 
                    ref={target}
                    style={{ opacity, scale }}// Transition duration with delay
                >
                    <motion.img
                        className="w-[130px] sm:w-[350px] lg:w-[600px]"
                        src={logoIcon}
                        initial={{ opacity: 0, y: -100 }} // Initial animation properties
                        animate={{ opacity: 1, y: 0 }} // Animation properties when component is mounted
                        transition={{ duration: 1, delay: 1 }} // Transition duration with delay
                    />

                    <div
                        className="flex justify-start flex-col gap-1 md:gap- font-oswald"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -100 }} // Initial animation properties
                            animate={{ opacity: 1, x: 0 }} // Animation properties when component is mounted
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <h2 className="text-4xl sm:text-7xl lg:text-[150px] font-black text-[#088097]">
                            Developer's
                        </h2>
                        </motion.div>

                        
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Initial animation properties
                            animate={{ opacity: 1, x: 0 }} // Animation properties when component is mounted
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <h2 className="text-[#23B6DF] text-4xl sm:text-7xl  lg:text-[150px] font-extrabold">
                                <span>Day</span>
                                <span> ‘24</span>
                            </h2>
                        </motion.div>
                        <h2 className="mt-1 lg:mt-4 ml-2 lg:ml-4 flex gap-1 md:gap-2 lg:gap-3 text-[#088097] text-base sm:text-4xl  lg:text-[50px] font-extrabold">
                        {text.map((el, i) => (
                            <div className='flex justify-center align-center '>
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
                                    className='my-auto ml-1 md:ml-2 lg:ml-3'
                                >
                                    {i !== text.length - 1 && ( // Render the div if it's not the last item
                                        <div
                                            className="p-1 md:p-2 lg:p-3  rounded-full bg-[#23B6DF]"
                                        ></div>
                                    )}
                                </motion.div>
                            </div>
                        ))}
                        </h2>
                    </div>
                </motion.div>
                <HeroSectionHome />
            </div>
            <Sponser />
            <Competition/>
            <Footer/>
        </>
    )
}

export default HomeHero
