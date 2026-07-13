import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);

  const navLinks = [
    { name: 'HERITAGE', href: '/heritage' },
    { name: 'JOURNAL', href: '/journal' },
    { name: 'BOUTIQUES', href: '/boutiques' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const collections = [
    { name: 'Women Perfumes', href: '/women-perfumes' },
    { name: 'Men Perfumes', href: '/men-perfumes' },
    { name: 'Unisex Perfumes', href: '/unisex-perfumes' },
    { name: 'Body Fragrances', href: '/body-fragrances' },
    { name: 'Home Fragrances', href: '/home-fragrances' },
    { name: 'Gift Sets', href: '/gift-sets' },
    { name: 'Travel & Mini Sizes', href: '/travel-mini-sizes' },
  ];

  return (
    <nav className="w-full bg-[#0a0908] text-[#c9a063] px-6 py-4 md:px-12 flex items-center justify-between tracking-widest selection:bg-[#c9a063] selection:text-black relative z-50">

      {/* Brand Logo */}
      <Link
        to="/"
        className="flex items-baseline space-x-1 cursor-pointer select-none"
      >
        <span className="font-serif text-xl md:text-2xl font-light tracking-[0.25em] text-[#d4af37]">
          MAISON
        </span>
        <span className="font-serif italic text-lg md:text-xl font-normal text-[#f4e0a5] lowercase">
          d'Or
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-10 text-xs font-light tracking-[0.2em] text-[#bda073]">
        
        {/* Collections with Dropdown */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsCollectionsOpen(true)}
          onMouseLeave={() => setIsCollectionsOpen(false)}
        >
          <button className="hover:text-[#f4e0a5] transition-colors duration-300 flex items-center gap-1">
            COLLECTIONS
            <span className="text-[10px] transition-transform group-hover:rotate-180">▼</span>
          </button>

          {/* Dropdown Menu */}
          <div className={`absolute left-0 top-full pt-3 w-64 bg-[#0a0908] border border-[#c9a063]/20 shadow-2xl rounded-sm 
            opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50`}>
            <div className="py-4 px-5 flex flex-col space-y-3 text-sm">
              {collections.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="hover:text-[#f4e0a5] py-1 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Other Nav Links */}
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="hover:text-[#f4e0a5] transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#c9a063] hover:after:w-full after:transition-all after:duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* CTA Button - Now links to Boutiques */}
      <div className="hidden lg:block">
        <Link to="/boutiques">
          <button className="border border-[#c9a063] px-6 py-2.5 text-xs font-light tracking-[0.25em] text-[#c9a063] hover:bg-[#c9a063] hover:text-black transition-all duration-500 ease-in-out">
            DISCOVER
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#c9a063] focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[68px] left-0 w-full bg-[#0a0908] border-t border-[#c9a063]/10 flex flex-col items-center space-y-6 py-8 lg:hidden z-50">
          
          {/* Collections in Mobile */}
          <div className="w-full px-6">
            <p className="text-xs tracking-[0.3em] text-[#c9a063]/70 mb-4">COLLECTIONS</p>
            <div className="flex flex-col space-y-4 pl-4 border-l border-[#c9a063]/20">
              {collections.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm hover:text-[#f4e0a5] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Other Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xs font-light tracking-[0.2em] text-[#bda073] hover:text-[#f4e0a5] transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Discover Button - Links to Boutiques */}
          <Link
            to="/boutiques"
            onClick={() => setIsOpen(false)}
            className="w-full flex justify-center pt-4"
          >
            <button className="border border-[#c9a063] px-8 py-2 text-xs font-light tracking-[0.25em] text-[#c9a063] w-[80%] max-w-[300px] hover:bg-[#c9a063] hover:text-black transition-all duration-300">
              DISCOVER
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}