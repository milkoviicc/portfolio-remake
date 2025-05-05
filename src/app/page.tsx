/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from "next/image";

import heroImg from '../../public/assets/hero.png';

import framerIcon from '../../public/assets/frontend/framer-motion.svg';
import bootstrapIcon from '../../public/assets/frontend/Bootstrap_logo.svg';

import nodejsIcon from '../../public/assets/backend/nodejs-icon.png';
import mysqlIcon from '../../public/assets/backend/mysql-icon.png';
import expressjsIcon from '../../public/assets/backend/expressjs-icon.png';
import mongodbIcon from '../../public/assets/backend/mongodb-icon.png';
import postmanIcon from '../../public/assets/backend/postman-icon.png';

import figmaIcon from '../../public/assets/other/figma-icon.png';
import vercelIcon from '../../public/assets/other/vercel-icon.png';
import gitIcon from '../../public/assets/other/git.svg';

import myImg from '../../public/assets/me.jpg';

import { Github, Linkedin, Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {Roboto, Anton} from 'next/font/google';
import { NumberTicker } from "@/components/magicui/number-ticker";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { BlurFade } from "@/components/magicui/blur-fade";
import NavbarItem from "./components/NavbarItem";
import { Particles } from "@/components/magicui/particles";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import SpotlightCard from "@/blocks/Components/SpotlightCard/SpotlightCard";
import TiltedCard from "@/blocks/Components/TiltedCard/TiltedCard";
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import SwapText from "@/blocks/Components/Animata/Card/swap-text-card";
import { GiStack } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { IoHammerSharp } from "react-icons/io5";
import { useState } from "react";





const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Add more weights if needed
  variable: '--font-roboto', // This makes it available in the Tailwind config
});

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton', // This makes it available in the Tailwind config
});

