import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CompCard = ({ title, color, description, link }) => {
  const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.3 }
            });
        }
    }, [controls, inView]);

  const colorClasses = {
    blue: "bg-darkpurple",
    orange: "bg-cardOrange",
    pink: "bg-cardPink",
  };

  // Use the full class name from the map based on the bgColor prop
  const colorClass = colorClasses[color] || "bg-secondary"; // Default to "bg-primary" if no match

  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: -100 }}
    animate={controls}
>
    <div
      className={`relative border-2 border-gray-700 bg-[#07486e53] rounded-xl h-24 md:h-48 md:w-96 p-5 flex-shrink-0 m-5`}
    >
      <h1 className="font-medium text-xl  md:text-3xl w-full pb-1 text-gray-300">{title}</h1>
      <p className="font-medium invisible md:visible text-gray-500">{description}</p>
      {/* <div className='absolute right-5 text-md text-white cursor-pointer hover:underline border'>
        <a href="">
          Learn More ...
        </a>
      </div> */}
    </div>
    </motion.div>
  );
};

export default CompCard;
