import React from "react";
import Nav from "./Nav";
import Footer from "./Footer"
import Image1 from "../assets/about-1.png";
import Image2 from "../assets/about-2.png";
import Image3 from "../assets/about-3.png";
import Image4 from "../assets/about-4.png";
import "../components/herosection2.css";
import ExcomCard from "../components/About/ExComCard";
import hamad from "../assets/Excom/Hamad_President.jpg"
import ahmed from "../assets/Excom/Ahmed_Chairperson_ACM.jpg"
import hira from "../assets/Excom/Hira_VP.jpg";
import shahmir from "../assets/Excom/Shahmir_GS.jpg";
import usman from "../assets/Excom/Usman_EA_Head.jpg";
import sarim from "../assets/Excom/Sarim_Treasurer.jpg";
import hatif from "../assets/Excom/Hatif_Tech_Lead.jpg";
import abubakar from "../assets/Excom/Abubakar Corporate Affairs.jpg";
import sareem from "../assets/Excom/Sareem_Branding.jpg";
import muaz from "../assets/Excom/Muaaz_SOP_Head.jpg"

import mehdi from "../assets/CoreTeam/mehdi.jpeg"
import ayan from "../assets/CoreTeam/ayan.jpeg"
import hadi from "../assets/CoreTeam/hadi.jpeg"
// import eisha from "../assets/CoreTeam/eisha.jpeg"
import sarosh from "../assets/CoreTeam/sarosh.jpeg"
import talal from "../assets/CoreTeam/talal.jpeg"
import raza from "../assets/CoreTeam/raza.jpeg"
import tanees from "../assets/CoreTeam/tanees.jpeg"
import CoreCard from "../components/About/CoreCard";


