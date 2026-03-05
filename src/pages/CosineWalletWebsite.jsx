import React from "react";
import "../index.css";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/manrope";
import "@fontsource-variable/inter";
import "@fontsource/poppins";

import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Icons Imports
import { BiInfoCircle } from "react-icons/bi";
import { GoArrowUpRight } from "react-icons/go";
import { FaApple } from "react-icons/fa";
import { MdCircle } from "react-icons/md";
import GooglePlaySVG from "../Components/GooglePlaySVG";

// Current Page Bar
import CurrentPageBar from "../Components/CurrentPageBar";

// Socials Icons Import
import Dialog from "../assets/images/Dialog.png";

// Images
import CosineSafari from "../assets/images/Cosine-Safari.png";
import CosineSafariDark from "../assets/images/CosineSafariDark.png";
import CosineSafariDarkMobile from "../assets/images/CosineSafariDarkMobile.png";
import DropdownFeaturesLight from "../assets/images/DropdownFeaturesLight.png";
import DropdownFeaturesDark from "../assets/images/DropdownFeaturesDark.png";

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
            <h1 className='text-3xl font-semibold text-center w-60  mt-5 mb-3'>Cosine Wallet Website</h1>
            <p className='text-center text-[14px] w-65 font-poppins'>Designing Spendability in a Market That Could Only Hold Crypto</p>
          </div>

          <div className='flex justify-center mt-5'>
            <img src={CosineSafari} alt='' className='' />
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

        {/* Cosine Safari Dark */}
        <div className='container mx-auto gap-5 border border-gray-200 flex items-center flex-col md:flex-row md:items-start md:justify-center pt-9 pb-2'>
          <img src={CosineSafariDark} alt='' className='w-85 md:w-125 md:h-120 xl:w-170' />
          <img src={CosineSafariDarkMobile} alt='' className='w-85 md:w-30 xl:w-40' />
        </div>

        {/* UX Strategy */}
        <div className='container px-10 mx-auto border border-gray-200 py-10'>
          <div className='flex flex-col justify-between gap-5'>
            <img src={DropdownFeaturesLight} alt='' />
            <img src={DropdownFeaturesDark} alt='' />
          </div>
        </div>

        {/* Early Validation */}
        <div className='bg-gray-100 mt-20'>
          <div className='container px-10 mx-auto  py-10 '>
            {/* Available for Downloads on: */}

            <div className='flex flex-col  md:flex-row items-center justify-center md:justify-start gap-2 mt-10 '>
              {/* App Store Link */}
              <Link to=''>
                <div className='px-3 py-2 border border-gray-200 bg-white flex items-center justify-center gap-1'>
                  <FaApple />
                  <div>
                    <p className='text-[8px] mb-[-2px]'>Download on the</p>
                    <h1 className='font-semibold text-[10px]'>App Store</h1>
                  </div>
                  <GoArrowUpRight />
                </div>
              </Link>

              {/* Google Play Link*/}
              <Link to=''>
                <div className='px-3 py-2 border border-gray-200 bg-white flex items-center justify-center gap-1'>
                  <GooglePlaySVG />

                  <div>
                    <p className='text-[8px] mb-[-2px]'>GET IT ON</p>
                    <h1 className='font-semibold text-[10px]'>Google Play</h1>
                  </div>
                  <GoArrowUpRight />
                </div>
              </Link>

              <div className=''>
                <p className=' font-extrabold text-[16px] text-center'>getcosine.app</p>
              </div>
            </div>

            <p className='text-[16px] text-center my-8 leading-8 md:text-start lg:w-145'>The next evolution of crypto in emerging markets isn’t speculation. It’s usability. Cosine Wallet was built to remove friction not add features.</p>

            <div className='flex flex-col items-center md:flex-row md:items-center gap-3 md:w-120'>
              <BiInfoCircle className='text-[#B56300] text-[24px]' />
              <p className='text-[#B56300] font-semibold text-center md:text-start'>Certain metrics and internal research data cannot be publicly disclosed, However, I’m happy to discuss</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosineWallet;
