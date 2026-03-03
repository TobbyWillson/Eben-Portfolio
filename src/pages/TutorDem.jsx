import React from "react";
import "../index.css";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/manrope";
import "@fontsource-variable/inter";
import "@fontsource/poppins";

import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { BiInfoCircle } from "react-icons/bi";

import Dialog from "../assets/images/Dialog.png";
import TutordemSignupDesktop from "../assets/images/TutordemSignupDesktop.png";
import TutordemSignupMobile from "../assets/images/TutordemSignupMobile.png";
import TutordemDashboardDesktopLight from "../assets/images/TutordemDashboardDesktopLight.png";
import TutordemDashboardMobileLight from "../assets/images/TutordemDashboardMobileLight.png";

// Current Page Bar
import CurrentPageBar from "../Components/CurrentPageBar";

const TutorDem = () => {
  return (
    <div>
      <CurrentPageBar />

      <div className='bg-[#14122D] text-white'>
        <div className='container mx-auto pt-15'>
          <div className='flex flex-col items-center justify-center'>
            <Link to='/'>
              <div className='flex items-center rounded-full border px-4 py-3 text-[14px] text-[#2563EB] hover:bg-[#DCEFFF] hover:text-[#192239] hover:border-transparent'>
                <img src={Dialog} alt='Dialog' className='h-4.5 pr-2' />
                Case Study
              </div>
            </Link>
            <h1 className='text-3xl font-semibold text-center w-60  mt-5 mb-3'>Tutordem</h1>
            <p className='text-center text-[14px] w-65 font-poppins'>Designing Trust in a Two-Sided Tutoring Marketplace</p>

            <div className='mt-9 flex flex-col md:flex-row pb-2 gap-3'>
              <img src={TutordemSignupDesktop} alt='' className='md:w-120 md:h-80 xl:w-170' />
              <img src={TutordemSignupMobile} alt='' className='md:w-30 xl:w-40' />
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className='container  px-15 mx-auto mt-10 border border-gray-200 py-10'>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='lg:w-85 flex flex-col gap-4'>
            <h1 className='text-[14px] font-extrabold tracking-[5px] uppercase'>Overview</h1>
            <p className=' text-[16px] font-semibold'>Tutordem is a structured academic ecosystem that unifies tutor discovery, performance improvement, and parental oversight into a transparent, scalable marketplace.</p>
            <p className='text-[16px] mb-10'>The Moment It Became Bigger Than “Find a Tutor”</p>
          </div>

          <div className=' lg:w-60'>
            <h1 className='font-semibold text-[14px] uppercase'>My Roles</h1>
            <p className='text-[14px] my-4 leading-6'>
              <span className='font-semibold'>Product Designer</span>
              <br /> Problem framing, User research (interviews + surveys), UX architecture, Interaction design.
            </p>
            <p className='text-[14px] font-semibold border border-gray-200 w-50 border-r-0 border-l-0 py-3'>2024 (4 months)</p>
          </div>
        </div>

        <div className=' flex  items-center mt-10 bg-gray-100 p-5 gap-5'>
          <div>
            <p className='bg-[#2563EB] h-17 w-1 '></p>
          </div>

          <div className='flex flex-col gap-3'>
            <span className='text-[14px]'>A parent once told us </span>
            <p className='font-semibold'> “I don’t just want a tutor. I want to know what my child is doing.”</p>
          </div>
        </div>
      </div>

      {/* Dashboard Images*/}
      <div className='container px-15 mx-auto border border-gray-200  bg-[#E7E7E7]'>
        <div className='mt-15 flex flex-col md:flex-row  gap-3'>
          <img src={TutordemDashboardDesktopLight} alt='' className='md:w-110 md:h-80 xl:w-160' />
          <img src={TutordemDashboardMobileLight} alt='' className='md:w-30 xl:w-30' />
        </div>
      </div>

      {/* Interviews: Hearing Users' Stories */}
      <div className='container px-10 mx-auto border border-gray-200 py-10 mb-19'>
        <div className='flex flex-col justify-between gap-3'>
          <div className=''>
            <h1 className='text-[20px] font-extrabold uppercase md:w-85'>The Real Problem Wasn’t Discovery, It Was Confidence</h1>
            <p className='my-4 text-[14px] md:w-150'> The out-of-class academic support ecosystem is fragmented, referral-driven, and lacking structured performance visibility, resulting in inefficiencies for students, income instability for tutors, and limited oversight for parents.</p>
            <p className='font-bold'>Education support outside the classroom is fragmented, informal, and opaque.</p>
          </div>

          <div className='grid lg:grid-cols-3 gap-4'>
            <div className=' bg-gray-100 p-5 gap-4 flex flex-col'>
              <p className='bg-[#2563EB] h-[2px] w-30 '></p>
              <span className='font-medium'>Student </span> <p>Scattered mock exam resources Word-of-mouth tutor referrals Unstructured preparation systems</p>
            </div>
            <div className=' bg-gray-100 p-5 gap-4 flex flex-col'>
              <p className='bg-[#2563EB] h-[2px] w-30 '></p>
              <span className='font-medium'> Tutors</span> <p>Personal networks Informal negotiations Unpredictable income streams</p>
            </div>
            <div className=' bg-gray-100 p-5 gap-4 flex flex-col'>
              <p className='bg-[#2563EB] h-[2px] w-30 '></p>
              <span className='font-medium'>Parent</span> <p>Trust-based referrals Limited academic visibility Periodic report cards instead of real-time performance data</p>
            </div>
          </div>

          <div className='flex flex-col items-start md:flex-row md:items-center gap-2 mt-3  '>
            <BiInfoCircle className='text-[#B56300] text-[24px]' />
            <p className='text-[#B56300] font-semibold'>There is no structured, transparent ecosystem connecting: Student improvement, Tutor expertise, andParental oversight</p>
          </div>
        </div>
      </div>

      {/* Confidentiality Info */}
      <div className='bg-[#FFF8F0]'>
        <div className='container px-10 mx-auto  py-10'>
          <div className='flex flex-col items-start md:flex-row md:items-center gap-2 mt-3  '>
            <BiInfoCircle className='text-[#B56300] text-[24px]' />
            <p className='text-[#B56300] font-semibold'>Due to confidentiality agreements, portions of this case study are restricted. I’d welcome the opportunity to present the full work privately.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDem;
