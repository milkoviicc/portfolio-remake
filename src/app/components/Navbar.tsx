'use client';
import React, {useState} from 'react';
import {motion} from 'framer-motion';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Add more weights if needed
  variable: '--font-roboto', // This makes it available in the Tailwind config
});

const Navbar = () => {
    const [hovered, setHovered] =  useState(false);

  return (
    <div className={`flex space-x-8 mr-24 uppercase text-2xl ${roboto.className} font-bold text-[#C27AFF]`}>
        <motion.div onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}>
            <a href="#">Home</a>
            <div className={`border-t-4 border-purple-500 rounded-xl transition-all duration-300 ease-in-out ${hovered ? 'w-full' : 'w-0'}`}></div>
        </motion.div>
        <motion.div onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}>
            <a href="#">Projects</a>
            <div className={`border-t-4 border-purple-500 rounded-xl transition-all duration-300 ease-in-out ${hovered ? 'w-full' : 'w-0'}`}></div>
        </motion.div>
        <motion.div onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}>
            <a href="#">About</a>
            <div className={`border-t-4 border-purple-500 rounded-xl transition-all duration-300 ease-in-out ${hovered ? 'w-full' : 'w-0'}`}></div>
        </motion.div>
    </div>
  )
}

export default Navbar