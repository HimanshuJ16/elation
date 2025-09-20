import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, Flip } from "gsap/all";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger, Flip);

const AnimatedCounter = () => {
  const containerRef = useRef(null);
  const counterRefs = useRef([]);
  const overlayRefs = useRef([]);
  const iconRefs = useRef([]);

  useGSAP(() => {
    // Pre-set initial states
    counterRefs.current.forEach((counter) => {
      const numberElement = counter.querySelector(".counter-number");
      if (numberElement) {
        gsap.set(numberElement, { innerText: "0" });
      }
    });

    // Create individual counter animations with separate ScrollTriggers for better control
    counterRefs.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const overlay = overlayRefs.current[index];
      const icon = iconRefs.current[index];
      const item = counterItems[index];

      if (!numberElement || !overlay || !icon) return;

      // Create a timeline for this specific counter
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power2.out" }
      });

      tl.fromTo(icon, 
        { scale: 0, rotation: -180, opacity: 0 }, 
        { scale: 1, rotation: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
      )
      .fromTo(overlay, 
        { y: "100%", opacity: 0.8 }, 
        { y: 0, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.6"
      )
      .to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 },
        onUpdate: () => {
          const value = Math.round(parseFloat(numberElement.innerText));
          numberElement.innerText = value.toLocaleString();
        },
        onComplete: () => {
          numberElement.innerText = `${item.value.toLocaleString()}${item.suffix}`;
          createSparkleEffect(numberElement);
        }
      }, "-=1.4"); // Overlap with overlay animation

      // Attach ScrollTrigger to the timeline with stagger
      ScrollTrigger.create({
        trigger: counter,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        animation: tl,
        onEnter: () => {
          tl.play();
        },
        onLeave: () => {
          tl.reverse();
        },
        onEnterBack: () => {
          tl.play();
        },
        onLeaveBack: () => {
          tl.reverse();
        }
      });
    });
  }, { scope: containerRef });

  // Create sparkle effect
  const createSparkleEffect = (target) => {
    const sparkles = 8;
    for (let i = 0; i < sparkles; i++) {
      const sparkle = document.createElement("div");
      sparkle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: radial-gradient(circle, #fbbf24, #f59e0b);
        border-radius: 50%;
        pointer-events: none;
        z-index: 20;
      `;
      
      const rect = target.getBoundingClientRect();
      const x = Math.random() * rect.width;
      const y = Math.random() * rect.height;
      
      target.parentNode.appendChild(sparkle);
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;

      gsap.fromTo(sparkle, 
        { scale: 0, opacity: 1, rotation: 0 }, 
        {
          scale: 2,
          opacity: 0,
          rotation: 180,
          duration: 0.6,
          delay: i * 0.05,
          ease: "power2.out",
          onComplete: () => sparkle.remove()
        }
      );
    }
  };

  const getIconForItem = (index) => {
    const icons = [
      "🎯", // Projects
      "👥",  // Clients
      "⚡",  // Campaigns
      "📈"   // Growth
    ];
    return icons[index % icons.length];
  };

  // Enhanced counter items with icons
  const enhancedCounterItems = counterItems.map((item, index) => ({
    ...item,
    icon: getIconForItem(index)
  }));

  return (
    <section 
      ref={containerRef}
      id="counter" 
      className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-b from-gray-950 via-black/50 to-gray-900"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.span 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 rounded-full text-white/80 text-sm font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping"></div>
            Our Impact
          </motion.span>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100/80 to-pink-100/80 mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            By The Numbers
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Real results from real partnerships. Here's what we've achieved together.
          </motion.p>
        </div>

        {/* Enhanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {/* Grid background lines */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
          
          {enhancedCounterItems.map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => el && (counterRefs.current[index] = el)}
              className={`
                group relative overflow-hidden
                bg-gradient-to-br from-gray-900/95 via-gray-800/70 to-gray-900/95
                backdrop-blur-xl border border-white/5 rounded-2xl lg:rounded-3xl
                p-6 lg:p-8 h-full transition-all duration-500
                hover:border-white/20 hover:bg-gradient-to-br hover:from-gray-800/90
                ${index % 2 === 0 ? 'lg:hover:shadow-purple-500/10 lg:hover:shadow-xl' : 'lg:hover:shadow-pink-500/10 lg:hover:shadow-xl'}
              `}
              initial={{ 
                opacity: 0, 
                y: 50,
                scale: 0.95,
                rotateX: 10
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                scale: 1,
                rotateX: 0
              }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.1,
                ease: "backOut"
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                rotateX: 0,
                transition: { 
                  duration: 0.4,
                  y: { type: "spring", stiffness: 300, damping: 20 }
                }
              }}
            >
              {/* Gradient overlay for reveal effect */}
              <div 
                ref={(el) => el && (overlayRefs.current[index] = el)}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
              ></div>

              {/* Icon container */}
              <div 
                ref={(el) => el && (iconRefs.current[index] = el)}
                className="relative z-10 flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-6
                  bg-gradient-to-br from-white/10 to-transparent
                  backdrop-blur-sm rounded-2xl border border-white/20
                  group-hover:bg-gradient-to-br group-hover:from-purple-500/20 group-hover:to-pink-500/20
                  group-hover:border-white/30 transition-all duration-300"
              >
                <motion.span 
                  className="text-3xl lg:text-4xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {item.icon}
                </motion.span>
              </div>

              {/* Counter number */}
              <div className="text-center mb-4 relative z-10">
                <div className="counter-number text-white text-4xl lg:text-6xl font-black mb-2
                  bg-gradient-to-r from-white via-purple-100/90 to-pink-100/90 bg-clip-text
                  group-hover:from-purple-400/90 group-hover:via-purple-500/90 group-hover:to-pink-400/90">
                  0
                </div>
                <div className="h-1 w-16 bg-gradient-to-r from-purple-500/30 to-pink-500/30 
                  rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Label */}
              <motion.p 
                className="text-gray-300 text-center text-base lg:text-lg font-medium
                  group-hover:text-white/90 transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {item.label}
              </motion.p>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Floating particles */}
              {index % 2 === 0 && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="particle absolute w-1 h-1 bg-purple-400/30 rounded-full 
                    top-10 left-10 animate-float"></div>
                  <div className="particle absolute w-1 h-1 bg-pink-400/30 rounded-full 
                    bottom-20 right-10 animate-float delay-2000"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <motion.div 
          className="text-center mt-20 lg:mt-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r 
              from-purple-600 via-purple-600/90 to-pink-600 text-white font-semibold 
              rounded-full backdrop-blur-sm border border-white/20
              hover:from-purple-500 hover:to-pink-500 hover:shadow-lg
              hover:shadow-purple-500/25 transition-all duration-300
              relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px -10px rgba(168, 85, 247, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Ready to join our success stories?</span>
            <motion.span 
              className="w-2 h-2 bg-white rounded-full"
              animate={{ 
                x: [0, 20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.span>
            
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20
              rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300
              -z-10 blur-sm"></div>
          </motion.button>
        </motion.div> */}
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 72, 153, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default AnimatedCounter;