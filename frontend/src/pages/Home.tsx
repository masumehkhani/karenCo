import ContactSection from "../components/contactSection/ContactSection";
import HeroSlider from "../components/heroSlider/HeroSlider";
import PassionSection from "../components/passionSection/PassionSection";
import ProductsCarousel from "../components/products/ProductCarousel";
import WhyUs from "../components/whyUs/WhyUs";
import MainLayout from "../layouts/MainLayout";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-50px)]">
        <HeroSlider />
      </div>

      <div className="px-8 md:px-32 py-16">
        <ProductsCarousel id="1" name="Car" drive="FWD" power={100}/>
      </div>

      <PassionSection />
      <WhyUs />
      <ContactSection />
    </MainLayout>
  );
};

export default Home;
