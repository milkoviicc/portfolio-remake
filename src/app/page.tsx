import Image from "next/image";

import heroImg from '../../public/assets/hero.png';
import { Github, Linkedin, Mail } from "lucide-react";

import {Roboto, Anton} from 'next/font/google';
import { NumberTicker } from "@/components/magicui/number-ticker";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { BlurFade } from "@/components/magicui/blur-fade";

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
    <div className="relative overflow-hidden flex flex-col w-screen h-screen bg-[#121A2A]">
      <div className="container mx-auto px-4 py-8">
        <div className={`flex justify-between items-center py-4 font-roboto`}>
          <a href="#" className={`uppercase text-4xl text-[#C27AFF] ${roboto.className} font-bold`}>Milkoviicc</a>
          <nav className={`flex space-x-8 mr-24 uppercase text-2xl ${roboto.className} font-bold text-[#C27AFF]`}>
            <a href="#">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </div>
      
      <div className="container mx-auto my-24 px-4 py-8 w-full flex">
        <div className="flex flex-col gap-8">
          <BoxReveal boxColor={"#8641C1"} duration={0.5}>
            <h1 className={`text-[#DEDEDE] text-shadow ${roboto.className} text-6xl leading-16 font-bold w-fit`}><span className="text-[#C27AFF] text-shadow-2xs">FRONTEND<br/></span>DEVELOPER</h1>
          </BoxReveal>
          <BoxReveal boxColor="#8641C1" duration={0.5}>
            <p className={`text-[#DEDEDE] max-w-[550px] break-words ${roboto.className} text-xl`}>Hey, I&apos;m Marko. A reliable Frontend developer with proven experience in building high-performance, responsive and modern web applications.</p>
          </BoxReveal>
          <BoxReveal boxColor="#8641C1" duration={0.5}>
            <InteractiveHoverButton className={`uppercase text-xl ${roboto.className} w-fit text-[#DEDEDE] px-8 py-2 bg-purple-700 rounded-xl cursor-pointer border-0 outline-0`}>Hire me</InteractiveHoverButton>
          </BoxReveal>
        </div>
        <BlurFade delay={0.25 * 0.05} inView>
          <Image src={heroImg} width={650} height={750} alt="Hero image"/>
        </BlurFade>
      </div>

      <div className="w-full h-full flex">
        <div className="flex flex-col gap-3 w-fit px-6">
          <a href="https://github.com/milkoviicc" className="text-[#C27AFF]" target="_blank"><Github size={32}/></a>
          <a href="https://linkedin.com/in/milkoviicc" className="text-[#C27AFF]" target="_blank"><Linkedin size={32}/></a>
          <a href="mailto:marko.milkovicc@gmail.com" className="text-[#C27AFF]" target="_blank"><Mail size={32}/></a>
        </div>
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
    </div>
  );
}
