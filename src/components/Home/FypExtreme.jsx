import React from "react";
import Image1 from "../../assets/temp1.png";


const FypExtreme = () => {
  return (
    <div>
      <div class="relative w-full h-screen overflow-hidden">
        <img src={Image1} alt="" class="w-full h-full object-cover" />
        <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <h1 class="text-4xl sm:text-7xl lg:text-[120px] font-black text-white">
            FYP Xtreme
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FypExtreme;
