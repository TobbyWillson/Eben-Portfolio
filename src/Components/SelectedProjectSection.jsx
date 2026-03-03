import React from "react";
import "../index.css";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/manrope";

import CosineWalletMobile from "../assets/images/Cosine-Wallet.png";
import CosineWalletMobileView from "../assets/images/Cosine-Wallet-Mobile.png";
import DropCycleMobile from "../assets/images/DropCycle-Mobile.png";
import DropCycleSafari from "../assets/images/DropCycle-Safari-Light.png";
import CosineSafari from "../assets/images/Cosine-Safari.png";
import iPhone from "../assets/images/iPhone-6.5.png";
import PoggahMobile from "../assets/images/Poggah-Mobile-App.png";
import Canopus from "../assets/images/Canopus.png";
import TutorDem from "../assets/images/TutorDem.png";

import { MdCircle } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";

const SelectedProjectSection = () => {
  return (
    <div>
      {/* Selected Project */}
      <div id='work' className='mt-15 md:mt-10 xxl:mx-15'>
        <div className='mb-12 md:mb-15 mt-15'>
          <p className='tracking-[7px] md:tracking-[20px] font-manrope font-semibold text-[14px] text-[#2563EB] text-center '>SELECTED PROJECT</p>
        </div>

        {/* Cosine Wallet and DropCycle Mobile App */}
        <div className='grid gap-8 p-5 md:grid-cols-2 md:gap-5 border-2 border-b-gray-100   border-gray-300 md:p-5 md:mx-12 xxl:mx-20'>
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
              <Link to='/' className='font-semibold text-[14px] text-nowrap'>
                View Website
              </Link>
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
              <Link to='/' className='font-semibold text-[14px] text-nowrap'>
                View Website
              </Link>
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
              <Link to='/' className='font-semibold text-[14px] text-nowrap'>
                View Website
              </Link>
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
              <Link to='/' className='font-semibold text-[14px] text-nowrap'>
                View Website
              </Link>
              <MdArrowOutward className='text-[20px]' />
            </div>
          </div>
          <div className='pl-2'>
            <img src={TutorDem} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProjectSection;
