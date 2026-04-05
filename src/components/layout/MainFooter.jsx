"use client";

import Link from "next/link";
import { pages, faqs, socials } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/20 text-white/60 text-sm font-dmSans">
      {/* CTA band */}
      <section className="bg-gold/10 border-b border-gold/20 py-10 px-5 text-center">
        <p className="text-3xl text-white font-light tracking-wide mb-2 font-cormorant">
          Ready for your crown?
        </p>
        <p className="text-white/50 text-xs tracking-widest uppercase mb-6">
          Over 1,000 satisfied clients across Nigeria
        </p>
        <Link
          href="https://wa.me/2348034530840"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs tracking-widest uppercase px-8 py-3 hover:bg-[#1ebe5d] transition-colors duration-200 font-medium"
        >
          Chat on WhatsApp
        </Link>
      </section>

      {/* Main footer grid */}
      <main className="max-w-6xl mx-auto px-5 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand col */}
        <section className="col-span-2 md:col-span-1 space-y-1">
          <p className="font-cormorant text-gold text-xl font-semibold tracking-widest leading-none">
            Beauty Lounge
          </p>
          <p className="text-white/80 text-[10px] tracking-[0.25em] uppercase mb-4 font-cormorant">
            by Ashabi
          </p>
          <p className="text-white/60 tracking-widest text-xs leading-relaxed">
            Building confidence for the modern woman through the crown you wear.
            Ibadan, Nigeria.
          </p>
          <p className="mt-4 text-xs text-white/40">
            <span className="text-gold">✓</span> CAC Registered Business
          </p>
          <p className="text-xs text-white/40">
            <span className="text-gold">✓</span> Google Verified
          </p>
        </section>

        {/* Pages */}
        <section>
          <p className="text-white text-sm tracking-widest uppercase mb-5 font-cormorant">
            Pages
          </p>
          <ul className="space-y-3">
            {pages.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="hover:text-gold transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQs */}
        <section>
          <p className="text-white text-sm tracking-widest mb-5 font-cormorant">
            FAQs
          </p>
          <ul className="space-y-3">
            {faqs.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="hover:text-gold transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Socials + contact */}
        <section>
          <p className="text-white text-sm tracking-widest uppercase mb-5 font-cormorant">
            Follow
          </p>
          <ul className="space-y-3 mb-8">
            {socials.map((value) => {
              const { label, href, icon } = value;
              return (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors duration-200 flex gap-2 items-center"
                  >
                    {icon}
                    <p>{label}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="text-white text-sm tracking-widest uppercase mb-3 font-cormorant">
            Call / WhatsApp
          </p>
          <Link
            href="tel:+2348034530840"
            className="hover:text-gold transition-colors duration-200 underline underline-offset-2"
          >
            +234 803 453 0840
          </Link>
        </section>
      </main>

      {/* Bottom bar */}
      <section className="border-t border-gold/10 py-5 px-5 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/30">
        <p className="tracking-wider">
          © {new Date().getFullYear()} Beauty Lounge by Ashabi. All rights
          reserved.
        </p>
        <p className="tracking-wider">Ibadan, Oyo State, Nigeria</p>
      </section>
    </footer>
  );
}
