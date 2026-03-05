import React from "react";
import "../index.css";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/manrope";
import "@fontsource-variable/inter";
import "@fontsource/poppins";

import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Current Page Bar
import CurrentPageBar from "../Components/CurrentPageBar";

// Socials Icons Import
import Dialog from "../assets/images/Dialog.png";

// Images
import DropCycleSafari from "../assets/images/DropCycle-Safari-Light.png";
import DropCycleWebsiteDesktop from "../assets/images/DropCycleWebsiteDesktop.png";
import DropCycleWebsiteMobile from "../assets/images/DropCycleWebsiteMobile.png";

const CosineWallet = () => {
  return (
    <div className=''>
      {/* Current Page Bar */}

      <div className='bg-linear-to-b from-[#FFF] to-[#DCEFFF] '>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center justify-center mt-12'>
            <Link to='/'>
              <div className='flex items-center rounded-full border px-4 py-3 text-[14px] text-[#2563EB] hover:bg-[#DCEFFF] hover:text-[#192239] hover:border-transparent'>
                <img src={Dialog} alt='Dialog' className='h-4.5 pr-2' />
                Case Study
              </div>
            </Link>
            <h1 className='text-3xl font-semibold text-center mt-5 mb-3'>DropCycle Website</h1>
            <p className='text-center text-[14px] w-65 font-poppins'>Designing Spendability in a Market That Could Only Hold Crypto</p>
          </div>

          <div className='flex justify-center mt-5 pl-10'>
            <img src={DropCycleSafari} alt='' className='' />
          </div>
        </div>
      </div>
      <div className='bg-gray-100 text-center p-5 font-extrabold'>
        <p>getcosine.app</p>
      </div>

      {/*///////////// Overview Section */}
      <div id='next' className='font-manrope'>
        <div className='container  px-15 mx-auto mt-10 border border-gray-200 py-10'>
          <div className='flex flex-col lg:flex-row justify-between gap-5'>
            <div className='lg:w-85 flex flex-col gap-4'>
              <h1 className='text-[14px] font-extrabold tracking-[5px] uppercase'>Overview</h1>
              <p className=' text-[14px]'>
                Cosine Wallet is a next-generation self-custody cryptocurrency wallet designed for both security and real-world utility. It’s built to help users manage, explore and spend crypto without giving up control of their private keys meaning users truly own and control their digital assets.
              </p>
            </div>

            <div className=' lg:w-60'>
              <h1 className='font-semibold text-[14px] uppercase'>My Roles</h1>
              <p className='text-[14px] my-4 leading-6'>
                <span className='font-semibold'>Founding Designer</span>
                <br /> Information architecture & user flows
              </p>
              <p className='text-[14px] font-semibold border border-gray-200 w-50 border-r-0 border-l-0 py-3'>2025 (1 month)</p>
            </div>
          </div>

          <div className=' flex justify-center items-center mt-10 bg-gray-100 p-5 gap-5'>
            <p className='bg-[#2563EB] h-17 w-2 '></p>
            <p>Design a website that instantly communicates value, builds trust, and drives downloads without drowning the user in blockchain complexity..</p>
          </div>
        </div>

        {/* DropCycle Website Desktop and Mobile */}

        <div className='container mx-auto flex items-center  flex-col md:flex-row md:items-start md:justify-center pt-9 pb-2 gap-5 bg-gray-100 border border-gray-200'>
          <img src={DropCycleWebsiteDesktop} alt='' className='w-85 md:w-95 md:h-220 xl:w-170 xl:h-330' />
          <img src={DropCycleWebsiteMobile} alt='' className='w-85 md:w-30 xl:w-40' />
        </div>

        {/* Early Validation */}
        <div className='bg-gray-100 mt-20'>
          <div className='container px-10 mx-auto py-10 text-center md:text-start'>
            {/* Available for Downloads on: */}

            <div className='mt-10 '>
              <p className=' font-extrabold text-[16px] '>getdropcycle.com</p>
            </div>

            <p className='text-[16px]  my-8 leading-8  lg:w-135'>A digital presence designed to attract business clients, onboard drivers, and communicate operational reliability across the delivery ecosystem.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosineWallet;
