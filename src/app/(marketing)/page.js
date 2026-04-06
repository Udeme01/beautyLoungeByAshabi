import AboutStrip from "@/components/home/AboutStrip";
import BridalCTA from "@/components/home/BridalCTA";
import Categories from "@/components/home/Categories";
import FAQs from "@/components/home/FAQs";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import InstagramFeed from "@/components/home/InstagramFeed";
import PromoBanner from "@/components/home/PromoBanner";
// import PromoPopup from "@/components/home/PromoPopup";
import Reviews from "@/components/home/Reviews";
import TrustBar from "@/components/home/TrustBar";

export const metadata = {
  title: "Beauty Lounge by Ashabi — Human Hair Wigs & Bridal Hair, Ibadan",
  description:
    "Quality human hair wigs, hair blends, bridal hair and revamp services. Over 1,000 satisfied clients. Based in Ibadan, Nigeria.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedProducts />
      <PromoBanner />
      <Categories />
      <AboutStrip />
      <Reviews />
      <BridalCTA />
      <InstagramFeed />
      <FAQs />
      {/* <PromoPopup /> */}
    </>
  );
}
