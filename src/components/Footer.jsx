import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const WHATSAPP_NUMBER = '94771234567';

  const exploreLinks = [
    { name: 'Collections', href: '/collections' },
    { name: 'Heritage', href: '/heritage' },
    { name: 'Journal', href: '/journal' },
  ];

  const maisonLinks = [
    { name: 'Boutiques', href: '/boutiques' },
    { name: 'Private consultations', href: '/contact' },
    { name: 'Gift services', href: '/giftservices' },
  ];

  const handleWhatsAppClick = () => {
    const message = "Hello Maison d'Or! I'm visiting your website and would like to know more.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

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
                <Link to={link.href} className="hover:text-[#f4e0a5] transition-colors duration-300">
                  {link.name}
                </Link>
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
                <Link to={link.href} className="hover:text-[#f4e0a5] transition-colors duration-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Connect / WhatsApp - Theme Consistent */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-light tracking-[0.35em] text-[#c9a063] uppercase">
            Connect With Us
          </h4>
          
          <div className="space-y-5">
            <button
              onClick={handleWhatsAppClick}
              className="group w-full flex items-center gap-4 border border-[#c9a063]/30 hover:border-[#c9a063] bg-[#0d0b09] hover:bg-[#12100d] p-5 rounded-sm transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-full border border-[#c9a063]/40 flex items-center justify-center flex-shrink-0">
                <span className="text-[#c9a063] text-xl">✉︎</span>
              </div>
              <div className="text-left">
                <p className="text-[#f4e0a5] font-medium text-sm group-hover:text-white transition-colors">
                  Message us on WhatsApp
                </p>
                <p className="text-xs text-[#bda073]/70">Fast response • +94 77 123 4567</p>
              </div>
            </button>

            <div className="pt-2 text-xs space-y-2 text-[#bda073]/70">
              <p className="flex items-center gap-2">
                <span className="text-[#c9a063]">📍</span> 
                Paris • Grasse • Dubai
              </p>
              <p>
                <span className="text-[#c9a063]">Email:</span> hello@maisondor.com
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Legalities & Badges Row */}
      <div className="border-t border-[#c9a063]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-light tracking-[0.2em] text-[#bda073]/50">
        <div>
          © 2026 Maison d'Or. Composed in France.
        </div>
        
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