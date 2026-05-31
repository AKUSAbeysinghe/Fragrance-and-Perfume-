import React from 'react';

export default function QuoteSection() {
  return (
    <section className="relative w-full bg-[#0a0908] text-[#e5d5be] py-24 px-6 md:py-32 flex flex-col items-center justify-center overflow-hidden selection:bg-[#c9a063] selection:text-black">
      
      {/* Subtle top ambient gold glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] opacity-70"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #c9a063 50%, transparent 100%)',
          boxShadow: '0 0 20px 2px rgba(201, 160, 99, 0.2)'
        }}
      />

      <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-10">
        
        {/* Main Blockquote */}
        <blockquote className="font-serif text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed md:leading-snug tracking-wide text-center">
          "A fragrance is a{' '}
          <span className="italic font-serif text-[#c9a063] font-normal">
            memory
          </span>{' '}
          made visible — an invisible <br className="hidden md:inline" />
          architecture <br className="md:hidden" /> drawn upon the skin."
        </blockquote>

        {/* Attribution / Author */}
        <div className="flex items-center justify-center space-x-3 text-[9px] md:text-xs font-light tracking-[0.35em] text-[#bda073] uppercase pt-2">
          <span>—</span>
          <cite className="not-italic">
            Hélène Vasseur, Master Perfumer
          </cite>
        </div>

      </div>
    </section>
  );
}