import React from "react";
import Logo from "../assets/acm.svg";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div>
        {/* <footer className="bg-white-800 text-black ">
       
          <img src={Logo} alt="Logo" />
        </footer> */}

        <footer className="">
          <div className="mx-auto w-full  p-4 py-6 lg:py-8 bg-[#03071C] ">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0 ml-9">
              <a href="https://www.acmdevday.com" className="flex items-center md:flex md:justify-center">
  <img className="mx-auto md:mx-0" src={Logo} width={"250vw"} alt="Logo" />
</a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mt-9 ">
                <div>
                  <h2 className="mb-6 text-lg font-bold text-black uppercase text-white">
                    Our Events
                  </h2>
                  <ul className="text-gray-400 font-medium text-lg">
                    <li className="mb-4 ">
                      <a href="https://www.acmcoderscup.online/" className="hover:underline">
                        Coders Cup
                      </a>
                    </li>
{/*                     <li className="mb-4">
                      <a
                        href="https://tailwindcss.com/"
                        className="hover:underline"
                      >
                        Developer's Day
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindcss.com/"
                        className="hover:underline"
                      >
                        Hackathon
                      </a>
                    </li> */}
                  </ul>
                </div>
                <div>
                  <h2 className=" text-sm font-bold text-black uppercase text-lg ml-6 text-white">
                    Connect with Us
                  </h2>

                  <div className="flex flex-wrap m-4">
                    <a href="https://www.instagram.com/developersday/" className="text-white mx-4 text-2xl"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/company/developersday/" className="text-white mx-4 text-2xl"><FaLinkedin /></a>
                    <a href="https://www.facebook.com/DevelopersDay/" className="text-white mx-4 text-2xl"><FaFacebook /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-[#4C878F]/[0.2] h-0.5 mt-8 mb-3"></div>


              <h2 className="text-sm text-black text-center mx-auto text-gray-300">
                © 2024{" "}
                <a href="https://devday23.tech/index.html" className="hover:underline">
                  ACM NUCES™
                </a>
                . All Rights Reserved.
              </h2>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
