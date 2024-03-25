import React from "react";
import Logo from "../assets/acm.svg";

const social_links = [
  {
    link: "https://www.instagram.com/developersday/",
    imageURL:
      "https://ascotlife.church/wp-content/uploads/2020/06/white-instagram-icon-png.png",
    className: "w-16 img1"  
  },
  {
    link: "https://www.linkedin.com/company/developersday/",
    imageURL:"https://focusmaine.org/wp-content/uploads/2020/04/linkedin-icon-18-256-white.png",
    className: "w-8  img1"
  },
  {
    link: "https://www.facebook.com/DevelopersDay/",
    imageURL: "https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png",
    className: "w-16  img1"
  }
  // {
  //   link: "https://github.com/",
  //   imageURL: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
  // }
];

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
                  <ul className="text-gray-500 w-full dark:text-gray-400 font-medium text-lg flex sm:justify-start sm:mt-0">
                    {social_links.map((item, index) => (
                      <li key={index} className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        
                        <a
                          href={item.link}
                          className="text-gray-500 object-cover hover:text-black dark:hover:text-white ms-2"
                          target="_blank"
                        >
                          <img src={item.imageURL} alt="image" className={item.className}/>
                          <span className="sr-only">Social Media App</span>
                        </a>
                      </li>
                    ))}
                  </ul>
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