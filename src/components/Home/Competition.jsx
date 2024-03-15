import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CsComp from './CsComp';
import EEComp from "./ElectricalCompetition";

const Competition = () => {
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
                x: 100 // or any other initial position you want when out of view
            });
        }
    }, [controls, inView]);

    return (
        <div className="flex bg-[#03071C] w-full flex-col">
            <div className="mb-8 lg:mt-20 mx-8 sm:mx-16 md:mx-24 lg:mx-48">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: 100 }}
                    animate={controls}
                >
                    <h2 className="text-end text-4xl sm:text-7xl lg:text-[100px] font-black text-[#088097]">
                        Competitions
                    </h2>
                </motion.div>

                <div className="border border-[#4C878F]/[0.2] h-0.5 mt-8"></div>
            </div>

            <CsComp/>
            <EEComp/>
        </div>
    );
};

export default Competition;
