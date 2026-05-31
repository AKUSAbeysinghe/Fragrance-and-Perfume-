import React from 'react';

export default function NuitDOudPage() {
  return (
    <>
      {/* Glass Compositions Header */}
      <section className="relative w-full bg-[#0a0908] text-[#e5d5be] py-20 px-6 md:py-28 flex flex-col items-center justify-center overflow-hidden select-none selection:bg-[#c9a063] selection:text-black">
        
        {/* Subtle top ambient gold glow decoration */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] opacity-60"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #c9a063 50%, transparent 100%)',
            boxShadow: '0 0 15px 1px rgba(201, 160, 99, 0.15)'
          }}
        />

        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8 flex flex-col items-center">
          
          <span className="block text-[10px] md:text-xs font-light tracking-[0.4em] text-[#bda073] uppercase">
            The Collection
          </span>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-wide text-[#f4e0a5]">
            Compositions{' '}
            <span className="italic font-serif text-[#c9a063] font-normal">
              in glass
            </span>
          </h2>

          <div 
            className="w-12 h-[1px] opacity-40 my-2"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #c9a063 50%, transparent 100%)'
            }}
          />

          <p className="text-xs md:text-sm font-light tracking-wide leading-relaxed text-[#bda073]/70 max-w-xl mx-auto">
            Four signature parfums composed in our Grasse atelier, each a sustained{' '}
            <br className="hidden md:inline" />
            meditation on a single olfactory architecture.
          </p>

        </div>
      </section>

      {/* Nuit d'Oud Product Detail */}
      <div className="min-h-screen bg-[#0a0705] flex items-center justify-center p-4 md:p-8">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 bg-[#0d0907] rounded-lg overflow-hidden shadow-2xl border border-stone-900">
          
          {/* Left Side: Product Image */}
          <div className="relative h-64 md:h-[550px] w-full">
            <img
              src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=1000&auto=format&fit=crop" 
              alt="Nuit d'Oud - Spices and ingredients"
              className="w-full h-full object-cover brightness-90 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-[#0d0907]/40 pointer-events-none" />
          </div>

          {/* Right Side: Product Details */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between text-[#e4d7cd]">
            
            <div className="space-y-4">
              <span className="text-xs tracking-[0.3em] uppercase text-amber-600/80 font-medium block">
                Oriental Woody
              </span>
              <h1 className="text-4xl md:text-5xl font-serif text-stone-100 font-light tracking-wide">
                Nuit <span className="italic font-normal text-amber-100/90">d'Oud</span>
              </h1>
              <p className="text-stone-400 italic font-serif text-sm md:text-base tracking-wide pt-2">
                "A velvet midnight, smoke curling above prayer."
              </p>
            </div>

            {/* Fragrance Notes */}
            <div className="my-10 space-y-6 border-y border-stone-800/60 py-8">
              <div className="grid grid-cols-3 gap-4 items-baseline">
                <span className="text-[10px] tracking-[0.25em] uppercase text-amber-600/70 font-semibold col-span-1">
                  Top Notes
                </span>
                <span className="text-sm md:text-base text-stone-300 font-light tracking-wide col-span-2">
                  Saffron, Pink Pepper
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 items-baseline">
                <span className="text-[10px] tracking-[0.25em] uppercase text-amber-600/70 font-semibold col-span-1">
                  Heart Notes
                </span>
                <span className="text-sm md:text-base text-stone-300 font-light tracking-wide col-span-2">
                  Rose Damascena, Leather
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 items-baseline">
                <span className="text-[10px] tracking-[0.25em] uppercase text-amber-600/70 font-semibold col-span-1">
                  Base Notes
                </span>
                <span className="text-sm md:text-base text-stone-300 font-light tracking-wide col-span-2">
                  Cambodian Oud, Patchouli
                </span>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
              <div className="flex items-baseline space-x-2 font-light">
                <span className="text-xl text-stone-200">€ 320</span>
                <span className="text-stone-500 text-sm">·</span>
                <span className="text-sm text-stone-400">100ml</span>
              </div>
              
              <button className="border border-amber-700/50 hover:border-amber-500 text-[11px] tracking-[0.25em] uppercase text-amber-500 hover:text-amber-400 font-medium px-8 py-3.5 transition-all duration-300 ease-out bg-transparent hover:bg-amber-950/10">
                Request a Sample
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}