import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logo.png';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [bgColor, setBgColor] = useState('transparent');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
      setBgColor('#9bd7e6cc'); // Change to your desired color when scrolled
    } else {
      setBgColor('transparent');
    }

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const navItems = [
    { id: 1, text: 'Home', href: '/' },
    { id: 2, text: 'About Us', href: '/about' },
    { id: 3, text: 'Register', href: '/register' },
  ];

  return (
    <div
      className={`fixed w-full flex justify-between items-center h-16 mx-auto px-6 md:px-12 z-50 transition-all duration-300 ${showNavbar ? 'top-0' : '-top-20'}`}
      style={{ backgroundColor: bgColor }}
    >
      <a href='/'>
        <img src={logo} alt="logo" className="w-20 z-12" />
      </a>

      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li key={item.id} className="text-black p-2 mx-4 cursor-pointer">
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>

      <div className="block md:hidden z-10">
        <motion.button
          initial="hide"
          animate={nav ? 'show' : 'hide'}
          onClick={handleNav}
          className="flex flex-col space-y-1 relative z-10"
        >
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: 45,
                y: 9,
              },
            }}
            className="w-8 bg-white h-1 block rounded-full"
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                opacity: 1,
              },
              show: {
                opacity: 0,
              },
            }}
            className="w-8 bg-white h-1 block rounded-full"
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: -45,
                y: -6,
              },
            }}
            className="w-8 bg-white h-1 block rounded-full"
          ></motion.span>
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {nav && (
          <MotionConfig
            transition={{
              type: 'spring',
              bounce: 0.3,
            }}
          >
            <motion.div
              key="mobile-nav"
              variants={{
                hide: {
                  x: '100%',
                  transition: {
                    type: 'spring',
                    bounce: 0.2,
                    when: 'afterChildren',
                    staggerChildren: 0.1, // Reduced stagger delay
                  },
                },
                show: {
                  x: '0%',
                  transition: {
                    type: 'spring',
                    bounce: 0.2,
                    when: 'beforeChildren',
                    staggerChildren: 0.1, // Reduced stagger delay
                  },
                },
              }}
              initial="hide"
              animate="show"
              exit="hide"
              className="fixed inset-0 bg-[#9bd7e6] p-6 flex flex-col justify-center space-y-10 lg:hidden"
            >
              <motion.ul
                variants={{
                  hide: {
                    y: '25%',
                    opacity: 0,
                  },
                  show: {
                    y: '0%',
                    opacity: 1,
                  },
                }}
                className="list-none space-y-6"
              >
                {navItems.map((item) => (
                  <motion.li
                    key={item.id}
                    variants={{
                      hide: { opacity: 0, y: -20 },
                      show: { opacity: 1, y: 0 },
                    }}
                    initial="hide"
                    animate="show"
                    exit="hide"
                  >
                    <a href={item.href} className="text-5xl font-semibold text-white">
                      {item.text}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
