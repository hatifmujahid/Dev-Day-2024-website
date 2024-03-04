import React from "react";
import Logo from "../assets/acm.svg";

const social_links = [
  {
    link: "https://www.instagram.com/",
    imageURL:
      "https://icons8.com/icon/32309/instagram",
  },
  {
    link: "https://linkedin.com/",
    imageURL:"https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png"
  },
  {
    link: "https://github.com/",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
  }
];

const Footer = () => {
  return (
    <>
      <div>
        {/* <footer className="bg-white-800 text-black ">
       
          <img src={Logo} alt="Logo" />
        </footer> */}

        <footer className="">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0 ml-9">
              <a href="https://flowbite.com/" className="flex items-center md:flex md:justify-center">
  <img className="mx-auto md:mx-0" src={Logo} width={"250vw"} alt="Logo" />
</a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mt-9">
                <div>
                  <h2 className="mb-6 text-lg font-bold text-black uppercase">
                    Our Events
                  </h2>
                  <ul className="text-black font-medium text-lg">
                    <li className="mb-4">
                      <a href="https://flowbite.com/" className="hover:underline">
                        Coders Cup
                      </a>
                    </li>
                    <li className="mb-4">
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
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className=" text-sm font-bold text-black uppercase text-lg ml-6">
                    Connect with Us
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium text-lg flex sm:justify-start sm:mt-0">
                    {social_links.map((item, index) => (
                      <li key={index} className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        
                        <a
                          href={item.link}
                          className="text-gray-500 hover:text-black dark:hover:text-white ms-2"
                          target="_blank"
                        >
                          <img src={item.imageURL} alt="image" className="w-8 h-8 img1"/>
                          <span className="sr-only">Social Media App</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-400" />

              <h2 className="text-sm text-black text-center border mx-auto">
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
