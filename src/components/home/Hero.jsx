"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#5C4F43] w-full font-dmSans">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/images/img01.jpg')] bg-top bg-cover bg-no-repeat w-screen" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Decorative gold line */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-24 bg-gold/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        <div className="w-px h-24 bg-gold/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto space-y-6">
        <p className="text-white text-xs tracking-[0.3em] uppercase font-cormorant">
          Ibadan&apos;s Premier Hair Brand
        </p>
        <h1 className="text-4xl md:text-7xl text-white font-bold leading-tight font-cormorant">
          Building Confidence
          <br />
          <span className="text-gold italic">Through Your Crown</span>
        </h1>
        <p className="text-white/60 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto tracking-wider">
          Human hair wigs, blends, and bridal hair crafted for the modern
          Nigerian woman. Over 1,000 satisfied clients and counting.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#"
            className="w-full sm:w-auto bg-gold text-black text-xs tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-200 font-medium"
          >
            Shop Collection
          </Link>
          <Link
            href="#"
            className="w-full sm:w-auto border border-white/40 text-white text-xs tracking-widest uppercase px-10 py-4 hover:border-gold hover:text-gold transition-colors duration-200"
          >
            Book Bridal
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-white/30 text-[10px] tracking-widest uppercase">
          Scroll
        </p>
        <div className="w-px h-10 bg-linear-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
