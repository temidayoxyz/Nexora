/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ArrowUpRight, Award, Crown, X } from 'lucide-react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Work", "Agency", "Services", "Contact"];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white selection:bg-white/30">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://cdn.videy.co/WcUmq5V21.mp4"
      />
      
      {/* Subtle overlay for text readability against active video backgrounds */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Main Content Layer (z-10) */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 lg:py-7">
          <div className="font-podium text-white font-bold uppercase text-2xl sm:text-3xl tracking-wider">
            NEXORA
          </div>

          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="font-inter text-sm text-white/80 tracking-widest uppercase hover:text-white transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a 
              href="#contact"
              className="group flex items-center gap-2 border border-white/30 hover:border-white/60 px-6 py-3 text-xs tracking-widest uppercase hover:bg-white/10 transition-all duration-300"
            >
              START A PROJECT <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Hamburger (below md) */}
          <button 
            className="md:hidden flex flex-col justify-center space-y-1.5 p-2 z-50 group"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <div className="w-6 h-0.5 bg-white transition-all duration-300 group-hover:opacity-80"></div>
            <div className="w-6 h-0.5 bg-white transition-all duration-300 group-hover:opacity-80"></div>
            <div className="w-4 h-0.5 bg-white transition-all duration-300 group-hover:w-6 group-hover:opacity-80"></div>
          </button>
        </nav>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 pb-20">
          
          <div className="animate-fade-up mb-6 lg:mb-8 flex items-center gap-3">
            <Crown className="w-4 h-4 text-white/70" />
            <span className="text-white/70 text-xs sm:text-sm font-inter tracking-[0.3em] uppercase">
              Elite Brand & Digital Agency
            </span>
          </div>

          <h1 className="animate-fade-up-delay-1 font-podium text-white uppercase leading-[0.92] tracking-tight flex flex-col">
            <span className="text-[clamp(2.8rem,8vw,7rem)]">Create.</span>
            <span className="text-[clamp(2.8rem,8vw,7rem)]">Elevate.</span>
            <span className="text-[clamp(2.8rem,8vw,7rem)]">Dominate.</span>
          </h1>

          <p className="animate-fade-up-delay-2 text-white/70 text-sm sm:text-base font-inter leading-relaxed max-w-md mt-6 lg:mt-8">
            We craft bold brands and high-performance digital experiences that capture attention, inspire loyalty, and drive growth.
          </p>

          <div className="animate-fade-up-delay-3 mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <a 
              href="#work" 
              className="group flex items-center gap-2 bg-black hover:bg-neutral-900 px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase transition-all duration-300 border border-transparent"
            >
              VIEW PROJECTS 
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a 
              href="#contact" 
              className="group flex items-center gap-2 bg-transparent hover:bg-white/10 px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase transition-all duration-300 border border-white/30 hover:border-white/60"
            >
              LET'S TALK
            </a>

            <div className="hidden lg:flex items-center gap-4 ml-2 xl:ml-6">
              <Award className="w-8 h-8 text-white/50" />
              <div className="flex flex-col">
                <span className="text-white/60 text-xs tracking-wider uppercase">Award-Winning</span>
                <span className="text-white/60 text-xs tracking-wider uppercase">Creative Agency</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-up-delay-4 mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-6 sm:gap-12 lg:gap-16">
            <div className="flex flex-col">
              <span className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">300+</span>
              <span className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">Brands Elevated</span>
            </div>
            <div className="flex flex-col">
              <span className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">97%</span>
              <span className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">Client Satisfaction</span>
            </div>
            <div className="flex flex-col">
              <span className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">12+</span>
              <span className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">Years of Excellence</span>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-500 flex flex-col ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 sm:px-10">
          <div className="font-podium text-white font-bold uppercase text-2xl tracking-wider">
            NEXORA
          </div>
          <button 
            className="p-2 text-white/80 hover:text-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center gap-10 p-6">
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="font-podium text-4xl sm:text-5xl text-white uppercase transition-all duration-500 hover:text-white/80"
                style={{
                  transitionDelay: `${i * 80 + 100}ms`,
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                {link}
              </a>
            ))}
          </div>

          <a 
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-2 border border-white/30 hover:border-white/60 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-500 mt-4 hover:bg-white/10"
            style={{
              transitionDelay: `${navLinks.length * 80 + 100}ms`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            START A PROJECT <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
