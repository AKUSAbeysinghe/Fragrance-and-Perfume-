import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'COLLECTIONS', href: '/collections' },
    { name: 'HERITAGE', href: '/heritage' },
    { name: 'JOURNAL', href: '/journal' },
    { name: 'BOUTIQUES', href: '/boutiques' },
    { name: 'CONTACT', href: '/contact' },
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

        <span className="font-serif italic text-lg md:text-xl font-normal text-[#f4e0a5] lowercase variant-ligatures">
          d'Or
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center space-x-10 text-xs font-light tracking-[0.2em] text-[#bda073]">
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

      {/* CTA Button */}
      <div className="hidden lg:block">
        <Link to="/">
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
        <div className="absolute top-[68px] left-0 w-full bg-[#0a0908] border-t border-[#c9a063]/10 flex flex-col items-center space-y-6 py-8 lg:hidden animate-fadeIn z-50">

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

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="w-full flex justify-center"
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