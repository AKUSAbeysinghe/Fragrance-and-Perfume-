import React from 'react';
import Citrus from "../../assets/Journal/Citrus.jpg";
import RootPerfume from "../../assets/Journal/Bergamot.jpg";
import Ingradients from "../../assets/Journal/Ingradiens.jpg";
import MainPhoto from "../../assets/Journal/Ings.jpg";

export default function AtelierJournal() {
  const articles = [
    {
      image: Ingradients,
      alt: 'Sambac jasmine blossoms',
      tag: 'Field Notes',
      readTime: '8 Min',
      title: 'The patient harvest of Sambac jasmine',
      description: 'Three weeks in Tamil Nadu, picking blossoms by lamplight before sunrise dissolves their soul.',
    },
    {
      image: RootPerfume,
      alt: 'Cambodian agarwood and spices',
      tag: 'Atelier',
      readTime: '12 Min',
      title: 'Why Cambodian oud cannot be hurried',
      description: 'On the slow alchemy of agarwood, and the twelve-year wait before a single drop becomes worthy.',
    },
    {
      image: Citrus,
      alt: 'Bergamot citrus slices',
      tag: 'Essence',
      readTime: '6 Min',
      title: 'Bergamot, the morning thought',
      description: "A meditation on the only citrus that improves a perfume's tail rather than vanishing with the dawn.",
    },
  ];

  return (
    <>
      {/* Journal Header */}
      <section className="bg-[#0b0806] text-[#eae3da] min-h-[60vh] flex flex-col justify-center items-center px-6 text-center select-none">
        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-amber-500/80 block mb-6 md:mb-8">
          Journal
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-wide mb-6 max-w-4xl leading-tight">
          Notes <span className="italic font-normal text-[#d4af37]/90 font-serif">from the atelier</span>
        </h2>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent mb-8 md:mb-10" />
        <p className="text-neutral-400 font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto tracking-wide">
          Quiet essays, field notes and dispatches from the corners of the world where
          our essences are coaxed from petal and resin.
        </p>
      </section>

      {/* Featured Essay */}
      <div className="min-h-screen bg-[#0d0a07] text-[#eae3da] flex items-center justify-center p-6 md:p-12">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative group overflow-hidden w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3]">
            <img
              src={MainPhoto}
              alt="Spices and raw perfume materials"
              className="w-full h-full object-cover brightness-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 mix-blend-multiply" />
            
            <div className="absolute top-0 left-0 bg-[#dcae6c] text-[#1c140c] font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold px-3 py-1.5 shadow-md select-none">
              Featured
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center space-x-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.3em] text-amber-500/90 mb-4">
              <span>Atelier</span>
              <span className="text-neutral-600 font-normal">·</span>
              <span className="text-neutral-400 font-normal">12 Min Read</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] font-light leading-[1.2] tracking-wide mb-6 text-neutral-100">
              Why Cambodian oud cannot be <span className="italic font-normal text-[#d4af37]">hurried.</span>
            </h2>
            
            <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed tracking-wide mb-8 max-w-xl">
              In the highlands above Pursat, twelve years pass between a
              wounded tree and a single millilitre of essence. A meditation
              on what time, alone, can give a perfume — and why our
              master refuses every shortcut offered to her.
            </p>
            
            <a
              href="#read"
              className="inline-flex items-center space-x-2 text-xs md:text-sm font-semibold uppercase tracking-[0.35em] text-amber-500 hover:text-amber-400 transition-colors duration-300 w-fit group"
            >
              <span>Read Essay</span>
              <span className="text-sm transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Article Grid */}
      <section className="bg-[#0b0806] text-[#eae3da] min-h-screen flex items-center justify-center px-6 py-16 md:py-24">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
            {articles.map((article, index) => (
              <article key={index} className="flex flex-col group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/5] mb-6 bg-neutral-900">
                  <img
                    src={article.image}
                    alt={article.alt}
                    className="w-full h-full object-cover brightness-[0.85] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-amber-500/90 drop-shadow-md">
                    <span>{article.tag}</span>
                    <span className="text-neutral-400/80 font-normal">·</span>
                    <span className="text-neutral-300 font-normal lowercase">{article.readTime}</span>
                  </div>
                </div>
                
                <div className="flex flex-col flex-grow px-1">
                  <h3 className="font-serif text-xl sm:text-2xl font-light tracking-wide leading-snug mb-3 text-neutral-100 transition-colors duration-300 group-hover:text-amber-200">
                    {article.title}
                  </h3>
                  <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed tracking-wide">
                    {article.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}