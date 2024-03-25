import react, {useState, useEffect} from "react";
import CompCard from "./CompCard";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RoboComp = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
      if (inView && !hasAnimated) {
          controls.start({
              opacity: 1,
              x: 0,
              transition: { duration: 1 }
          });
          setHasAnimated(true);
      }
  }, [controls, inView, hasAnimated]);

const compData = [
    {
        title: "Line Following Robot (LFR) Competition",
        description: "A competition where robots follow a line on the ground. The robot that completes the course in the shortest time wins.",
        link: "https://www.google.com",
        color: "#FFA500"
    },
    {
        title: "Robo Soccer Competition",
        description: "A soccer game where robots compete against each other. The robots are designed to play soccer autonomously.",
        link: "https://www.google.com",
        color: "#FF0000"
    },
]

  return (
    <div className="mb-8 lg:mt-20 mx-8 sm:mx-16 md:mx-24 lg:mx-48 flex flex-col">
        <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={controls}
                >
      <h1 className=" text-2xl mb-5 sm:text-5xl lg:text-[80px] font-black text-[#088097] ">
        Robotics Competition
      </h1>
                </motion.div>

      <div className="flex flex-wrap justify-center">
      {
        compData.map((data) => {
            return (
                <motion.div
                  
                >
                    <CompCard
                        title={data.title}
                        description={data.description}
                        link={data.link}
                        color={data.color}
                    />
                </motion.div>
            );
        })
      }
    
      </div>
    </div>
  );
};

export default RoboComp;
