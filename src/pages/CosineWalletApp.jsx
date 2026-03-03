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
import CosineHandApp from "../assets/images/CosineHandApp.png";
import CosineHandLogo from "../assets/images/CosineHandLogo.png";
import AppHomeLight from "../assets/images/AppHomeLight.png";
import AppHomeDark from "../assets/images/AppHomeDark.png";
import SellAssets from "../assets/images/SellAssets.png";
import SellAssets2 from "../assets/images/SellAssets2.png";
import SendAssets from "../assets/images/SendAssets.png";
import BlurImage from "../assets/images/BlurImage.png";
import FullDAppsDark from "../assets/images/FullDAppsDark.png";
import FullHomeDark from "../assets/images/FullHomeDark.png";
import FullHomeLight from "../assets/images/FullHomeLight.png";
import FullNotification from "../assets/images/FullNotification.png";
import FullReceive from "../assets/images/FullReceive.png";
import FullSellAssets from "../assets/images/FullSellAssets.png";
import FullSplash from "../assets/images/FullSplash.png";
import FullWalletCreationDark from "../assets/images/FullWalletCreationDark.png";
import FullWalletCreationLight from "../assets/images/FullWalletCreationLight.png";

const CosineWallet = () => {
  return (
    <div className=''>
      {/* Current Page Bar */}
      <CurrentPageBar />
      <div className='bg-linear-to-b from-[#FFF] to-[#DCEFFF] '>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center justify-center my-12'>
            <Link to='/'>
              <div className='flex items-center rounded-full border-1 px-4 py-3 text-[14px] text-[#2563EB] hover:bg-[#DCEFFF] hover:text-[#192239] hover:border-transparent'>
                <img src={Dialog} alt='Dialog' className='h-4.5 pr-2' />
                Case Study
              </div>
            </Link>
            <h1 className='text-3xl font-semibold text-center w-60  mt-5 mb-3'>Cosine Wallet Mobile App</h1>
            <p className='text-center text-[14px] w-65 font-poppins'>Designing Spendability in a Market That Could Only Hold Crypto</p>
          </div>

          <div className='flex flex-col-reverse items-center justify-start xl:items-center xl:flex-row'>
            <div className='flex sm-mobile:flex-col sm-mobile:mb-2 lg-mobile:flex-row gap-3 mt-3 xl:mt-80'>
              {/* Live Icon */}
              <div className='flex justify-center items-center  gap-1 px-7 py-3   border border-gray-300 bg-transparent '>
                <MdCircle className='text-[7px] text-red-600' />
                <p className=' font-semibold text-[13px]'>Live</p>
              </div>

              {/* App Store Link */}
              <Link to=''>
                <div className='px-3 py-3 border border-gray-200 bg-white flex items-center justify-center gap-1'>
                  <FaApple />
                  <div>
                    <p className='text-[8px] mb-[-5px]'>Download on the</p>
                    <h1 className='font-semibold text-[14px]'>App Store</h1>
                  </div>
                  <GoArrowUpRight />
                </div>
              </Link>

              {/* Google Play Link*/}
              <Link to=''>
                <div className='px-3 py-3 border border-gray-200 bg-white flex items-center justify-center gap-1'>
                  <GooglePlaySVG />

                  <div>
                    <p className='text-[8px] mb-[-5px]'>GET IT ON</p>
                    <h1 className='font-semibold text-[14px]'>Google Play</h1>
                  </div>
                  <GoArrowUpRight />
                </div>
              </Link>
            </div>

            <div className='relative'>
              <img src={CosineHandApp} alt='' className='h-110' />
              <img src={CosineHandLogo} alt='' className='h-20 xl:h-20 absolute bottom-48 left-48 sm-mobile:left-54 sm-mobile:bottom-70 lg-mobile:left-58' />
            </div>
          </div>
        </div>
      </div>

      {/*///////////// Overview Section */}
      <div className='font-manrope'>
        <div className='container  px-15 mx-auto mt-10 border border-gray-200 py-10'>
          <div className='flex flex-col lg:flex-row justify-between'>
            <div className='lg:w-85 flex flex-col gap-4'>
              <h1 className='text-[14px] font-extrabold tracking-[5px] uppercase'>Overview</h1>
              <p className=' text-[14px]'>Millions of users in emerging markets hold crypto. But holding is not the same as using.</p>
              <p className='text-[18px] font-semibold mb-10'>Cosine was not only built to store crypto. It was built to make it usable.</p>
            </div>

            <div className=' lg:w-60'>
              <h1 className='font-semibold text-[14px] uppercase'>My Roles</h1>
              <p className='text-[14px] my-4 leading-6'>
                <span className='font-semibold'>Founding Designer</span>
                <br /> Problem framing, User research (interviews + surveys), UX architecture, Interaction design, Feature prioritization, Cross-functional alignment
              </p>
              <p className='text-[14px] font-semibold border border-gray-200 w-50 border-r-0 border-l-0 py-3'>2024/2025 (12 months)</p>
            </div>
          </div>

          <div className=' flex justify-center items-center mt-10 bg-gray-100 p-5 gap-5'>
            <p className='bg-[#2563EB] h-17 w-2 '></p>
            <p>I worked closely with a blockchain and mobile engineer and early crypto adopters This was not just UI execution, This was foundational product shaping.</p>
          </div>
        </div>
        <div className='container px-15 mx-auto  border border-gray-200 pt-10 flex flex-col lg:flex-row items-center justify-center gap-10'>
          <img src={AppHomeLight} alt='' className='w-60' />
          <img src={AppHomeDark} alt='' className='w-60' />
        </div>

        {/* UX Strategy */}
        <div className='container px-10 mx-auto mt-10 border border-gray-200 py-10'>
          <div className='flex flex-col lg:flex-row justify-between gap-3'>
            <div className='xl:w-90'>
              <h1 className='text-[20px] font-extrabold uppercase'>
                UX Strategy: Understanding the Real <span className='text-red-500'>Problem</span>
              </h1>
              <p className='my-4 text-[14px]'>So I stepped away from screens and features and leaned into research.</p>
            </div>

            <div className='xl:w-90  bg-gray-100 p-5 gap-4 flex flex-col'>
              <p>Before we designed a single screen, I needed to answer one question:</p>
              <p className='bg-[#2563EB] h-[2px] w-30 '></p>
              <p className='font-medium'>Were we solving the right problem or just building another wallet?</p>
            </div>
          </div>
        </div>

        {/* Interviews: Hearing Users' Stories */}
        <div className='container px-10 mx-auto border border-gray-200 py-10'>
          <div className='flex flex-col justify-between gap-3'>
            <div className=''>
              <h1 className='text-[20px] font-extrabold'>🎤 Interviews: Hearing Users’ Stories</h1>
              <p className='my-4 text-[14px]'> I conducted structured interviews with three groups:</p>
            </div>

            <div className='grid lg:grid-cols-3 gap-4'>
              <div className=' bg-gray-100 p-5 gap-4 flex flex-col'>
                <p className='bg-[#2563EB] h-[2px] w-30 '></p>
                <p>
                  <span className='font-medium'>Active crypto users</span> <br />
                  freelancers, traders, cross-border earners
                </p>
              </div>
              <div className=' bg-gray-100 p-5 gap-4 flex flex-col'>
                <p className='bg-[#2563EB] h-[2px] w-30 '></p>
                <p>
                  <span className='font-medium'> Curious non-crypto users </span> <br />
                  hesitant individuals exploring crypto
                </p>
              </div>
              <div className=' bg-gray-100 p-5 gap-4 flex flex-col'>
                <p className='bg-[#2563EB] h-[2px] w-30 '></p>
                <p>
                  <span className='font-medium'>Users previously burned by custodial platforms</span> those who experienced freezes, hacks, or fraud
                </p>
              </div>
            </div>

            <div className='flex flex-col items-start md:flex-row md:items-center gap-2 mt-3  '>
              <BiInfoCircle className='text-[#B56300] text-[18px]' />
              <p className='text-[#B56300] font-semibold'>The goal was simple: understand behavioral friction, not collect feature requests.</p>
            </div>
          </div>
        </div>

        {/* Crypto Users and Non-Users' Comments*/}
        <div className='container px-10 mx-auto border border-gray-200 py-10'>
          <div className='lg:grid grid-cols-2 gap-4'>
            <div className='flex flex-col gap-5 md:border border-gray-200 p-6'>
              <h1 className='text-[20px] font-extrabold'>Crypto Users: The Problem Isn’t Storage</h1>

              <div className=' bg-gray-100 p-5 gap-4 flex justify-center items-center'>
                <p className='bg-[#2563EB] h-30 w-2 '></p>
                <div>
                  <p>
                    One freelancer shared a frustration that framed the core problem:
                    <br />
                    <span className='font-medium'>“I have money in my wallet, but trading via P2P always feels risky. I could lose money at any step.”</span>
                  </p>
                </div>
              </div>

              <p className='mt-2 mb-5 lg:mb-0'>
                Holding crypto wasn’t the challenge. Using it safely was. Patterns emerged from multiple interviews:
                <ul className='ml-6 list-disc -indent-5 my-5'>
                  <li className='list-inside'>P2P and exchange methods felt risky — even for experienced users</li>
                  <li className='list-inside'>Converting crypto to fiat was slow, confusing, or potentially unsafe </li>
                  <li className='list-inside'>Sending funds to a long, complicated wallet address caused anxiety</li>
                  <li className='list-inside'>Small mistakes felt irreversible, creating hesitation on almost every transaction </li>
                </ul>
                Another user described triple-checking every address before sending. One wrong character could cost them money, and the fear lingered after every transaction.
              </p>
            </div>

            {/* Non - Crypto Users */}
            <div className='flex flex-col gap-5 md:border border-gray-200 p-6'>
              <h1 className='text-[20px] font-extrabold'>Non-Crypto Users: Overwhelm Blocks Entry</h1>

              <div className=' bg-gray-100 p-5 gap-4 flex justify-center items-center '>
                <p className='bg-[#2563EB] h-20 w-2 '></p>

                <p>
                  One respondent said:
                  <br />
                  <span className='font-medium'>“It feels too technical. One wrong move and my money is gone forever.”</span>
                </p>
              </div>

              <p className='mt-2'>
                Non-crypto users shared a different type of friction:
                <ul className='ml-6 list-disc -indent-5 my-5'>
                  <li className='list-inside'>Onboarding felt intimidating and overly technical </li>
                  <li className='list-inside'>Self-custody concepts were confusing (“What if I lose my seed phrase?”) </li>
                  <li className='list-inside'>Transactions seemed risky and high-stakes </li>
                  <li className='list-inside'>The ecosystem felt unforgiving, discouraging exploration </li>
                </ul>
                For them, crypto wasn’t inaccessible because of cost. It was inaccessible because confidence was missing.
              </p>
            </div>
          </div>
        </div>

        {/* Synthesizing the Insights */}
        <div className='container px-10 mx-auto border border-gray-200 py-10 bg-gray-100'>
          <div className='flex flex-col justify-between gap-3'>
            <div className=''>
              <h1 className='text-[20px] font-extrabold'> Synthesizing the Insights</h1>
              <p className='my-4 text-[14px]'> After synthesizing interviews and survey results (some of which cannot be publicly disclosed due to data sensitivity and confidentiality agreements), a single theme became clear:</p>
            </div>

            <div className=' bg-black p-5 gap-4 flex items-center text-white'>
              <p className='bg-[#2563EB] h-45 w-1 '></p>
              <div className='flex flex-col gap-2'>
                <p className='font-bold mb-5'>The biggest barrier wasn't adoption. It was confidence.</p>

                <p className='text-gray-300'>This shifted the product direction entirely.</p>
                <p className='font-bold'>Remove friction between crypto and real-world usage.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Breakdown: UX Perspective */}
        <div className='container px-10 mx-auto border border-gray-200 bg-gray-100 py-10'>
          <div className='flex flex-col justify-between gap-3'>
            <div className=''>
              <h1 className='text-[20px] font-extrabold'>Problem Breakdown (UX Perspective)</h1>
              <p className='my-4 text-[14px]'>From research, I structured friction into 4 layers:</p>
            </div>

            <div className='grid lg:grid-cols-3 gap-4'>
              <div className=' bg-white p-6 gap-4 flex flex-col'>
                <p className='bg-[#2563EB] h-[2px] w-30 '></p>
                <span className='font-bold'>Liquidity Friction</span>
                <p className='font-medium text-[14px]'>
                  Holding ≠ Using <p>Users needed:</p>
                  <ul className='ml-10 list-disc -indent-5'>
                    <li className='list-inside'>Faster sell </li>
                    <li className='list-inside'>Easier off-ramp </li>
                    <li className='list-inside'>Global convertibility (170+ countries)</li>
                  </ul>
                </p>
              </div>
              <div className=' bg-white p-6 gap-4 flex flex-col'>
                <p className='bg-[#2563EB] h-[2px] w-30 '></p>
                <span className='font-bold'>Cost Anxiety (Gas Fees)</span>
                <p className='font-medium text-[14px]'>
                  <ul className='ml-10 list-disc -indent-5'>
                    <li className='list-inside'>Gas fees weren’t just financial.</li>
                    <li className='list-inside'>They were psychological blockers. </li>
                    <li className='list-inside'>Users hesitated before every action.</li>
                  </ul>
                </p>
              </div>
              <div className=' bg-white p-6 gap-4 flex flex-col'>
                <p className='bg-[#2563EB] h-[2px] w-30 '></p>
                <span className='font-bold'>Trust & Custodial Risk</span>
                <p className='font-medium text-[14px]'>
                  Users feared:
                  <ul className='ml-10 list-disc -indent-5'>
                    <li className='list-inside'>Exchange shutdowns</li>
                    <li className='list-inside'>Account freezes </li>
                    <li className='list-inside'>Regulatory uncertainty </li>
                  </ul>
                  Trust needed architectural protection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Product Decisions (Informed by Research) */}
        <div className='container px-10 mx-auto border border-gray-200 bg-gray-100 py-10'>
          <div className='flex flex-col justify-between gap-3'>
            <div className=''>
              <h1 className='text-[20px] font-extrabold'>Strategic Product Decisions (Informed by Research)</h1>
              <p className='my-4 text-[14px]'>Strategic Product Decisions (Informed by Research)</p>
            </div>

            <p className='mt-2 mb-1 lg:mb-0'>
              Users weren’t asking for another wallet. They were asking for a safe, predictable way to use the crypto they already held.
              <ul className='ml-6 list-disc -indent-5 my-5'>
                <li className='list-inside'>Friction with P2P trades → risk of losing money </li>
                <li className='list-inside'>Confusing or slow fiat conversion → delayed access to funds </li>
                <li className='list-inside'>Complex sending processes → cognitive overload and anxiety</li>
                <li className='list-inside'>Lack of guidance for non-crypto users → adoption hesitation</li>
              </ul>
            </p>
            <div className='grid lg:grid-cols-2 gap-4 lg:mx-7'>
              {/* Grid 1 */}
              <div className=' bg-white p-6 gap-4 flex flex-col'>
                <p className='bg-[#2563EB] h-[2px] w-full '></p>
                <span className='font-bold'>Decision 1: Self-Custody by Default</span>
                <p className='font-medium text-[14px]'>
                  To address custodial fear:
                  <ul className='ml-10 list-disc -indent-5'>
                    <li className='list-inside'>Fully decentralized </li>
                    <li className='list-inside'>User-controlled assets </li>
                    <li className='list-inside'>No shutdown dependency </li>
                  </ul>
                  But UX had to remain approachable.
                </p>
              </div>

              {/* Grid 2 */}
              <div className=' bg-white p-6 gap-4 flex flex-col'>
                <p className='bg-[#2563EB] h-[2px] w-full '></p>
                {/* section 1 */}
                <span className='font-bold'>Decision 2: Gasless Swap & Gasless Sell</span>

                <div className='flex flex-col xl:flex-row gap-5'>
                  <p className='font-medium text-[14px]'>
                    Direct response to:
                    <ul className='ml-6 list-disc -indent-5'>
                      <li className='list-inside'>Transaction hesitation</li>
                      <li className='list-inside'>Cost unpredictability</li>
                      <li className='list-inside'>Small-amount pain</li>
                    </ul>
                  </p>

                  {/* section 2 */}

                  <p className='font-medium text-[14px]'>
                    Gasless reduced:
                    <ul className='ml-6 list-disc -indent-5'>
                      <li className='list-inside'>Financial drain</li>
                      <li className='list-inside'>Emotional hesitation </li>
                    </ul>
                  </p>
                </div>
              </div>

              {/* Grid 3 */}
              <div className=' bg-white p-6 gap-4 flex flex-col'>
                <p className='bg-[#2563EB] h-[2px] w-full '></p>
                {/* section 1 */}
                <span className='font-bold'>Decision 3: Multi-Channel Send</span>

                <div className='flex gap-5'>
                  <p className='font-medium text-[14px]'>
                    To reduce send anxiety, users can send via:
                    <ul className='ml-6 list-disc -indent-5'>
                      <li className='list-inside'>Wallet address</li>
                      <li className='list-inside'>Username tag</li>
                      <li className='list-inside'>ENS</li>
                      <li className='list-inside'>Cluster domain</li>
                    </ul>
                  </p>
                </div>
              </div>

              {/* Grid 4 */}
              <div className=' bg-white p-6 gap-4 flex flex-col'>
                <p className='bg-[#2563EB] h-[2px] w-full '></p>
                {/* section 1 */}
                <span className='font-bold'>Decision 4: Roadmap for Utility</span>

                <div className='flex gap-5'>
                  <p className='font-medium text-[14px]'>
                    Based on spendability demand:
                    <ul className='ml-6 list-disc -indent-5'>
                      <li className='list-inside'>Virtual dollar cards</li>
                      <li className='list-inside'>Bill payments </li>
                      <li className='list-inside'>and others</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start md:flex-row md:items-center gap-3 mt-5  '>
            <BiInfoCircle className='text-[#B56300] text-[18px]' />
            <p className='text-[#B56300] font-semibold'>The goal was simple: understand behavioral friction, not collect feature requests.</p>
          </div>
        </div>

        {/* Sell and Send Assets */}
        <div className='container px-10 mx-auto border border-gray-200 py-10'>
          <div className='grid justify-center md:grid-cols-3 gap-3 xl:gap-0 xxl:pl-20'>
            <img src={SellAssets} alt='' className='w-65' />
            <img src={SellAssets2} alt='' className='w-65' />
            <img src={SendAssets} alt='' className='w-65' />
          </div>
        </div>

        {/* Blurry Image */}
        <div className='container md:p-10 mx-auto border border-gray-200'>
          <div className=' bg-gray-100'>
            <div className='flex justify-center'>
              <img src={BlurImage} alt='' className='md:w-80' />
            </div>
          </div>
        </div>

        {/* Full Application UIs*/}
        <div className='container px-10 mx-auto border border-gray-200 py-10'>
          <div className='grid justify-center md:grid-cols-3 gap-3 xl:gap-0 xxl:pl-20'>
            <img src={FullHomeDark} alt='' className='w-65' />
            <img src={FullWalletCreationLight} alt='' className='w-65' />
            <img src={FullWalletCreationDark} alt='' className='w-65' />
            <img src={FullReceive} alt='' className='w-65' />
            <img src={FullSplash} alt='' className='w-65' />
            <img src={FullSellAssets} alt='' className='w-65' />
            <img src={FullHomeLight} alt='' className='w-65' />
            <img src={FullNotification} alt='' className='w-65' />
            <img src={FullDAppsDark} alt='' className='w-65' />
          </div>
        </div>

        {/* Early Validation */}
        <div className='bg-gray-100 mt-20'>
          <div className='container px-10 mx-auto  py-10 '>
            <div className='flex flex-col justify-between gap-3'>
              <div className='flex flex-col lg-mobile:flex-row lg-mobile:items-center lg-mobile:gap-3'>
                <h1 className='text-[20px] font-extrabold'> Early Validation</h1>
                <p className='my-4 text-[14px]'> Without paid campaigns:</p>
              </div>

              <div className=' bg-black p-5 gap-4 flex items-center text-white'>
                <p className='bg-[#2563EB] h-8 w-0.5 '></p>

                <p className='font-bold'>100+ downloads in under 2 weeks</p>
              </div>

              <div className=' bg-black p-5 gap-4 flex items-center text-white'>
                <p className='bg-[#2563EB] h-8 w-0.5 '></p>

                <p className='font-bold'>Organic referrals</p>
              </div>

              <div className=' bg-black p-5 gap-4 flex items-center text-white'>
                <p className='bg-[#2563EB] h-8 w-0.5 '></p>

                <p className='font-bold'>Returning users within 4 weeks</p>
              </div>
            </div>

            {/* Available for Downloads on: */}

            <div className='flex flex-col  md:flex-row items-center justify-center md:justify-start gap-2 mt-6 '>
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

            <p className='text-[16px] text-center my-8 leading-8 md:text-start'>The next evolution of crypto in emerging markets isn’t speculation. It’s usability. Cosine Wallet was built to remove friction not add features.</p>

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
