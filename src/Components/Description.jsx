import React from "react";
import "../index.css";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/manrope";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import globe from "../assets/images/Globe-Icon.png";
import Dialog from "../assets/images/Dialog.png";
import CosineLogo from "../assets/images/Cosine-Logo.png";
import PoggahLogo from "../assets/images/Poggah-Logo.png";
import VerticalLine from "../assets/images/Vertical-Line.png";

const Description = () => {
  return (
    <div>
      {/* Description Section */}
      <div className='container mx-auto px-5 '>
        <div className='flex flex-row justify-between mt-15'>
          <div>
            <p className='text-[28px] leading-10 md:text-[28px] md:leading-12 text-center md:text-start mt-5'>
              <span className='text-[#2563EB]'>I'm Eben,</span> a product designer focused on designing clear, trusted digital products.
            </p>

            <div className='flex gap-3 sm:gap-6 justify-center py-[30px]  md:justify-start'>
              <Link to='/about' className='rounded-full bg-[#DCEFFF] text-[#192239] px-6 py-3 text-[16px] hover:bg-[#b2d9f8]'>
                My Resume
              </Link>

              <Link to='/'>
                <div className='flex items-center rounded-full border px-5 py-3 text-[16px] text-[#2563EB] hover:bg-[#DCEFFF] hover:text-[#192239] hover:border-transparent'>
                  <img src={Dialog} alt='Dialog' className='h-4.5 pr-2' />
                  book a call
                </div>
              </Link>
            </div>

            {/* Companies */}

            <div className='flex flex-col items-center md:flex-row'>
              <div className='flex items-center pb-3 md:pb-0'>
                <img src={CosineLogo} alt='Cosine Logo' className='h-[18px] md:h-[11px] xxl:h-[15px]' />
                <p className='font-manrope text-[15px] md:text-[13px] p-2'>FOUNDING DESIGNER</p>
              </div>

              <div className='hidden lg:block'>
                <img src={VerticalLine} alt='' className='h-5 px-5' />
              </div>

              <div className='flex items-center'>
                <img src={PoggahLogo} alt='Poogah Logo' className='h-[20px] md:h-[17px] xxl:h-[22px]' />
                <p
                  className='font-manrope text-[
                    11px] pl-2'
                >
                  LEADING DESIGN
                </p>
              </div>
            </div>
          </div>

          <div className='hidden md:block md:pt-12  xl:mr-20'>
            <img src={globe} alt='globe' className='md:w-120 xl:w-90' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