export default function Home() {
  const MotionSpotlightCard = motion.create(SpotlightCard);
  const [showProjectImage, setShowProjectImage] = useState<string | null>(null);

  return (
    <div className="relative flex flex-col w-full h-full bg-[#121A2A]">
      <Particles quantity={50} className="fixed w-full"/>
      <SmoothCursor />
      <div className="flex flex-col fixed bottom-5 gap-3 w-fit px-6">
        <a href="https://github.com/milkoviicc" className="text-[#C27AFF]" target="_blank"><Github size={32}/></a>
        <a href="https://linkedin.com/in/milkoviicc" className="text-[#C27AFF]" target="_blank"><Linkedin size={32}/></a>
        <a href="mailto:marko.milkovicc@gmail.com" className="text-[#C27AFF]" target="_blank"><Mail size={32}/></a>
      </div>


      <div className="container mx-auto px-4 py-8">
        <div className={`flex justify-between items-center py-4 font-roboto`}>
          <NavbarItem value={'Milkoviicc'} className={`uppercase text-4xl text-[#C27AFF] ${roboto.className} font-bold cursor-none`}/>
          <nav className={`flex space-x-8 mr-24 uppercase text-2xl ${roboto.className} font-bold text-[#C27AFF]`}>
            <NavbarItem value={'home'} className="cursor-none"/>
            <NavbarItem value={'projects'} className="cursor-none"/>
            <NavbarItem value={'about'} className="cursor-none"/>
          </nav>
        </div>
      </div>
      
      <div className="container mx-auto my-8 px-4 py-8 w-full flex">
        <div className="flex flex-col justify-center gap-8">
          <BoxReveal boxColor={"#8641C1"} duration={0.5}>
            <h1 className={`text-[#DEDEDE] text-shadow ${roboto.className} text-6xl leading-16 font-bold w-fit`}><span className="text-[#C27AFF] text-shadow-2xs">FRONTEND<br/></span>DEVELOPER</h1>
          </BoxReveal>
          <BoxReveal boxColor="#8641C1" duration={0.5}>
            <p className={`text-[#DEDEDE] max-w-full break-words ${roboto.className} text-xl`}>Hey, I&apos;m Marko. A reliable Frontend developer with proven experience in building high-performance, responsive and modern web applications.</p>
          </BoxReveal>
          <BoxReveal boxColor="#8641C1" duration={0.5}>
            <InteractiveHoverButton className={`uppercase text-xl ${roboto.className} w-fit text-[#DEDEDE] px-8 py-2 bg-purple-700 rounded-xl border-0 outline-0 cursor-none`}>Hire me</InteractiveHoverButton>
          </BoxReveal>
        </div>
        <BlurFade delay={0.25 * 0.05} inView>
          <Image src={heroImg} alt="Hero image" className="w-full image-floating"/>
        </BlurFade>
      </div>


      <div className="w-full h-full flex">
        <div className="container mx-auto flex justify-center items-center gap-24">
          <div className="flex items-center gap-4">
            <h2 className={`${anton.className} font-bold text-6xl text-[#C27AFF]`}><NumberTicker value={5} className="text-[#C27AFF]" />+</h2>
            <p className={`${roboto.className} text-3xl text-[#DEDEDE]`}>Completed<br/>Projects</p>
          </div>
          <div className="flex items-center gap-4">
            <h2 className={`${anton.className} font-bold text-6xl text-[#C27AFF]`}><NumberTicker value={2} className="text-[#C27AFF]" />+</h2>
            <p className={`${roboto.className} text-3xl text-[#DEDEDE]`}>Years of<br/>Experience</p>
          </div>
          <div className="flex items-center gap-4">
            <h2 className={`${anton.className} font-bold text-6xl text-[#C27AFF]`}><NumberTicker value={5} className="text-[#C27AFF]" />+</h2>
            <p className={`${roboto.className} text-3xl text-[#DEDEDE]`}>Happy<br/>Clients</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 flex flex-col gap-8 py-32 ">
        <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.5 }} className={`uppercase text-purple-500 ${anton.className} text-3xl flex gap-4 icon-floating`}>Tech stack<GiStack size={32}/></motion.h2>
        <div className="grid grid-cols-3 gap-4 -mx-8 h-full">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.5, delay: 0.2 }}>
            <TiltedCard>
              <MotionSpotlightCard className="group flex flex-col text-left py-4 rounded-lg border-0 bg-transparent h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
                <h3 className={`uppercase ${anton.className} text-shadow text-[#DEDEDE] text-6xl group-hover:text-[#C27AFF] duration-300 ease-in-out`}>Frontend</h3>
                <div className="col-span-3 flex flex-wrap gap-x-8 gap-12 mt-10">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#222] px-1 py-1 rounded-lg">
                      <RiTailwindCssFill size={32} fill="#23BCBB" />
                    </div>
                    <p className={`text-[#DEDEDE] ${roboto.className} text-xl`}>Tailwind CSS</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-[#222] px-1 py-1 rounded-lg">
                      <RiReactjsFill size={32} fill="#23BCBB" />
                    </div>
                    <p className={`text-[#DEDEDE] ${roboto.className} text-xl`}>React</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-[#222] px-1 py-1 rounded-lg">
                      <RiNextjsFill size={32} fill="#fff" />
                    </div>
                    <p className={`text-[#DEDEDE] ${roboto.className} text-xl`}>NextJS</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-1">
                      <SiTypescript size={32} fill="#2D79C7" className="rounded-sm"/>
                    </div>
                    <p className={`text-[#DEDEDE] ${roboto.className} text-xl`}>Typescript</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={framerIcon} alt="Framer Motion" width={32} height={32} className="rounded-sm"/>
                    <p className={`text-[#DEDEDE] ${roboto.className} text-xl`}>Framer</p>
                  </div>
                  <div className="flex items-center gap-2">
                  <Image src={bootstrapIcon} alt="Bootstrap" width={32} height={32} className="rounded-sm"/>
                    <p className={`text-[#DEDEDE] ${roboto.className} text-xl`}>Bootstrap</p>
                  </div>
                </div>
              </MotionSpotlightCard>
            </TiltedCard>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.5, delay: 0.4 }}>
            <TiltedCard>
              <MotionSpotlightCard className="group flex flex-col text-left py-4 rounded-lg bg-transparent border-0 h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
                <h3 className={`uppercase ${anton.className} text-shadow text-[#DEDEDE] text-6xl group-hover:text-[#C27AFF] duration-300 ease-in-out`}>Backend</h3>
                <div className="col-span-3 flex flex-wrap gap-x-8 gap-12 mt-10">
                  <div className="flex items-center gap-2 ">
                    <Image src={nodejsIcon} alt="Typescript"/>
                    <p className={`text-[#DEDEDE] ${roboto.className} text-xl`}>NodeJS</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={mysqlIcon} alt="React"/>
                    <p className={`text-[#DEDEDE] ${roboto.className} text-xl`}>MySQL</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={expressjsIcon} alt="NextJS"/>
                    <p className={`text-[#DEDEDE] ${roboto.className} text-xl`}>ExpressJS</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={mongodbIcon} alt="Tailwind CSS"/>
                    <p className={`text-[#DEDEDE] ${roboto.className} text-xl`}>MongoDB</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={postmanIcon} alt="Framer"/>
                    <p className={`text-[#DEDEDE] ${roboto.className} text-xl`}>Postman</p>
                  </div>
                </div>
              </MotionSpotlightCard>
            </TiltedCard>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.5, delay: 0.6 }}>
            <TiltedCard>
              <MotionSpotlightCard className="group flex flex-col text-left py-4 rounded-lg bg-transparent border-0 h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
                <h3 className={`uppercase ${anton.className} text-shadow text-[#DEDEDE] text-6xl group-hover:text-[#C27AFF] duration-300 ease-in-out`}>Other</h3>
                <div className="col-span-3 flex flex-wrap gap-x-8 gap-12 mt-10">
                  <div className="flex items-center gap-2 ">
                    <Image src={figmaIcon} alt="Typescript"/>
                    <p className={`text-[#DEDEDE] ${roboto.className} text-xl`}>Figma</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={vercelIcon} alt="React"/>
                    <p className={`text-[#DEDEDE] ${roboto.className} text-xl`}>Vercel</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={gitIcon} alt="NextJS" width={32} height={32}/>
                    <p className={`text-[#DEDEDE] ${roboto.className} text-xl`}>Git</p>
                  </div>
                </div>
              </MotionSpotlightCard>
            </TiltedCard>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.5 }} className={`${anton.className} text-3xl text-purple-500 uppercase py-4 flex gap-4 icon-floating`}>About me <FaUser size={32}/></motion.h1>
        <motion.h3 initial={{ opacity: 0, y: 50 }} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.5, delay: 0.2 }} className={`${roboto.className} text-6xl text-[#DEDEDE] w-[80%] leading-16 text-shadow-2xs py-4`}>A self-taught Front-End Developer with a passion for building modern, responsive, and user-friendly web applications.</motion.h3>
        <motion.span initial={{ opacity: 0, y: 50 }} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.5, delay: 0.2 }} className="w-[85%] h-[2px] block my-4 bg-[#494747]"></motion.span>
        <div className="flex gap-4 w-full my-8">
          <div className="flex flex-col gap-4 w-[45%]">
            <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.5, delay: 0.4}} className={`text-6xl ${anton.className} uppercase text-shadow-2xs text-[#DEDEDE]`}>Marko Milković</motion.h1>
            <div className="flex flex-col gap-4 w-[80%]">
              <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.5, delay: 0.4 }} className={`text-[#DEDEDE] ${roboto.className} text-xl py-2`}>I started coding as a hobby in 2020, and over the years, I’ve built a variety of projects — from simple static websites to full-featured dynamic applications, always driven by a passion for turning designs into engaging, interactive experiences.</motion.p>
              <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.5, delay: 0.4 }} className={`text-[#DEDEDE] ${roboto.className} text-xl py-2`}>I'm currently looking for internships or part-time opportunities where I can grow as a developer, collaborate with a team, and contribute to meaningful projects.</motion.p>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.5, delay: 0.4 }}>
            <Image src={myImg} width={450} height={450} alt="Portrait" className="rounded-lg" />
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto py-8 flex flex-col gap-8">
        <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.5 }} className={`${anton.className} px-4 text-3xl text-purple-500 uppercase py-4 flex gap-4 icon-floating`}>Projects <IoHammerSharp size={32}/></motion.h1>
      
        <div className="relative flex justify-between w-full h-full">
          <MotionSpotlightCard onHoverStart={() => console.log('desava se')} onHoverEnd={() => setShowProjectImage(null)} className="flex flex-col text-left py-4 px-6 rounded-lg bg-transparent border-0 w-[650px] h-full z-50" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h3 className={`text-6xl font-bold uppercase text-[#DEDEDE] py-6 ${roboto.className}`}>Xemtio</h3>
            <SwapText initialText="XEMTIO is a Croatian company focused on the production and installation of custom-made furniture, offering tailored solutions to fit any space and style." finalText="More info" initialTextClassName={`text-lg font-extralight ${roboto.className}`} className="text-[#DEDEDE] text-lg"/>
          </MotionSpotlightCard>

          <AnimatePresence>
          {showProjectImage === 'xemtio' && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
              className="absolute top-1/2 right-40 transform -translate-y-1/2"
            >
              <Image
                src={myImg}
                width={450}
                height={450}
                alt="Xemtio project preview"
                className="rounded-lg"
              />
            </motion.div>
          )}
        </AnimatePresence>
        </div>
        <div className="flex justify-between w-full h-full">
          <div className="w-fit h-fit" onMouseEnter={() => setShowProjectImage('snet')} onMouseLeave={() => setShowProjectImage(null)}>
            <MotionSpotlightCard className="group flex flex-col text-left py-2 rounded-lg border-0 bg-transparent px-4 h-full w-[650px]" spotlightColor="rgba(0, 229, 255, 0.2)">
              <h3 className={`text-[#DEDEDE] uppercase text-6xl font-bold ${roboto.className} py-8`}>SNET</h3>
              <SwapText initialTextClassName={`text-lg text-extralight ${roboto.className}`}  initialText="XEMTIO is a Croatian company focused on the production and installation of custom-made furniture, offering tailored solutions to fit any space and style. " finalText="More info" className={`text-[#DEDEDE] text-lg`}></SwapText>
            </MotionSpotlightCard>
          </div>
        </div>
        <div className="flex justify-between w-full h-full">
          <div className="w-fit h-fit" onMouseEnter={() => setShowProjectImage('opgnedaca')} onMouseLeave={() => setShowProjectImage(null)}>
            <MotionSpotlightCard className="group flex flex-col text-left py-2 rounded-lg border-0 bg-transparent px-4 h-full w-[650px]" spotlightColor="rgba(0, 229, 255, 0.2)">
              <h3 className={`text-[#DEDEDE] uppercase text-6xl font-bold ${roboto.className} py-8`}>Opg Nedaća</h3>
              <SwapText initialTextClassName={`text-lg text-extralight ${roboto.className}`}  initialText="XEMTIO is a Croatian company focused on the production and installation of custom-made furniture, offering tailored solutions to fit any space and style. " finalText="More info" className={`text-[#DEDEDE] text-lg`}></SwapText>
            </MotionSpotlightCard>
          </div>
        </div>
      </div>
    </div>
  );
}
