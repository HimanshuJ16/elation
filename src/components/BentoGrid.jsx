import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
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

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.1
    }
  }
};

// Bento grid container
const BentoGrid = () => {
  return (
    <>
      {/* Brand Categories Section */}
      <motion.div 
        className="relative z-10 text-center mb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-6">
          {/*<span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-200 text-sm font-medium mb-6">
            🎯 Industry Expertise
          </span>*/}
        </div>
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-5xl font-black text-white mb-6 bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Who We Do It For<br />
        </motion.h2>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div 
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Row 1: 2-span + 1-span + 1-span */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            {/* Alcobev Brands - 2-span */}
            <motion.div 
              className="industry-card col-span-1 lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 lg:p-8"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-orange-600/8 via-transparent to-orange-800/8"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="relative z-10"
                variants={contentVariants}
                initial="initial"
                animate="animate"
              >
                <div className="flex items-center justify-between mb-6">
                  <motion.div 
                    className="industry-icon flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IndustryIcon type="alcobev" />
                  </motion.div>
                  <motion.span 
                    className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs lg:text-sm font-medium rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    Project-Based
                  </motion.span>
                </div>
                <motion.h3 
                  className="text-xl lg:text-2xl font-black text-white mb-4"
                  whileHover={{ color: "#f97316" }}
                >
                  Alcobev Brands
                </motion.h3>
                <div className="space-y-4 text-gray-300 text-sm lg:text-base">
                  <motion.div 
                    className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/30"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-orange-400 font-semibold text-xs lg:text-sm block mb-1">
                      Challenge:
                    </span>
                    <p className="text-gray-300 text-xs lg:text-sm">
                      Crowded markets where creating buzz and loyalty is difficult.
                    </p>
                  </motion.div>
                  <motion.div 
                    className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/30"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-orange-400 font-semibold text-xs lg:text-sm block mb-1">
                      Solution:
                    </span>
                    <p className="text-gray-300 text-xs lg:text-sm">
                      Creative campaigns, cultural activations, UGC integration, and performance marketing.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Podcasters - 1-span */}
            <motion.div 
              className="industry-card col-span-1 lg:col-span-1 relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-4 lg:p-6"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-600/8 via-transparent to-blue-800/8"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="relative z-10"
                variants={contentVariants}
                initial="initial"
                animate="animate"
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    className="industry-icon flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IndustryIcon type="podcast" />
                  </motion.div>
                  <motion.span 
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    Sprint
                  </motion.span>
                </div>
                <motion.h3 
                  className="text-lg font-bold text-white mb-3"
                  whileHover={{ color: "#3b82f6" }}
                >
                  Podcasters
                </motion.h3>
                <div className="space-y-2 text-gray-300 text-xs">
                  <motion.div 
                    className="p-2 bg-gray-800/50 rounded-lg border border-gray-700/30"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-blue-400 font-semibold text-xs block mb-1">Challenge:</span>
                    <p className="text-gray-300 text-xs">Growing reach and building loyal listeners.</p>
                  </motion.div>
                  <motion.div 
                    className="p-2 bg-gray-800/50 rounded-lg border border-gray-700/30"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-blue-400 font-semibold text-xs block mb-1">Solution:</span>
                    <p className="text-gray-300 text-xs">Content design, audience distribution, engagement campaigns.</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Restaurants - 1-span */}
            <motion.div 
              className="industry-card col-span-1 lg:col-span-1 relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-4 lg:p-6"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-green-600/8 via-transparent to-green-800/8"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="relative z-10"
                variants={contentVariants}
                initial="initial"
                animate="animate"
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    className="industry-icon flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IndustryIcon type="restaurant" />
                  </motion.div>
                  <motion.span 
                    className="px-2 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    Sprint
                  </motion.span>
                </div>
                <motion.h3 
                  className="text-lg font-bold text-white mb-3"
                  whileHover={{ color: "#10b981" }}
                >
                  Restaurants
                </motion.h3>
                <div className="space-y-2 text-gray-300 text-xs">
                  <motion.div 
                    className="p-2 bg-gray-800/50 rounded-lg border border-gray-700/30"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-green-400 font-semibold text-xs block mb-1">Challenge:</span>
                    <p className="text-gray-300 text-xs">Generating awareness and repeat customers.</p>
                  </motion.div>
                  <motion.div 
                    className="p-2 bg-gray-800/50 rounded-lg border border-gray-700/30"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-green-400 font-semibold text-xs block mb-1">Solution:</span>
                    <p className="text-gray-300 text-xs">Storytelling, localized activations, targeted ads.</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Row 2: 1-span + 2-span + 1-span */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            {/* D2C Brands - 1-span */}
            <motion.div 
              className="industry-card col-span-1 lg:col-span-1 relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-4 lg:p-6"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-purple-600/8 via-transparent to-purple-800/8"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="relative z-10"
                variants={contentVariants}
                initial="initial"
                animate="animate"
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    className="industry-icon flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IndustryIcon type="d2c" />
                  </motion.div>
                  <motion.span 
                    className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    Consultancy
                  </motion.span>
                </div>
                <motion.h3 
                  className="text-lg font-bold text-white mb-3"
                  whileHover={{ color: "#8b5cf6" }}
                >
                  D2C Brands
                </motion.h3>
                <div className="space-y-2 text-gray-300 text-xs">
                  <motion.div 
                    className="p-2 bg-gray-800/50 rounded-lg border border-gray-700/30"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-purple-400 font-semibold text-xs block mb-1">Challenge:</span>
                    <p className="text-gray-300 text-xs">Connecting with Gen Z through content.</p>
                  </motion.div>
                  <motion.div 
                    className="p-2 bg-gray-800/50 rounded-lg border border-gray-700/30"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-purple-400 font-semibold text-xs block mb-1">Solution:</span>
                    <p className="text-gray-300 text-xs">End-to-end strategy, sharp creatives, UGC integration.</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Legacy Brands - 2-span */}
            <motion.div 
              className="industry-card col-span-1 lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 lg:p-8"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-red-600/8 via-transparent to-red-800/8"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="relative z-10"
                variants={contentVariants}
                initial="initial"
                animate="animate"
              >
                <div className="flex items-center justify-between mb-6">
                  <motion.div 
                    className="industry-icon flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IndustryIcon type="legacy" />
                  </motion.div>
                  <motion.span 
                    className="px-3 py-1 bg-red-500/20 text-red-300 text-xs lg:text-sm font-medium rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    Retainer
                  </motion.span>
                </div>
                <motion.h3 
                  className="text-xl lg:text-2xl font-black text-white mb-4"
                  whileHover={{ color: "#ef4444" }}
                >
                  Legacy Brands
                </motion.h3>
                <div className="space-y-4 text-gray-300 text-sm lg:text-base">
                  <motion.div 
                    className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/30"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-red-400 font-semibold text-xs lg:text-sm block mb-1">
                      Challenge:
                    </span>
                    <p className="text-gray-300 text-xs lg:text-sm">
                      Shifting from distribution-led growth to relevance with younger audiences.
                    </p>
                  </motion.div>
                  <motion.div 
                    className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/30"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-red-400 font-semibold text-xs lg:text-sm block mb-1">
                      Solution:
                    </span>
                    <p className="text-gray-300 text-xs lg:text-sm">
                      Refreshed communication strategy, recall-first campaigns, content distribution, and loyalty micro-campaigns.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Authors & Thought Leaders - 1-span */}
            <motion.div 
              className="industry-card col-span-1 lg:col-span-1 relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-4 lg:p-6"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-indigo-600/8 via-transparent to-indigo-800/8"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="relative z-10"
                variants={contentVariants}
                initial="initial"
                animate="animate"
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    className="industry-icon flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl shadow-lg"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IndustryIcon type="authors" />
                  </motion.div>
                  <motion.span 
                    className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-medium rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    Retainer
                  </motion.span>
                </div>
                <motion.h3 
                  className="text-lg font-bold text-white mb-3"
                  whileHover={{ color: "#6366f1" }}
                >
                  Authors & Thought Leaders
                </motion.h3>
                <div className="space-y-2 text-gray-300 text-xs">
                  <motion.div 
                    className="p-2 bg-gray-800/50 rounded-lg border border-gray-700/30"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-indigo-400 font-semibold text-xs block mb-1">Problem:</span>
                    <p className="text-gray-300 text-xs">Building recall and credibility beyond book launch.</p>
                  </motion.div>
                  <motion.div 
                    className="p-2 bg-gray-800/50 rounded-lg border border-gray-700/30"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-indigo-400 font-semibold text-xs block mb-1">Solution:</span>
                    <p className="text-gray-300 text-xs">Brand positioning, personal brand engines, strategic content.</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Row 3: 2-span + 2-span */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Doctors - 2-span */}
            <motion.div 
              className="industry-card col-span-1 lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 lg:p-8"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-teal-600/8 via-transparent to-teal-800/8"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="relative z-10"
                variants={contentVariants}
                initial="initial"
                animate="animate"
              >
                <div className="flex items-center justify-between mb-6">
                  <motion.div 
                    className="industry-icon flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IndustryIcon type="doctors" />
                  </motion.div>
                  <motion.span 
                    className="px-3 py-1 bg-teal-500/20 text-teal-300 text-xs lg:text-sm font-medium rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    Retainer
                  </motion.span>
                </div>
                <motion.h3 
                  className="text-xl lg:text-2xl font-black text-white mb-4"
                  whileHover={{ color: "#14b8a6" }}
                >
                  Doctors
                </motion.h3>
                <div className="space-y-4 text-gray-300 text-sm lg:text-base">
                  <motion.div 
                    className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/30"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-teal-400 font-semibold text-xs lg:text-sm block mb-1">
                      Problem:
                    </span>
                    <p className="text-gray-300 text-xs lg:text-sm">
                      Turning medical expertise into trust and consistent patient acquisition.
                    </p>
                  </motion.div>
                  <motion.div 
                    className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/30"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-teal-400 font-semibold text-xs lg:text-sm block mb-1">
                      Solution:
                    </span>
                    <p className="text-gray-300 text-xs lg:text-sm">
                      Audience mapping, positioning frameworks, credibility-led content, ad funnels.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Entrepreneurs - 2-span */}
            <motion.div 
              className="industry-card col-span-1 lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 lg:p-8"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-yellow-600/8 via-transparent to-yellow-800/8"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="relative z-10"
                variants={contentVariants}
                initial="initial"
                animate="animate"
              >
                <div className="flex items-center justify-between mb-6">
                  <motion.div 
                    className="industry-icon flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IndustryIcon type="entrepreneurs" />
                  </motion.div>
                  <motion.span 
                    className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs lg:text-sm font-medium rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    Retainer
                  </motion.span>
                </div>
                <motion.h3 
                  className="text-xl lg:text-2xl font-black text-white mb-4"
                  whileHover={{ color: "#eab308" }}
                >
                  Entrepreneurs
                </motion.h3>
                <div className="space-y-4 text-gray-300 text-sm lg:text-base">
                  <motion.div 
                    className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/30"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-yellow-400 font-semibold text-xs lg:text-sm block mb-1">
                      Problem:
                    </span>
                    <p className="text-gray-300 text-xs lg:text-sm">
                      Lack of consistent content and distribution to establish authority.
                    </p>
                  </motion.div>
                  <motion.div 
                    className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/30"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-yellow-400 font-semibold text-xs lg:text-sm block mb-1">
                      Solution:
                    </span>
                    <p className="text-gray-300 text-xs lg:text-sm">
                      Content strategy, multi-platform pipelines, and micro-campaigns designed to scale authority and trust.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default BentoGrid;