import Link from "next/link";
import { categories } from "@/data/home";
import Image from "next/image";

export default function Categories() {
  return (
    <section className="py-20 px-5 w-full font-dmSans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-widest uppercase mb-2">
            Browse By
          </p>
          <h2 className="font-cormorant text-4xl text-black font-light">
            Shop Categories
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(({ label, desc, href, image }) => (
            <Link
              key={label}
              href={href}
              className="group relative overflow-hidden aspect-3/4 block"
            >
              <Image
                src={image}
                alt={label}
                width={600}
                height={800}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="font-cormorant text-white text-xl font-light">
                  {label}
                </p>
                <p className="text-white/50 text-xs">{desc}</p>
              </div>
              <div className="absolute top-3 right-3 w-7 h-7 border border-gold/0 group-hover:border-gold flex items-center justify-center transition-all duration-300">
                <span className="text-gold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
