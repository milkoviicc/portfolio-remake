'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NavbarItem = ({value, className}: {value: string, className: string | null}) => {
    const [hovered, setHovered] = useState(false);
  return (
    <motion.div className='cursor-pointer' onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}>
        <a href="#" className={className ?? ''}>{value}</a>
        <div className={`border-t-4 border-purple-500 rounded-xl transition-all duration-300 ease-in-out ${hovered ? 'w-full' : 'w-[0] h-[0]'}`}></div>
    </motion.div>
  )
}

export default NavbarItem;