import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Icon components with enhanced styling
const ChartIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M2 21h10v-8H2v8zm12-10h10v-8H14v8zm-12 4h20v-4H2v4z"/>
  </svg>
);

const CreativeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
  </svg>
);

const DistributionIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19,11H13V3H11V11H5L12,18L19,11Z" />
  </svg>
);

const PerformanceIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A1,1 0 0,1 13,7A1,1 0 0,1 12,8A1,1 0 0,1 11,7A1,1 0 0,1 12,6M12,10V16L16.5,13.5L17.5,14.5L12,19L6.5,14.5L7.5,13.5L12,16V10H12Z"/>
  </svg>
);

const InsightsIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
  </svg>
);

const ServiceSlider = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current.querySelectorAll('.swiper-slide'),
      { opacity: 0, y: 50, scale: 0.95 },
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

  const services = [
    {
      id: 1,
      title: "Marketing Strategy",
      subtitle: "Strategic Planning",
      icon: ChartIcon,
      color: "blue",
      items: [
        { title: "Audience Mapping", desc: "identify segments and uncover digital opportunities to win attention." },
        { title: "Competitor Analysis", desc: "scan messaging, hooks, and funnels to spot market gaps." },
        { title: "Brand Positioning", desc: "define how your brand communicates and builds recall." },
        { title: "Campaign Ideation", desc: "plan micro-campaigns and activations aligned with growth." }
      ]
    },
    {
      id: 2,
      title: "Content Creation",
      subtitle: "Creative Production",
      icon: CreativeIcon,
      color: "green",
      items: [
        { title: "Scripts & Copy", desc: "craft stories, captions, and ad copy that convert attention into action." },
        { title: "Video Production", desc: "produce Reels, Shorts, UGC, and founder-led content tailored to your audience." },
        { title: "Design & Carousels", desc: "deliver graphics and visual assets that stand out in crowded feeds." },
        { title: "Creative Testing", desc: "generate multiple hooks and variations to find what performs best." }
      ]
    },
    {
      id: 3,
      title: "Editing & Distribution",
      subtitle: "Content Delivery",
      icon: DistributionIcon,
      color: "purple",
      items: [
        { title: "Video Editing", desc: "turn raw footage into scroll-stopping content with sharp cuts and motion graphics." },
        { title: "Platform Packaging", desc: "adapt content into native formats for Instagram, YouTube, LinkedIn, and TikTok." },
        { title: "Multi-Account Publishing", desc: "distribute across founder, brand, and partner handles for reach." },
        { title: "Strategic Scheduling", desc: "optimize timing and seed content with creators to drive recall." }
      ]
    },
    {
      id: 4,
      title: "Performance Marketing",
      subtitle: "Paid Advertising",
      icon: PerformanceIcon,
      color: "orange",
      items: [
        { title: "Awareness Ads", desc: "capture attention and grow brand recall on Meta, YouTube, and LinkedIn with efficient CPM." },
        { title: "Engagement Ads", desc: "deliver value through saves, shares, and interactions to lift engagement rates." },
        { title: "Retargeting Ads", desc: "re-engage warm audiences, improving CTR and lowering CPL." },
        { title: "Conversion Ads", desc: "lead audiences to purchase or inquiry, delivering positive ROAS and revenue." }
      ]
    },
    {
      id: 5,
      title: "Insights & Optimization",
      subtitle: "Data & Analytics",
      icon: InsightsIcon,
      color: "cyan",
      items: [
        { title: "Competitor Reports", desc: "deliver bi-weekly scans of trends, hooks, and opportunities in your category." },
        { title: "Performance Tracking", desc: "we measure CPM, ROAS, hook rate, engagement metrics, CPL, ROI, and any other given KPI to refine output." },
        { title: "Audience Feedback", desc: "turn comments, polls, and DMs into actionable creative inputs." },
        { title: "Continuous Refresh", desc: "update ads, reallocate budgets, and sharpen content for compounding ROI." }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        border: "hover:border-blue-500/60",
        shadow: "hover:shadow-blue-500/20",
        bg: "from-blue-600/8 via-transparent to-blue-800/8",
        icon: "from-blue-500 to-blue-600",
        iconShadow: "group-hover:shadow-blue-500/50",
        text: "group-hover:text-blue-100",
        accent: "text-blue-400",
        itemText: "group-hover/item:text-blue-300",
        arrow: "text-blue-400"
      },
      green: {
        border: "hover:border-green-500/60",
        shadow: "hover:shadow-green-500/20",
        bg: "from-green-600/8 via-transparent to-green-800/8",
        icon: "from-green-500 to-green-600",
        iconShadow: "group-hover:shadow-green-500/50",
        text: "group-hover:text-green-100",
        accent: "text-green-400",
        itemText: "group-hover/item:text-green-300",
        arrow: "text-green-400"
      },
      purple: {
        border: "hover:border-purple-500/60",
        shadow: "hover:shadow-purple-500/20",
        bg: "from-purple-600/8 via-transparent to-purple-800/8",
        icon: "from-purple-500 to-purple-600",
        iconShadow: "group-hover:shadow-purple-500/50",
        text: "group-hover:text-purple-100",
        accent: "text-purple-400",
        itemText: "group-hover/item:text-purple-300",
        arrow: "text-purple-400"
      },
      orange: {
        border: "hover:border-orange-500/60",
        shadow: "hover:shadow-orange-500/20",
        bg: "from-orange-600/8 via-transparent to-orange-800/8",
        icon: "from-orange-500 to-orange-600",
        iconShadow: "group-hover:shadow-orange-500/50",
        text: "group-hover:text-orange-100",
        accent: "text-orange-400",
        itemText: "group-hover/item:text-orange-300",
        arrow: "text-orange-400"
      },
      cyan: {
        border: "hover:border-cyan-500/60",
        shadow: "hover:shadow-cyan-500/20",
        bg: "from-cyan-600/8 via-transparent to-cyan-800/8",
        icon: "from-cyan-500 to-cyan-600",
        iconShadow: "group-hover:shadow-cyan-500/50",
        text: "group-hover:text-cyan-100",
        accent: "text-cyan-400",
        itemText: "group-hover/item:text-cyan-300",
        arrow: "text-cyan-400"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <motion.section 
      ref={containerRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl opacity-50 animate-spin-slow"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header with Animation */}
        <motion.div 
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-md border border-white/10 rounded-full text-white text-sm font-medium mb-8 shadow-lg shadow-purple-500/10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping"></div>
            Our Expertise
          </motion.span>
          
          <motion.h2 
            className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Services We Offer
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover our comprehensive suite of services designed to elevate your brand in the digital landscape.
          </motion.p>
        </motion.div>

        {/* Automated Carousel */}
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={32}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: (index, className) => (
              `<span class="${className} bg-white/30 w-3 h-3 rounded-full transition-all duration-300 hover:bg-white/50"></span>`
            ),
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
              coverflowEffect: { rotate: 40, depth: 200 },
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
              coverflowEffect: { rotate: 35, depth: 180 },
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
              coverflowEffect: { rotate: 30, depth: 150 },
            },
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="service-swiper"
        >
          {services.map((service) => {
            const colorClasses = getColorClasses(service.color);
            return (
              <SwiperSlide key={service.id} className="max-w-md lg:max-w-lg">
                <motion.div 
                  className={`service-card group relative overflow-hidden bg-gradient-to-br from-gray-900/95 via-gray-800/80 to-gray-900/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 lg:p-8 shadow-2xl transition-all duration-500 ${colorClasses.border} ${colorClasses.shadow}`}
                  whileHover={{ scale: 1.03, y: -8 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-30 transition-opacity duration-500 scale-150">
                    {service.icon({ className: "w-16 h-16" })}
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-8">
                      <motion.div 
                        className={`service-icon flex items-center justify-center w-14 h-14 bg-gradient-to-br ${colorClasses.icon} rounded-2xl shadow-lg ${colorClasses.iconShadow} transition-all duration-300 mr-4`}
                        whileHover={{ scale: 1.1, rotate: 8 }}
                      >
                        {service.icon({ className: "w-7 h-7" })}
                      </motion.div>
                      <div>
                        <h3 className={`text-2xl font-bold text-white ${colorClasses.text} transition-colors`}>{service.title}</h3>
                        <p className={`${colorClasses.accent} text-sm font-medium`}>{service.subtitle}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {service.items.map((item, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-start group/item p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                          whileHover={{ x: 4 }}
                        >
                          <span className={`${colorClasses.arrow} mr-3 mt-1 text-base`}>→</span>
                          <div>
                            <span className={`text-white font-semibold ${colorClasses.itemText} transition-colors`}>{item.title}</span>
                            <p className="text-gray-300 text-sm mt-1">{item.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 bg-gray-900/50 backdrop-blur-md rounded-full p-3 text-white hover:bg-gray-900/70 transition-all duration-300 shadow-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="swiper-button-next absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 bg-gray-900/50 backdrop-blur-md rounded-full p-3 text-white hover:bg-gray-900/70 transition-all duration-300 shadow-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Swiper>

        {/* CTA Button */}
        {/* <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button 
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Started Today</span>
            <motion.span 
              className="w-2 h-2 bg-white rounded-full"
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"></div>
          </motion.button>
        </motion.div> */}
      </div>

      <style jsx>{`
        .service-swiper {
          padding: 40px 0;
        }

        .service-swiper .swiper-slide {
          display: flex;
          justify-content: center;
          opacity: 0.6;
          transition: opacity 0.5s ease;
          height: auto;
        }

        .service-swiper .swiper-slide-active {
          opacity: 1;
        }

        .service-swiper .swiper-slide-active .service-card {
          transform: scale(1.05);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .service-swiper .swiper-pagination {
          bottom: -40px;
        }

        .service-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3);
          width: 12px;
          height: 12px;
          margin: 0 6px;
        }

        .service-swiper .swiper-pagination-bullet-active {
          background: white;
          width: 16px;
          height: 16px;
        }

        .swiper-button-prev, .swiper-button-next {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
        }

        @media (max-width: 768px) {
          .service-swiper {
            padding: 20px 0;
          }

          .service-swiper .swiper-slide {
            width: 85%;
          }

          .swiper-button-prev, .swiper-button-next {
            display: none;
          }
        }

        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </motion.section>
  );
};

export default ServiceSlider;