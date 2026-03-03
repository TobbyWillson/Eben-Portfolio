import React from "react";
import "../index.css";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/manrope";
import eben from "../assets/images/Eben-logo.png";

import { Link, useNavigate } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div>
      {/* Nav Bar */}
      <div className='flex justify-between container mx-auto px-5 pt-12 pb-6'>
        <div className='flex items-center text-[14px] gap-11 '>
          <img src={eben} alt='logo' className='h-10 lg:h-12  ' />
          <div className='hidden md:flex gap-12 font-medium lg:gap-14 xxl:text-[16px]'>
            <HashLink smooth to='#work'>
              Work
            </HashLink>
            <Link to='/about'>About</Link>
            <Link to='/'>Shoot a Mail</Link>
          </div>
        </div>

        <Link to='/' className='rounded-full border px-4 flex items-center text-[16px] text-[#2563EB] hover:bg-[#DCEFFF]'>
          Shoot a mail
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
