// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // Enhanced Icon components with better visual appeal
// const ChartIcon = ({ className = "w-6 h-6" }) => (
//   <svg className={className} fill="currentColor" viewBox="0 0 24 24">
//     <path d="M3 3v18h18v-2H5V3H3zm4 14h2V9H7v8zm4-4h2V7h-2v6zm4-3h2V5h-2v5z"/>
//   </svg>
// );

// const CreativeIcon = ({ className = "w-6 h-6" }) => (
//   <svg className={className} fill="currentColor" viewBox="0 0 24 24">
//     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//   </svg>
// );

// const DistributionIcon = ({ className = "w-6 h-6" }) => (
//   <svg className={className} fill="currentColor" viewBox="0 0 24 24">
//     <path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 2.84L18.16 11H16v7H8v-7H5.84L12 4.84z"/>
//   </svg>
// );

// const PerformanceIcon = ({ className = "w-6 h-6" }) => (
//   <svg className={className} fill="currentColor" viewBox="0 0 24 24">
//     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
//   </svg>
// );

// const InsightsIcon = ({ className = "w-6 h-6" }) => (
//   <svg className={className} fill="currentColor" viewBox="0 0 24 24">
//     <path d="M9 11H7v6h2v-6zm4-4h-2v10h2V7zm4-3h-2v13h2V4zm2 18H5V4H3v16c0 1.1.9 2 2 2h14v-2z"/>
//   </svg>
// );

// const ServiceSlider = () => {
//   const containerRef = useRef(null);
//   const titleRef = useRef(null);

//   useGSAP(() => {
//     // Enhanced entrance animations
//     gsap.fromTo(
//       titleRef.current,
//       { 
//         opacity: 0, 
//         y: -50, 
//         rotationX: 15,
//         scale: 0.9 
//       },
//       { 
//         opacity: 1, 
//         y: 0, 
//         rotationX: 0,
//         scale: 1,
//         duration: 1.2, 
//         delay: 0.3,
//         ease: "back.out(1.4)"
//       }
//     );

//     // Floating background animations
//     gsap.to(".floating-orb-1", {
//       y: -30,
//       x: 20,
//       rotation: 360,
//       duration: 8,
//       ease: "none",
//       repeat: -1
//     });

//     gsap.to(".floating-orb-2", {
//       y: 25,
//       x: -15,
//       rotation: -360,
//       duration: 10,
//       ease: "none",
//       repeat: -1,
//       delay: 2
//     });

//     gsap.to(".floating-orb-3", {
//       scale: 1.2,
//       opacity: 0.8,
//       duration: 4,
//       ease: "power2.inOut",
//       yoyo: true,
//       repeat: -1,
//       delay: 1
//     });
//   }, { scope: containerRef });

