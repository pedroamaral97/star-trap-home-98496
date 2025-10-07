import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CotacaoData {
  bid: string;
  ask: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  timestamp: string;
}

const CotacaoDolar = () => {
  const [cotacao, setCotacao] = useState<CotacaoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchCotacao = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
      const data = await response.json();
      setCotacao(data.USDBRL);
    } catch (err) {
      setError(true);
      console.error("Erro ao buscar cotação:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCotacao();
    const interval = setInterval(fetchCotacao, 30000); // Atualiza a cada 30 segundos
    return () => clearInterval(interval);
  }, []);

  const isPositive = cotacao ? parseFloat(cotacao.varBid) > 0 : false;

  return (
    <section id="cotacao" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Cotação do Dólar em Tempo Real
          </h2>
          <p className="text-lg text-muted-foreground">
            Acompanhe as variações do mercado e tome decisões informadas
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-elegant border-border/50 animate-fade-in">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-muted/50 to-transparent">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">USD / BRL</CardTitle>
                  <CardDescription>Dólar Americano / Real Brasileiro</CardDescription>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={fetchCotacao}
                disabled={loading}
                className="hover:bg-secondary/10"
              >
                <RefreshCw className={`h-5 w-5 ${loading ? "animate-spin" : ""}`} />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="pt-8">
            {loading && !cotacao ? (
              <div className="text-center py-12">
                <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-secondary border-r-transparent"></div>
                <p className="mt-4 text-muted-foreground">Carregando cotação...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-destructive">Erro ao carregar cotação. Tente novamente.</p>
                <Button onClick={fetchCotacao} className="mt-4">
                  Recarregar
                </Button>
              </div>
            ) : cotacao ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 rounded-lg p-6 border border-border/50">
                    <p className="text-sm text-muted-foreground mb-2">Compra</p>
                    <p className="text-4xl font-bold text-primary">
                      R$ {parseFloat(cotacao.bid).toFixed(4)}
                    </p>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-6 border border-border/50">
                    <p className="text-sm text-muted-foreground mb-2">Venda</p>
                    <p className="text-4xl font-bold text-primary">
                      R$ {parseFloat(cotacao.ask).toFixed(4)}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-muted/50 to-transparent rounded-lg p-4 border border-border/50">
                    <p className="text-sm text-muted-foreground mb-1">Variação</p>
                    <div className="flex items-center gap-2">
                      {isPositive ? (
                        <TrendingUp className="h-5 w-5 text-green-500" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-red-500" />
                      )}
                      <p className={`text-2xl font-bold ${isPositive ? "text-green-500" : "text-red-500"}`}>
                        {cotacao.pctChange}%
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-muted/50 to-transparent rounded-lg p-4 border border-border/50">
                    <p className="text-sm text-muted-foreground mb-1">Máxima</p>
                    <p className="text-2xl font-bold text-primary">
                      R$ {parseFloat(cotacao.high).toFixed(4)}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-muted/50 to-transparent rounded-lg p-4 border border-border/50">
                    <p className="text-sm text-muted-foreground mb-1">Mínima</p>
                    <p className="text-2xl font-bold text-primary">
                      R$ {parseFloat(cotacao.low).toFixed(4)}
                    </p>
                  </div>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                  Última atualização: {new Date(parseInt(cotacao.timestamp) * 1000).toLocaleString('pt-BR')}
                </p>
              </div>
            ) : null}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CotacaoDolar;
