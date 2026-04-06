"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/2348034530840?text=Hi, I'd like to enquire about your hair products"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-black/40 hover:bg-[#1ebe5d] hover:scale-110 transition-all duration-200"
    >
      <FaWhatsapp size={28} color="white" />
    </Link>
  );
}
