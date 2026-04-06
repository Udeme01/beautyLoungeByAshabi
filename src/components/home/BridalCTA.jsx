import Link from "next/link";

export default function BridalCTA() {
  return (
    <section className="relative overflow-hidden py-24 px-5 font-dmSans">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 bg-[url('/images/bridal.jpeg')]" />
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/50 to-black/60" />

      {/* Gold border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/50 to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="text-gold text-xs tracking-widest uppercase mb-4">
          Bridal Collection
        </p>
        <h2 className="font-cormorant text-4xl md:text-6xl text-black font-light leading-tight mb-6">
          Planning Your
          <br />
          <span className="italic text-gold">Wedding Hair?</span>
        </h2>
        <p className="text-black/80 leading-relaxed mb-10 max-w-md mx-auto">
          Let us crown your most important day. From consultations to the final
          look — we handle every detail of your bridal hair experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#"
            className="w-full sm:w-auto bg-gold text-black text-xs tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-200 font-medium"
          >
            See Bridal Packages
          </Link>
          <a
            // href="https://wa.me/2348034530840?text=Hi, I'd like to enquire about bridal hair"
            href="#"
            // target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-black/30 text-black text-xs tracking-widest uppercase px-10 py-4 hover:border-gold hover:text-gold transition-colors duration-200"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
