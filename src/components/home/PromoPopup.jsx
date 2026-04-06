"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

// ✏️ EDIT THESE to update the promo
const PROMO = {
  label: "Birthday Sale",
  headline: "Get a FREE Hair",
  subtext:
    "Order now before the timer ends and get a free hair bundled with your purchase.",
  cta: "Shop the Sale",
  ctaHref: "/shop",
  endDate: "2026-04-11T23:59:59", // ✏️ change this date
  delayMs: 4000, // ✏️ how long before popup appears (ms)
};

function useCountdown(endDate) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const calc = () => {
      const diff = new Date(endDate) - new Date();
      if (diff <= 0) return setTimeLeft(null);
      const newTimeLeft = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      };
      console.log('Time left:', newTimeLeft);
      setTimeLeft(newTimeLeft);
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [endDate]);

  return timeLeft;
}

function Pad({ value, label }) {
  return (
    <div className="flex flex-col items-center bg-white/10 rounded px-3 py-2 min-w-13">
      <span className="text-gold font-display text-2xl font-semibold leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-white/40 text-[9px] tracking-widest uppercase mt-1">
        {label}
      </span>
    </div>
  );
}

export default function PromoPopup() {
  console.log('PromoPopup rendering');
  const [visible, setVisible] = useState(false);
  const timeLeft = useCountdown(PROMO.endDate);

  useEffect(() => {
    console.log('PromoPopup useEffect running, timeLeft:', timeLeft);
    // only show once per session
    if (sessionStorage.getItem("promo_seen")) {
      console.log('Promo already seen');
      return;
    }
    if (!timeLeft) {
      console.log('No time left');
      return;
    }
    console.log('Setting timeout for popup');
    const id = setTimeout(() => {
      console.log('Showing popup');
      setVisible(true);
    }, PROMO.delayMs);
    return () => clearTimeout(id);
  }, [timeLeft]);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem("promo_seen", "true");
  };

  if (!timeLeft || !visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
        onClick={close}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-md bg-zinc-950 border border-gold/30 p-8 text-center">
        {/* Close */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-white/30 hover:text-white text-xl transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Gold top bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />

        {/* Label */}
        <span className="text-gold text-[10px] tracking-widest uppercase">
          {PROMO.label}
        </span>

        {/* Headline */}
        <h3 className="font-display text-4xl text-white font-light mt-3 mb-2">
          {PROMO.headline}
        </h3>

        {/* Subtext */}
        <p className="text-white/50 text-sm leading-relaxed mb-8">
          {PROMO.subtext}
        </p>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Pad value={timeLeft.days} label="Days" />
          <span className="text-white/20 text-lg mb-3">:</span>
          <Pad value={timeLeft.hours} label="Hours" />
          <span className="text-white/20 text-lg mb-3">:</span>
          <Pad value={timeLeft.mins} label="Mins" />
          <span className="text-white/20 text-lg mb-3">:</span>
          <Pad value={timeLeft.secs} label="Secs" />
        </div>

        {/* CTA */}
        <Link
          href={PROMO.ctaHref}
          onClick={close}
          className="block w-full bg-gold text-black text-xs tracking-widest uppercase py-4 hover:bg-gold-light transition-colors duration-200 font-medium"
        >
          {PROMO.cta}
        </Link>

        <button
          onClick={close}
          className="mt-4 text-white/30 hover:text-white/60 text-xs tracking-wide transition-colors duration-200"
        >
          No thanks, I&apos;ll pass
        </button>
      </div>
    </>
  );
}
