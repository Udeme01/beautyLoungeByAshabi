import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { products } from "@/data/home";

export default function FeaturedProducts() {
  return (
    <section className="py-20 px-5 w-full font-dmSans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="flex items-end justify-between mb-12 font-cormorant">
          <div>
            <p className="text-gold text-sm tracking-widest uppercase mb-2">
              Our Collection
            </p>
            <h2 className="text-4xl text-black font-light">Featured Hair</h2>
          </div>
          <Link
            href="/shop"
            className="hidden md:inline text-black/50 hover:text-gold text-xs tracking-widest uppercase transition-colors duration-200"
          >
            View All →
          </Link>
        </section>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map(({ id, name, price, image, category }) => (
            <div key={id} className="group">
              {/* Image */}
              <div className="relative overflow-hidden bg-zinc-900 aspect-3/4 mb-4">
                <Image
                  src={image}
                  alt={name}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-black/70 text-gold text-[9px] tracking-widest uppercase px-2 py-1">
                  {category}
                </span>
                {/* Quick order overlay */}
                <a
                  href={`https://wa.me/2348034530840?text=Hi, I'm interested in the ${name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-x-0 bottom-0 bg-[#25D366] text-white text-xs tracking-wide py-3 flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                  <FaWhatsapp size={14} /> Order on WhatsApp
                </a>
              </div>
              <p className="text-white/80 text-sm">{name}</p>
              <p className="text-gold text-sm font-medium">{price}</p>
            </div>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="#"
            className="border border-gold/40 text-black/60 text-xs tracking-widest uppercase px-8 py-3 hover:border-gold hover:text-gold transition-colors duration-200"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
