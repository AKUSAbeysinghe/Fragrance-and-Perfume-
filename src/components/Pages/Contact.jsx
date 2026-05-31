import React, { useState } from "react";

export default function CorrespondencePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "Private consultation",
    letter: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[#0b0806] text-stone-200 min-h-screen overflow-hidden selection:bg-amber-900/50">
      
      {/* HERO SECTION */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 py-28 md:py-36 border-b border-stone-900">
        
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(180,120,40,0.12),transparent_60%)] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          
          {/* Subtitle */}
          <span className="text-xs md:text-sm tracking-[0.35em] uppercase font-sans text-amber-600/80 font-medium">
            Correspondence
          </span>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight font-serif">
            <span className="text-stone-100 font-normal">Write </span>
            <span className="italic text-stone-300">to the </span>
            <span className="italic text-amber-200/90">Maison</span>
          </h1>

          {/* Divider */}
          <div className="flex justify-center">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
          </div>

          {/* Description */}
          <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
            For private consultations, bespoke compositions, press enquiries
            or simply to share an olfactory memory —
            <span className="text-stone-300 font-normal">
              {" "}
              we read every letter.
            </span>
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Intro */}
            <div className="space-y-5">
              <span className="text-xs uppercase tracking-[0.3em] text-amber-600">
                The Maison
              </span>

              <h2 className="text-3xl md:text-4xl font-serif leading-snug text-stone-100">
                A private world of scent, memory and craftsmanship.
              </h2>

              <p className="text-stone-400 leading-relaxed font-light text-sm md:text-base">
                Each message is handled discreetly by our atelier team in Paris.
                Whether you seek a signature fragrance, a bespoke composition,
                or a private consultation, we welcome your correspondence.
              </p>
            </div>

            {/* CONTACT ITEMS */}
            <div className="space-y-10">
              
              {/* Private Salon */}
              <div className="border-l border-amber-600/30 pl-5 space-y-2">
                <h4 className="text-xs tracking-[0.25em] uppercase text-amber-600 font-medium">
                  Private Salon
                </h4>

                <a
                  href="mailto:salon@maisondor.com"
                  className="block text-xl font-serif text-amber-200/90 hover:text-amber-100 transition-colors duration-300"
                >
                  salon@maisondor.com
                </a>

                <p className="text-sm text-stone-400 font-light">
                  Reserve a one-hour consultation with a perfumer.
                </p>
              </div>

              {/* Bespoke */}
              <div className="border-l border-amber-600/30 pl-5 space-y-2">
                <h4 className="text-xs tracking-[0.25em] uppercase text-amber-600 font-medium">
                  Bespoke Compositions
                </h4>

                <a
                  href="mailto:bespoke@maisondor.com"
                  className="block text-xl font-serif text-amber-200/90 hover:text-amber-100 transition-colors duration-300"
                >
                  bespoke@maisondor.com
                </a>

                <p className="text-sm text-stone-400 font-light">
                  From €12,000 · Process spans 6–9 months.
                </p>
              </div>

              {/* Press */}
              <div className="border-l border-amber-600/30 pl-5 space-y-2">
                <h4 className="text-xs tracking-[0.25em] uppercase text-amber-600 font-medium">
                  Press & Partnerships
                </h4>

                <a
                  href="mailto:press@maisondor.com"
                  className="block text-xl font-serif text-amber-200/90 hover:text-amber-100 transition-colors duration-300"
                >
                  press@maisondor.com
                </a>

                <p className="text-sm text-stone-400 font-light">
                  Editorial requests and collaborations welcomed.
                </p>
              </div>

              {/* Telephone */}
              <div className="border-l border-amber-600/30 pl-5 space-y-2">
                <h4 className="text-xs tracking-[0.25em] uppercase text-amber-600 font-medium">
                  Telephone
                </h4>

                <a
                  href="tel:+33142601887"
                  className="block text-xl font-serif text-amber-200/90 hover:text-amber-100 transition-colors duration-300"
                >
                  +33 1 42 60 18 87
                </a>

                <p className="text-sm text-stone-400 font-light">
                  Monday — Saturday · 10:00–19:00 CET
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="lg:col-span-7">
            <div className="bg-[#0f0b09] border border-stone-900/70 p-8 md:p-14 rounded-sm shadow-[0_0_60px_rgba(0,0,0,0.45)] backdrop-blur-sm">
              
              {/* Form Header */}
              <div className="mb-12 space-y-4">
                <span className="text-xs uppercase tracking-[0.3em] text-amber-600">
                  Personal Correspondence
                </span>

                <h3 className="text-3xl md:text-4xl font-serif text-stone-100 leading-tight">
                  A letter to{" "}
                  <span className="italic text-amber-200/90">
                    the atelier.
                  </span>
                </h3>

                <p className="text-sm text-stone-400 font-light leading-relaxed">
                  Tell us what brings you here. We respond within two working
                  days with the utmost discretion.
                </p>
              </div>

              {/* FORM */}
              <form
                className="space-y-10"
                onSubmit={(e) => e.preventDefault()}
              >
                
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* First Name */}
                  <div className="space-y-3">
                    <label className="block text-xs tracking-[0.25em] uppercase text-amber-600 font-medium">
                      First Name
                    </label>

                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Your first name"
                      className="w-full bg-transparent border-b border-stone-800 focus:border-amber-600/60 py-3 text-stone-200 placeholder-stone-600 outline-none transition-all duration-300 font-light"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="space-y-3">
                    <label className="block text-xs tracking-[0.25em] uppercase text-amber-600 font-medium">
                      Last Name
                    </label>

                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your last name"
                      className="w-full bg-transparent border-b border-stone-800 focus:border-amber-600/60 py-3 text-stone-200 placeholder-stone-600 outline-none transition-all duration-300 font-light"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-3">
                  <label className="block text-xs tracking-[0.25em] uppercase text-amber-600 font-medium">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-transparent border-b border-stone-800 focus:border-amber-600/60 py-3 text-stone-200 placeholder-stone-600 outline-none transition-all duration-300 font-light"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-3">
                  <label className="block text-xs tracking-[0.25em] uppercase text-amber-600 font-medium">
                    Subject
                  </label>

                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-stone-800 focus:border-amber-600/60 py-3 pr-10 text-stone-200 outline-none appearance-none transition-all duration-300 font-light cursor-pointer"
                    >
                      <option
                        value="Private consultation"
                        className="bg-[#0f0b09]"
                      >
                        Private consultation
                      </option>

                      <option
                        value="Bespoke Composition"
                        className="bg-[#0f0b09]"
                      >
                        Bespoke Composition
                      </option>

                      <option
                        value="Press Enquiry"
                        className="bg-[#0f0b09]"
                      >
                        Press Enquiry
                      </option>

                      <option
                        value="General Inquiry"
                        className="bg-[#0f0b09]"
                      >
                        General Inquiry
                      </option>
                    </select>

                    {/* Chevron */}
                    <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none text-stone-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Letter */}
                <div className="space-y-3">
                  <label className="block text-xs tracking-[0.25em] uppercase text-amber-600 font-medium">
                    Your Letter
                  </label>

                  <textarea
                    name="letter"
                    value={formData.letter}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Write your message..."
                    className="w-full bg-transparent border-b border-stone-800 focus:border-amber-600/60 py-3 text-stone-200 placeholder-stone-600 outline-none transition-all duration-300 font-light resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group relative overflow-hidden border border-amber-600/40 px-10 py-4 text-xs uppercase tracking-[0.3em] text-amber-100 hover:text-black transition-all duration-500"
                  >
                    <span className="relative z-10">Send Letter</span>

                    <div className="absolute inset-0 bg-amber-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}