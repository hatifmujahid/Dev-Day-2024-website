import react, {useState, useEffect} from "react";
import CompCard from "./CompCard";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Main = () => {

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


  return (
    <div className="mb-8 lg:mt-20 mx-8 sm:mx-16 md:mx-24 lg:mx-48 flex flex-col lg:flex-row ">
        <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={controls}
                    className="w-full lg:w-[800px] relative z-1"
                >
            <h1 className=" text-2xl mb-5 sm:text-5xl lg:text-[80px] font-black text-white ">
                Best <span className="text-[#23B6DF] mb-4 mt-8 block">Tech Event</span>
            </h1>
            <h1 className=" text-2xl mb-5 sm:text-5xl lg:text-[80px] font-black text-white ">
                of the Year
            </h1>
        </motion.div>

        <div class="relative  mr-[0px] lg:mr-[-180px] ">
    <div class="grid grid-cols-5 gap-4 p-4 rounded-lg overflow-hidden relative">
        <div class="row-span-2 col-span-2 bg-white rounded-lg overflow-hidden relative z-1">
            <img src="https://via.placeholder.com/300" alt="Placeholder Image 1" class="object-cover rounded-lg shadow-md"/>
        </div>
        <div class="row-span-2 col-span-1 bg-white rounded-lg overflow-hidden relative z-1">
            <img src="https://via.placeholder.com/300" alt="Placeholder Image 2" class="object-cover rounded-lg shadow-md"/>
        </div>
        <div class="row-span-1 col-span-1 bg-white rounded-lg overflow-hidden relative z-1">
            <img src="https://via.placeholder.com/300" alt="Placeholder Image 3" class="object-cover rounded-lg shadow-md"/>
        </div>
        <div class="row-span-2 col-span-1 bg-white rounded-lg overflow-hidden relative z-1">
            <img src="https://via.placeholder.com/300" alt="Placeholder Image 4" class="object-cover rounded-lg shadow-md"/>
        </div>
        <div class="row-span-1 col-span-2 bg-white rounded-lg overflow-hidden relative z-1">
            <img src="https://via.placeholder.com/300" alt="Placeholder Image 5" class="object-cover rounded-lg shadow-md"/>
        </div>
        <div class="row-span-1 col-span-2 bg-white rounded-lg overflow-hidden relative z-1">
            <img src="https://via.placeholder.com/300" alt="Placeholder Image 6" class="object-cover rounded-lg shadow-md"/>
        </div>
        <div class="row-span-1 col-span-1 bg-white rounded-lg overflow-hidden relative z-1">
            <img src="https://via.placeholder.com/300" alt="Placeholder Image 6" class="object-cover rounded-lg shadow-md"/>
        </div>

        <div class="absolute p-5  h-full w-full z-100 inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#031e2c] to-transparent"></div>
    </div>
</div>


</div>




  );
};

export default Main;
