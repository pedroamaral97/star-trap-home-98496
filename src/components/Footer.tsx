import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero py-12 border-t border-border/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-24 bg-gradient-gold rounded-md shadow-gold" />
              <span className="text-xl font-bold text-primary-foreground">StarTrapo</span>
            </div>
            <p className="text-primary-foreground/70">
              Sua ponte para pagamentos internacionais seguros e eficientes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#cotacao" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Cotação
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Benefícios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="h-4 w-4" />
                <span>contato@startrapo.com</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="h-4 w-4" />
                <span>+55 (11) 9999-9999</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} StarTrapo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
