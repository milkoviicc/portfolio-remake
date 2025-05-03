'use client';
import Image from "next/image";

import heroImg from '../../public/assets/hero.png';

import typescriptIcon from '../../public/assets/frontend/typescript-icon.png';
import reactIcon from '../../public/assets/frontend/react-icon.png';
import nextjsIcon from '../../public/assets/frontend/nextjs-icon.png';
import tailwindcssIcon from '../../public/assets/frontend/tailwindcss-icon.png';
import framerIcon from '../../public/assets/frontend/framer-icon.png';
import bootstrapIcon from '../../public/assets/frontend/bootstrap-icon.png';

import nodejsIcon from '../../public/assets/backend/nodejs-icon.png';
import mysqlIcon from '../../public/assets/backend/mysql-icon.png';
import expressjsIcon from '../../public/assets/backend/expressjs-icon.png';
import mongodbIcon from '../../public/assets/backend/mongodb-icon.png';
import postmanIcon from '../../public/assets/backend/postman-icon.png';

import figmaIcon from '../../public/assets/other/figma-icon.png';
import vercelIcon from '../../public/assets/other/vercel-icon.png';
import gitIcon from '../../public/assets/other/git-icon.png';

import { Github, Linkedin, Mail, Slack } from "lucide-react";
import { motion } from "framer-motion";
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
          <NavbarItem value={'Milkoviicc'} className={`uppercase text-4xl text-[#C27AFF] ${roboto.className} font-bold`}/>
          <nav className={`flex space-x-8 mr-24 uppercase text-2xl ${roboto.className} font-bold text-[#C27AFF]`}>
            <NavbarItem value={'home'} className=""/>
            <NavbarItem value={'projects'} className=""/>
            <NavbarItem value={'about'} className=""/>
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
            <InteractiveHoverButton className={`uppercase text-xl ${roboto.className} w-fit text-[#DEDEDE] px-8 py-2 bg-purple-700 rounded-xl border-0 outline-0`}>Hire me</InteractiveHoverButton>
          </BoxReveal>
        </div>
        <BlurFade delay={0.25 * 0.05} inView>
          <Image src={heroImg} alt="Hero image" className="w-full image-floating"/>
        </BlurFade>
      </div>


      <div className="w-full h-full flex">
        <div className="container mx-auto flex justify-center items-center gap-24">
          <div className="flex items-center gap-4">
            <h2 className={`${anton.className} font-bold text-6xl text-[#C27AFF]`}><NumberTicker value={25} className="text-[#C27AFF]" />+</h2>
            <p className={`${roboto.className} text-3xl text-[#DEDEDE]`}>Completed<br/>Projects</p>
          </div>
          <div className="flex items-center gap-4">
            <h2 className={`${anton.className} font-bold text-6xl text-[#C27AFF]`}><NumberTicker value={2} className="text-[#C27AFF]" />+</h2>
            <p className={`${roboto.className} text-3xl text-[#DEDEDE]`}>Years of<br/>Experience</p>
          </div>
          <div className="flex items-center gap-4">
            <h2 className={`${anton.className} font-bold text-6xl text-[#C27AFF]`}><NumberTicker value={7} className="text-[#C27AFF]" />+</h2>
            <p className={`${roboto.className} text-3xl text-[#DEDEDE]`}>Happy<br/>Clients</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 flex flex-col gap-8 py-32 ">
        <h2 className={`uppercase text-purple-500 ${anton.className} text-3xl flex gap-4`}>Tech stack <Slack size={32} /></h2>
        <div className="grid grid-cols-3 gap-4 -mx-8 h-full">
          <TiltedCard>
            <MotionSpotlightCard className="group flex flex-col text-left py-4 rounded-lg border-0 bg-transparent h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
              <h3 className={`uppercase ${anton.className} text-shadow text-[#DEDEDE] text-6xl group-hover:text-[#C27AFF] duration-300 ease-in-out`}>Frontend</h3>
              <div className="col-span-3 flex flex-wrap gap-x-8 gap-12 mt-10">
                <div className="flex items-center gap-2">
                  <Image src={tailwindcssIcon} alt="Tailwind CSS"/>
                  <p className={`text-[#DEDEDE] ${roboto.className} text-xl`}>Tailwind CSS</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={reactIcon} alt="React"/>
                  <p className={`text-[#DEDEDE] ${roboto.className} text-xl`}>React</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={nextjsIcon} alt="NextJS"/>
                  <p className={`text-[#DEDEDE] ${roboto.className} text-xl`}>NextJS</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={typescriptIcon} alt="Typescript"/>
                  <p className={`text-[#DEDEDE] ${roboto.className} text-xl`}>Typescript</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={framerIcon} alt="Framer"/>
                  <p className={`text-[#DEDEDE] ${roboto.className} text-xl`}>Framer</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={bootstrapIcon} alt="Bootstrap"/>
                  <p className={`text-[#DEDEDE] ${roboto.className} text-xl`}>Bootstrap</p>
                </div>
              </div>
            </MotionSpotlightCard>
          </TiltedCard>
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
          <TiltedCard>
            <MotionSpotlightCard className="group flex flex-col text-left py-4 rounded-lg bg-transparent border-0 h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
              <h3 className={`uppercase ${anton.className} text-shadow text-[#DEDEDE] text-6xl group-hover:text-[#C27AFF] duration-300 ease-in-out`}>Design & other</h3>
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
                  <Image src={gitIcon} alt="NextJS"/>
                  <p className={`text-[#DEDEDE] ${roboto.className} text-xl`}>Git</p>
                </div>
              </div>
            </MotionSpotlightCard>
          </TiltedCard>
        </div>
      </div>
    </div>
  );
}
