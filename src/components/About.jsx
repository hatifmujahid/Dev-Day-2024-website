import React from "react";
import Nav from "./Nav";
import Footer from "./Footer"
import Image1 from "../assets/about-1.png";
import Image2 from "../assets/about-2.png";
import Image3 from "../assets/about-3.png";
import Image4 from "../assets/about-4.png";
import "../components/herosection2.css";
import Excom from "../components/About/Excom";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#9BD7E6] to-[#FFFFFF]">
      <Nav />
      <br />


      {/* 1st hero-section */}
      <>
      <div className="w-full part1 max-h-screen flex justify-between items-center xl:flex lg:flex sm:inline-block md:inline-block sm:text-center md:text-center mt-16">
        <div className="text-left w-2/5 ml-28 sm:w-full sm:flex sm:flex-col sm:ml-0 sm:text-center md:w-full md:flex md:flex-col md:ml-0 md:text-center lg:w-2/5 lg:flex lg:flex-col lg:ml-28 lg:text-start">
        <h1 className="mainh1 font-extrabold text-8xl text-600 sm:mb-8 md:mb-8">ABOUT US</h1>
        <h2 className="mainh2 text-blue-950 font-bold text-6xl text-600 sm:mb-8 md:mb-8">WHAT IS ACM?</h2>
        <p className="text-black-950 font-semibold sm:text-3xl md:text-3xl lg:text-lg xl:text-lg">
          The ACM Student Chapter at FAST-NUCES Karachi Campus is dedicated to
          the promotion of computing education, research and development.
          <br />
          <br />
          At ACM-NUCES KHI Chapter, you join a team that aims to change the
          methodology with which students approach computing and technology. We
          do our utmost to deliver the latest, and most innovative educational
          and professional development resources that our members require to
          strengthen their skill sets and enrich their careers. Most
          importantly, we take your view into consideration.
          <br />
          <br />
          At ACM-NUCES KHI Chapter. It’s all about YOU! Join Us and enjoy the
          truly unique benefits.
        </p>
        </div>
        <img src={Image1} alt="Image" className="hidden md:block sm:mx-auto md:mx-100 lg:mx-0 xl:mx-0" />
      </div>
      </>




        {/* 2nd hero-section */}
        <div className="w-full part1 max-h-screen flex justify-center items-center xl:flex lg:flex sm:inline-block md:inline-block sm:text-center md:text-center mt-16">
            <img src={Image2} alt="" className="sm:mx-auto md:mx-100 lg:mx-0 xl:mx-0 sm:mb-20 md:mb-20 lg:mb-0 xl:mb-0" />
            <div className="text-left w-2/5 ml-28 sm:w-full sm:flex sm:flex-col sm:ml-0 sm:text-center md:w-full md:flex md:flex-col md:ml-0 md:text-center lg:w-2/5 lg:flex lg:flex-col lg:ml-28 lg:text-start">
                <h1 className="mainh1 font-extrabold text-8xl text-600 sm:mb-8 md:mb-8">EX-COM</h1>
                <p className="text-black-950 font-semibold sm:text-3xl md:text-3xl lg:text-lg xl:text-lg">Leadership is an action it's no position. Those in action lead the way towards success, having zestful and dynamic leaders who know how to accelerate their way up in their game; and not only this, they know how to trump together. Welcoming the quintessential Extended Executive Committee of ACM NUCES for the tenure of 2023-2024. We hope they touch new horizons and leave the remarkable footprints for others to follow.</p>
            </div>
        </div>
        {/* space for excom member cards */}



        {/* 3rd hero-section */}
        <div className="w-full part1 max-h-screen flex justify-center items-center xl:flex lg:flex sm:inline-block md:inline-block sm:text-center md:text-center mt-16">
            <img src={Image3} alt="" className="sm:mx-auto md:mx-100 lg:mx-0 xl:mx-0 sm:mb-20 md:mb-20 lg:mb-0 xl:mb-0" />
            <div className="text-left w-2/5 ml-28 sm:w-full sm:flex sm:flex-col sm:ml-0 sm:text-center md:w-full md:flex md:flex-col md:ml-0 md:text-center lg:w-2/5 lg:flex lg:flex-col lg:ml-28 lg:text-start">
                <h1 className="mainh1 font-extrabold text-8xl text-600 sm:mb-8 md:mb-8">CORE TEAM</h1>
                <p className="text-black-950 font-semibold sm:text-3xl md:text-3xl lg:text-lg xl:text-lg">In the realm of ACM DevDay, leadership transcends titles to embody proactive commitment. The Core Team for 2024 exemplifies dynamic leadership and collaborative prowess. As architects of innovation, we anticipate their transformative impact, leaving an enduring legacy for future initiatives. Here's to a remarkable tenure, inspiring others to follow suit.</p>
            </div>
        </div>

        {/* space for core member cards */}



        {/* 4th hero-section */}
        <div className="w-full part1 max-h-screen flex justify-center items-center xl:flex lg:flex sm:inline-block md:inline-block sm:text-center md:text-center mt-16">
            <div className="text-left w-2/5 sm:w-full sm:flex sm:flex-col sm:text-center md:w-full md:flex md:flex-col  md:text-center lg:w-2/5 lg:flex lg:flex-col lg:ml-28 lg:text-start">
                <h1 className="mainh1 font-extrabold text-8xl text-600 sm:mb-8 md:mb-8">EXTENDED EX-COM</h1>
                <p className="text-black-950 font-semibold sm:text-3xl md:text-3xl lg:text-lg xl:text-lg">In the dynamic world of ACM DevDay, the Extended Executive Committee (2023-2024) embodies proactive leadership and effective collaboration. As trailblazers in their fields, their transformative influence promises a lasting legacy, inspiring excellence in others. Cheers to an exceptional tenure!</p>
            </div>
            <img src={Image4} alt="" className="sm:mt-20 md:mt-20 lg:mt-0 xl:mt-0 sm:mx-auto md:mx-100 lg:mx-0 xl:mx-0 sm:mb-20 md:mb-20 lg:mb-0 xl:mb-0" />
        </div>


        {/* space for extended excom member cards */}



        <Footer/>


    </div>
  );
};

export default About;
