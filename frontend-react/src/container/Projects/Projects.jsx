import React, { useState , useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
useEffect(() => {
  if (selectedVideo) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [selectedVideo]);
  // ✅ حط الفيديو مباشرة هنا (بدون images ولا JSON)
  const works = [
    {
      video: require("../../assets/reels/reel_1.mp4"), // 👈 غيّر المسار لو مختلف
      thumbnail: require("../../assets/thumbnail/sump_1.png"), // 👈 غيّر المسار لو مختلف
      title:"Grow Up Your Brand"
    },
    {
      video: require("../../assets/reels/reel_2.mp4"), // 👈 غيّر المسار لو مختلف
            thumbnail: require("../../assets/thumbnail/sump_2.png"), // 👈 غيّر المسار لو مختلف
title:"Visuals That Sell Food"
    },
    {
      video: require("../../assets/reels/reel_3.mp4"), // 👈 غيّر المسار لو مختلف
            thumbnail: require("../../assets/thumbnail/sump_3.png"), // 👈 غيّر المسار لو مختلف
            title:"Color Changes Everything"
            
          },
          {
            video: require("../../assets/reels/reel_4.mp4"), // 👈 غيّر المسار لو مختلف
            thumbnail: require("../../assets/thumbnail/sump_4.png"),
            title:"Fast Motion, Clear Message, More Views"
          },
          {
            video: require("../../assets/reels/reel_5.mp4"), // 👈 غيّر المسار لو مختلف
            thumbnail: require("../../assets/thumbnail/sump_5.png"), // 👈 غيّر المسار لو مختلف
            title:"Be Creative"
          },
          {
            video: require("../../assets/reels/reel_6.mp4"), // 👈 غيّر المسار لو مختلف
            title:"Make Every Video Different"
          },
          {
            video: require("../../assets/reels/reel_7.mp4"), // 👈 غيّر المسار لو مختلف
            title:"Make Your Videos Stand Out"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#001534] via-[#001b43] to-[#001534]">
      <div className="container mx-auto px-10 xl:px-32 h-full pt-[66px] w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-32 gap-y-16 justify-items-between">
          {works.map((work, index) => (
            <div
              key={index}
              onClick={() => setSelectedVideo(work.video)}
              //         className="w-72 cursor-pointer border border-gray-700 rounded-2xl overflow-hidden
              // shadow-md shadow-black/10 hover:shadow-xl hover:shadow-black/60
              // hover:-translate-y-2 transition-all duration-300"
              className="w-full cursor-pointer border border-gray-700 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[#020912] transition-all duration-300 hover:-translate-y-2 "
            >
              <div className="aspect-[9/16] relative ">
                <video
                  src={work.video}
                  poster={work.thumbnail}
                  className="w-full h-full object-cover"
                  muted
                
                  playsInline
                />
                <div className=" absolute bottom-0 left-0 p-4 bg-gradient-to-t from-[#000000f1] via-[#08080870] to-transparent w-full h-28  pt-10 ">
                  <p className="text-base text-[#ffffff]  font-sans w-[70%]">{work.title}</p>
                  </div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-50">
                  <span className="text-white text-3xl">▶</span>
                </div>
              </div>
            </div>
          ))}
          <AnimatePresence>
  {selectedVideo && (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedVideo(null)}
    >
      <motion.div
        className="relative w-full h-full flex justify-center items-center"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* زر إغلاق */}
        <button
          onClick={() => setSelectedVideo(null)}
          className="absolute top-5 right-5 z-10 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl"
        >
          ✕
        </button>

        {/* الفيديو Reel */}
        <video
          src={selectedVideo}
          autoPlay
          controls
            controlsList="nofullscreen"
          className="h-full w-full aspect-[9/16] object-contain"
        />
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;