//   const services = [
//     {
//       id: 1,
//       title: "Marketing Strategy",
//       subtitle: "Strategic Planning & Analysis",
//       icon: ChartIcon,
//       color: "blue",
//       gradient: "from-blue-500 via-blue-600 to-blue-700",
//       items: [
//         { title: "Audience Mapping", desc: "identify segments and uncover digital opportunities to win attention.", icon: "👥" },
//         { title: "Competitor Analysis", desc: "scan messaging, hooks, and funnels to spot market gaps.", icon: "🔍" },
//         { title: "Brand Positioning", desc: "define how your brand communicates and builds recall.", icon: "🎯" },
//         { title: "Campaign Ideation", desc: "plan micro-campaigns and activations aligned with growth.", icon: "💡" }
//       ]
//     },
//     {
//       id: 2,
//       title: "Content Creation",
//       subtitle: "Creative Production & Design",
//       icon: CreativeIcon,
//       color: "emerald",
//       gradient: "from-emerald-500 via-green-600 to-teal-700",
//       items: [
//         { title: "Scripts & Copy", desc: "craft stories, captions, and ad copy that convert attention into action.", icon: "✍️" },
//         { title: "Video Production", desc: "produce Reels, Shorts, UGC, and founder-led content tailored to your audience.", icon: "🎬" },
//         { title: "Design & Carousels", desc: "deliver graphics and visual assets that stand out in crowded feeds.", icon: "🎨" },
//         { title: "Creative Testing", desc: "generate multiple hooks and variations to find what performs best.", icon: "🧪" }
//       ]
//     },
//     {
//       id: 3,
//       title: "Editing & Distribution",
//       subtitle: "Content Delivery & Optimization",
//       icon: DistributionIcon,
//       color: "purple",
//       gradient: "from-purple-500 via-violet-600 to-indigo-700",
//       items: [
//         { title: "Video Editing", desc: "turn raw footage into scroll-stopping content with sharp cuts and motion graphics.", icon: "✂️" },
//         { title: "Platform Packaging", desc: "adapt content into native formats for Instagram, YouTube, LinkedIn, and TikTok.", icon: "📱" },
//         { title: "Multi-Account Publishing", desc: "distribute across founder, brand, and partner handles for reach.", icon: "📡" },
//         { title: "Strategic Scheduling", desc: "optimize timing and seed content with creators to drive recall.", icon: "⏰" }
//       ]
//     },
//     {
//       id: 4,
//       title: "Performance Marketing",
//       subtitle: "Paid Advertising & Growth",
//       icon: PerformanceIcon,
//       color: "orange",
//       gradient: "from-orange-500 via-red-600 to-pink-700",
//       items: [
//         { title: "Awareness Ads", desc: "capture attention and grow brand recall on Meta, YouTube, and LinkedIn with efficient CPM.", icon: "👁️" },
//         { title: "Engagement Ads", desc: "deliver value through saves, shares, and interactions to lift engagement rates.", icon: "❤️" },
//         { title: "Retargeting Ads", desc: "re-engage warm audiences, improving CTR and lowering CPL.", icon: "🔄" },
//         { title: "Conversion Ads", desc: "lead audiences to purchase or inquiry, delivering positive ROAS and revenue.", icon: "💰" }
//       ]
//     },
//     {
//       id: 5,
//       title: "Insights & Optimization",
//       subtitle: "Data Analytics & Reporting",
//       icon: InsightsIcon,
//       color: "cyan",
//       gradient: "from-cyan-500 via-sky-600 to-blue-700",
//       items: [
//         { title: "Competitor Reports", desc: "deliver bi-weekly scans of trends, hooks, and opportunities in your category.", icon: "📊" },
//         { title: "Performance Tracking", desc: "we measure CPM, ROAS, hook rate, engagement metrics, CPL, ROI, and any other given KPI to refine output.", icon: "📈" },
//         { title: "Audience Feedback", desc: "turn comments, polls, and DMs into actionable creative inputs.", icon: "💬" },
//         { title: "Continuous Refresh", desc: "update ads, reallocate budgets, and sharpen content for compounding ROI.", icon: "🔄" }
//       ]
//     }
//   ];

//   const getColorClasses = (color) => {
//     const colors = {
//       blue: {
//         border: "hover:border-blue-400/70 focus-within:border-blue-400/80",
//         shadow: "hover:shadow-blue-500/30 group-hover:shadow-2xl",
//         bg: "from-blue-600/12 via-blue-700/8 to-blue-800/12",
//         icon: "from-blue-500 to-blue-600",
//         iconShadow: "group-hover:shadow-blue-500/60",
//         text: "group-hover:text-blue-100",
//         accent: "text-blue-400",
//         itemBg: "hover:bg-blue-500/10",
//         glow: "group-hover:shadow-blue-500/40"
//       },
//       emerald: {
//         border: "hover:border-emerald-400/70 focus-within:border-emerald-400/80",
//         shadow: "hover:shadow-emerald-500/30 group-hover:shadow-2xl",
//         bg: "from-emerald-600/12 via-green-700/8 to-teal-800/12",
//         icon: "from-emerald-500 to-green-600",
//         iconShadow: "group-hover:shadow-emerald-500/60",
//         text: "group-hover:text-emerald-100",
//         accent: "text-emerald-400",
//         itemBg: "hover:bg-emerald-500/10",
//         glow: "group-hover:shadow-emerald-500/40"
//       },
//       purple: {
//         border: "hover:border-purple-400/70 focus-within:border-purple-400/80",
//         shadow: "hover:shadow-purple-500/30 group-hover:shadow-2xl",
//         bg: "from-purple-600/12 via-violet-700/8 to-indigo-800/12",
//         icon: "from-purple-500 to-violet-600",
//         iconShadow: "group-hover:shadow-purple-500/60",
//         text: "group-hover:text-purple-100",
//         accent: "text-purple-400",
//         itemBg: "hover:bg-purple-500/10",
//         glow: "group-hover:shadow-purple-500/40"
//       },
//       orange: {
//         border: "hover:border-orange-400/70 focus-within:border-orange-400/80",
//         shadow: "hover:shadow-orange-500/30 group-hover:shadow-2xl",
//         bg: "from-orange-600/12 via-red-700/8 to-pink-800/12",
//         icon: "from-orange-500 to-red-600",
//         iconShadow: "group-hover:shadow-orange-500/60",
//         text: "group-hover:text-orange-100",
//         accent: "text-orange-400",
//         itemBg: "hover:bg-orange-500/10",
//         glow: "group-hover:shadow-orange-500/40"
//       },
//       cyan: {
//         border: "hover:border-cyan-400/70 focus-within:border-cyan-400/80",
//         shadow: "hover:shadow-cyan-500/30 group-hover:shadow-2xl",
//         bg: "from-cyan-600/12 via-sky-700/8 to-blue-800/12",
//         icon: "from-cyan-500 to-sky-600",
//         iconShadow: "group-hover:shadow-cyan-500/60",
//         text: "group-hover:text-cyan-100",
//         accent: "text-cyan-400",
//         itemBg: "hover:bg-cyan-500/10",
//         glow: "group-hover:shadow-cyan-500/40"
//       }
//     };
//     return colors[color] || colors.blue;
//   };

