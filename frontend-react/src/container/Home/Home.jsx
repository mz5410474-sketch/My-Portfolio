import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { ImBehance2 } from "react-icons/im"
import mycv from '../../assets/Mohamed.pdf'
import { images } from "../../constants";
import {TypeAnimation} from 'react-type-animation'


const Home = () => {
  return (
    <section className="xl:h-screen"  id="home">
      <div className="container mx-auto px-10 xl:px-32 h-full pt-[66px]">
        <div className="flex flex-col xl:flex-row h-full items-center justify-center py-12 xl:py-24 xl:justify-between ">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <div>
              <span className="text-gray-300 text-xl xl:text-2xl  tracking-tight ">HEY, I AM</span>
              <h1 className="text-gray-300 text-3xl xl:text-5xl leading-[1.1] font-semibold tracking-tight my-1">MOHAMED ZAYED
                </h1>
                <h1 className="text-[#7fbaf4] text-3xl xl:text-5xl leading-[1.1] font-semibold tracking-tight" >
                <TypeAnimation
                sequence={[
                  "CREATIVE VIDEO EDITOR",
                ]}
                speed={200}
                />
                </h1>
              <p className="max-w-[650px] my-6 text-gray-400 text-base xl:text-lg">Creative Video Editor with over 3 years of experience in video editing and digital campaign management. Skilled in crafting engaging visual content using Adobe Creative Suite and DaVinci Resolve, with a strong focus on storytelling, performance optimization, and audience engagement. Experienced in managing Meta & Google campaigns to maximize reach and results.</p>
              <div className="w-full flex flex-col justify-center items-center xl:items-start">
                <div className=" flex justify-center items-center gap-9 xl:gap-9 xl:justify-start">
                  <a href="https://wa.me/+201029914125" target="_blank" className="w-12 h-12 text-2xl flex justify-center items-center bg-inherit border border-gray-500 rounded-full text-white/50 hover:bg-gradient-to-r from-[#001534] via-[#003686] to-[#00c0fa] hover:text-white active:scale-95 duration-300" rel="noreferrer">
                  <IoLogoWhatsapp />
                  </a>
                  <a href="mailto: mz5410474@gmail.com
" target="_blank" className="w-12 h-12 text-2xl flex justify-center items-center bg-inherit border border-gray-500 rounded-full text-white/50 hover:bg-gradient-to-r from-[#001534] via-[#003686] to-[#00c0fa] hover:text-white active:scale-95 duration-300" rel="noreferrer">
                  <SiGmail />
                  </a>
                  <a href="https://www.behance.net/mohamedzayed14" target="_blank" className="w-12 h-12 text-2xl text- P-2 flex justify-center items-center bg-inherit border border-gray-500 rounded-full text-white/50 hover:bg-gradient-to-r from-[#001534] via-[#003686] to-[#00c0fa] hover:text-white active:scale-95 duration-300" rel="noreferrer">
                  <ImBehance2 />
                  </a>
                  <a href="https://www.instagram.com/mohamed.zayed_2?igsh=NG1hMXp2cTJibXpy" target="_blank"  className="w-12 h-12 text-2xl text- P-2 flex justify-center items-center bg-inherit border border-gray-500 rounded-full text-white/50 hover:bg-gradient-to-r from-[#001534] via-[#003686] to-[#00c0fa] hover:text-white active:scale-95 duration-300" rel="noreferrer">
                  <RiInstagramFill />
                  </a>
                </div>
              <a href={mycv} download="Mohamed's CV"  className="flex justify-center items-center gap-2 font-bold bg-inherit text-gray-400 border border-gray-500 rounded-full w-1/2 xl:w-[33%]  mt-6 p-3 hover:bg-gradient-to-r from-[#001534] via-[#003686] to-[#00c0fa] hover:text-white active:scale-95 duration-300">
                <span className="text-sm xl:text-lg">Downlaod CV</span>
                <FaDownload className="text-sm xl:text-lg"/>
              </a>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-full my-3 relative order-1 xl:order-none">
              <motion.dev initial={{opacity:0}} animate={{opacity:1, transition:{delay:0.25, duration: 0.6, ease:"easeIn"}}}>
                <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:0.5, duration: 0.6, ease:"easeIn"}}} className="w-[290px] h-[290px] xl:w-[495px] xl:h-[495px] absolute left-[3px] top-[3px] xl:left-[2px] xl:top-[2px] ">
                  <img src={images.me} alt="ahmed" className="object-contain w-full h-full"/>
                </motion.div>
                <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.circle cx="250" cy="250" r="250" stroke="#7fbaf4" 
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{strokeDasharray: "24 10 0 0"}}
                  animate={{
                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                    rotate:[120, 360],
                  }}
                  transition={
                    {
                      duration: 20,
                      repeat : Infinity,
                      repeatType: "reverse"
                    }
                  }
                  />
                </motion.svg>
              </motion.dev>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
