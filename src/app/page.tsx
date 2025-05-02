'use client';
import Image from "next/image";

import heroImg from '../../public/assets/hero.png';
import typescriptIcon from '../../public/assets/frontend/typescript-icon.png';
import reactIcon from '../../public/assets/frontend/react-icon.png';
import nextjsIcon from '../../public/assets/frontend/nextjs-icon.png';
import tailwindcssIcon from '../../public/assets/frontend/tailwindcss-icon.png';
import framerIcon from '../../public/assets/frontend/framer-icon.png';
import bootstrapIcon from '../../public/assets/frontend/bootstrap-icon.png';

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import {Roboto, Anton} from 'next/font/google';
import { NumberTicker } from "@/components/magicui/number-ticker";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { BlurFade } from "@/components/magicui/blur-fade";
import NavbarItem from "./components/NavbarItem";
import { Particles } from "@/components/magicui/particles";




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
  return (
    <div className="relative flex flex-col w-full h-full bg-[#121A2A]">
      <Particles quantity={50} className="fixed w-full"/>
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
            <InteractiveHoverButton className={`uppercase text-xl ${roboto.className} w-fit text-[#DEDEDE] px-8 py-2 bg-purple-700 rounded-xl cursor-pointer border-0 outline-0`}>Hire me</InteractiveHoverButton>
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
      <div className="container mx-auto px-4 flex flex-col gap-8 py-16 ">
        <h2 className={`uppercase text-purple-500 ${anton.className} text-6xl`}>My tech stack</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col justify-center text-center py-4 rounded-lg">
            <motion.h3 className={`uppercase ${anton.className} text-shadow text-[#DEDEDE] text-4xl group-hover:text-fill`} whileHover={{ color: "#C27AFF" }} transition={{ duration: 0.3 }}>Frontend</motion.h3>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="flex flex-col gap-2 items-center justify-center">
              <Image src={typescriptIcon} alt="Typescript" width={64} height={64} className="w-16 h-16"/>
              <p className={`text-[#DEDEDE] ${roboto.className} text-lg`}>Typescript</p>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
              <Image src={reactIcon} alt="React" width={64} height={64} className="w-16 h-16"/>
              <p className={`text-[#DEDEDE] ${roboto.className} text-lg`}>React</p>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
              <Image src={nextjsIcon} alt="NextJS" width={64} height={64} className="w-16 h-16"/>
              <p className={`text-[#DEDEDE] ${roboto.className} text-lg`}>NextJS</p>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
              <Image src={tailwindcssIcon} alt="Tailwind CSS" width={64} height={64} className="w-16 h-16"/>
              <p className={`text-[#DEDEDE] ${roboto.className} text-lg`}>Tailwind CSS</p>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
              <Image src={framerIcon} alt="Framer" width={64} height={64} className="w-16 h-16"/>
              <p className={`text-[#DEDEDE] ${roboto.className} text-lg`}>Framer</p>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
              <Image src={bootstrapIcon} alt="Bootstrap" width={64} height={64} className="w-16 h-16"/>
              <p className={`text-[#DEDEDE] ${roboto.className} text-lg`}>Bootstrap</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center text-center py-4 bg-white/5 border-[1px] border-white/20 bakdrop-blur-2xl rounded-lg">
            <h3 className={`uppercase ${anton.className} text-[#DEDEDE] text-3xl`}>Frontend</h3>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="flex flex-col items-center justify-center">
                <Image src={typescriptIcon} alt="Typescript" width={64} height={64} className="w-16 h-16"/>
                <p className={`text-[#DEDEDE] ${roboto.className} text-sm`}>Typescript</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center text-center py-4 bg-white/5 border-[1px] border-white/20 bakdrop-blur-2xl rounded-lg">
            <h3 className={`uppercase ${anton.className} text-[#DEDEDE] text-3xl`}>Frontend</h3>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="flex flex-col items-center justify-center">
                <Image src={typescriptIcon} alt="Typescript" width={64} height={64} className="w-16 h-16"/>
                <p className={`text-[#DEDEDE] ${roboto.className} text-sm`}>Typescript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
