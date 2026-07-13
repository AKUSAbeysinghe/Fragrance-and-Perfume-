import React, { useEffect, useState } from "react";
import Unisex from "../../assets/SubCategories/unisex.jpg";

const UnisexPerfumes = () => {
  const [allPerfumes, setAllPerfumes] = useState([]);
  const [filteredPerfumes, setFilteredPerfumes] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const WHATSAPP_NUMBER = '94771234567';

  // Subcategory filters for Unisex Perfumes (Category 3)
  const SUBCATEGORY_IDS = {
    ALL: "all",
    FRESH: "fresh",
    WOODY: "woody",
    CITRUS: "citrus",
    AMBER: "amber",
    MUSK: "musk",
  };

  const fetchPerfumes = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost/perfume_db/api/get_products.php");
      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        const perfumeItems = data.data.filter(item => Number(item.category_id) === 3);
        setAllPerfumes(perfumeItems);
        setFilteredPerfumes(perfumeItems);
      } else {
        setError("Failed to load unisex perfumes");
      }
    } catch (err) {
      console.error(err);
      setError("Cannot connect to server.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPerfumes();
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredPerfumes(allPerfumes);
    } else {
      const filtered = allPerfumes.filter(
        item => item.sub_category_slug === activeFilter || 
                Number(item.subcategory_id) === activeFilter
      );
      setFilteredPerfumes(filtered);
    }
  }, [activeFilter, allPerfumes]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-LK").format(price);
  };

  const handleWhatsAppClick = (product) => {
    const message = `Hi! I'm interested in:\n\n*${product.name}*\nPrice: Rs. ${formatPrice(product.price)}\n\nPlease send more details.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  };

  return (
    <div className="bg-[#0a0705] text-[#e4d7cd] font-sans min-h-screen">
      {/* ==================== LUXURY HEADER ==================== */}
      <section className="relative w-full bg-[#0a0908] text-[#e5d5be] py-20 px-6 md:py-28 flex flex-col items-center justify-center overflow-hidden">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] opacity-60"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #c9a063 50%, transparent 100%)',
            boxShadow: '0 0 20px 2px rgba(201, 160, 99, 0.2)'
          }}
        />

        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <span className="block text-[10px] md:text-xs font-light tracking-[0.5em] text-[#bda073] uppercase">
            THE COLLECTION
          </span>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-none tracking-wide text-[#f4e0a5]">
            Unisex{' '}
            <span className="italic font-normal text-[#c9a063]">Perfumes</span>
          </h1>

          <div 
            className="w-16 h-[1px] opacity-40 mx-auto my-4"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #c9a063 50%, transparent 100%)'
            }}
          />

          <p className="text-sm md:text-base font-light tracking-wide leading-relaxed text-[#bda073]/80 max-w-2xl mx-auto">
            Versatile fragrances that transcend gender. 
            Sophisticated blends of fresh, woody, and warm notes for the modern wearer.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { label: "All Perfumes", value: "all" },
            { label: "Fresh", value: SUBCATEGORY_IDS.FRESH },
            { label: "Woody", value: SUBCATEGORY_IDS.WOODY },
            { label: "Citrus", value: SUBCATEGORY_IDS.CITRUS },
            { label: "Amber", value: SUBCATEGORY_IDS.AMBER },
            { label: "Musk", value: SUBCATEGORY_IDS.MUSK },
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-8 py-3 text-xs md:text-sm font-medium tracking-widest uppercase transition-all border rounded-full
                ${activeFilter === filter.value 
                  ? "bg-[#c9a063] text-black border-[#c9a063]" 
                  : "bg-transparent border-[#c9a063]/30 hover:border-[#c9a063]/70 text-[#e4d7cd] hover:text-white"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <p className="col-span-full text-center py-24 text-[#bda073]/70">Curating the collection...</p>
          ) : error ? (
            <p className="col-span-full text-center py-12 text-red-400">{error}</p>
          ) : filteredPerfumes.length === 0 ? (
            <p className="col-span-full text-center py-24 text-[#bda073]/70">No unisex perfumes found in this category.</p>
          ) : (
            filteredPerfumes.map((perfume) => (
              <div
                key={perfume.id}
                className="group bg-[#0d0907] border border-stone-800 hover:border-[#c9a063]/40 overflow-hidden transition-all duration-500 hover:shadow-2xl"
              >
                {/* Product Image */}
                <div className="relative h-80 bg-black overflow-hidden">
                  <img
                    src={
                      perfume.image_url
                        ? `http://localhost/perfume_db/${perfume.image_url}`
                        : "https://via.placeholder.com/600x600?text=Unisex+Perfume"
                    }
                    alt={perfume.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x600?text=Unisex+Perfume";
                    }}
                  />
                  {perfume.popular === "1" && (
                    <div className="absolute top-4 right-4 bg-[#c9a063] text-black text-xs font-bold px-4 py-1 rounded-full tracking-widest">
                      SIGNATURE
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-xs tracking-[0.2em] uppercase text-[#c9a063]/80 font-medium">
                      {perfume.sub_category_name || "Unisex"}
                    </p>
                    <span className="text-2xl font-light text-[#f4e0a5]">
                      Rs. {formatPrice(perfume.price)}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-serif font-light tracking-wide mb-3 text-white">
                    {perfume.name}
                  </h2>

                  {perfume.description && (
                    <p className="text-[#bda073]/80 text-sm leading-relaxed mb-8 line-clamp-3">
                      {perfume.description}
                    </p>
                  )}

                  <div className="flex items-center justify-between text-xs mb-8 text-[#bda073]">
                    <span>In Stock: {perfume.stock}</span>
                  </div>

                  <button
                    onClick={() => handleWhatsAppClick(perfume)}
                    className="w-full border border-[#c9a063]/60 hover:bg-[#c9a063] hover:text-black text-[#c9a063] py-4 text-sm tracking-widest uppercase transition-all duration-300"
                  >
                    Inquire via WhatsApp
                  </button>
                </div>
              </div>
            ))
          )}
        </main>
      </div>

      {/* Banner Image Section */}
      <div className="w-full max-w-6xl mx-auto px-6 py-12">
        <div className="relative rounded-xl overflow-hidden border border-stone-800">
          <img
            src={Unisex}
            alt="Unisex luxury perfume collection"
            className="w-full h-auto object-cover max-h-[620px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
      </div>

      {/* The Art of Perfume Section */}
      <section className="bg-[#0a0705] text-[#e4d7cd] px-6 py-20 md:py-28 border-t border-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-light tracking-[0.4em] text-[#c9a063]/70 uppercase mb-6">
            BALANCE &amp; VERSATILITY
          </p>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-10">
            Scents Without Boundaries
          </h2>
          
          <p className="text-base md:text-lg text-[#bda073]/80 leading-relaxed max-w-2xl mx-auto mb-16">
            Elegant unisex compositions that celebrate individuality. 
            Timeless fragrances that move fluidly between masculine and feminine.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
            <div>
              <div className="text-5xl font-serif italic text-[#c9a063]">25</div>
              <div className="text-xs tracking-widest mt-3 text-[#bda073]/70">RARE ESSENCES</div>
            </div>
            <div>
              <div className="text-5xl font-serif italic text-[#c9a063]">5</div>
              <div className="text-xs tracking-widest mt-3 text-[#bda073]/70">CORE ACCORDS</div>
            </div>
            <div>
              <div className="text-5xl font-serif italic text-[#c9a063]">100%</div>
              <div className="text-xs tracking-widest mt-3 text-[#bda073]/70">ARTISANAL</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnisexPerfumes;