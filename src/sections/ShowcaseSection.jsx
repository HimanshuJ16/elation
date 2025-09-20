import { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Icon components
const IndustryIcon = ({ type }) => {
  const icons = {
    alcobev: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V4z"/>
      </svg>
    ),
    podcast: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12c0-2.21-.895-4.21-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 12a5.984 5.984 0 01-.757 2.828 1 1 0 11-1.415-1.414A3.987 3.987 0 0013 12a3.988 3.988 0 00-.172-1.414 1 1 0 010-1.415z" clipRule="evenodd"/>
      </svg>
    ),
    restaurant: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
      </svg>
    ),
    d2c: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM6 10a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd"/>
      </svg>
    ),
    legacy: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"/>
      </svg>
    ),
    authors: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V4.804z"/>
      </svg>
    ),
    doctors: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>
    ),
    entrepreneurs: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
      </svg>
    )
  };
  return icons[type] || icons.d2c;
};

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.3,
        y: { type: "spring", stiffness: 300, damping: 20 }
      }
    }
  };

  useGSAP(() => {
    // Section entrance
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
    );

    // Title animation
    gsap.fromTo(
      ".section-title",
      { opacity: 0, y: -30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        delay: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".section-title",
          start: "top bottom-=50",
        }
      }
    );

    // Bento cards stagger animation
    const bentoCards = gsap.utils.toArray('.bento-card');
    gsap.fromTo(
      bentoCards,
      {
        y: 60,
        opacity: 0,
        scale: 0.95,
        rotationX: 15
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=100",
        },
      }
    );

    // Enhanced hover interactions
    bentoCards.forEach(card => {
      const icon = card.querySelector('.industry-icon');
      
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          scale: 1.04,
          duration: 0.4,
          ease: "power2.out"
        });
        
        if (icon) {
          gsap.to(icon, {
            rotation: 8,
            scale: 1.15,
            duration: 0.4,
            ease: "back.out(1.7)"
          });
        }
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out"
        });
        
        if (icon) {
          gsap.to(icon, {
            rotation: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          });
        }
      });
    });

    // Floating background animations
    gsap.to(".floating-bg-1", {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

    gsap.to(".floating-bg-2", {
      y: 15,
      duration: 4,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1
    });

    gsap.to(".floating-bg-3", {
      y: -10,
      rotation: 360,
      duration: 5,
      ease: "none",
      repeat: -1,
      delay: 2
    });
  }, { scope: sectionRef });

  const industries = [
    { type: "alcobev", title: "Alcobev Brands", tag: "Project-Based", color: "orange", challenge: "Crowded markets where creating buzz and loyalty is difficult.", solution: "Creative campaigns, cultural activations, UGC integration, and performance marketing." },
    { type: "podcast", title: "Podcasters", tag: "Sprint", color: "blue", challenge: "Growing reach and building a loyal listener base.", solution: "Content design, audience-specific distribution, and engagement-driven micro-campaigns." },
    { type: "restaurant", title: "Restaurants", tag: "Sprint", color: "green", challenge: "Generating awareness and repeat customers in competitive spaces.", solution: "Campaign-led storytelling, localized activations, video/photo content, and targeted awareness ads." },
    { type: "d2c", title: "D2C Brands", tag: "Consultancy", color: "purple", challenge: "Connecting with Gen Z through content, distribution, and ad funnels.", solution: "End-to-end marketing strategy, sharp creatives, influencer/UGC integration, and performance campaigns." },
    { type: "legacy", title: "Legacy Brands", tag: "Retainer", color: "red", challenge: "Shifting from distribution-led growth to relevance with younger audiences.", solution: "Refreshed communication strategy, recall-first campaigns, content distribution, and loyalty micro-campaigns." },
    { type: "authors", title: "Authors & Thought Leaders", tag: "Retainer", color: "indigo", challenge: "Building recall and credibility beyond a book launch.", solution: "Brand positioning, personal brand engines, strategic content buckets, high-converting video content, and full-funnel campaigns." },
    { type: "doctors", title: "Doctors", tag: "Retainer", color: "teal", challenge: "Turning medical expertise into trust and consistent patient acquisition.", solution: "Audience mapping, positioning frameworks, credibility-led content, ad funnels for leads, and continuous optimization." },
    { type: "entrepreneurs", title: "Entrepreneurs", tag: "Retainer", color: "yellow", challenge: "Lack of consistent content and distribution to establish authority.", solution: "Content strategy, multi-platform pipelines, and micro-campaigns designed to scale authority and trust." }
  ];

  const getColorClasses = (color) => {
    const colors = {
      orange: { border: "hover:border-orange-500/60", shadow: "hover:shadow-orange-500/20", icon: "from-orange-500 to-orange-600", text: "group-hover:text-orange-100", accent: "text-orange-400" },
      blue: { border: "hover:border-blue-500/60", shadow: "hover:shadow-blue-500/20", icon: "from-blue-500 to-blue-600", text: "group-hover:text-blue-100", accent: "text-blue-400" },
      green: { border: "hover:border-green-500/60", shadow: "hover:shadow-green-500/20", icon: "from-green-500 to-green-600", text: "group-hover:text-green-100", accent: "text-green-400" },
      purple: { border: "hover:border-purple-500/60", shadow: "hover:shadow-purple-500/20", icon: "from-purple-500 to-purple-600", text: "group-hover:text-purple-100", accent: "text-purple-400" },
      red: { border: "hover:border-red-500/60", shadow: "hover:shadow-red-500/20", icon: "from-red-500 to-red-600", text: "group-hover:text-red-100", accent: "text-red-400" },
      indigo: { border: "hover:border-indigo-500/60", shadow: "hover:shadow-indigo-500/20", icon: "from-indigo-500 to-indigo-600", text: "group-hover:text-indigo-100", accent: "text-indigo-400" },
      teal: { border: "hover:border-teal-500/60", shadow: "hover:shadow-teal-500/20", icon: "from-teal-500 to-teal-600", text: "group-hover:text-teal-100", accent: "text-teal-400" },
      yellow: { border: "hover:border-yellow-500/60", shadow: "hover:shadow-yellow-500/20", icon: "from-yellow-500 to-yellow-600", text: "group-hover:text-yellow-100", accent: "text-yellow-400" }
    };
    return colors[color] || colors.orange;
  };

  return (
    <motion.section 
      id="work" 
      ref={sectionRef} 
      className="app-showcase relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black py-16 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-bg-1 absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="floating-bg-2 absolute -bottom-20 -left-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="floating-bg-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Animated Title */}
        <motion.div 
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="section-title text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Who We Do It For
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Tailored solutions for diverse industries, driving growth through innovative marketing strategies.
          </motion.p>
        </motion.div>

        {/* Bento Grid Container */}
        <motion.div 
          ref={containerRef}
          className="bento-container"
          variants={containerVariants}
        >
          {/* Row 1: 2-span + 1-span + 1-span */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            {/* Alcobev Brands - 2-span */}
            <motion.div 
              className="bento-card col-span-1 lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-gray-900/95 via-gray-800/70 to-gray-900/95 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 lg:p-8 h-80 lg:h-96"
              variants={itemVariants}
              whileHover={hoverVariants}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/8 via-transparent to-orange-800/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className={`industry-icon flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300`}>
                    <IndustryIcon type="alcobev" />
                  </div>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs lg:text-sm font-medium rounded-full">Project-Based</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-orange-100 transition-colors">Alcobev Brands</h3>
                <div className="space-y-3 flex-1 text-gray-300 text-sm lg:text-base">
                  <div className="p-3 lg:p-4 bg-gray-800/50 rounded-xl border border-gray-700/30">
                    <span className="text-orange-400 font-semibold text-xs lg:text-sm block mb-1">Challenge:</span>
                    <p className="text-gray-300 text-xs lg:text-sm">Crowded markets where creating buzz and loyalty is difficult.</p>
                  </div>
                  <div className="p-3 lg:p-4 bg-gray-800/50 rounded-xl border border-gray-700/30">
                    <span className="text-orange-400 font-semibold text-xs lg:text-sm block mb-1">Solution:</span>
                    <p className="text-gray-300 text-xs lg:text-sm">Creative campaigns, cultural activations, UGC integration, and performance marketing.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Podcasters - 1-span */}
            <motion.div 
              className="bento-card col-span-1 lg:col-span-1 relative overflow-hidden bg-gradient-to-br from-gray-900/95 via-gray-800/70 to-gray-900/95 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-4 lg:p-6 h-72 lg:h-80"
              variants={itemVariants}
              whileHover={hoverVariants}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 via-transparent to-blue-800/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className={`industry-icon flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300`}>
                    <IndustryIcon type="podcast" />
                  </div>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full">Sprint</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">Podcasters</h3>
                <div className="space-y-2 flex-1 text-gray-300 text-xs lg:text-sm">
                  <div className="p-2 lg:p-3 bg-gray-800/50 rounded-lg border border-gray-700/30">
                    <span className="text-blue-400 font-semibold text-xs block mb-1">Challenge:</span>
                    <p className="text-gray-300 text-xs">Growing reach and building a loyal listener base.</p>
                  </div>
                  <div className="p-2 lg:p-3 bg-gray-800/50 rounded-lg border border-gray-700/30">
                    <span className="text-blue-400 font-semibold text-xs block mb-1">Solution:</span>
                    <p className="text-gray-300 text-xs">Content design, audience-specific distribution, and engagement-driven micro-campaigns.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Restaurants - 1-span */}
            <motion.div 
              className="bento-card col-span-1 lg:col-span-1 relative overflow-hidden bg-gradient-to-br from-gray-900/95 via-gray-800/70 to-gray-900/95 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-4 lg:p-6 h-72 lg:h-80"
              variants={itemVariants}
              whileHover={hoverVariants}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/8 via-transparent to-green-800/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className={`industry-icon flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg group-hover:shadow-green-500/50 transition-all duration-300`}>
                    <IndustryIcon type="restaurant" />
                  </div>
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded-full">Sprint</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-100 transition-colors">Restaurants</h3>
                <div className="space-y-2 flex-1 text-gray-300 text-xs lg:text-sm">
                  <div className="p-2 lg:p-3 bg-gray-800/50 rounded-lg border border-gray-700/30">
                    <span className="text-green-400 font-semibold text-xs block mb-1">Challenge:</span>
                    <p className="text-gray-300 text-xs">Generating awareness and repeat customers in competitive spaces.</p>
                  </div>
                  <div className="p-2 lg:p-3 bg-gray-800/50 rounded-lg border border-gray-700/30">
                    <span className="text-green-400 font-semibold text-xs block mb-1">Solution:</span>
                    <p className="text-gray-300 text-xs">Campaign-led storytelling, localized activations, video/photo content, and targeted awareness ads.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 2: 1-span + 2-span + 1-span */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            {/* D2C Brands - 1-span */}
            <motion.div 
              className="bento-card col-span-1 lg:col-span-1 relative overflow-hidden bg-gradient-to-br from-gray-900/95 via-gray-800/70 to-gray-900/95 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-4 lg:p-6 h-72 lg:h-80"
              variants={itemVariants}
              whileHover={hoverVariants}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/8 via-transparent to-purple-800/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className={`industry-icon flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300`}>
                    <IndustryIcon type="d2c" />
                  </div>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full">Consultancy</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-100 transition-colors">D2C Brands</h3>
                <div className="space-y-2 flex-1 text-gray-300 text-xs lg:text-sm">
                  <div className="p-2 lg:p-3 bg-gray-800/50 rounded-lg border border-gray-700/30">
                    <span className="text-purple-400 font-semibold text-xs block mb-1">Challenge:</span>
                    <p className="text-gray-300 text-xs">Connecting with Gen Z through content, distribution, and ad funnels.</p>
                  </div>
                  <div className="p-2 lg:p-3 bg-gray-800/50 rounded-lg border border-gray-700/30">
                    <span className="text-purple-400 font-semibold text-xs block mb-1">Solution:</span>
                    <p className="text-gray-300 text-xs">End-to-end marketing strategy, sharp creatives, influencer/UGC integration, and performance campaigns.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Legacy Brands - 2-span */}
            <motion.div 
              className="bento-card col-span-1 lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-gray-900/95 via-gray-800/70 to-gray-900/95 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 lg:p-8 h-80 lg:h-96"
              variants={itemVariants}
              whileHover={hoverVariants}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/8 via-transparent to-red-800/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className={`industry-icon flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg group-hover:shadow-red-500/50 transition-all duration-300`}>
                    <IndustryIcon type="legacy" />
                  </div>
                  <span className="px-3 py-1 bg-red-500/20 text-red-300 text-xs lg:text-sm font-medium rounded-full">Retainer</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-red-100 transition-colors">Legacy Brands</h3>
                <div className="space-y-3 flex-1 text-gray-300 text-sm lg:text-base">
                  <div className="p-3 lg:p-4 bg-gray-800/50 rounded-xl border border-gray-700/30">
                    <span className="text-red-400 font-semibold text-xs lg:text-sm block mb-1">Challenge:</span>
                    <p className="text-gray-300 text-xs lg:text-sm">Shifting from distribution-led growth to relevance with younger audiences.</p>
                  </div>
                  <div className="p-3 lg:p-4 bg-gray-800/50 rounded-xl border border-gray-700/30">
                    <span className="text-red-400 font-semibold text-xs lg:text-sm block mb-1">Solution:</span>
                    <p className="text-gray-300 text-xs lg:text-sm">Refreshed communication strategy, recall-first campaigns, content distribution, and loyalty micro-campaigns.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Authors & Thought Leaders - 1-span */}
            <motion.div 
              className="bento-card col-span-1 lg:col-span-1 relative overflow-hidden bg-gradient-to-br from-gray-900/95 via-gray-800/70 to-gray-900/95 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-4 lg:p-6 h-72 lg:h-80"
              variants={itemVariants}
              whileHover={hoverVariants}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/8 via-transparent to-indigo-800/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className={`industry-icon flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300`}>
                    <IndustryIcon type="authors" />
                  </div>
                  <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-medium rounded-full">Retainer</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-100 transition-colors">Authors & Thought Leaders</h3>
                <div className="space-y-2 flex-1 text-gray-300 text-xs lg:text-sm">
                  <div className="p-2 lg:p-3 bg-gray-800/50 rounded-lg border border-gray-700/30">
                    <span className="text-indigo-400 font-semibold text-xs block mb-1">Problem:</span>
                    <p className="text-gray-300 text-xs">Building recall and credibility beyond a book launch.</p>
                  </div>
                  <div className="p-2 lg:p-3 bg-gray-800/50 rounded-lg border border-gray-700/30">
                    <span className="text-indigo-400 font-semibold text-xs block mb-1">Solution:</span>
                    <p className="text-gray-300 text-xs">Brand positioning, personal brand engines, strategic content buckets, high-converting video content, and full-funnel campaigns.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 3: 2-span + 2-span */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Doctors - 2-span */}
            <motion.div 
              className="bento-card col-span-1 lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-gray-900/95 via-gray-800/70 to-gray-900/95 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 lg:p-8 h-80 lg:h-96"
              variants={itemVariants}
              whileHover={hoverVariants}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/8 via-transparent to-teal-800/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className={`industry-icon flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl shadow-lg group-hover:shadow-teal-500/50 transition-all duration-300`}>
                    <IndustryIcon type="doctors" />
                  </div>
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-300 text-xs lg:text-sm font-medium rounded-full">Retainer</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-teal-100 transition-colors">Doctors</h3>
                <div className="space-y-3 flex-1 text-gray-300 text-sm lg:text-base">
                  <div className="p-3 lg:p-4 bg-gray-800/50 rounded-xl border border-gray-700/30">
                    <span className="text-teal-400 font-semibold text-xs lg:text-sm block mb-1">Problem:</span>
                    <p className="text-gray-300 text-xs lg:text-sm">Turning medical expertise into trust and consistent patient acquisition.</p>
                  </div>
                  <div className="p-3 lg:p-4 bg-gray-800/50 rounded-xl border border-gray-700/30">
                    <span className="text-teal-400 font-semibold text-xs lg:text-sm block mb-1">Solution:</span>
                    <p className="text-gray-300 text-xs lg:text-sm">Audience mapping, positioning frameworks, credibility-led content, ad funnels for leads, and continuous optimization.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Entrepreneurs - 2-span */}
            <motion.div 
              className="bento-card col-span-1 lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-gray-900/95 via-gray-800/70 to-gray-900/95 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 lg:p-8 h-80 lg:h-96"
              variants={itemVariants}
              whileHover={hoverVariants}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/8 via-transparent to-yellow-800/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className={`industry-icon flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg group-hover:shadow-yellow-500/50 transition-all duration-300`}>
                    <IndustryIcon type="entrepreneurs" />
                  </div>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs lg:text-sm font-medium rounded-full">Retainer</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-yellow-100 transition-colors">Entrepreneurs</h3>
                <div className="space-y-3 flex-1 text-gray-300 text-sm lg:text-base">
                  <div className="p-3 lg:p-4 bg-gray-800/50 rounded-xl border border-gray-700/30">
                    <span className="text-yellow-400 font-semibold text-xs lg:text-sm block mb-1">Problem:</span>
                    <p className="text-gray-300 text-xs lg:text-sm">Lack of consistent content and distribution to establish authority.</p>
                  </div>
                  <div className="p-3 lg:p-4 bg-gray-800/50 rounded-xl border border-gray-700/30">
                    <span className="text-yellow-400 font-semibold text-xs lg:text-sm block mb-1">Solution:</span>
                    <p className="text-gray-300 text-xs lg:text-sm">Content strategy, multi-platform pipelines, and micro-campaigns designed to scale authority and trust.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AppShowcase;