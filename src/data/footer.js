import { BsInstagram, BsTiktok, BsFacebook, BsYoutube } from "react-icons/bs";
import GoogleIcon from "@/components/icons/GoogleIcon";

export const pages = [
  { label: "Shop", href: "#" },
  { label: "Bridal Hair", href: "#" },
  { label: "Hair Revamp", href: "#" },
  { label: "Reviews", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/beautyloungebyashabi",
    icon: <BsInstagram size={18} color="#E1306C" />,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@beautyloungebyashabi",
    icon: <BsTiktok size={18} color="#ffffff" />,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/beautyloungebyashabi",
    icon: <BsFacebook size={18} color="#1877F2" />,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@beautyloungebyashabi",
    icon: <BsYoutube size={18} color="#FF0000" />,
  },
  {
    label: "Google",
    href: "https://google.com",
    icon: <GoogleIcon size={18} />,
  },
];

export const faqs = [
  { label: "How do I place an order", href: "/contact#how-to-order" },
  { label: "How long does delivery take", href: "/contact#delivery" },
  { label: "Do you have a pick up location", href: "/contact#pickup" },
  { label: "Do you sell in wholesale", href: "/contact#wholesale" },
  { label: "Can I pay on delivery", href: "/contact#payment" },
];
