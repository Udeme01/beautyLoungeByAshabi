"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { label: "Shop", href: "#" },
  { label: "Bridal", href: "#" },
  { label: "Revamp", href: "#" },
  { label: "Reviews", href: "#" },
  { label: "About", href: "#" },
];

export default function MainHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-dmSans ${
        scrolled
          ? "bg-black/50 shadow-lg shadow-black/40 backdrop-blur-3xl"
          : "bg-transparent"
      }`}
    >
      {/* Top strip */}
      {/* <h1 className="w-full py-3 px-1 text-center text-[11px] tracking-widest text-white bg-black uppercase font-medium">
        Our birthday sale is on. Hurry!!! Order now to get a free hair
        &nbsp;·&nbsp; Ibadan, Nigeria
      </h1> */}

      <nav className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none font-cormorant">
          <span className="text-xl font-semibold tracking-widest text-gold">
            Beauty Lounge
          </span>
          <span
            className={`text-[10px] tracking-[0.25em] uppercase text-white`}
          >
            by Ashabi
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-white text-sm tracking-wide transition-colors duration-200 hover:text-gold"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden bg-gold-light text-black font-semibold border border-gold hover:bg-gold md:inline-flex items-center gap-2 text-xs tracking-widest uppercase px-5 py-2.5 transition-all duration-200"
        >
          Order Now
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <nav
        className={`md:hidden bg-white backdrop-blur-3xl overflow-hidden transition-all duration-300 ${open ? "max-h-96 py-4" : "max-h-0"}`}
      >
        <ul className="flex flex-col px-5 gap-1">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="block py-3 text-black text-sm tracking-wide border-b border-black/5"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              href="/contact"
              className="block text-center bg-gold-light text-black font-semibold border border-gold text-xs tracking-widest uppercase py-3 hover:bg-gold transition-all"
            >
              Order Now
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
