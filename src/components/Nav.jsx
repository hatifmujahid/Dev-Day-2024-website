import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "About Us", href: "/about" },
    { id: 3, text: "ACM", href: "/" },
    { id: 4, text: "Our Team", src: "/about" },
    { id: 5, text: "Events", href: "/" },
  ];

  return (
    <div className="fixed w-full flex justify-between items-center h-20 mx-auto px-6 md:px-12">
      <div>
        <img src={logo} alt="logo" className="w-20 z-12" />
      </div>

      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="text-black p-2 mx-4 cursor-pointer"
          >
            <a href={item.href} alt={item.href}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className="block md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <AiOutlineMenu size={20} className="text-black" />
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "flex flex-col items-center justify-center fixed md:hidden right-0 top-0 w-full h-full bg-[#00A0BFBF] bg-opacity-45 ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:text-black cursor-pointer border-gray-600"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
