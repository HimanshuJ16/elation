import { motion } from "framer-motion";
import CircularGallery from "./CircularGallery";
import MobileVideoGrid from "./MobileVideoGrid";

const ShowCase = () => {
  return (
    <div className="relative w-full py-20">
      <div className=" mx-auto px-5">
        <motion.h2 
          className="text-4xl lg:text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100/80 to-pink-100/80 mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our Work
        </motion.h2>
        <motion.p 
            className="text-gray-400 text-lg max-w-xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            See how we've transformed brands through creative storytelling and strategic execution
        </motion.p>        
        <div className="lg:hidden">
          <MobileVideoGrid />
        </div>
        <div className="hidden lg:block" style={{ height: '600px', position: 'relative' }}>
          <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
        </div>
      </div>
    </div>
  )
}

export default ShowCase