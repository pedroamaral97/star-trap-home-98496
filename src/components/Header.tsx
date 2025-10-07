import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-32 bg-gradient-gold rounded-md shadow-gold" />
          <span className="text-2xl font-bold text-primary">StarTrapo</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#cotacao" className="text-foreground hover:text-secondary transition-colors">
            Cotação
          </a>
          <a href="#sobre" className="text-foreground hover:text-secondary transition-colors">
            Sobre
          </a>
          <a href="#beneficios" className="text-foreground hover:text-secondary transition-colors">
            Benefícios
          </a>
        </nav>

        <Button variant="default" className="bg-gradient-gold text-primary font-semibold hover:opacity-90 transition-opacity">
          Contato
        </Button>
      </div>
    </header>
  );
};

export default Header;