//   return (
//     <motion.section 
//       ref={containerRef}
//       className="relative py-24 lg:py-36 overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-gray-950 to-black"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//       viewport={{ once: true }}
//     >
//       {/* Enhanced Floating Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="floating-orb-1 absolute -top-48 -right-48 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-pink-500/10 rounded-full blur-3xl"></div>
//         <div className="floating-orb-2 absolute -bottom-48 -left-48 w-80 h-80 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 rounded-full blur-3xl"></div>
//         <div className="floating-orb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-indigo-500/8 to-purple-500/6 rounded-full blur-3xl"></div>
        
//         {/* Additional depth layers */}
//         <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-gradient-to-br from-emerald-500/10 to-teal-500/8 rounded-full blur-2xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-red-500/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
//       </div>

//       {/* Mesh gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>

//       <div className="relative z-10 max-w-8xl mx-auto px-4 lg:px-8">
//         {/* Enhanced Header */}
//         <motion.div 
//           ref={titleRef}
//           className="text-center mb-20 lg:mb-32"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//         >          
//           <motion.h2 
//             className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 mb-8 leading-tight tracking-tight"
//             initial={{ opacity: 0, y: 30, rotationX: 15 }}
//             whileInView={{ opacity: 1, y: 0, rotationX: 0 }}
//             transition={{ duration: 1, delay: 0.2 }}
//           >
//             Services We Offer
//           </motion.h2>
          
//           <motion.p 
//             className="text-gray-300 text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-medium"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             Comprehensive digital solutions designed to accelerate your brand's growth in the modern marketplace.
//           </motion.p>
//         </motion.div>

//         {/* Enhanced Swiper Carousel */}
//         <Swiper
//           effect={'coverflow'}
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={'auto'}
//           spaceBetween={40}
//           coverflowEffect={{
//             rotate: 25,
//             stretch: 0,
//             depth: 200,
//             modifier: 1.8,
//             slideShadows: true,
//           }}
//           pagination={{
//             clickable: true,
//             dynamicBullets: true,
//             renderBullet: (index, className) => (
//               `<span class="${className} !bg-white/40 !w-4 !h-4 !rounded-full !transition-all !duration-300 hover:!bg-white/70 !mx-2"></span>`
//             ),
//           }}
//           navigation={{
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           }}
//           autoplay={{
//             delay: 4000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 1,
//               spaceBetween: 30,
//               coverflowEffect: { rotate: 45, depth: 250 },
//             },
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 35,
//               coverflowEffect: { rotate: 35, depth: 220 },
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 40,
//               coverflowEffect: { rotate: 25, depth: 200 },
//             },
//           }}
//           modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
//           className="service-swiper !pb-20"
//         >
//           {services.map((service) => {
//             const colorClasses = getColorClasses(service.color);
//             return (
//               <SwiperSlide key={service.id} className="!max-w-md lg:!max-w-lg !h-auto">
//                 <motion.div 
//                   className={`service-card group relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl transition-all duration-700 ${colorClasses.border} ${colorClasses.shadow} ${colorClasses.glow} min-h-[600px] flex flex-col`}
//                   whileHover={{ scale: 1.05, y: -12 }}
//                   transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 25 }}
//                 >
//                   {/* Gradient overlays */}
//                   <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
//                   {/* Floating background icon */}
//                   <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-20 transition-all duration-700 transform group-hover:scale-110 group-hover:rotate-12">
//                     {service.icon({ className: "w-20 h-20" })}
//                   </div>

