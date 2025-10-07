import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(45_80%_60%_/_0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(215_45%_20%_/_0.5),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
          Pagamentos Internacionais
          <span className="block bg-gradient-gold bg-clip-text text-transparent mt-2">
            Simples e Seguros
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 max-w-3xl mx-auto">
          A StarTrapo é a fintech que conecta seu negócio ao mundo através de soluções inovadoras de intermediação de pagamentos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-gradient-gold text-primary font-semibold hover:opacity-90 transition-opacity shadow-gold text-lg px-8">
            Começar Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8">
            Saiba Mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
