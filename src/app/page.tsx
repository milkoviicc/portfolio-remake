'use client';
// File: pages/index.js

import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>MILKOVIICC | Portfolio</title>
        <meta name="description" content="Frontend Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-500">MILKOVIICC</Link>
          
          {/* Mobile menu , */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="hover:text-purple-400 transition-colors">Home</Link>
            <Link href="#about" className="hover:text-purple-400 transition-colors">About</Link>
            <Link href="#projects" className="hover:text-purple-400 transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-purple-400 transition-colors">Contact</Link>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 p-4">
            <div className="flex flex-col space-y-4">
              <Link href="#home" className="hover:text-purple-400 transition-colors" onClick={toggleMenu}>Home</Link>
              <Link href="#about" className="hover:text-purple-400 transition-colors" onClick={toggleMenu}>About</Link>
              <Link href="#projects" className="hover:text-purple-400 transition-colors" onClick={toggleMenu}>Projects</Link>
              <Link href="#contact" className="hover:text-purple-400 transition-colors" onClick={toggleMenu}>Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 pt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-purple-500">Hi, I&apos;m</span> Marko
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-300">Frontend Developer</h2>
            <p className="text-lg mb-8 text-gray-400 max-w-lg">
              I create responsive and user-friendly web applications using modern technologies.
            </p>
            <div className="flex space-x-4">
              <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                View Projects
              </a>
              <a href="#contact" className="bg-transparent border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-purple-500/20 flex items-center justify-center">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-purple-500 overflow-hidden">
                <Image 
                  src="/images/me.jpg"
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-purple-500">Me</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-purple-500 transform rotate-6 rounded-lg"></div>
                <Image 
                  src="/images/about-img.jpg" 
                  alt="About" 
                  className="relative z-10 rounded-lg shadow-xl"
                  width={500}
                  height={300}
                />
                </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-bold mb-4">Frontend Developer</h3>
              <p className="text-gray-300 mb-6">
                I&apos;m a passionate frontend developer with expertise in building modern web applications.
                With a strong foundation in HTML, CSS, and JavaScript, I create responsive and user-friendly interfaces.
                My approach combines technical skills with creativity to deliver exceptional user experiences.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>React</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Next.js</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>JavaScript</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Responsive Design</span>
                </div>
              </div>
              <a 
                href="#" 
                className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Download CV
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-purple-500">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-105">
              <Image 
                src="/images/xemtio.png"
                alt="Project 1" 
                className="w-full h-48 object-cover"
                width={500}
                height={300}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">XEMTIO d.o.o</h3>
                <p className="text-gray-400 mb-4">
                XEMTIO is a Croatian company based on the production and mounting of custom-made furniture.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded">React</span>
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded">TypeScript</span>
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded">Styled Components</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://www.xemtio.com" className="text-purple-500 hover:text-purple-400">
                    Live Preview
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-105">
              <Image 
                src="/images/snet.jpeg"
                alt="Project 2" 
                className="w-full h-48 object-cover"
                width={500}
                height={300}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">SNET</h3>
                <p className="text-gray-400 mb-4">
                SNET is a social networking app built with Next.JS, ShadCN UI, and Tailwind CSS, designed for a smooth and responsive user experience. SNET is a project that showcases my front-end skills while integrating seamlessly with a powerful backend.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded">Next.js</span>
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded">TypeScript</span>
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded">TailwindCSS</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://zavrsni-snet.vercel.app" className="text-purple-500 hover:text-purple-400">
                    Live Preview
                  </a>
                  <a href="https://github.com/milkoviicc/zavrsni" className="text-purple-500 hover:text-purple-400">
                    Source Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-105">
              <Image 
                src="/images/weatherapp.png"
                alt="Project 3" 
                className="w-full h-48 object-cover"
                width={500}
                height={300}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Weather App</h3>
                <p className="text-gray-400 mb-4">
                Weather App is a website I made using Weather API to get weather information of the city user has searched for. It also changes background to a random picture of the city.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded">HTML</span>
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded">CSS</span>
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded">JavaScript</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://milkoviicc.github.io/WeatherApp/" className="text-purple-500 hover:text-purple-400">
                    Live Preview
                  </a>
                  <a href="https://github.com/milkoviicc/WeatherApp" className="text-purple-500 hover:text-purple-400">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a href="https://github.com/milkoviicc?tab=repositories" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors" target='blank'>
              View All Projects
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Get In <span className="text-purple-500">Touch</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a href="mailto:milkoviicc@gmail.com" className="text-gray-400">milkoviicc@gmail.com</a>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="oklch(62.7% 0.265 303.9)" d="M15.2 22.001c-.249 0-.501-.016-.753-.048-2.697-.341-5.284-1.733-7.69-4.14-2.406-2.405-3.798-4.992-4.14-7.69-.284-2.247.724-4.434 2.633-5.706l3.049-2.032 4.822 4.822-3.154 3.154c.134.411.55 1.312 1.74 2.503 1.19 1.19 2.091 1.605 2.522 1.747l3.135-3.161 4.822 4.822-2.033 3.049c-1.129 1.695-2.979 2.68-4.953 2.68zM8.044 4.959 6.359 6.081c-1.253.836-1.943 2.324-1.757 3.791.284 2.247 1.485 4.443 3.569 6.527 2.085 2.085 4.281 3.286 6.527 3.569 1.473.188 2.956-.503 3.791-1.757l1.123-1.686-2.248-2.248-1.74 1.739a1.979 1.979 0 0 1-2.02.494c-.732-.241-1.902-.824-3.312-2.233-1.408-1.407-1.991-2.577-2.232-3.31a1.977 1.977 0 0 1 .494-2.02l1.74-1.74-2.25-2.248z"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Phone number</h3>
                <a href="#" className="text-gray-400">+385 095 808 7474</a>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-gray-400">Petrinja, Croatia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold text-purple-500">Milkoviic</Link>
              <p className="text-gray-400 mt-2">Building amazing web experiences</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500">© 2025 Milkoviic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}