import { motion } from "framer-motion";

const MobileVideoGrid = () => {
  const videos = [
    { 
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      poster: ""
    },
    { 
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      poster: ""
    },
    { 
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      poster: ""
    },
    { 
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      poster: ""
    },
    { 
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      poster: ""
    },
    { 
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      poster: ""
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 p-4 bg-black min-h-screen">
      {videos.map((video, index) => (
        <motion.div
          key={index}
          className="relative rounded-xl overflow-hidden bg-gray-900 aspect-[9/16]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <video
            src={video.src}
            className="w-full h-full object-cover"
            controls={false}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={(e) => {
              console.log('Video loading error:', e.target.src);
            }}
            onLoadStart={() => {
              console.log('Video loading started');
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default MobileVideoGrid;
