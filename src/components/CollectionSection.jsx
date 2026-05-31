import React from 'react';
import SaffronPerfume from "../assets/Collections/SaffronPerfume.jpg";
import JasminePerfume from "../assets/Collections/Jasmine Bouquet.jpg";
import CitrusPerfume from "../assets/Collections/CitrusPerfume.jpg";
import VanillaPerfume from "../assets/Collections/VanillaPerfume.jpg";

export default function CollectionsPage() {
  const items = [
    {
      id: 1,
      year: 'MMXXIV',
      title: 'Nuit d\'Oud',
      notes: 'Smoked oud • saffron • leather',
      image: SaffronPerfume
    },
    {
      id: 2,
      year: 'MMXXIII',
      title: 'Jasmin Blanc',
      notes: 'Sambac jasmine • neroli • musk',
      image: JasminePerfume
    },
    {
      id: 3,
      year: 'MMXXII',
      title: 'Bergamote 17',
      notes: 'Calabrian bergamot • cedar • tea',
      image: CitrusPerfume
    },
    {
      id: 4,
      year: 'MMXXI',
      title: 'Vanille Noire',
      notes: 'Bourbon vanilla • tonka • amber',
      image: VanillaPerfume
    }
  ];

  return (
    <>
      {/* Collection Header */}
      <div className="w-full bg-[#0a0908] text-[#e5d5be] px-6 py-12 md:px-16 lg:px-24 flex flex-col sm:flex-row sm:items-end justify-between gap-6 select-none selection:bg-[#c9a063] selection:text-black">
        {/* Left Text Block */}
        <div className="space-y-3 max-w-xl">
          <span className="block text-[10px] md:text-xs font-light tracking-[0.35em] text-[#bda073] uppercase">
            The Collection
          </span>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-[#f4e0a5]">
            Four{' '}
            <span className="italic font-serif text-[#c9a063] font-normal">
              compositions.
            </span>
          </h2>
        </div>

        {/* Right "View All" Link */}
        <div className="sm:pb-2">
          <a
            href="#"
            className="group flex items-center space-x-2 text-[11px] md:text-xs font-light tracking-[0.25em] text-[#c9a063] hover:text-[#f4e0a5] transition-colors duration-300 uppercase"
          >
            <span>View All</span>
            <svg
              className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </div>

      {/* Composition Grid */}
      <section className="w-full bg-[#0a0908] px-6 py-16 md:px-16 lg:px-24 select-none selection:bg-[#c9a063] selection:text-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {items.map((item) => (
            <div key={item.id} className="group flex flex-col space-y-4 cursor-pointer">
              {/* Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#141210]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover brightness-[0.85] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]" />
              </div>

              {/* Details */}
              <div className="space-y-1.5 pt-2">
                <span className="block text-[9px] font-light tracking-[0.3em] text-[#bda073] uppercase">
                  {item.year}
                </span>
                
                <h3 className="font-serif text-lg md:text-xl font-light text-[#f4e0a5] tracking-wide transition-colors duration-300 group-hover:text-[#c9a063]">
                  {item.title}
                </h3>
                
                <p className="text-xs font-light text-[#bda073]/60 tracking-wide lowercase">
                  {item.notes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}