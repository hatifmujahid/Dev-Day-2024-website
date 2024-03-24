import React, { useState, useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroComp = () => {
  const [ref1, inView1] = useInView();
  const [hasAnimated1, setHasAnimated1] = useState(false);
  const controls1 = useAnimation();

  const [ref2, inView2] = useInView();
  const [hasAnimated2, setHasAnimated2] = useState(false);
  const controls2 = useAnimation();

  useEffect(() => {
    if (inView1 && !hasAnimated1) {
      controls1.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1 }
      });
      setHasAnimated1(true);
    }
    if (inView2 && !hasAnimated2) {
      controls2.start({
        opacity: 1,
        y: 0,
        transition: { duration: 2 }
      });
      setHasAnimated2(true);
    }
  }, [controls1, inView1, hasAnimated1, controls2, inView2, hasAnimated2]);

  return (
    <div className="mb-8 lg:mt-20 mx-auto text-center">
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, x: -100 }}
        animate={controls1}
      >
        <h1 className="text-2xl mb-5 sm:text-5xl lg:text-[80px] font-black text-white">
          <div className="text-[#23B6DF] text-8xl inline">20+</div> Competitions
        </h1>
      </motion.div>

      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 100 }}
        animate={controls2}
      >
        <h1 className="text-2xl mb-5 sm:text-5xl lg:text-[80px] font-black text-white mt-16">
          Price Money Worth <br/><div className="text-[#23B6DF] text-8xl mt-5">1 Million PKR</div>
        </h1>
      </motion.div>
    </div>
  );
};

export default HeroComp;
