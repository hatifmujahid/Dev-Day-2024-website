import react, {useEffect} from "react";
import CompCard from "./CompCard";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CsComp = () => {

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

  const compData = [
    {
      title: "Web Development",
      description: "A competitive coding event where participants are given",
      link: "https://www.google.com/",
      color: "blue",
    },
    {
      title: "Database Design",
      description: "A competitive coding event where participants are given",
      link: "https://www.google.com/",
      color: "blue",
    },
    {
        title: "Web Development",
        description: "A competitive coding event where participants are given",
        link: "https://www.google.com/",
        color: "blue",
      },
      {
        title: "Database Design",
        description: "A competitive coding event where participants are given",
        link: "https://www.google.com/",
        color: "blue",
      },
      {
        title: "Web Development",
        description: "A competitive coding event where participants are given",
        link: "https://www.google.com/",
        color: "blue",
      },
      {
        title: "Database Design",
        description: "A competitive coding event where participants are given",
        link: "https://www.google.com/",
        color: "blue",
      },
      {
        title: "Web Development",
        description: "A competitive coding event where participants are given",
        link: "https://www.google.com/",
        color: "blue",
      },
      {
        title: "Database Design",
        description: "A competitive coding event where participants are given",
        link: "https://www.google.com/",
        color: "blue",
      },
      {
        title: "Web Development",
        description: "A competitive coding event where participants are given",
        link: "https://www.google.com/",
        color: "blue",
      },
      {
        title: "Database Design",
        description: "A competitive coding event where participants are given",
        link: "https://www.google.com/",
        color: "blue",
      },
      {
        title: "Web Development",
        description: "A competitive coding event where participants are given",
        link: "https://www.google.com/",
        color: "blue",
      },
      {
        title: "Database Design",
        description: "A competitive coding event where participants are given",
        link: "https://www.google.com/",
        color: "blue",
      },
  
  ];

  return (
    <div className="mb-8 lg:mt-20 mx-8 sm:mx-16 md:mx-24 lg:mx-48 border flex flex-col">
        <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={controls}
                >
      <h1 className=" text-2xl mb-5 sm:text-5xl lg:text-[80px] font-black text-[#088097] ">
        COMPUTER SCIENCE
      </h1>
                </motion.div>

      <div className="flex flex-wrap justify-center border">
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

export default CsComp;
