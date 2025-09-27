// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import SplitText from './SplitText'
// import { motion } from "framer-motion";
// import LightRays from "./LightRays";
// import PrismaticBurst from "./PrismaticBurst";
// import CurvedLoop from "./CurvedLoop";

// const HeroLanding = () => {
//   useGSAP(() => {
//     // Animate description text
//     gsap.fromTo(
//       ".hero-description",
//       { y: 30, opacity: 0 },
//       { 
//         y: 0, 
//         opacity: 1, 
//         duration: 1, 
//         ease: "power2.out",
//         delay: 1
//       }
//     );

//     // Animate CTA button
//     gsap.fromTo(
//       ".hero-cta",
//       { y: 30, opacity: 0, scale: 0.8 },
//       { 
//         y: 0, 
//         opacity: 1, 
//         scale: 1,
//         duration: 0.8, 
//         ease: "back.out(1.7)",
//         delay: 1.7
//       }
//     );
//   });
//   return (
//     <>
//     {/* <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
//   <LightRays
//     raysOrigin="top-center"
//     raysColor="#00ffff"
//     raysSpeed={1.5}
//     lightSpread={0.8}
//     rayLength={1.2}
//     followMouse={true}
//     mouseInfluence={0.1}
//     noiseAmount={0.1}
//     distortion={0.05}
//     className="custom-rays"
//   />
// </div> */}
// {/* <div style={{ width: '100%', height: '100vh', position: 'absolute' }}>
//   <PrismaticBurst
//     animationType="rotate3d"
//     intensity={2}
//     speed={0.5}
//     distort={0}
//     paused={false}
//     offset={{ x: 0, y: 0 }}
//     hoverDampness={0.25}
//     rayCount={24}
//     mixBlendMode="lighten"
//     colors={['#B5B964', '#000', '#000']}
//   />
// </div> */}
//       {/* Background image */}
//       {/* <div className="absolute top-0 left-0 z-0 pointer-events-none">
//         <img src="/images/bg.png" alt="background" />
//       </div> */}
//       <div className="relative z-10 min-h-screen flex flex-col">
//         {/* Centered Hero Content */}
//         <header className="flex-1 flex items-center justify-center w-full md:px-20 px-5">
//           <div className="mx-auto max-w-6xl flex flex-col items-center text-center gap-8">
//             {/* <SplitText
//               text="Attention • Recall • Revenue"
//               className="text-7xl font-semibold text-center"
//               delay={100}
//               duration={0.6}
//               ease="power3.out"
//               splitType="words"
//               from={{ opacity: 0, y: 40 }}
//               to={{ opacity: 1, y: 0 }}
//               threshold={0.1}
//               rootMargin="-100px"
//               textAlign="center"
//             /> */}
//             <CurvedLoop 
//   marqueeText="Attention ✦ Recall ✦ Revenue ✦"
//   speed={3}
//   curveAmount={-150}
//   direction="right"
//   interactive={true}
//   className="custom-text-style"
// />

//             {/* Smaller Description */}
//             <div className="relative max-w-3xl">
//               <p className="hero-description font-normal text-gray-400 text-base md:text-lg leading-relaxed mb-8">
//               We listen to your audience, craft engaging content, and place it where it matters most. Ads drive sales while micro-campaigns and UGC build loyalty for lasting growth.</p>
//             </div>

//             {/* Enhanced CTA Button */}
//             <div className="hero-cta relative group">
//               <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
//               <button className="relative inline-flex h-14 md:h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 hover:scale-105">
//                 <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_25%,#FF6B6B_50%,#4ECDC4_75%,#E2CBFF_100%)]" />
//                 <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-1 text-base md:text-lg font-semibold text-white backdrop-blur-3xl transition-all duration-300 hover:bg-gray-900">
//                   <span className="mr-2">Book a call</span>
//                   <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </span>
//               </button>
//             </div>
//           </div>
//         </header>     
//       </div> 
//       </>
//   )
// }

// export default HeroLanding

import { motion } from 'framer-motion'
import "./hero.css"

function HeroLanding() {
  const bottomAnimation = {
    initial: { y: '20%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  }

  return (
    <section>
      <div className='relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
        <div className='container relative z-10'>
          <div className='flex flex-col gap-8'>
            {/* ---------------- heading text --------------- */}
            <motion.div
              {...bottomAnimation}
              className='relative flex flex-col text-center items-center gap-4'>
              <h1 className='font-medium w-full dark:text-white'>
                Building bold brands with
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  {' '}
                  thoughtful design
                </span>
              </h1>
              <p className='max-w-38 dark:text-white/70'>
                At Elation, we listen to your audience, craft engaging content, and place it where it matters most. Ads drive sales while micro-campaigns and UGC build loyalty for lasting growth.
              </p>
            </motion.div>

            <motion.div
              {...bottomAnimation}
              className='flex flex-col items-center justify-center gap-4'>
              <div className='flex flex-col items-center justify-center gap-8 w-full sm:flex-row'>
                {/* ----------- Get started Link -------------- */}
                {/* <a
                  href='/contact'
                  className='group bg-purple_blue text-white font-medium flex flex-row justify-between items-center py-2 px-5 rounded-full max-w-64 w-full md:py-3 border border-purple_blue transition-all duration-200 ease-in-out hover:bg-transparent hover:text-purple_blue'>
                  <span className='flex text-start transform transition-transform duration-200 ease-in-out group-hover:translate-x-28'>
                    Book a Call
                  </span>
                  <svg
                    width='40'
                    height='40'
                    viewBox='0 0 40 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='transform transition-transform duration-200 ease-in-out group-hover:-translate-x-44 group-hover:rotate-45'>
                    <rect
                      width='40'
                      height='40'
                      rx='20'
                      className='fill-white transition-colors duration-200 ease-in-out group-hover:fill-purple_blue'
                    />
                    <path
                      d='M15.832 15.3334H24.1654V23.6667'
                      className='stroke-[#1B1D1E] transition-colors duration-200 ease-in-out group-hover:stroke-white'
                      strokeWidth='1.66667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M15.832 23.6667L24.1654 15.3334'
                      className='stroke-[#1B1D1E] transition-colors duration-500 ease-in-out group-hover:stroke-white'
                      strokeWidth='1.66667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </a>            */}
                <div className="hero-cta relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <button className="relative inline-flex h-14 md:h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 hover:scale-105">
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_25%,#FF6B6B_50%,#4ECDC4_75%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-1 text-base md:text-lg font-semibold text-white backdrop-blur-3xl transition-all duration-300 hover:bg-gray-900">
                      <span className="mr-2">Book a call</span>
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </div>

                {/* --------------- avatar division -------------- */}
                
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroLanding
