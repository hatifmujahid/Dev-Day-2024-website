import react, {useState, useEffect} from "react";
import CompCard from "./CompCard";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import pic1 from "../../assets/DevDayPics/pic1.jpg";
import pic2 from "../../assets/DevDayPics/pic2.jpg";
import pic3 from "../../assets/DevDayPics/pic3.jpg";
import pic4 from "../../assets/DevDayPics/pic4.jpg";
import pic5 from "../../assets/DevDayPics/pic5.jpg";
import pic6 from "../../assets/DevDayPics/pic6.jpg";
import pic7 from "../../assets/DevDayPics/pic7.jpg";
import pic8 from "../../assets/DevDayPics/pic8.jpg";
import pic9 from "../../assets/DevDayPics/pic9.jpg";
import pic10 from "../../assets/DevDayPics/pic10.jpg";
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
    <div className="mb-8 lg:mt-20 mx-8 sm:mx-16 md:mx-24 lg:mx-48 flex flex-col lg:flex-row gap-20">
        <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={controls}
                    className="w-full lg:w-[800px] relative z-1"
                >
            <div className="flex flex-wrap">
            <h1 className=" text-2xl mb-5 sm:text-5xl lg:text-[80px] font-black text-white ">
                Best <span className="text-[#23B6DF] mb-4 mt-8 block">Tech Event</span>
            </h1>
            <h1 className=" text-2xl mb-5 sm:text-5xl lg:text-[80px] font-black text-white ">
                of the Year
            </h1>
            </div>
        </motion.div>

        <div class="relative  mr-[0px] lg:mr-[-200px]">
    <div class="grid grid-cols-5 gap-4 p-4 rounded-lg overflow-hidden relative">
        <div class="row-span-1 col-span-1 rounded-lg overflow-hidden relative z-1">
            <img src={pic1} class="object-cover rounded-lg shadow-md h-72"/>
        </div>
        <div class="row-span-1 rounded-lg overflow-hidden relative z-1">
            <img src={pic2} class="object-cover rounded-lg shadow-md"/>
        </div>
        <div class="row-span-1 col-span-1 rounded-lg overflow-hidden relative z-1">
            <img src={pic3} class="object-cover rounded-lg shadow-md h-72"/>
        </div>
        <div class="row-span-1 col-span-1 rounded-lg overflow-hidden relative z-1">
            <img src={pic4} class="object-cover rounded-lg shadow-md"/>
        </div>
        <div class="row-span-1 col-span-1 rounded-lg overflow-hidden relative z-1">
            <img src={pic5} class="object-cover rounded-lg shadow-md h-72"/>
        </div>
        <div class="row-span-1 col-span-2 rounded-lg overflow-hidden relative z-1">
            <img src={pic6} class="object-cover rounded-lg shadow-md h-72"/>
        </div>
        <div class="row-span-1 col-span-1 rounded-lg overflow-hidden relative z-1">
            <img src={pic7} class="object-cover rounded-lg shadow-md h-72"/>
        </div>
        <div class="row-span-1 col-span-1 rounded-lg overflow-hidden relative z-1">
            <img src={pic8} class="object-cover rounded-lg shadow-md h-72"/>
        </div>
        <div class="row-span-1 col-span-1 rounded-lg overflow-hidden relative z-1">
            <img src={pic9} class="object-cover rounded-lg shadow-md h-72"/>
        </div>

        <div class="absolute p-5  h-full w-full z-100 inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#031e2c] to-transparent"></div>
    </div>
</div>


</div>




  );
};

export default Main;
