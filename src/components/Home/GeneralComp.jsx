import react, {useState, useEffect} from "react";
import CompCard from "./CompCard";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GeneralComp = () => {

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
    title: "Photography",
    description: "A competition where participants take photos based on a theme. The best photo wins.",
    link: "https://www.google.com",
    color: "#FFA500"
  },
  {
    title: "Reels competition",
    description: "Participants create a short video based on a theme. The best video wins.",
    link: "https://www.google.com",
    color: "#FF0000"
  },
  {
    title: "Board games",
    description: "A competition where participants play board games. The winner is the one who wins the most games.",
    link: "https://www.google.com",
    color: "#FFD700"
  },
  {
    title: "Sketching",
    description: "A competition where participants sketch based on a theme. The best sketch wins.",
    link: "https://www.google.com",
    color: "#FFA500"
  },
  {
    title: "Podium game",
    description: "A competition where participants stand on a podium and answer questions. The one who answers the most questions wins.",
    link: "https://www.google.com",
    color: "#FF0000"
  },
  {
    title: "Scavenger hunt",
    description: "A competition where participants search for items based on clues. The one who finds the most items wins.",
    link: "https://www.google.com",
    color: "#FFD700"
  },
  {
    title: "Fast Stock Exchange",
    description: "A competition where participants buy and sell stocks. The one who earns the most money wins.",
    link: "https://www.google.com",
    color: "#FFA500"
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
        GENERAL COMPETITION
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

export default GeneralComp;
