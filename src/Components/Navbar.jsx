import React, { useState, useEffect } from "react";
import "../index.css";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/manrope";
import ebenBlue from "../assets/images/Eben-logo.png";
import ebenDark from "../assets/images/Eben-logo-dark.png";

import { Link, useNavigate } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 w-full bg-white z-50 transition-shadow duration-500 ${scrolled ? "shadow-md" : ""}`}>
      {/* Nav Bar */}
      <div className='flex justify-between container mx-auto px-8 pt-12 pb-6'>
        <div className='flex items-center text-[14px] gap-11 '>
          <Link to='/'>
            <img src={ebenBlue} alt='logo' className='h-10 lg:h-12 hidden md:block ' />
            <img src={ebenDark} alt='logo' className='h-10 lg:h-12 md:hidden ' />
          </Link>
          <div className='hidden md:flex gap-12 font-medium  lg:gap-14 xxl:text-[16px]'>
            <HashLink smooth to='/#work'>
              Work
            </HashLink>
            <Link to='/about'>About</Link>
            <Link to='mailto:akinebenzr@gmail.com'>Shoot a Mail</Link>
          </div>
        </div>

        <Link to='mailto:akinebenzr@gmail.com' className='gradient-button rounded-full px-4 py-2 flex items-center text-[16px] font-normal hover:text-white hover:border'>
          Shoot a mail
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
