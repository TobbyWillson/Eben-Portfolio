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

import { GoArrowRight } from "react-icons/go";

// Images
import Ebenezer from "../assets/images/Ebenezer.png";
import EbenezerSpeaking from "../assets/images/EbenezerSpeaking.png";
import Blankpage from "../assets/images/Blankpage.png";

const CosineWallet = () => {
  return (
    <div className=''>
      {/* Current Page Bar */}

      <div className=' '>
        <div className='container mx-auto px-5'>
          <div className='flex justify-center my-27 md:px-10'>
            <img src={Ebenezer} alt='' className='' />
          </div>

          {/* Details and Biography */}
          <div id='resume' className='md:px-10 font-manrope flex flex-col gap-8 leading-8 mt-15 '>
            <p className='font-extrabold'>I am Ebenezer, a product designer from Lagos, Nigeria.</p>
            <p className=''>
              I’m a product designer focused on building scalable digital systems that drive measurable business outcomes. My work spans fintech, logistics, commerce, and education platforms designing multi-sided products that balance user needs with operational and revenue realities.
            </p>
            <p>
              <span className='font-semibold'>I don’t just design interfaces. I architect product ecosystems. </span>
              <br />
              From self-custody crypto infrastructure to multi-branch accounting systems, logistics platforms, escrow-enabled marketplaces, and digital examination portals, I specialize in simplifying complex workflows into structured, high-performance experiences.
            </p>

            <p>
              <span className='font-semibold'> My approach combines:</span>
              <ul className='ml-10 list-disc -indent-5 '>
                <li className='list-inside'>Systems thinking over isolated screens</li>
                <li className='list-inside'>Business alignment over surface aesthetics </li>
                <li className='list-inside'> Measurable impact over subjective design decisions</li>
              </ul>
            </p>

            <p>I work closely with founders, engineers, and stakeholders to translate ambiguity into clear product direction ensuring what we ship is usable, scalable, and commercially viable.</p>
            <p>If it moves money, coordinates operations, or supports high-volume users, I’m interested.</p>
          </div>

          <div className='flex gap-3   items-center my-15 md:px-10'>
            <Link to='/' className=' text-[#192239] text-[16px] '>
              <div className='bg-[#DCEFFF] flex justify-center px-5 py-3 rounded-full'>My Resume</div>
            </Link>

            <Link to='/'>
              <div className='flex items-center rounded-full border px-5 py-3 text-[16px] text-[#2563EB] hover:bg-[#DCEFFF] hover:text-[#192239] hover:border-transparent'>
                <img src={Dialog} alt='Dialog' className='h-4.5 pr-2' />
                book a call
              </div>
            </Link>
          </div>

          {/* Selected Project */}
          <div className='my-25'>
            <div className=''>
              <p className='tracking-[15px] xl:tracking-[20px] leading-8 font-manrope font-semibold text-[14px] text-[#2563EB] text-center uppercase'>Speaking Engagements</p>
            </div>

            <div className='my-15 grid md:grid-cols-2 gap-9'>
              <div className=''>
                <img src={EbenezerSpeaking} alt='' />

                <div className='flex flex-col gap-1 px-4 mt-4'>
                  <p className='font-semibold'>Tech & Media Sunday | Ogun State</p>
                  <p className='text-[12px]'>The Vision for the Future, Foursquare Students’ Fellowship</p>
                  <Link to=''>
                    <div className='flex items-center gap-2 mt-3'>
                      <p className='font-semibold text-[12px] '>Presentation Document</p> <GoArrowRight className='text-[12px] ' />
                    </div>
                  </Link>
                </div>
              </div>

              <div className=''>
                <img src={Blankpage} alt='' />

                <div className='flex flex-col gap-1 px-4 mt-4'>
                  <p className='font-semibold'>Digital Media & Tech Workshop</p>
                  <p className='text-[12px]'>Create Visual Design and Church Branding </p>
                  <Link to=''>
                    <div className='flex items-center gap-2 mt-3'>
                      <p className='font-semibold text-[12px] '>Presentation Document</p> <GoArrowRight className='text-[12px] ' />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosineWallet;