const About = () => {
  const ExcomData = [
    {
      imgUrl : hamad,
      title : "President",
      name : "Hamad Sami"
    },
    {
      imgUrl : ahmed,
      title : "ChairPerson",
      name : "M. Ahmed"
    },
    {
      imgUrl : hira,
      title : "Vice-President",
      name : "Hira Rehman"
    },
    {
      imgUrl : shahmir,
      title : "General Secretary",
      name : "M. Shahmir"
    },
    {
      imgUrl : usman,
      title : "Event Administrator",
      name : "Usman Nisar"
    },
    {
      imgUrl : sarim,
      title : "Treasurer",
      name : "Sarim Latif Khan"
    },
    {
      imgUrl : hatif,
      title : "Tech Lead",
      name : "Hatif Mujahid"
    },
    {
      imgUrl : abubakar,
      title : "Director Corporate Affairs",
      name : "AbuBakr Danish"
    },
    {
      imgUrl : sareem,
      title : "Director Branding",
      name : "Sareem Farooqui"
    },

    {
      imgUrl : muaz,
      title : "SOP Compliance Head",
      name : "Muaaz Mohsin"
    },
  ]

  const CoreTeamData = [
    {
      imgUrl : mehdi,
      title : "Director Core Team",
      name : "Syed Mehdi Raza"
    },
    {
      imgUrl : ayan,
      title : "Director - External Affairs",
      name : "Aayaan Khurram"
    },
    {
      imgUrl : hadi,
      title : "Mentor Event Management",
      name : "Hadi Babar"
    },
    // {
    //   imgUrl : eisha,
    //   title : "Mentor Marketing",
    //   name : "Eisha Shah"
    // },
    {
      imgUrl : sarosh,
      title : "Mentor Event Admin",
      name : "Sarosh Jawed"
    },
    {
      imgUrl : talal,
      title : "Director Photography",
      name : "Talal"
    },
    {
      imgUrl : raza,
      title : "Mentor Guest Relations",
      name : "Raza Ali Abidi"
    },
    {
      imgUrl : tanees,
      title : "Director Internal Affairs",
      name : "Syed Tanees"
    },
  ]
  return (
    <div className="bg-[#031e2c]">
      <Nav />
      <br />


      {/* 1st hero-section */}
      <div className="inline-block lg:flex lg:justify-between lg:items-center mt-12">
      <div className="w-100 mt-20 ml-0 lg:w-1/2 lg:ml-20 lg:mt-12">
        <h1 className="mainh1 font-extrabold text-5xl text-center lg:text-left lg:text-7xl">ABOUT US</h1>
        <h2 className="mainh2 text-blue-950 font-bold text-4xl mt-4 text-center lg:text-left lg:text-5xl">WHAT IS ACM?</h2>
        <p className="text-white font-semibold text-md text-left m-5 md:text-left lg:text-left lg:text-lg xl:text-lg pt-12">
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
        <div>
        <img src={Image1} alt="Image" className="mx-auto hidden lg:flex" />
        </div>
      </div>

     
        {/* 2nd hero-section */}

        <div className="inline-block lg:flex lg:justify-evenly lg:align-center mt-28">
          <img src={Image2} alt="" className="mx-auto lg:mx-0" />
          <div className="w-full lg:w-2/5">
                <h1 className="mainh1 font-extrabold text-6xl mb-8 text-center lg:text-left mt-20 lg:mt-0 lg:text-7xl">EX-COM</h1>
                <p className="text-white font-semibold m-5 text-lg text-left lg:text-lg xl:text-lg">Leadership is an action it's no position. Those in action lead the way towards success, having zestful and dynamic leaders who know how to accelerate their way up in their game; and not only this, they know how to trump together. Welcoming the quintessential Executive Committee of ACM NUCES for the tenure of 2023-2024. We hope they touch new horizons and leave the remarkable footprints for others to follow.</p>
            </div>
        </div>

        {/* space for excom member cards */}
        <div className="m-4 flex flex-wrap gap-10 lg:gap-16 mx-auto justify-center">
          {ExcomData.map((data) => {
            return (
              <ExcomCard imgUrl={data.imgUrl} title={data.title} name={data.name}/>
            )
          })}
        </div>
        
        



        {/* 3rd hero-section */}

        <div className="inline-block lg:flex lg:justify-evenly lg:align-center mt-28">
          <img src={Image3} alt="" className="mx-auto lg:mx-0" />
          <div className="w-full lg:w-2/5">
                <h1 className="mainh1 font-extrabold text-6xl text-600 mb-8 text-center lg:text-left mt-20 lg:mt-0 lg:text-7xl">CORE TEAM</h1>
                <p className="text-white font-semibold m-5 text-lg lg:text-lg xl:text-lg">In the realm of ACM DevDay, leadership transcends titles to embody proactive commitment. The Core Team for 2024 exemplifies dynamic leadership and collaborative prowess. As architects of innovation, we anticipate their transformative impact, leaving an enduring legacy for future initiatives. Here's to a remarkable tenure, inspiring others to follow suit.</p>
            </div>
        </div>
        {/* space for core member cards */}

        <div className="m-4 mt-20 flex flex-wrap gap-3 md:gap-10 mx-auto justify-center">
          {CoreTeamData.map((data) => {
            return (
              <CoreCard imgUrl={data.imgUrl} title={data.title} name={data.name}/>
            )
          })}
        </div>
        

        {/* 4th hero-section */}
        {/* <div className="inline-block lg:flex lg:justify-evenly lg:align-center mt-28">
          <div className="w-full lg:w-2/5">
                <h1 className="mainh1 font-extrabold text-6xl text-600 mb-8 text-center lg:text-left mt-20 lg:mt-0 lg:text-7xl">EXTENDED EX-COM</h1>
                <p className="text-white font-semibold text-lg m-5 lg:text-lg xl:text-lg">In the dynamic world of ACM DevDay, the Extended Executive Committee (2023-2024) embodies proactive leadership and effective collaboration. As trailblazers in their fields, their transformative influence promises a lasting legacy, inspiring excellence in others. Cheers to an exceptional tenure!</p>
            </div>
            <img src={Image4} alt="" className="mx-auto mt-24 lg:mt-0 lg:mx-0" />
        </div> */}
        {/* space for extended excom member cards */}



        <Footer/>


    </div>
  );
};

export default About;
