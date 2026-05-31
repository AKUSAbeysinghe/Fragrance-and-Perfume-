import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  const exploreLinks = [
    { name: 'Collections', href: '#' },
    { name: 'Heritage', href: '#' },
    { name: 'Journal', href: '#' },
  ];

  const maisonLinks = [
    { name: 'Boutiques', href: '#' },
    { name: 'Private consultations', href: '#' },
    { name: 'Gift services', href: '#' },
  ];

  return (
    <footer className="w-full bg-[#0a0908] text-[#e5d5be] pt-20 pb-10 px-6 md:px-16 lg:px-24 select-none selection:bg-[#c9a063] selection:text-black">
      
      {/* Main Multi-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 pb-16 md:pb-24">
        
        {/* Column 1: Brand Typography & Statement */}
        <div className="space-y-6">
          <div className="flex flex-col space-y-0.5">
            <span className="font-serif text-lg font-light tracking-[0.25em] text-[#d4af37]">
              MAISON
            </span>
            <span className="font-serif italic text-base font-normal text-[#f4e0a5] lowercase">
              d'Or
            </span>
          </div>
          <p className="text-xs font-light text-[#bda073]/70 leading-relaxed max-w-[240px]">
            An olfactory atelier composing rare essences since 1887. Paris • Grasse • Dubai.
          </p>
        </div>

        {/* Column 2: Explore Links */}
        <div className="space-y-5">
          <h4 className="text-[10px] font-light tracking-[0.35em] text-[#c9a063] uppercase">
            Explore
          </h4>
          <ul className="space-y-3.5 text-xs font-light text-[#bda073]/80">
            {exploreLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-[#f4e0a5] transition-colors duration-300">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Maison Links */}
        <div className="space-y-5">
          <h4 className="text-[10px] font-light tracking-[0.35em] text-[#c9a063] uppercase">
            Maison
          </h4>
          <ul className="space-y-3.5 text-xs font-light text-[#bda073]/80">
            {maisonLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-[#f4e0a5] transition-colors duration-300">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter Sign-up */}
        <div className="space-y-5">
          <h4 className="text-[10px] font-light tracking-[0.35em] text-[#c9a063] uppercase">
            Letters
          </h4>
          <p className="text-xs font-light text-[#bda073]/70 leading-relaxed">
            Whispers from the atelier, delivered seasonally.
          </p>
          
          <form onSubmit={handleSubscribe} className="relative pt-2 w-full max-w-xs group">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full bg-transparent border-b border-[#c9a063]/30 focus:border-[#c9a063] pb-2 text-xs font-light tracking-wide text-[#f4e0a5] placeholder-[#bda073]/40 outline-none transition-colors duration-300 pr-16"
            />
            <button
              type="submit"
              className="absolute right-0 bottom-2 text-[10px] font-light tracking-[0.25em] text-[#c9a063] hover:text-[#f4e0a5] transition-colors duration-300 uppercase bg-transparent"
            >
              Send
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Legalities & Badges Row */}
      <div className="border-t border-[#c9a063]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-light tracking-[0.2em] text-[#bda073]/50">
        
        {/* Copyright info */}
        <div>
          © 2026 Maison d'Or. Composed in France.
        </div>
        
        {/* Product Badges */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 uppercase text-[#bda073]/60">
          <span>Eau de Parfum</span>
          <span>•</span>
          <span>100% Vegan</span>
          <span>•</span>
          <span>Cruelty Free</span>
        </div>

      </div>

    </footer>
  );
}