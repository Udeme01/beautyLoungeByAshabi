import Image from "next/image";
import Link from "next/link";

export default function AboutStrip() {
  return (
    <section className="py-20 px-5 font">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <div className="aspect-4/5 overflow-hidden">
            <Image
              src="/images/founder.jpg"
              alt="Ashabi — Creative Director"
              width={800}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Gold accent */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/30 hidden md:block" />
        </div>

        {/* Text */}
        <div>
          <p className="text-gold text-xs tracking-widest uppercase mb-4">
            The Face Behind The Brand
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-black font-light leading-tight mb-6">
            Meet Ashabi,
            <br />
            <span className="italic text-black/60">Creative Director</span>
          </h2>
          <p className="text-black/60 leading-relaxed mb-4">
            I&apos;m Ashabi — and I&apos;ve dedicated my work to helping the
            modern Nigerian woman feel her most confident through the crown she
            wears. Every wig, every blend, every bridal look is crafted with
            intention.
          </p>
          <p className="text-black/60 leading-relaxed mb-8">
            Beauty Lounge by Ashabi is CAC registered, Google verified, and
            built on the trust of over 1,000 satisfied clients across Nigeria.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-gold text-xs tracking-widest uppercase border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-200"
          >
            Our Full Story →
          </Link>
        </div>
      </div>
    </section>
  );
}
