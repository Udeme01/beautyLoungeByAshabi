import { reviews } from "@/data/home";
import { Star } from "lucide-react";
import Link from "next/link";

export default function Reviews() {
  return (
    <section className="py-20 px-5 font-dmSans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-widest uppercase mb-2">
            What Clients Say
          </p>
          <h2 className="font-cormorant text-4xl text-black font-light">
            Real Reviews
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map(({ id, name, text, rating }) => (
            <div
              key={id}
              className="border border-black/10 p-8 hover:border-gold/30 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="text-black/70 text-sm leading-relaxed mb-6 font-cormorant font-light italic">
                &ldquo;{text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold text-xs font-medium">
                    {name[0]}
                  </span>
                </div>
                <p className="text-black/50 text-xs tracking-wide">{name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="#"
            className="text-black/40 hover:text-gold text-xs tracking-widest uppercase transition-colors duration-200"
          >
            Read All Reviews →
          </Link>
        </div>
      </div>
    </section>
  );
}
