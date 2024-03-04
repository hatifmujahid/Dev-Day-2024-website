import React from "react";
import banner from "../../assets/heroBanner.png";
import bannerRight from "../../assets/heroBanner2.png";

const HeroButton = ({ text, bgColor, link }) => {
  const colorClasses = {
    purple: "bg-purple",
    skyblue: "bg-skyblue",
    orange: "bg-orange",
  };

  // Use the full class name from the map based on the bgColor prop
  const colorClass = colorClasses[bgColor] || "bg-secondary"; // Default to "bg-primary" if no match
  return (
    <a
      href={link}
      className={`${colorClass} text-primary px-4 py-2 rounded-full font-black text-2xl md:text-xl text-center`}
    >
      {text}
    </a>
  );
};


const HeroSection = () => {
  const herotext =
    "DevDay (Developer's Day) is a platform provided for innovative minds to come together in pursuit of a more technological tomorrow. It provides you with the opportunity to work your passion, expand your horizon of knowledge and skills and spread ideas for a new high. Not only does this boost your teamworking skills, but the sponsorship promoting DevDay also brings the chance for you to expand your networks for a more guaranteed place in the industry.";

  return (
    <div className="h-screen bg-gradient-to-b from-[#9BD7E6] to-[#FFFFFF] flex justify-center items-center flex-col">
      <div class="flex flex-row w-screen object-contain relative">
        <img src={banner} alt="" class="w-full md:w-3/4" />
        <img
          src={bannerRight}
          alt=""
          class="absolute hidden md:block right-0 bottom-0 w-2/6"
        />
      </div>

      <div className="mt-14 hidden lg:block md:block lg:mx-72 md:mx-28">
        <p>{herotext}</p>
      </div>

      <div className="flex  mt-12 md:mt-18 flex-col gap-6 md:flex-row">
        <HeroButton text="Become a Sponsor!" bgColor="purple" link="/" />
        <div className="border border-[#000000]/[0.2] w-3/4 mx-auto md:w-0.5 md:h-12 h-0.5"></div>
        <HeroButton text="Register Now!"  bgColor="skyblue" link="/register" />
        <div className="border border-[#000000]/[0.2] w-3/4 mx-auto md:w-0.5 md:h-12 h-0.5"></div>
        <HeroButton text="Become an Ambassador!" bgColor="orange" link="/" />
      </div>
    </div>
  );
};

export default HeroSection;
