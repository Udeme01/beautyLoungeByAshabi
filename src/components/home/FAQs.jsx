"use client";
import { useState } from "react";
import { faqs } from "@/data/home";
import Link from "next/link";

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="text-black/80 group-hover:text-gold text-sm transition-colors duration-200">
          {q}
        </span>
        <span
          className={`text-gold text-xl shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-5" : "max-h-0"}`}
      >
        <p className="text-black/50 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQs() {
  return (
    <section className="py-20 px-5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-widest uppercase mb-2">
            Got Questions?
          </p>
          <h2 className="font-cormorant text-4xl text-black font-light">
            Frequently Asked
          </h2>
        </div>

        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-black/40 text-sm mb-4">Still have questions?</p>
          <Link
            href="https://wa.me/2348034530840"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-black text-xs tracking-widest uppercase px-8 py-3 hover:bg-[#1ebe5d] transition-colors duration-200"
          >
            Chat With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
