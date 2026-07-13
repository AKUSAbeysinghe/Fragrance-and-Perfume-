import React, { useEffect, useState } from "react";
import GiftSpray from "../../assets/SubCategories/giftsets.jpg";

const GiftSets = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const WHATSAPP_NUMBER = '94771234567';

  // Subcategory filters for Gift Sets (Category 6)
  const SUBCATEGORY_IDS = {
    ALL: "all",
    WOMENS_GIFT_SETS: "womens-gift-sets",
    MENS_GIFT_SETS: "mens-gift-sets",
    UNISEX_GIFT_SETS: "unisex-gift-sets",
    TRAVEL_GIFT_SETS: "travel-gift-sets",
  };

  const fetchProducts = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost/perfume_db/api/get_products.php");
      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        const items = data.data.filter(item => Number(item.category_id) === 6);
        setAllProducts(items);
        setFilteredProducts(items);
      } else {
        setError("Failed to load gift sets");
      }
    } catch (err) {
      console.error(err);
      setError("Cannot connect to server.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        item => item.sub_category_slug === activeFilter || 
                Number(item.subcategory_id) === activeFilter
      );
      setFilteredProducts(filtered);
    }
  }, [activeFilter, allProducts]);

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
            CURATED COLLECTIONS
          </span>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-none tracking-wide text-[#f4e0a5]">
            Gift{' '}
            <span className="italic font-normal text-[#c9a063]">Sets</span>
          </h1>

          <div 
            className="w-16 h-[1px] opacity-40 mx-auto my-4"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #c9a063 50%, transparent 100%)'
            }}
          />

          <p className="text-sm md:text-base font-light tracking-wide leading-relaxed text-[#bda073]/80 max-w-2xl mx-auto">
            Thoughtfully curated gift sets for every occasion. 
            Perfect presents that embody elegance and sophistication.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { label: "All Gift Sets", value: "all" },
            { label: "Women's Gift Sets", value: SUBCATEGORY_IDS.WOMENS_GIFT_SETS },
            { label: "Men's Gift Sets", value: SUBCATEGORY_IDS.MENS_GIFT_SETS },
            { label: "Unisex Gift Sets", value: SUBCATEGORY_IDS.UNISEX_GIFT_SETS },
            { label: "Travel Gift Sets", value: SUBCATEGORY_IDS.TRAVEL_GIFT_SETS },
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
          ) : filteredProducts.length === 0 ? (
            <p className="col-span-full text-center py-24 text-[#bda073]/70">No gift sets found in this category.</p>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-[#0d0907] border border-stone-800 hover:border-[#c9a063]/40 overflow-hidden transition-all duration-500 hover:shadow-2xl"
              >
                {/* Product Image */}
                <div className="relative h-80 bg-black overflow-hidden">
                  <img
                    src={
                      product.image_url
                        ? `http://localhost/perfume_db/${product.image_url}`
                        : "https://via.placeholder.com/600x600?text=Gift+Set"
                    }
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x600?text=Gift+Set";
                    }}
                  />
                  {product.popular === "1" && (
                    <div className="absolute top-4 right-4 bg-[#c9a063] text-black text-xs font-bold px-4 py-1 rounded-full tracking-widest">
                      GIFT FAVORITE
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-xs tracking-[0.2em] uppercase text-[#c9a063]/80 font-medium">
                      {product.sub_category_name || "Gift Set"}
                    </p>
                    <span className="text-2xl font-light text-[#f4e0a5]">
                      Rs. {formatPrice(product.price)}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-serif font-light tracking-wide mb-3 text-white">
                    {product.name}
                  </h2>

                  {product.description && (
                    <p className="text-[#bda073]/80 text-sm leading-relaxed mb-8 line-clamp-3">
                      {product.description}
                    </p>
                  )}

                  <div className="flex items-center justify-between text-xs mb-8 text-[#bda073]">
                    <span>In Stock: {product.stock}</span>
                  </div>

                  <button
                    onClick={() => handleWhatsAppClick(product)}
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
            src={GiftSpray}
            alt="Luxury gift sets"
            className="w-full h-auto object-cover max-h-[620px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
      </div>

      {/* The Art of Gifting Section */}
      <section className="bg-[#0a0705] text-[#e4d7cd] px-6 py-20 md:py-28 border-t border-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-light tracking-[0.4em] text-[#c9a063]/70 uppercase mb-6">
            MEMORABLE MOMENTS
          </p>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-10">
            The Perfect Gift
          </h2>
          
          <p className="text-base md:text-lg text-[#bda073]/80 leading-relaxed max-w-2xl mx-auto mb-16">
            Beautifully presented gift sets that make every occasion special. 
            Thoughtful combinations of our finest fragrances.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
            <div>
              <div className="text-5xl font-serif italic text-[#c9a063]">10+</div>
              <div className="text-xs tracking-widest mt-3 text-[#bda073]/70">CURATED SETS</div>
            </div>
            <div>
              <div className="text-5xl font-serif italic text-[#c9a063]">4</div>
              <div className="text-xs tracking-widest mt-3 text-[#bda073]/70">CATEGORIES</div>
            </div>
            <div>
              <div className="text-5xl font-serif italic text-[#c9a063]">100%</div>
              <div className="text-xs tracking-widest mt-3 text-[#bda073]/70">PREMIUM</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiftSets;