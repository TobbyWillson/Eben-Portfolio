import { useState } from "react";
import "./index.css";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/manrope";

import eben from "./assets/images/Eben-logo.png";
import globe from "./assets/images/Globe-Icon.png";
import CosineLogo from "./assets/images/Cosine-Logo.png";
import PoggahLogo from "./assets/images/Poggah-Logo.png";
import VerticalLine from "./assets/images/Vertical-Line.png";
import Dialog from "./assets/images/Dialog.png";
import CosineWalletMobile from "./assets/images/Cosine-Wallet.png";
import CosineWalletMobileView from "./assets/images/Cosine-Wallet-Mobile.png";
import DropCycleMobile from "./assets/images/DropCycle-Mobile.png";
import DropCycleSafari from "./assets/images/DropCycle-Safari-Light.png";
import CosineSafari from "./assets/images/Cosine-Safari.png";
import iPhone from "./assets/images/iPhone-6.5.png";
import PoggahMobile from "./assets/images/Poggah-Mobile-App.png";
import Canopus from "./assets/images/Canopus.png";
import TutorDem from "./assets/images/TutorDem.png";

// Socials Icons Import
import linkedin from "./assets/images/socials/linkedin.png";
import behance from "./assets/images/socials/Behance.png";
import ball from "./assets/images/socials/Ball.png";
import X from "./assets/images/socials/X.png";
import M from "./assets/images/socials/M.png";
import instagram from "./assets/images/socials/Instagram.png";
import whatsapp from "./assets/images/socials/Whatsapp.png";

import { MdCircle } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

function App() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className=' min-h-screen'>
      <div className='container mx-auto lg:px-5'>
        {/* Nav Bar */}
        <div className='flex justify-between px-5 py-12 sm:px-0 md:px-9 md:py-12 md:pb-10 lg:px-0 xl:px-9'>
          <div className='flex items-center text-[14px] gap-11 xl:gap-25 xxl:gap-60 xxl:px-10'>
            <img src={eben} alt='logo' className='h-10 lg:h-12  ' />
            <div className='hidden md:flex gap-12 font-medium lg:gap-14 xxl:text-[16px]'>
              <a href=''>Work</a>
              <a href=''>About</a>
              <a href=''>Shoot a Mail</a>
            </div>
          </div>

          <a href='' className='rounded-full border-1 px-6 py-[10px] text-[16px] text-[#2563EB] hover:bg-[#DCEFFF]'>
            Shoot a mail
          </a>
        </div>

        {/* Description Section */}
        <div className='py-3 md:p-6 flex '>
          <div>
            <p className='text-[28px] leading-10 md:text-[28px] md:px-15 md:leading-12 text-center xl:px-30 xxl:px-40'>
              <span className='text-[#2563EB]'>I'm Eben,</span> a product designer focused on designing clear, trusted digital products.
            </p>

            <div className='flex gap-3 justify-center py-[30px] md:py-[53px]'>
              <a href='' className='rounded-full bg-[#DCEFFF] text-[#192239] px-6 py-3 text-[16px] hover:bg-[#b2d9f8]'>
                My Resume
              </a>

              <a href=''>
                <div className='flex items-center rounded-full border-1 px-5 py-3 text-[16px] text-[#2563EB] hover:bg-[#DCEFFF] hover:text-[#192239] hover:border-transparent'>
                  <img src={Dialog} alt='Dialog' className='h-4.5 pr-2' />
                  book a call
                </div>
              </a>
            </div>

            {/* Companies */}

            <div className='flex flex-col md:flex-row md:justify-center items-center'>
              <div className='flex items-center pb-3 md:pb-0'>
                <img src={CosineLogo} alt='Cosine Logo' className='h-[18px] md:h-[11px] xxl:h-[15px]' />
                <p className='font-manrope text-[15px] md:text-[13px] p-2'>FOUNDING DESIGNER</p>
              </div>

              <div className='hidden md:block'>
                <img src={VerticalLine} alt='' className='h-5 px-5' />
              </div>

              <div className='flex items-center'>
                <img src={PoggahLogo} alt='Poogah Logo' className='h-[20px] md:h-[17px] xxl:h-[22px]' />
                <p
                  className='font-manrope text-[
              11px] pl-2'
                >
                  {" "}
                  LEADING DESIGN
                </p>
              </div>
            </div>
          </div>

          <div className='hidden md:pt-12'>
            <img src={globe} alt='globe' />
          </div>
        </div>
        <p className='text-design text-center'>AKINEBENEZER</p>
      </div>

      {/* /////////////////////////////////// */}
      {/* Selected Project */}
      <div className='mt-5 md:mt-10'>
        <div className='mb-12 md:mb-15'>
          <p className='tracking-[7px] md:tracking-[20px] font-manrope font-semibold text-[14px] text-[#2563EB] text-center '>SELECTED PROJECT</p>
        </div>

        {/* Cosine Wallet and DropCycle Mobile App */}
        <div className='grid gap-8 p-5 md:grid-cols-2 md:gap-10 border-2 border-b-gray-100 border-gray-300 mb:p-9 mb:mx-12 xxl:mx-20'>
          <div className='bg-linear-to-b from-[#DCEFFF] to-[#FFFFFF] pl-7 pr-6 border border-gray-100'>
            {/* Live Icon */}
            <div className='flex justify-end pt-6 items-center gap-1'>
              <MdCircle className='text-[7px] text-red-600' />
              <p className=' font-semibold text-[13px]'>Live</p>
            </div>

            <p className='font-bold pt-1 text-[17px]'>Cosine Wallet Mobile App</p>
            <p className='text-start text-[13px] pt-4 pb-2 pr-7 md:pr-2 leading-5'>A self-custody crypto wallet designed for secure storage, seamless swaps, and everyday digital transactions.</p>

            <div className='flex pt-4 pb-7 gap-2'>
              <p className='text-start font-semibold text-[13px]'>View Case Study</p>
              <FaArrowRight className='text-gray-500' />
            </div>

            <div className=''>
              <img src={CosineWalletMobile} alt='Cosine Wallet Mobile' />
            </div>
          </div>

          <div className='bg-linear-to-b from-[#eaebec] to-[#FFFFFF] pl-7 pr-6 border border-gray-100 '>
            <div className='flex justify-end pt-6 items-center gap-1'>
              <MdCircle className='text-[7px] text-red-600' />

              <p className=' font-semibold text-[13px]'>Live</p>
            </div>
            <p className='font-bold pt-1 text-[17px]'>DropCycle Mobile App</p>
            <p className='text-start text-[13px] pt-4 pb-2 pr-13 leading-5 md:pr-0'>A unified logistics ecosystem for businesses, drivers, and end customers.</p>
            <div className='flex pt-4 pb-7 gap-2'>
              <p className='text-start font-semibold text-[13px]'>View Case Study</p>
              <FaArrowRight className='text-gray-500' />
            </div>

            <div className=''>
              <img src={DropCycleMobile} alt='DropCycle Mobile' />
            </div>
          </div>
        </div>

        {/* DropCycle Safari Mode */}
        <div className='border-2 border-t-0 border-gray-300 border-b-gray-100 md:mx-12 xxl:mx-20'>
          <div className='flex flex-col md:flex-row px-8 md:px-12 pt-9 pb-3 xxl:pr-25'>
            <div>
              <p className='font-semibold text-[18px]'>DropCycle Website</p>
              <p className='text-[14px] md:pr-20 pt-3 pb-8 md:pb-0 xxl:pr-50'>A digital presence designed to attract business clients, onboard drivers, and communicate operational reliability across the delivery ecosystem.</p>
            </div>
            <div className='flex gap-1'>
              <a href='' className='font-semibold text-[14px] text-nowrap'>
                View Website
              </a>
              <MdArrowOutward className='text-[20px]' />
            </div>
          </div>
          <div className='pl-2'>
            <img src={DropCycleSafari} alt='' />
          </div>
        </div>

        {/* Cosine Wallet Safari Mode */}
        <div className='border-2 border-t-0 border-gray-300 border-b-gray-100 md:mx-12 xxl:mx-20'>
          <div className='flex flex-col md:flex-row px-8 md:px-12 pt-9 pb-3 xxl:pr-25'>
            <div>
              <p className='font-semibold text-[18px]'>Cosine Wallet Website</p>
              <p className='text-[14px] md:pr-20 pt-3 leading-6 pb-8 md:pb-0 xxl:pr-50'>A conversion-focused marketing site that simplifies complex crypto concepts and guides users from awareness to wallet download.</p>
            </div>
            <div className='flex gap-1'>
              <a href='' className='font-semibold text-[14px] text-nowrap'>
                View Website
              </a>
              <MdArrowOutward className='text-[20px]' />
            </div>
          </div>
          <div className='pl-2'>
            <img src={CosineSafari} alt='' />
          </div>
        </div>

        {/* Mobile Apps - iRecplus & Poggah */}
        <div className='grid gap-8 p-5 md:grid-cols-2 md:gap-6 border-2  border-gray-100 border-t-0 md:p-9 md:mx-12 xxl:mx-20'>
          <div className='bg-linear-to-b from-[#DCEFFF] to-[#FFFFFF] pl-6 pr-4 border border-gray-100'>
            {/* Live Icon */}
            <div className='flex justify-end pt-6 items-center gap-1'>
              <MdCircle className='text-[7px] text-red-600' />
              <p className=' font-semibold text-[13px]'>Live</p>
            </div>

            <p className='font-bold pt-1 text-[17px]'>iRecplus Mobile App</p>
            <p className='text-start text-[13px] pt-4 pb-2 pr-7 md:pr-2 leading-5'>An integrated inventory and accounting platform enabling multi-branch businesses to manage operations from a single system.</p>

            <div className='flex pt-4 pb-7 gap-2'>
              <p className='text-start font-semibold text-[13px]'>View Case Study</p>
              <FaArrowRight className='text-gray-500' />
            </div>

            <div className=''>
              <img src={iPhone} alt='Cosine Wallet Mobile' />
            </div>
          </div>

          <div className='bg-linear-to-b from-[#eaebec] to-[#FFFFFF] pl-6 pr-4 border border-gray-100'>
            <div className='flex justify-end pt-6 items-center gap-1'>
              <MdCircle className='text-[7px] text-red-600' />

              <p className=' font-semibold text-[13px]'>Live</p>
            </div>

            <p className='font-bold pt-1 text-[17px]'>Poggah Mobile App</p>
            <p className='text-start text-[13px] pt-4 pb-2 pr-13 leading-5 md:pr-2'>A secure marketplace platform integrating escrow payments, cashback rewards, and competitive vendor offers.</p>
            <div className='flex pt-4 pb-7 gap-2'>
              <p className='text-start font-semibold text-[13px]'>View Case Study</p>
              <FaArrowRight className='text-gray-500' />
            </div>

            <div className=''>
              <img src={PoggahMobile} alt='Cosine Wallet Mobile' />
            </div>
          </div>
        </div>

        {/* Canopus Design System */}
        <div className='border-2 border-t-0 border-gray-300 border-b-gray-100 md:mx-12 xxl:mx-20'>
          <div className='flex flex-col md:flex-row px-8 md:px-12 pt-9 pb-3 xxl:pr-25'>
            <div>
              <p className='font-semibold text-[18px]'>Canopus Design System</p>
              <p className='text-[14px] md:pr-15 pt-3 leading-6 pb-8 md:pb-0 xxl:pr-50'>A centralized component and documentation system built to improve design consistency, reduce handoff friction, and accelerate product iteration.</p>
            </div>
            <div className='flex gap-1'>
              <a href='' className='font-semibold text-[14px] text-nowrap'>
                View Website
              </a>
              <MdArrowOutward className='text-[20px]' />
            </div>
          </div>
          <div className='pl-2'>
            <img src={Canopus} alt='' />
          </div>
        </div>

        {/* TutorDem - EdTech */}
        <div className='mb-10 border-2 border-t-0 border-gray-300 md:mx-12 md:mb-20 xxl:mx-20'>
          <div className='flex flex-col md:flex-row px-8 md:px-12 pt-9 pb-3 xxl:pr-25'>
            <div>
              <p className='font-semibold text-[18px]'>TutorDem - EdTech</p>
              <p className='text-[14px] md:pr-25 pt-3 leading-6 pb-8 md:pb-0 xxl:pr-50'>A multi-sided education platform designed to improve student outcomes through tutor access, digital assessments, and real-time progress visibility.</p>
            </div>
            <div className='flex gap-1 md:ml-10'>
              <a href='' className='font-semibold text-[14px] text-nowrap'>
                View Website
              </a>
              <MdArrowOutward className='text-[20px]' />
            </div>
          </div>
          <div className='pl-2'>
            <img src={TutorDem} alt='' />
          </div>
        </div>

        {/* Footer - AkinEbenezer */}
        <div className='md:pt-30 pb-11 border border-gray-100 sm:border-t-1'>
          <div className='w-75 py-7 px-6 pr-16 lg:w-170 md:w-140 bg-gray-200 container mx-auto rounded-lg md:py-12 md:px-11 block md:flex md:justify-center items-center md:gap-10 lg-mobile:w-85 sm:w-100 xxl:w-200'>
            <p className='font-manrope font-medium text-[14px] text-wrap pb-5 md:pb-0'>Building something new, validating ideas, or revamping a product? Let’s talk.</p>
            <p className='font-manrope font-bold md:text-[24px] text-[20px]'>akinebenzr@gmail.com</p>
          </div>

          <div className='md:mx-auto py-9 mx-12 grid grid-cols-4 gap-6 w-[250px] items-start md:flex md:w-10 md:justify-center md:items-center  md:gap-7 md:py-11 lg-mobile:mx-18 sm:mx-25 xxl:gap-12 '>
            <img src={linkedin} alt='' />
            <img src={behance} alt='' />
            <img src={ball} alt='' />
            <img src={X} alt='' />
            <img src={M} alt='' />
            <img src={instagram} alt='' />
            <img src={whatsapp} alt='' />
          </div>

          <div className='flex gap-1 md:gap-3  justify-center'>
            <a href='' className=' text-[#192239] px-6 py-3 text-[16px] '>
              My Resume
            </a>

            <a href=''>
              <div className='flex items-center rounded-full border-1 px-5 py-3 text-[16px] text-[#2563EB] hover:bg-[#DCEFFF] hover:text-[#192239] hover:border-transparent'>
                <img src={Dialog} alt='Dialog' className='h-4.5 pr-2' />
                book a call
              </div>
            </a>
          </div>
        </div>

        {/* Footer Footer */}
        <div className='mt-[60px] text-center mb-[80px] md:mb-[140px]'>
          <p className='font-manrope font-medium text-[14px]'>&copy; {year} — Copyright @Ebenezer</p>
        </div>
      </div>
    </div>
  );
}

export default App;
