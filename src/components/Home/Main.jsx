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
        x: 0,
        transition: { duration: 2 }
      });
      setHasAnimated2(true);
    }
  }, [controls1, inView1, hasAnimated1, controls2, inView2, hasAnimated2]);


  return (
    <div className="mb-8 lg:mt-20 mx-1 lg:mx-48 flex flex-col lg:flex-row gap-20 ">
        <motion.div
                    ref={ref1}
                    initial={{ opacity: 0, x: -100 }}
                    animate={controls1}
                    className="w-full lg:w-[800px] relative z-1"
                >
            <div className="flex flex-wrap flex-col lg:flex-row  ">   
            <h1 className=" text-3xl sm:text-5xl lg:text-[80px] font-black text-white mx-auto text-center sm:text-start mt-3">
                The Best <span className="text-[#23B6DF]  text-5xl lg:text-8xl mb-3 lg:mb-8 lg:mt-8 block">Tech Event</span>
            </h1>
            <h1 className=" text-4xl sm:text-5xl lg:text-[80px] font-black text-white mx-auto text-center sm:text-start ">
                of the Year
            </h1>
            </div>
        </motion.div>
  
        <motion.div
         ref={ref2}
         initial={{ opacity: 0, x: 200 }}
         animate={controls2}
        >
        <div class="relative  mr-[0px] lg:mr-[-190px] ">
    <div class="grid grid-cols-7 lg:grid-cols-5 gap-1 md:gap-4 p-4 rounded-lg overflow-hidden relative">
        <div class="row-span-1  col-span-1 lg:col-span-1 rounded-lg overflow-hidden relative z-1">
            <img src={pic1} class="object-cover h-[100%]  rounded-lg shadow-md h-56 lg:h-72"/>
        </div>
        <div class="row-span-1 col-span-3 lg:col-span-1  lg:col-span-1 rounded-lg overflow-hidden relative z-1">
            <img src={pic4} class="object-cover h-[100%] w-[100%] rounded-lg shadow-md h-56 lg:h-72"/>
        </div>
        <div class="row-span-1 col-span-3 lg:col-span-2 rounded-lg overflow-hidden relative z-1">
            <img src={pic5} class="object-cover h-[100%] rounded-lg shadow-md h-56 lg:h-72"/>
        </div>
        <div class="row-span-1 col-span-3  lg:col-span-1 rounded-lg overflow-hidden relative z-1">
            <img src={pic3} class="object-cover h-[100%] rounded-lg shadow-md h-56 lg:h-72"/>
        </div>
        <div class="row-span-1 col-span-2 lg:col-span-1 rounded-lg overflow-hidden relative z-1">
            <img src={pic2} class="object-cover h-full w-full rounded-lg shadow-md h-56 lg:h-72"/>
        </div>
        <div class="row-span-1  col-span-2 rounded-lg  overflow-hidden relative z-1">
            <img src={pic6} class="object-cover h-[100%] rounded-lg shadow-md h-56 lg:h-72"/>
        </div>
        <div class="row-span-1 col-span-1 rounded-lg overflow-hidden relative z-1">
            <img src={pic7} class="object-cover rounded-lg shadow-md h-56 lg:h-72"/>
        </div>
        <div class="row-span-1 col-span-3 lg:col-span-1 rounded-lg overflow-hidden relative z-1">
            <img src={pic8} class="object-cover rounded-lg shadow-md h-56 lg:h-72"/>
        </div>
        <div class="row-span-1 block lg:hidden col-span-3 lg:col-span-1 rounded-lg overflow-hidden relative z-1">
            <img src={pic9} class="object-cover rounded-lg shadow-md h-56 lg:h-72"/>
        </div>

        <div class="absolute p-5  h-full w-full z-100 inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#031e2c] to-transparent"></div>
    </div>
</div>

</motion.div>
</div>




  );
};

export default Main;