//                   {/* Shimmer effect */}
//                   <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

//                   <div className="relative z-10 flex flex-col h-full">
//                     {/* Enhanced Header */}
//                     <div className="flex items-start mb-8">
//                       <motion.div 
//                         className={`service-icon flex items-center justify-center w-16 h-16 bg-gradient-to-br ${colorClasses.icon} rounded-2xl shadow-2xl ${colorClasses.iconShadow} transition-all duration-500 mr-6 flex-shrink-0`}
//                         whileHover={{ scale: 1.15, rotate: 12 }}
//                         transition={{ duration: 0.4, type: "spring" }}
//                       >
//                         <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                         {service.icon({ className: "w-8 h-8 relative z-10" })}
//                       </motion.div>
//                       <div className="flex-1">
//                         <h3 className={`text-2xl lg:text-3xl font-black text-white ${colorClasses.text} transition-all duration-500 mb-2 leading-tight`}>
//                           {service.title}
//                         </h3>
//                         <p className={`${colorClasses.accent} text-sm font-semibold uppercase tracking-wider`}>
//                           {service.subtitle}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Enhanced Service Items */}
//                     <div className="space-y-4 flex-1">
//                       {service.items.map((item, index) => (
//                         <motion.div 
//                           key={index} 
//                           className={`group/item flex items-start p-4 rounded-2xl transition-all duration-400 ${colorClasses.itemBg} border border-transparent hover:border-white/10 backdrop-blur-sm`}
//                           whileHover={{ x: 6, scale: 1.02 }}
//                           transition={{ duration: 0.3 }}
//                         >
//                           <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-lg mr-4 flex-shrink-0 group-hover/item:bg-white/20 transition-colors duration-300">
//                             <span className="text-lg">{item.icon}</span>
//                           </div>
//                           <div className="flex-1">
//                             <h4 className={`text-white font-bold text-base mb-2 ${colorClasses.text} transition-colors duration-300 group-hover/item:transform group-hover/item:translate-x-1`}>
//                               {item.title}
//                             </h4>
//                             <p className="text-gray-300 text-sm leading-relaxed group-hover/item:text-gray-200 transition-colors duration-300">
//                               {item.desc}
//                             </p>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>

//                     {/* Bottom accent with pulsing effect */}
//                     <div className="relative mt-8 pt-6">
//                       <div className={`h-2 bg-gradient-to-r ${service.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-lg`}></div>
//                       <div className={`absolute inset-0 h-2 bg-gradient-to-r ${service.gradient} rounded-full blur-md opacity-0 group-hover:opacity-60 transition-all duration-700`}></div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>

//         {/* Enhanced Navigation Buttons */}
//         <div className="swiper-button-prev !left-4 lg:!left-8 !top-1/2 !-translate-y-1/2 !w-14 !h-14 !bg-gray-900/80 !backdrop-blur-xl !rounded-full !text-white hover:!bg-gray-800/90 !transition-all !duration-300 !shadow-2xl hover:!shadow-3xl hover:!scale-110 !border !border-white/10 after:!text-lg after:!font-bold">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
//           </svg>
//         </div>
//         <div className="swiper-button-next !right-4 lg:!right-8 !top-1/2 !-translate-y-1/2 !w-14 !h-14 !bg-gray-900/80 !backdrop-blur-xl !rounded-full !text-white hover:!bg-gray-800/90 !transition-all !duration-300 !shadow-2xl hover:!shadow-3xl hover:!scale-110 !border !border-white/10 after:!text-lg after:!font-bold">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
//           </svg>
//           </div>
//       </div>

//       <style jsx>{`
//         .service-swiper {
//           padding: 60px 0;
//         }

//         .service-swiper .swiper-slide {
//           display: flex;
//           justify-content: center;
//           opacity: 0.4;
//           transition: opacity 0.6s ease, transform 0.6s ease;
//           height: auto;
//         }

//         .service-swiper .swiper-slide-active {
//           opacity: 1;
//           transform: scale(1.02);
//         }

//         .service-swiper .swiper-slide-next,
//         .service-swiper .swiper-slide-prev {
//           opacity: 0.7;
//         }

//         .service-swiper .swiper-slide-active .service-card {
//           transform: scale(1.08) rotateY(0deg);
//           box-shadow: 0 32px 64px -12px rgba(0, 0, 0, 0.4);
//         }

//         .service-swiper .swiper-pagination {
//           bottom: -20px !important;
//         }

//         .service-swiper .swiper-pagination-bullet {
//           background: rgba(255, 255, 255, 0.4) !important;
//           width: 16px !important;
//           height: 16px !important;
//           margin: 0 8px !important;
//           transition: all 0.3s ease !important;
//         }

//         .service-swiper .swiper-pagination-bullet-active {
//           background: white !important;
//           width: 20px !important;
//           height: 20px !important;
//           box-shadow: 0 0 20px rgba(255, 255, 255, 0.5) !important;
//         }

//         .swiper-button-prev::after,
//         .swiper-button-next::after {
//           display: none;
//         }

//         @media (max-width: 768px) {
//           .service-swiper {
//             padding: 40px 0;
//           }

//           .service-swiper .swiper-slide {
//             width: 90% !important;
//           }

//           .swiper-button-prev,
//           .swiper-button-next {
//             display: none !important;
//           }
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           33% { transform: translateY(-10px) rotate(120deg); }
//           66% { transform: translateY(5px) rotate(240deg); }
//         }

//         .floating-orb-1,
//         .floating-orb-2,
//         .floating-orb-3 {
//           animation: float 20s ease-in-out infinite;
//         }

//         .floating-orb-2 {
//           animation-delay: -7s;
//         }

//         .floating-orb-3 {
//           animation-delay: -14s;
//         }
//       `}</style>
//     </motion.section>
//   );
// };

// export default ServiceSlider;

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Icon components
const ChartIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 3v18h18v-2H5V3H3zm4 14h2V9H7v8zm4-4h2V7h-2v6zm4-3h2V5h-2v5z"/>
  </svg>
);

const CreativeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const DistributionIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 2.84L18.16 11H16v7H8v-7H5.84L12 4.84z"/>
  </svg>
);

const PerformanceIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

const InsightsIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 11H7v6h2v-6zm4-4h-2v10h2V7zm4-3h-2v13h2V4zm2 18H5V4H3v16c0 1.1.9 2 2 2h14v-2z"/>
  </svg>
);

