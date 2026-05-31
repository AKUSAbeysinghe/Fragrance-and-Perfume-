import React from 'react';
import PerfumeCollection from "../assets/Mains/PerfumeCollections.jpg";

export default function BoutiqueFeature() {
  const features = [
    'Bespoke fragrance composition',
    'Private engraving on demand',
    'Worldwide complimentary delivery',
  ];

  return (
    <section className="w-full bg-[#0a0908] text-[#e5d5be] min-h-screen flex flex-col md:flex-row select-none selection:bg-[#c9a063] selection:text-black">
      
      {/* Left Column: Image Area */}
      <div className="w-full md:w-1/2 relative min-h-[450px] md:min-h-screen bg-[#141210]">
        <img
          src= {PerfumeCollection} // Replace with your actual interior / boutique image asset
          alt="Maison d'Or Boutique Interior"
          className="w-full h-full object-cover brightness-[0.85] contrast-[1.05]"
          loading="lazy"
        />
        {/* Subtle vignette gradient to blend beautifully with the dark right pane */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0908]/30 hidden md:block" />
      </div>

      {/* Right Column: Narrative & Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-16 md:p-16 lg:p-24 space-y-8 md:space-y-10">
        
        {/* Subtitle / Action Tracker */}
        <span className="text-[10px] md:text-xs font-light tracking-[0.35em] text-[#bda073] uppercase">
          Visit the Maison
        </span>

        {/* Dynamic Typography Header */}
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight text-[#f4e0a5]">
          A sanctuary for the <br />
          <span className="italic font-serif text-[#c9a063] font-normal">
            senses.
          </span>
        </h2>

        {/* Core Body Context */}
        <p className="text-sm md:text-base font-light tracking-wide leading-relaxed text-[#bda073]/80 max-w-xl">
          Step into our flagship at 7 Rue Saint-Honoré — a temple of marble,
          brass and rare wood, where every visitor is welcomed for a private
          olfactory consultation guided by our master perfumers.
        </p>

        {/* Minimalist Key Services List */}
        <div className="space-y-4 pt-2 max-w-md">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group flex items-center space-x-4 text-xs md:text-sm font-light tracking-wide text-[#bda073]/90"
            >
              {/* Monospaced-style horizontal divider notch */}
              <div className="w-6 h-[1px] bg-[#c9a063]/40 transition-all duration-300 group-hover:w-8 group-hover:bg-[#c9a063]" />
              <span className="transition-colors duration-300 group-hover:text-[#f4e0a5]">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <button className="border border-[#c9a063]/60 px-8 py-3.5 text-[11px] font-light tracking-[0.25em] text-[#c9a063] hover:bg-[#c9a063] hover:text-black hover:border-[#c9a063] transition-all duration-500 ease-in-out uppercase">
            Find a Boutique
          </button>
        </div>

      </div>
    </section>
  );
}