import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CotacaoDolar from "@/components/CotacaoDolar";
import Sobre from "@/components/Sobre";
import Beneficios from "@/components/Beneficios";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CotacaoDolar />
      <Sobre />
      <Beneficios />
      <Footer />
    </div>
  );
};

export default Index;
