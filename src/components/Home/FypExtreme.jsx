import React from "react";
import Image1 from "../../assets/temp1.png";
import pic5 from "../../assets/DevDayPics/pic5.jpg"

const FypExtreme = () => {
  return (
    <div>
      <div class="relative w-full h-screen overflow-hidden ">
        <img src={pic5} alt="" class="h-screen md:h-auto object-cover" />
        <div class="absolute inset-0 flex items-center justify-center bg-[#031e2c] bg-opacity-90 flex flex-col">
          <h1 class="text-4xl sm:text-7xl lg:text-[120px] font-black text-white">
            <span className="text-[#23B6DF] mr-3">FYP</span> Xtreme
          </h1>

          <h2 className="text-2xl md:text-4xl mx-5 text-center text-white font-bold mt-8">FYP Extreme happening for the first time ever in Fast Nuces</h2>

           <h2 className="text-2xl md:text-4xl mx-5 text-center text-white font-bold mt-8">Showcase your FYP and win  upto <span className="text-3xl md:text-5xl font-black text-[#23B6DF]">100K PKR</span></h2>
        </div>
      </div>
    </div>
  );
};

export default FypExtreme;
