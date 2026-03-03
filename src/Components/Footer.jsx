import React from "react";
import "../index.css";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/manrope";
import { Link, useNavigate } from "react-router-dom";

// Socials Icons Import
import Dialog from "../assets/images/Dialog.png";
import linkedin from "../assets/images/socials/linkedin.png";
import behance from "../assets/images/socials/Behance.png";
import ball from "../assets/images/socials/Ball.png";
import X from "../assets/images/socials/X.png";
import M from "../assets/images/socials/M.png";
import instagram from "../assets/images/socials/Instagram.png";
import whatsapp from "../assets/images/socials/Whatsapp.png";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      {/* Footer - AkinEbenezer */}
      <div className='pt-25 pb-11 border border-gray-100 flex flex-col'>
        <div className='container mx-auto bg-gray-200 rounded-lg p-8 flex flex-col md:flex-row md:w-170'>
          <p className='font-manrope font-medium text-[14px] text-wrap pb-5 md:pb-0'>Building something new, validating ideas, or revamping a product? Let’s talk.</p>
          <p className='font-manrope font-bold md:text-[24px] text-[20px]'>akinebenzr@gmail.com</p>
        </div>

        <div className='container mx-auto p-8 grid grid-cols-4  md:flex lg:gap-6 justify-center gap-4'>
          <img src={linkedin} alt='' className='w-10' />
          <img src={behance} alt='' className='w-10' />
          <img src={ball} alt='' className='w-10' />
          <img src={X} alt='' className='w-10' />
          <img src={M} alt='' className='w-10' />
          <img src={instagram} alt='' className='w-10' />
          <img src={whatsapp} alt='' className='w-10' />
        </div>

        <div className='flex gap-6  justify-center items-center'>
          <Link to='/' className=' text-[#192239] text-[16px] '>
            My Resume
          </Link>

          <Link to='/'>
            <div className='flex items-center rounded-full border px-5 py-3 text-[16px] text-[#2563EB] hover:bg-[#DCEFFF] hover:text-[#192239] hover:border-transparent'>
              <img src={Dialog} alt='Dialog' className='h-4.5 pr-2' />
              book a call
            </div>
          </Link>
        </div>
      </div>

      {/* Footer Footer */}
      <div className='mt-[60px] text-center mb-[80px] md:mb-[140px]'>
        <p className='font-manrope font-medium text-[14px]'>&copy; {year} — Copyright @Ebenezer</p>
      </div>
    </div>
  );
};

export default Footer;