const ServiceShowcase = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".service-grid-card",
      { opacity: 0, y: 60, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }
    );
  }, { scope: containerRef });

  // Enhanced close function
  const handleCloseModal = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSelectedCard(null);
  };

  // Handle escape key and body scroll
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedCard(null);
      }
    };

    if (selectedCard) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedCard]);

  // Your provided services data
  const services = [
    {
      id: 1,
      title: "Marketing Strategy",
      subtitle: "Strategic Planning & Analysis",
      icon: ChartIcon,
      color: "blue",
      gradient: "from-blue-500 via-blue-600 to-blue-700",
      items: [
        { title: "Audience Mapping", desc: "identify segments and uncover digital opportunities to win attention.", icon: "👥" },
        { title: "Competitor Analysis", desc: "scan messaging, hooks, and funnels to spot market gaps.", icon: "🔍" },
        { title: "Brand Positioning", desc: "define how your brand communicates and builds recall.", icon: "🎯" },
        { title: "Campaign Ideation", desc: "plan micro-campaigns and activations aligned with growth.", icon: "💡" }
      ]
    },
    {
      id: 2,
      title: "Content Creation",
      subtitle: "Creative Production & Design",
      icon: CreativeIcon,
      color: "emerald",
      gradient: "from-emerald-500 via-green-600 to-teal-700",
      items: [
        { title: "Scripts & Copy", desc: "craft stories, captions, and ad copy that convert attention into action.", icon: "✍️" },
        { title: "Video Production", desc: "produce Reels, Shorts, UGC, and founder-led content tailored to your audience.", icon: "🎬" },
        { title: "Design & Carousels", desc: "deliver graphics and visual assets that stand out in crowded feeds.", icon: "🎨" },
        { title: "Creative Testing", desc: "generate multiple hooks and variations to find what performs best.", icon: "🧪" }
      ]
    },
    {
      id: 3,
      title: "Editing & Distribution",
      subtitle: "Content Delivery & Optimization",
      icon: DistributionIcon,
      color: "purple",
      gradient: "from-purple-500 via-violet-600 to-indigo-700",
      items: [
        { title: "Video Editing", desc: "turn raw footage into scroll-stopping content with sharp cuts and motion graphics.", icon: "✂️" },
        { title: "Platform Packaging", desc: "adapt content into native formats for Instagram, YouTube, LinkedIn, and TikTok.", icon: "📱" },
        { title: "Multi-Account Publishing", desc: "distribute across founder, brand, and partner handles for reach.", icon: "📡" },
        { title: "Strategic Scheduling", desc: "optimize timing and seed content with creators to drive recall.", icon: "⏰" }
      ]
    },
    {
      id: 4,
      title: "Performance Marketing",
      subtitle: "Paid Advertising & Growth",
      icon: PerformanceIcon,
      color: "orange",
      gradient: "from-orange-500 via-red-600 to-pink-700",
      items: [
        { title: "Awareness Ads", desc: "capture attention and grow brand recall on Meta, YouTube, and LinkedIn with efficient CPM.", icon: "👁️" },
        { title: "Engagement Ads", desc: "deliver value through saves, shares, and interactions to lift engagement rates.", icon: "❤️" },
        { title: "Retargeting Ads", desc: "re-engage warm audiences, improving CTR and lowering CPL.", icon: "🔄" },
        { title: "Conversion Ads", desc: "lead audiences to purchase or inquiry, delivering positive ROAS and revenue.", icon: "💰" }
      ]
    },
    {
      id: 5,
      title: "Insights & Optimization",
      subtitle: "Data Analytics & Reporting",
      icon: InsightsIcon,
      color: "cyan",
      gradient: "from-cyan-500 via-sky-600 to-blue-700",
      items: [
        { title: "Competitor Reports", desc: "deliver bi-weekly scans of trends, hooks, and opportunities in your category.", icon: "📊" },
        { title: "Performance Tracking", desc: "we measure CPM, ROAS, hook rate, engagement metrics, CPL, ROI, and any other given KPI to refine output.", icon: "📈" },
        { title: "Audience Feedback", desc: "turn comments, polls, and DMs into actionable creative inputs.", icon: "💬" },
        { title: "Continuous Refresh", desc: "update ads, reallocate budgets, and sharpen content for compounding ROI.", icon: "🔄" }
      ]
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative py-24 lg:py-36 overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-gray-950 to-black"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 mb-8 leading-tight">
            Our Services
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to accelerate your brand's growth
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                className="service-grid-card group relative"
                onClick={() => setSelectedCard(service)}
                whileHover={{ scale: 1.02, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/95 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full cursor-pointer transition-all duration-500 hover:border-white/20 group-hover:shadow-2xl`}>
                  
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 text-sm font-medium">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {service.items.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <span className="text-lg mr-3 flex-shrink-0">{item.icon}</span>
                          <span>{item.title}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10">
                      <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                        Click to learn more →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Dialog */}
        <AnimatePresence>
          {selectedCard && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-[999]">
              <motion.div
                className="relative w-full max-w-lg bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Close Button */}
                <button
                  className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200 shadow-lg z-10"
                  onClick={handleCloseModal}
                  onMouseDown={handleCloseModal}
                  onTouchStart={handleCloseModal}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedCard.gradient} opacity-10 rounded-2xl`}></div>

                {/* Modal Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${selectedCard.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <selectedCard.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-xl font-bold text-white">
                        {selectedCard.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{selectedCard.subtitle}</p>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-white mb-3">What we deliver:</h4>
                    {selectedCard.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start p-3 bg-white/5 rounded-lg border border-white/10"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <span className="text-xl mr-3 flex-shrink-0 mt-0.5">{item.icon}</span>
                        <div className="flex-1">
                          <h5 className="text-white text-sm font-semibold mb-1">{item.title}</h5>
                          <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServiceShowcase;
