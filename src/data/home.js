export const products = [
  {
    id: 1,
    name: "Loose Wave Frontal Wig",
    price: "₦85,000",
    image: "/images/img02.jpg",
    category: "Human Hair",
  },
  {
    id: 2,
    name: "Body Wave Full Lace",
    price: "₦95,000",
    image: "/images/img01.jpg",
    category: "Human Hair",
  },
  {
    id: 3,
    name: "Kinky Curly Blend",
    price: "₦55,000",
    image: "/images/img02.jpg",
    category: "Hair Blend",
  },
  {
    id: 4,
    name: "Bone Straight Wig",
    price: "₦75,000",
    image: "/images/img01.jpg",
    category: "Human Hair",
  },
];

export const categories = [
  {
    label: "Human Hair",
    desc: "100% virgin hair",
    href: "#",
    // href: "/shop?cat=human-hair",
    image: "/images/img02.jpg",
  },
  {
    label: "Wigs",
    desc: "Lace front & full lace",
    href: "#",
    // href: "/shop?cat=wigs",
    image: "/images/img01.jpg",
  },
  {
    label: "Hair Blends",
    desc: "Affordable & natural",
    href: "#",
    // href: "/shop?cat=blends",
    image: "/images/img02.jpg",
  },
  {
    label: "Bridal Hair",
    desc: "Your perfect wedding look",
    href: "#",
    // href: "/bridal",
    image: "/images/img02.jpg",
  },
];

export const reviews = [
  {
    id: 1,
    name: "Funmi A.",
    text: "Thank you so much for the lovely hair. I really like it. I have given 2 people your number. I'm coming to buy the long straight hair.",
    rating: 5,
  },
  {
    id: 2,
    name: "Tolu B.",
    text: "I've tasted love and I've tasted new hair — I strongly recommend new hair! Beauty Lounge never disappoints.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amaka O.",
    text: "Best plug for quality and affordable wigs in Ibadan. My wig came exactly as described. Will definitely order again.",
    rating: 5,
  },
];

const Star = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--gold)">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// Replace these with real Instagram image URLs or use an IG embed API later
export const posts = [
  {
    id: 1,
    image: "/images/img01.jpg",
    href: "https://instagram.com/beautyloungebyashabi",
  },
  {
    id: 2,
    image: "/images/img02.jpg",
    href: "https://instagram.com/beautyloungebyashabi",
  },
  {
    id: 3,
    image: "/images/img01.jpg",
    href: "https://instagram.com/beautyloungebyashabi",
  },
  {
    id: 4,
    image: "/images/img02.jpg",
    href: "https://instagram.com/beautyloungebyashabi",
  },
  {
    id: 5,
    image: "/images/img01.jpg",
    href: "https://instagram.com/beautyloungebyashabi",
  },
  {
    id: 6,
    image: "/images/img02.jpg",
    href: "https://instagram.com/beautyloungebyashabi",
  },
];

export const faqs = [
  {
    q: "How do I place an order?",
    a: "Simply browse our shop, find a hair you love, and click 'Order on WhatsApp'. You'll be connected directly to us to confirm your order, size, and delivery details.",
  },
  {
    q: "How long does delivery take?",
    a: "Ibadan delivery takes 24–48 hours. Other states within Nigeria take 3–5 business days via courier. We'll send you a tracking number once your order ships.",
  },
  {
    q: "Do you have a pick-up location?",
    a: "No, we only run online store for now.",
    // a: "Yes! We're based in Ibadan, Oyo State. Chat with us on WhatsApp to get the exact pick-up address and schedule a convenient time.",
  },
  {
    q: "Do you sell wholesale?",
    a: "No, we don’t do wholesales for now.",
    // a: "Yes, we offer wholesale pricing for bulk orders. Please reach out via WhatsApp with your requirements and we'll send you our wholesale catalogue.",
  },
  {
    q: "Can I pay on delivery?",
    a: "No. Your payment validates your order.",
    // a: "Pay on delivery is available for Ibadan orders only. For other states, full payment is required before shipment. We accept bank transfer and mobile payments.",
  },
  {
    q: "What is hair revamp?",
    a: "Hair revamp is a restoration service for old or matted wigs. We wash, detangle, condition, and restyle your wig to make it look brand new. Contact us for pricing.",
  },
];
