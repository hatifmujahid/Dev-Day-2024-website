import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Sponser = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                x: 0,
                transition: { duration: 1 }
            });
        } else {
            controls.start({
                opacity: 0,
                x: -100 // or any other initial position you want when out of view
            });
        }
    }, [controls, inView]);

    return (
        <div className="flex h-screen bg-[#031e2c] w-full">
            <div className="mb-8 w-full lg:mt-20 mx-8 sm:mx-16 md:mx-24 lg:mx-48">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={controls}
                >
                    <h2 className="text-4xl sm:text-7xl lg:text-[100px] font-black text-[#088097]">
                        Brought to
                    </h2>
                </motion.div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: 100 }}
                    animate={controls}
                >
                    <h2 className="text-[#003149] text-4xl sm:text-7xl lg:text-[100px] font-extrabold">
                        <span>You</span>
                        <span> By</span>
                    </h2>
                </motion.div>
                
                <div className="border border-[#4C878F]/[0.2] h-0.5 mt-8"></div>
                <div className=''>Sponsers Here</div>
            </div>
        </div>
    );
};

export default Sponser;
