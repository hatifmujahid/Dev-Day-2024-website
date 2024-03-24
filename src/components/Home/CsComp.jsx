import react, {useState, useEffect} from "react";
import CompCard from "./CompCard";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CsComp = () => {

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

  const csCompetitions = [
    'Capture The Flag',
    'Speed Programming',
    'Database Design',
    'Code in the Dark',
    'PsuedoWar',
    'Speed Debugging',
    'UI/UX',
    'Data Visualization',
    'Web Development',
    'Data Science',
    'App Development',
    'SyncOS',
]


const compData = [
  {
    title: "Capture the Flag",
    description: "A security competition with challenges in various categories like Web, Forensic, and Crypto. Teams earn points for solving tasks, with more points for harder tasks.",
    link: "https://www.google.com",
    color: "#FFA500"
  },
  {
    title: "Speed Programming",
    description: "Participants solve algorithmic problems as quickly as possible, aiming to complete as many as they can in the shortest time.",
    link: "https://www.google.com",
    color: "#FF0000"
  },
  {
    title: "Database Design",
    description: "Creating a detailed data model of a database, including logical and physical design choices and storage parameters.",
    link: "https://www.google.com",
    color: "#FFD700"
  },
  {
    title: "Code in the Dark",
    description: "A front-end competition where contestants implement a website design from a screenshot without previews or measuring tools.",
    link: "https://www.google.com",
    color: "#FF69B4"
  },
  {
    title: "PsuedoWar",
    description: "Participants solve problems using pseudocode, with winners based on the correctness and efficiency of their solutions.",
    link: "https://www.google.com",
    color: "#00FF00"
  },
  {
    title: "Speed Debugging",
    description: "Participants debug buggy code snippets as quickly as possible, with winners based on the number of bugs fixed and time taken.",
    link: "https://www.google.com",
    color: "#00FFFF"
  },
  {
    title: "UI/UX",
    description: "Designing the user interface and experience of a website or app, involving creating wireframes, mockups, and prototypes.",
    link: "https://www.google.com",
    color: "#800080"
  },
  {
    title: "Data Visualization",
    description: "Participants create visual representations of data to communicate information clearly and effectively.",
    link: "https://www.google.com",
    color: "#FF6347"
  },
  {
    title: "Web Development",
    description: "Participants develop websites or web applications, focusing on both front-end and back-end development.",
    link: "https://www.google.com",
    color: "#4682B4"
  },
  {
    title: "Data Science",
    description: "Participants analyze and interpret complex data sets to extract insights and solve problems using statistical and machine learning techniques.",
    link: "https://www.google.com",
    color: "#32CD32"
  },
  {
    title: "App Development",
    description: "Participants design and build mobile applications, focusing on user experience, functionality, and innovation.",
    link: "https://www.google.com",
    color: "#FF4500"
  },
  {
    title: "SyncOS",
    description: "Participants develop operating systems or system-level software, focusing on efficiency, reliability, and performance.",
    link: "https://www.google.com",
    color: "#1E90FF"
  }
];


  return (
    <div className="mb-8 lg:mt-20 mx-8 sm:mx-16 md:mx-24 lg:mx-48 flex flex-col">
        <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={controls}
                >
      <h1 className=" text-2xl mb-5 sm:text-5xl lg:text-[80px] font-black text-[#088097] ">
        COMPUTER SCIENCE
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

export default CsComp;
