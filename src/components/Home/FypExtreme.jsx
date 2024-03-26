import React from "react";
import Image1 from "../../assets/temp1.png";
import pic5 from "../../assets/DevDayPics/pic5.jpg"

const FypExtreme = () => {
  return (
    <div>
      <div class="relative w-full h-screen overflow-hidden">
        <img src={pic5} alt="" class=" object-cover" />
        <div class="absolute inset-0 flex items-center justify-center bg-[#031e2c] bg-opacity-90">
          <h1 class="text-4xl sm:text-7xl lg:text-[120px] font-black text-white">
            <span className="text-[#23B6DF] mr-3">FYP</span> Xtreme
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FypExtreme;
