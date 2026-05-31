import React from 'react';

export default function OlfactoryPyramid() {
  const movements = [
    {
      number: '01',
      title: 'Top notes',
      description: 'The first whisper — bright, volatile, unmasked.',
      ingredients: 'BERGAMOT • LEMON • PINK PEPPER',
    },
    {
      number: '02',
      title: 'Heart notes',
      description: 'The soul of the composition — floral, warm, alive.',
      ingredients: 'JASMINE • ROSE • IRIS',
    },
    {
      number: '03',
      title: 'Base notes',
      description: 'The lingering memory — rich, resinous, eternal.',
      ingredients: 'OUD • VANILLA • AMBER',
    },
  ];

  return (
    <section className="w-full bg-[#0a0908] text-[#e5d5be] py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center select-none selection:bg-[#c9a063] selection:text-black">
      
      {/* Header Container */}
      <div className="text-center space-y-4 mb-16 md:mb-20 max-w-3xl">
        <span className="block text-[10px] md:text-xs font-light tracking-[0.4em] text-[#bda073] uppercase">
          The Olfactory Pyramid
        </span>
        
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-[#f4e0a5]">
          Three movements of{' '}
          <span className="italic font-serif text-[#c9a063] font-normal">
            scent.
          </span>
        </h2>
      </div>

      {/* Movements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {movements.map((movement) => (
          <div 
            key={movement.number} 
            className="bg-[#110f0d]/40 border border-[#c9a063]/5 hover:border-[#c9a063]/20 transition-all duration-500 p-8 md:p-10 lg:p-12 flex flex-col items-center text-center space-y-6 md:space-y-8"
          >
            {/* Fluid/Italic Number Accent */}
            <span className="font-serif italic text-2xl text-[#c9a063] font-light tracking-wider">
              {movement.number}
            </span>

            {/* Column Title & Description */}
            <div className="space-y-3 flex-grow">
              <h3 className="font-serif text-xl md:text-2xl font-light text-[#f4e0a5] tracking-wide">
                {movement.title}
              </h3>
              <p className="text-xs md:text-sm font-light text-[#bda073]/70 leading-relaxed max-w-[240px] mx-auto">
                {movement.description}
              </p>
            </div>

            {/* Ingredient Highlights */}
            <div className="text-[10px] md:text-xs font-light tracking-[0.25em] text-[#c9a063] pt-4 border-t border-[#c9a063]/10 w-full max-w-[200px]">
              {movement.ingredients}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}