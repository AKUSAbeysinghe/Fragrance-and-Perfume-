import React from "react";

export default function CorrespondencePage() {
  return (
    <div className="bg-[#0b0806] text-stone-200 min-h-screen overflow-hidden selection:bg-amber-900/50">
      
      {/* HERO SECTION */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 py-28 md:py-36 border-b border-stone-900">
        
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(180,120,40,0.12),transparent_60%)] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          
          {/* Subtitle */}
          <span className="text-xs md:text-sm tracking-[0.35em] uppercase font-sans text-amber-600/80 font-medium">
            Correspondence
          </span>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight font-serif">
            <span className="text-stone-100 font-normal">Write </span>
            <span className="italic text-stone-300">to the </span>
            <span className="italic text-amber-200/90">Maison</span>
          </h1>

          {/* Divider */}
          <div className="flex justify-center">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
          </div>

          {/* Description */}
          <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
            For private consultations, bespoke compositions, press enquiries
            or simply to share an olfactory memory —
            <span className="text-stone-300 font-normal">
              {" "}
              we read every letter.
            </span>
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          
          {/* Intro Text */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-600">
              The Maison
            </span>

            <h2 className="text-4xl md:text-5xl font-serif leading-snug text-stone-100 mt-4 mb-6">
              A private world of scent, memory and craftsmanship.
            </h2>

            <p className="text-stone-400 leading-relaxed font-light text-base md:text-lg">
              Each message is handled discreetly by our atelier team in Paris. 
              Whether you seek a signature fragrance, a bespoke composition, 
              or a private consultation, we welcome your correspondence.
            </p>
          </div>

          {/* Contact Cards / Items */}
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Private Salon */}
            <div className="border-l border-amber-600/30 pl-6 space-y-3 group">
              <h4 className="text-xs tracking-[0.25em] uppercase text-amber-600 font-medium">
                Private Salon
              </h4>
              <a
                href="mailto:salon@maisondor.com"
                className="block text-2xl font-serif text-amber-200/90 hover:text-amber-100 transition-colors duration-300"
              >
                salon@maisondor.com
              </a>
              <p className="text-stone-400 font-light">
                Reserve a one-hour consultation with a perfumer.
              </p>
            </div>

            {/* Bespoke Compositions */}
            <div className="border-l border-amber-600/30 pl-6 space-y-3 group">
              <h4 className="text-xs tracking-[0.25em] uppercase text-amber-600 font-medium">
                Bespoke Compositions
              </h4>
              <a
                href="mailto:bespoke@maisondor.com"
                className="block text-2xl font-serif text-amber-200/90 hover:text-amber-100 transition-colors duration-300"
              >
                bespoke@maisondor.com
              </a>
              <p className="text-stone-400 font-light">
                From €12,000 · Process spans 6–9 months.
              </p>
            </div>

            {/* Press & Partnerships */}
            <div className="border-l border-amber-600/30 pl-6 space-y-3 group">
              <h4 className="text-xs tracking-[0.25em] uppercase text-amber-600 font-medium">
                Press & Partnerships
              </h4>
              <a
                href="mailto:press@maisondor.com"
                className="block text-2xl font-serif text-amber-200/90 hover:text-amber-100 transition-colors duration-300"
              >
                press@maisondor.com
              </a>
              <p className="text-stone-400 font-light">
                Editorial requests and collaborations welcomed.
              </p>
            </div>

            {/* Telephone */}
            <div className="border-l border-amber-600/30 pl-6 space-y-3 group">
              <h4 className="text-xs tracking-[0.25em] uppercase text-amber-600 font-medium">
                Telephone
              </h4>
              <a
                href="tel:+33142601887"
                className="block text-2xl font-serif text-amber-200/90 hover:text-amber-100 transition-colors duration-300"
              >
                +33 1 42 60 18 87
              </a>
              <p className="text-stone-400 font-light">
                Monday — Saturday · 10:00–19:00 CET
              </p>
            </div>
          </div>

          {/* Closing Note */}
          <div className="mt-20 text-center border-t border-stone-900 pt-12">
            <p className="text-stone-400 text-sm font-light tracking-wide">
              All correspondence is treated with the utmost discretion.<br />
              We aim to reply within two working days.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}