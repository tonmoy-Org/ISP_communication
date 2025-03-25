import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";
import BrandCarousel from "@/components/BrandCarousel/BrandCarousel";
import FAQSection from "@/components/FAQSection/FAQSection";
import Banner from "@/components/Home/Home";
import PricingSection from "@/components/PricingSection/PricingSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";


export default function Home() {
  return (
    <div>
      <Banner />
      <div>
        <PricingSection />
        <AboutUsSection />
        <ServicesSection />
        <FAQSection />
        <BrandCarousel />
      </div>
    </div>
  );
}
