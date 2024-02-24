import React from "react";
import Logo from "../assets/acm.svg";

const social_links = [
  {
    link: "https://www.instagram.com/",
    imageURL:
      "https://media.licdn.com/dms/image/C4E0BAQFt6KqGwvGCzg/company-logo_200_200/0/1652805738201/instagram_logo?e=2147483647&v=beta&t=s4VLM-VFtWKuIZlbNHKaVDnkhrNXJ18MbdqGq2sO-yI",
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
        <div className="flex justify-center">
          <div className="w-3/4 border-t border-gray-300 mt-8"></div>
        </div>
        {/* <footer className="bg-white-800 text-black ">
       
          <img src={Logo} alt="Logo" />
        </footer> */}

        <footer className="bg-white dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0 ml-9">
              <a href="https://flowbite.com/" className="flex items-center md:flex md:justify-center">
  <img className="mx-auto md:mx-0" src={Logo} width={"250vw"} alt="Logo" />
</a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mt-9">
                <div>
                  <h2 className="mb-6 text-lg font-bold text-gray-900 uppercase dark:text-white">
                    Our Events
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium text-lg">
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
                  <h2 className=" text-sm font-bold text-gray-900 uppercase dark:text-white text-lg ml-6">
                    Connect with Us
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium text-lg flex sm:justify-start sm:mt-0">
                    {social_links.map((item, index) => (
                      <li key={index} className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        
                        <a
                          href={item.link}
                          className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-2"
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
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2024{" "}
                <a href="https://devday23.tech/index.html" className="hover:underline">
                  ACM NUCES™
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
