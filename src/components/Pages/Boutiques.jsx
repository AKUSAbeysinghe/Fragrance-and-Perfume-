import React, { useState } from 'react';
import BoutiqueImage from "../../assets/Mains/DustyPerfume.jpg";

export default function MaisonSanctuaries() {
  const [expandedCard, setExpandedCard] = useState(null);

  const locations = [
    {
      city: 'Paris',
      type: 'FLAGSHIP',
      address: '7 Rue Saint-Honoré, 75001 Paris',
      phone: '+33 1 42 60 18 87',
      hours: 'Mon–Sat · 10:00 – 19:00',
      description: 'The original maison since 1923. Home to our historic marble salon and private atelier upstairs.',
      image: BoutiqueImage,
    },
    {
      city: 'Grasse',
      type: 'THE ATELIER',
      address: '12 Boulevard du Jeu de Ballon, 06130 Grasse',
      phone: '+33 4 93 36 18 87',
      hours: 'By appointment only',
      description: 'Where it all began. The heart of creation — our perfumers craft compositions in small batches.',
      image: null,
    },
    {
      city: 'Dubai',
      type: 'BOUTIQUE',
      address: 'Dubai Mall, Fashion Avenue, Level 2',
      phone: '+971 4 339 18 87',
      hours: 'Daily · 10:00 – 24:00',
      description: 'A modern sanctuary blending Arabian heritage with Parisian elegance.',
      image: null,
    },
    {
      city: 'New York',
      type: 'BOUTIQUE',
      address: 'Madison Avenue, Upper East Side, NY 10021',
      phone: '+1 212 555 1887',
      hours: 'Mon–Sat · 10:00 – 18:00',
      description: 'Intimate townhouse experience in the heart of Manhattan.',
      image: null,
    },
    {
      city: 'Tokyo',
      type: 'SALON',
      address: 'Ginza Six, 6-10-1 Ginza, Chuo-ku',
      phone: '+81 3 5551 1887',
      hours: 'Daily · 11:00 – 20:00',
      description: 'A minimalist haven celebrating the art of Japanese refinement and French perfumery.',
      image: null,
    },
    {
      city: 'London',
      type: 'BOUTIQUE',
      address: 'Mayfair, 28 Mount Street, W1K 2TT',
      phone: '+44 20 7947 1887',
      hours: 'Mon–Sat · 10:00 – 18:00',
      description: 'Georgian townhouse with a private garden terrace for private consultations.',
      image: null,
    },
  ];

  const toggleExpand = (city) => {
    setExpandedCard(expandedCard === city ? null : city);
  };

  return (
    <>
      {/* HERO HEADER */}
      <section className="bg-[#0b0806] text-[#eae3da] min-h-[55vh] flex flex-col justify-center items-center px-6 text-center select-none relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_center,#3a2a1f_0%,transparent_60%)] opacity-20" />
        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-amber-500/80 block mb-6 md:mb-8 z-10">
          Visit the Maison
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-wide mb-6 max-w-4xl leading-tight text-neutral-100 z-10">
          Six{' '}
          <span className="italic font-normal text-[#d4af37]/90">sanctuaries</span>{' '}
          worldwide
        </h2>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-8 md:mb-10 z-10" />
        <p className="text-neutral-400 font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto tracking-wide z-10">
          Each boutique is a private salon — a quiet space where time slows and our perfumers guide you through rare essences.
        </p>
      </section>

      {/* PARIS FLAGSHIP - HERO SECTION */}
      <section className="min-h-screen bg-[#0d0a07] text-[#eae3da] flex items-center justify-center p-6 md:p-12">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-6 relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[1.15/1] overflow-hidden group shadow-2xl rounded-sm">
            <img
              src={BoutiqueImage}
              alt="Paris Flagship Boutique Interior"
              className="w-full h-full object-cover brightness-[0.82] contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
          </div>

          <div className="md:col-span-6 flex flex-col justify-center py-6 lg:pl-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-amber-500 mb-4">
              PARIS • FLAGSHIP
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-wide mb-6 text-neutral-100">
              7 Rue Saint-Honoré
            </h2>
            <p className="text-neutral-400 font-light text-[15px] sm:text-base leading-relaxed tracking-wide mb-10 max-w-xl">
              Opened in 1923 and preserved in spirit. Calacatta marble floors, hand-cast brass details, and two hundred crystal flacons. A living piece of perfume history.
            </p>
            <a
              href="#reserve"
              className="w-fit border border-amber-600 px-9 py-4 text-xs font-medium uppercase tracking-widest hover:bg-amber-500 hover:text-[#0d0a07] transition-all duration-300"
            >
              Book Private Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ALL LOCATIONS - INTERACTIVE GRID */}
      <section className="bg-[#0b0806] text-[#eae3da] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-amber-500/80 block mb-4">
              Our Sanctuaries
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-neutral-100">
              Where to find us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, index) => (
              <div
                key={index}
                onClick={() => toggleExpand(loc.city)}
                className={`group bg-[#0e0a08] border border-neutral-900 hover:border-amber-900/50 rounded-sm overflow-hidden transition-all duration-500 cursor-pointer ${
                  expandedCard === loc.city ? 'shadow-2xl scale-[1.02]' : 'hover:shadow-xl'
                }`}
              >
                {/* Image */}
                {loc.image && (
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={loc.image}
                      alt={loc.city}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                )}

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-3xl font-light text-neutral-100">
                      {loc.city}
                    </h3>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-500/80 pt-2">
                      {loc.type}
                    </span>
                  </div>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-2">
                    {loc.description}
                  </p>

                  {/* Clean Info without icons */}
                  <div className="space-y-3 text-sm text-neutral-400">
                    <div>
                      <span className="text-amber-500/70 text-xs uppercase tracking-widest block mb-0.5">Address</span>
                      <span>{loc.address}</span>
                    </div>
                    <div>
                      <span className="text-amber-500/70 text-xs uppercase tracking-widest block mb-0.5">Phone</span>
                      <a href={`tel:${loc.phone}`} className="hover:text-amber-400 transition-colors">
                        {loc.phone}
                      </a>
                    </div>
                    <div>
                      <span className="text-amber-500/70 text-xs uppercase tracking-widest block mb-0.5">Hours</span>
                      <span>{loc.hours}</span>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  {expandedCard === loc.city && (
                    <div className="mt-8 pt-6 border-t border-neutral-800 text-sm text-neutral-300">
                      <p className="leading-relaxed mb-6">
                        {loc.description} Experience our signature olfactory journey guided by our in-house experts.
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`Reservation request for ${loc.city} has been initiated.`);
                        }}
                        className="w-full bg-amber-500 hover:bg-amber-600 text-[#0d0a07] py-3.5 text-xs font-medium uppercase tracking-widest transition-all"
                      >
                        Reserve Your Visit
                      </button>
                    </div>
                  )}

                  <div className="text-center text-[10px] text-amber-600/60 mt-6 tracking-widest">
                    {expandedCard === loc.city ? 'CLICK TO CLOSE' : 'CLICK FOR DETAILS'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}