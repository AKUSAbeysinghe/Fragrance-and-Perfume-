import React, { useEffect, useRef, useState } from 'react';
import HeritagePhoto from "../../assets/Heritage/HeritagePerfume.jpg";

export default function BrandHeritage() {
  const [activeYear, setActiveYear] = useState('1887');
  const timelineRef = useRef(null);
  const itemRefs = useRef({});

  const historyTimeline = [
    {
      year: '1887',
      title: 'Grasse, the beginning',
      description:
        'Émile Vasseur opens a modest atelier in the perfume capital of the world, distilling jasmine and rose absolutes for European couturiers.'
    },
    {
      year: '1923',
      title: 'The Paris boutique',
      description:
        'His son inaugurates the maison at 7 Rue Saint-Honoré — marble, brass and a wall of two hundred crystal flacons.'
    },
    {
      year: '1968',
      title: 'The first oud journey',
      description:
        "Renée Vasseur travels to Assam, returning with rare oud that will shape three decades of the maison's signature compositions."
    },
    {
      year: '1997',
      title: 'An olfactory library',
      description:
        'The maison opens its archive — over four thousand formulas hand-written across generations — to a select circle of clients.'
    },
    {
      year: '2024',
      title: 'Hélène, the fourth generation',
      description:
        "Hélène Vasseur becomes master perfumer, composing the long-awaited Nuit d'Oud and ushering the house into its second century."
    },
  ];

  const promises = [
    {
      number: '01',
      title: 'Rarity',
      description:
        'We compose in small batches, never compromising an essence for scale.',
    },
    {
      number: '02',
      title: 'Patience',
      description:
        'Some of our macerations rest for three years before the first drop is bottled.',
    },
    {
      number: '03',
      title: 'Honesty',
      description:
        'Every ingredient is named, sourced and documented. No silent fillers.',
    },
  ];

  // Scroll to specific timeline item
  const scrollToYear = (year) => {
    const element = itemRefs.current[year];
    if (element && timelineRef.current) {
      const container = timelineRef.current;
      const elementTop = element.offsetTop;
      
      container.scrollTo({
        top: elementTop - 80,
        behavior: 'smooth'
      });
    }
    setActiveYear(year);
  };

  // Intersection Observer for active year
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const year = entry.target.dataset.year;
            setActiveYear(year);
          }
        });
      },
      {
        root: timelineRef.current,
        threshold: 0.5,
      }
    );

    Object.values(itemRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-[450px] w-full bg-[#070504] flex flex-col items-center justify-center px-4 py-16 text-center select-none relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_center,#3a2a1f_0%,transparent_70%)] opacity-30" />
        
        <div className="max-w-3xl mx-auto flex flex-col items-center space-y-6 relative z-10">
          <span className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-amber-600/70 font-medium">
            Since 1887
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-200 font-light tracking-wide leading-tight">
            Four generations of{' '}
            <span className="italic text-amber-100/80 font-normal">scent</span>
          </h2>
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent my-2" />
          <p className="text-stone-400 font-light text-sm md:text-base max-w-xl leading-relaxed tracking-wide">
            From a single distillation room in Grasse to a global house of rare
            perfumery — a quiet, patient inheritance.
          </p>
        </div>
      </section>

      {/* HERITAGE TIMELINE SECTION */}
      <section className="bg-[#090605] text-[#e2d6cd] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT IMAGE */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-sm group">
                <img
                  src={HeritagePhoto}
                  alt="Hélène Vasseur, Master Perfumer"
                  className="w-full h-[650px] object-cover brightness-[0.85] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 border-t border-amber-900/20 pt-5">
                <p className="text-[11px] uppercase tracking-[0.35em] text-amber-500 font-semibold mb-2">
                  Hélène Vasseur
                </p>
                <h3 className="font-serif italic text-xl md:text-2xl text-stone-100 font-light">
                  Master Perfumer, fourth generation
                </h3>
              </div>
            </div>

            {/* RIGHT TIMELINE */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-3xl md:text-4xl text-stone-100">Our Heritage</h2>
                <div className="text-sm text-amber-500/70 font-medium">Scroll or click years</div>
              </div>

              {/* Scrollable Container */}
              <div 
                ref={timelineRef}
                className="h-[620px] overflow-y-auto pr-6 custom-scrollbar scroll-smooth"
              >
                <div className="space-y-16 relative">
                  {/* Vertical Line */}
                  <div className="hidden md:block absolute left-[42px] top-4 bottom-4 w-[1px] bg-stone-800" />

                  {historyTimeline.map((item, index) => (
                    <div
                      key={index}
                      ref={(el) => (itemRefs.current[item.year] = el)}
                      data-year={item.year}
                      className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start scroll-mt-20 transition-all duration-300 ${
                        activeYear === item.year ? 'opacity-100' : 'opacity-90'
                      }`}
                    >
                      {/* Year */}
                      <div 
                        onClick={() => scrollToYear(item.year)}
                        className={`md:col-span-2 text-3xl md:text-4xl font-serif italic font-normal tracking-wide cursor-pointer transition-all duration-300 hover:text-amber-100 ${
                          activeYear === item.year 
                            ? 'text-amber-100' 
                            : 'text-amber-100/60 hover:text-amber-100/90'
                        }`}
                      >
                        {item.year}
                      </div>

                      {/* Content */}
                      <div className="md:col-span-10 relative pl-0 md:pl-12">
                        <div className="flex items-center gap-3 mb-4">
                          <div 
                            onClick={() => scrollToYear(item.year)}
                            className={`w-4 h-4 rounded-full border-2 flex-shrink-0 cursor-pointer transition-all ${
                              activeYear === item.year 
                                ? 'bg-amber-500 border-amber-500 scale-110' 
                                : 'border-amber-600 hover:border-amber-500'
                            }`}
                          />
                          <h3 className="text-xl md:text-2xl font-serif text-stone-100 font-light tracking-wide">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-stone-400 font-light text-[15px] leading-relaxed pl-7">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOUSE VOWS SECTION */}
      <section className="bg-[#0b0806] text-[#eae3da] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-500/80 block mb-4">
              The House Vows
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-wide">
              Three{' '}
              <span className="italic font-normal text-[#d4af37]/90">promises.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 border border-neutral-900/40 md:border-none">
            {promises.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-10 md:p-12 bg-[#0e0a08]/60 hover:bg-[#120d0a] transition-all duration-500 border-b md:border-b-0 md:border-r border-neutral-900/60 last:border-none hover:border-amber-900/30"
              >
                <span className="font-serif italic text-2xl md:text-3xl text-amber-600/70 mb-6 transition-colors group-hover:text-amber-500">
                  {item.number}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-wide mb-5 text-neutral-100">
                  {item.title}
                </h3>
                <p className="text-neutral-400 font-light text-[15px] leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a1612;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(217, 119, 6, 0.5);
          border-radius: 999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(217, 119, 6, 0.75);
        }
      `}</style>
    </>
  );
}