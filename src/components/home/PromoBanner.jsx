"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

// ✏️ EDIT THESE to update the promo
const PROMO = {
  label: "Birthday Sale",
  headline: "Get a FREE hair with every order",
  subtext: "Limited time only — don't miss out!",
  cta: "Shop the Sale",
  ctaHref: "/shop",
  endDate: "2026-04-11T23:59:59", // ✏️ change this date
};

function useCountdown(endDate) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const calc = () => {
      const diff = new Date(endDate) - new Date();
      if (diff <= 0) return setTimeLeft(null);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [endDate]);

  return timeLeft;
}

function Pad({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-black font-display text-2xl md:text-3xl font-semibold leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-black/50 text-[9px] tracking-widest uppercase mt-1">
        {label}
      </span>
    </div>
  );
}

export default function PromoBanner() {
  const timeLeft = useCountdown(PROMO.endDate);

  if (!timeLeft) return null; // hides banner when promo ends

  return (
    <section className="bg-gold py-12 md:py-20 px-5 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text */}
        <div className="text-center md:text-left space-y-6">
          <span className="text-black/60 text-[12px] tracking-widest uppercase">
            {PROMO.label}
          </span>
          <p className="font-display text-3xl md:text-4xl lg:text-6xl text-black font-semibold mt-1">
            {PROMO.headline}
          </p>
          <p className="text-black/60 text-xs mt-1">{PROMO.subtext}</p>
        </div>

        {/* Countdown */}
        <div className="flex items-center gap-4">
          <Pad value={timeLeft.days} label="Days" />
          <span className="text-black/40 text-xl font-light mb-3">:</span>
          <Pad value={timeLeft.hours} label="Hours" />
          <span className="text-black/40 text-xl font-light mb-3">:</span>
          <Pad value={timeLeft.mins} label="Mins" />
          <span className="text-black/40 text-xl font-light mb-3">:</span>
          <Pad value={timeLeft.secs} label="Secs" />
        </div>

        {/* CTA */}
        <Link
          href={PROMO.ctaHref}
          className="shrink-0 bg-black text-gold text-xs tracking-widest uppercase px-8 py-3 hover:bg-zinc-900 transition-colors duration-200"
        >
          {PROMO.cta}
        </Link>
      </div>
    </section>
  );
}
