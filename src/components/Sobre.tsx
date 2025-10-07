import { Shield, Globe, Zap, Award } from "lucide-react";

const Sobre = () => {
  const features = [
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Tecnologia de ponta para proteger suas transações internacionais"
    },
    {
      icon: Globe,
      title: "Global",
      description: "Conectamos seu negócio com o mundo todo de forma simples"
    },
    {
      icon: Zap,
      title: "Rapidez",
      description: "Processamento ágil de pagamentos em tempo recorde"
    },
    {
      icon: Award,
      title: "Confiável",
      description: "Anos de experiência no mercado de pagamentos"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Sobre a StarTrapo
          </h2>
          <div className="h-1 w-24 bg-gradient-gold mx-auto mb-6 rounded-full shadow-gold" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Somos uma fintech inovadora especializada em intermediação de pagamentos internacionais, 
            oferecendo soluções eficientes e seguras para empresas que desejam expandir suas operações globalmente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-8 border border-border hover:border-secondary transition-all duration-300 hover:shadow-elegant hover:-translate-y-1"
            >
              <div className="h-14 w-14 rounded-lg bg-gradient-gold flex items-center justify-center mb-6 shadow-gold group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 md:p-12 shadow-elegant animate-fade-in">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Nossa Missão
            </h3>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Democratizar o acesso ao mercado internacional de pagamentos, oferecendo uma plataforma 
              moderna, segura e eficiente que permite às empresas brasileiras realizarem transações 
              globais com a mesma facilidade de uma operação local.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
