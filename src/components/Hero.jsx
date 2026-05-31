import React from 'react';
import MainBanner from "../assets/Mains/ZARA parfums💚🧡.jpg";

export default function HeroSection() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col justify-between px-6 py-12 md:px-16 lg:px-24 text-[#e5d5be] selection:bg-[#c9a063] selection:text-black"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(10, 9, 8, 0.9) 20%,
            rgba(10, 9, 8, 0.4) 60%,
            rgba(10, 9, 8, 0.8) 100%
          ),
          url(${MainBanner})
        `,
      }}
    >
      {/* Top Tagline */}
      <div className="text-[10px] md:text-xs font-light tracking-[0.3em] text-[#bda073] uppercase mt-4">
        MAISON D'OR • EST. 1887
      </div>

      {/* Main Content Area */}
      <div className="max-w-2xl my-auto space-y-6 md:space-y-8">
        
        {/* Editorial Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight text-[#f4e0a5]">
          The art <br />
          <span className="font-normal">of </span>
          <span className="italic font-serif text-[#c9a063]">
            scent.
          </span>
        </h1>

        {/* Supporting Description */}
        <p className="text-sm md:text-base font-light tracking-wide leading-relaxed text-[#bda073]/80 max-w-md">
          Four generations of master perfumers compose rare
          olfactory architectures from the world's most
          precious essences.
        </p>
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#c9a063]/10">

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4 md:gap-8">
          
          <button className="border border-[#c9a063]/60 px-6 py-3.5 text-[11px] font-light tracking-[0.25em] text-[#c9a063] hover:bg-[#c9a063] hover:text-black hover:border-[#c9a063] transition-all duration-500 ease-in-out uppercase">
            Discover the Collection
          </button>

          <button className="text-[11px] font-light tracking-[0.25em] text-[#bda073] hover:text-[#f4e0a5] transition-colors duration-300 uppercase py-2">
            Our Heritage
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden sm:flex items-center space-x-3 text-[10px] md:text-xs font-light tracking-[0.3em] text-[#bda073]/60 select-none">
          
          <span className="uppercase">
            Scroll to enter
          </span>

          <div className="w-8 h-[1px] bg-[#bda073]/40 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}