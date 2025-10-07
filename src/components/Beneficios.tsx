import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, Percent, HeadphonesIcon, Lock, LineChart } from "lucide-react";

const Beneficios = () => {
  const beneficios = [
    {
      icon: Percent,
      title: "Taxas Competitivas",
      description: "As melhores taxas do mercado para suas transações internacionais",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Processamento Rápido",
      description: "Transações processadas em até 24 horas úteis",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Lock,
      title: "Segurança Garantida",
      description: "Criptografia de ponta a ponta e compliance internacional",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Dedicado",
      description: "Equipe especializada disponível para ajudar você",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: LineChart,
      title: "Análise em Tempo Real",
      description: "Dashboard completo para acompanhar suas operações",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: CheckCircle2,
      title: "Conformidade Legal",
      description: "100% em conformidade com as regulamentações do Banco Central",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Benefícios para Você
          </h2>
          <div className="h-1 w-24 bg-gradient-gold mx-auto mb-6 rounded-full shadow-gold" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubra como a StarTrapo pode transformar a forma como sua empresa realiza pagamentos internacionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {beneficios.map((beneficio, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden"
            >
              <CardHeader>
                <div className={`h-16 w-16 rounded-xl bg-gradient-to-br ${beneficio.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <beneficio.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-card-foreground">
                  {beneficio.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {beneficio.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-block bg-gradient-gold rounded-2xl p-1 shadow-gold">
            <div className="bg-background rounded-xl px-8 py-6">
              <p className="text-2xl font-bold text-primary mb-2">
                Pronto para começar?
              </p>
              <p className="text-muted-foreground mb-6">
                Entre em contato e descubra como podemos ajudar seu negócio a crescer globalmente
              </p>
              <a
                href="#contato"
                className="inline-block bg-gradient-gold text-primary font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-gold"
              >
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
