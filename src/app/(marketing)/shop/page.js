"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { PRODUCTS } from "@/data/shop";

const CATEGORIES = ["All", "Human Hair", "Wigs", "Hair Blends", "Bridal Hair"];

const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under ₦50,000", min: 0, max: 50000 },
  { label: "₦50,000 – ₦100,000", min: 50000, max: 100000 },
  { label: "Above ₦100,000", min: 100000, max: Infinity },
];

function formatPrice(n) {
  return `₦${n.toLocaleString("en-NG")}`;
}

function Filters({
  activeCategory,
  setActiveCategory,
  activePriceRange,
  setActivePriceRange,
  variant,
}) {
  return (
    // desktop filter drawer
    <div className="space-y-8">
      {/* Category */}
      <div>
        <p
          className={`${variant === "mobile" ? "text-black" : "text-black"} text-xs tracking-widest uppercase mb-4`}
        >
          Category
        </p>
        <ul className="space-y-2">
          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`text-sm transition-colors duration-200 ${
                  activeCategory === cat
                    ? "text-gold"
                    : "text-black/50 hover:text-black"
                }`}
              >
                {activeCategory === cat && <span className="mr-2">→</span>}
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price range */}
      {/* <div>
        <p className="text-black text-xs tracking-widest uppercase mb-4">
          Price Range
        </p>
        <ul className="space-y-2">
          {PRICE_RANGES.map((range) => (
            <li key={range.label}>
              <button
                onClick={() => setActivePriceRange(range)}
                className={`text-sm transition-colors duration-200 ${
                  activePriceRange.label === range.label
                    ? "text-gold"
                    : "text-black/50 hover:text-black"
                }`}
              >
                {activePriceRange.label === range.label && (
                  <span className="mr-2">→</span>
                )}
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

function ProductCard({ product }) {
  const { name, price, category, available, image, slug } = product;
  return (
    // href={`/shop/${slug}`}
    <Link href={`#`} className="group block">
      {/* Image */}
      <div className="relative overflow-hidden bg-zinc-900 aspect-3/4 mb-4">
        <Image
          src={image}
          alt={name}
          width={400}
          height={533}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-black/70 text-gold text-[9px] tracking-widest uppercase px-2 py-1">
          {category}
        </span>
        {/* Sold out badge */}
        {!available && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="border border-white/40 text-white/60 text-xs tracking-widest uppercase px-4 py-2">
              Sold Out
            </span>
          </div>
        )}
        {/* WhatsApp hover */}
        {available && (
          <Link
            href={`https://wa.me/2348034530840?text=Hi, I'm interested in the ${name}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-x-0 bottom-0 bg-[#25D366] text-white text-xs tracking-wide py-3 flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          >
            <FaWhatsapp size={14} /> Quick Order
          </Link>
        )}
      </div>

      {/* Info */}
      <p className="text-black/80 text-sm mb-1">{name}</p>
      <p className="text-gold text-sm font-medium">{formatPrice(price)}</p>
    </Link>
  );
}

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePriceRange, setActivePriceRange] = useState(PRICE_RANGES[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = PRODUCTS.filter((p) => {
    const catMatch = activeCategory === "All" || p.category === activeCategory;
    const priceMatch =
      p.price >= activePriceRange.min && p.price <= activePriceRange.max;
    return catMatch && priceMatch;
  });

  return (
    <main className="min-h-screen pt-24 pb-20 w-full">
      <div className="max-w-6xl mx-auto px-5">
        {/* Page header */}
        <div className="mb-10">
          <p className="text-gold text-xs tracking-widest uppercase mb-2">
            Browse
          </p>
          <div className="flex items-end justify-between">
            <h1 className="font-display text-4xl md:text-5xl text-black font-light">
              Hair Collection
            </h1>
            <p className="text-black/40 text-sm hidden md:block">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-56 shrink-0">
            <Filters
              variant="desktop"
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activePriceRange={activePriceRange}
              setActivePriceRange={setActivePriceRange}
            />
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Mobile filter toggle */}
            <div className="flex items-center justify-between mb-6 md:hidden">
              <p className="text-black/40 text-sm">
                {filtered.length} products
              </p>
              <button
                onClick={() => setSidebarOpen(true)}
                className="border border-gold/30 text-gold text-xs tracking-widest uppercase px-5 py-2"
              >
                Filter
              </button>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-white/30 text-sm">
                  No products match your filters.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("All");
                    setActivePriceRange(PRICE_RANGES[0]);
                  }}
                  className="mt-4 text-gold text-xs tracking-widest uppercase underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs z-40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gold/20 p-6 rounded-t-2xl">
            <div className="flex items-center justify-between mb-6">
              <p className="text-black text-sm tracking-widest uppercase">
                Filters
              </p>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-black/40 hover:text-black text-xl"
              >
                ✕
              </button>
            </div>
            <Filters
              variant="mobile"
              activeCategory={activeCategory}
              setActiveCategory={(v) => {
                setActiveCategory(v);
                setSidebarOpen(false);
              }}
              activePriceRange={activePriceRange}
              setActivePriceRange={(v) => {
                setActivePriceRange(v);
                setSidebarOpen(false);
              }}
            />
          </div>
        </>
      )}
    </main>
  );
}
