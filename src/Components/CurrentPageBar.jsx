import React, { useEffect } from "react";
import "../index.css";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/manrope";
import "@fontsource-variable/inter";
import "@fontsource/poppins";

import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

// Icons Imports
import { TbSmartHome } from "react-icons/tb";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const CurrentPageBar = () => {
  const currentPath = useLocation().pathname;

  const checkPageName = () => {
    if (currentPath === "/tutordem") {
      return "TutorDem";
    } else if (currentPath === "/cosinewalletapp") {
      return "Cosine Wallet App";
    } else if (currentPath === "/cosinewalletwebsite") {
      return "Cosine Wallet Website";
    } else if (currentPath === "/dropcycle") {
      return "DropCycle Website";
    } else if (currentPath === "/about") {
      return "About Me";
    }
  };

  return (
    <div>
      {/* // Current Page Bar */}
      <div className='bg-gray-100 font-inter'>
        <div className='px-5 py-4 container mx-auto flex flex-col md:flex-row justify-between text-[14px]'>
          <div className='flex items-center'>
            <TbSmartHome className='mr-1' />
            <Link to='/'>Home</Link>
            <MdOutlineArrowForwardIos className='mx-2' />

            <Link to={currentPath} className='text-[#2563EB]'>
              <p>{checkPageName()}</p>
            </Link>
          </div>
          <div className='flex items-center justify-end '>
            <HashLink smooth to='#next'>
              Next
            </HashLink>

            <MdOutlineArrowForwardIos className='mx-2' />

            <Link to=''>Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentPageBar;
