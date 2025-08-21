import { Button } from "@/components/ui/button";

const NewsArticle = () => {
  const handleCTAClick = () => {
    window.open("https://quiz.cakto.com.br/preview/raspadinha-XDIuEk", "_blank");
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Headline Principal */}
      <h1 className="news-headline">
        Brasileiros estão descobrindo um novo método curioso que vem chamando atenção nos jogos de sorte – veja como funciona
      </h1>
      
      {/* Metadados da notícia */}
      <div className="flex items-center space-x-4 text-sm text-text-muted mb-6">
        <span>Por Redação</span>
        <span>•</span>
        <span>{new Date().toLocaleDateString('pt-BR')}</span>
        <span>•</span>
        <span>5 min de leitura</span>
      </div>

      {/* Introdução */}
      <div className="news-body space-y-6">
        <p>
          Uma descoberta recente vem movimentando as redes sociais e chamando a atenção de brasileiros interessados em raspadinhas virtuais. Trata-se de um método diferenciado que, segundo relatos, tem apresentado resultados mais consistentes para quem decide testá-lo.
        </p>

        <p>
          A técnica, que permaneceu em segredo por muito tempo, começou a ser compartilhada entre grupos específicos e agora ganha destaque por seus resultados promissores relatados por usuários comuns.
        </p>

        {/* Box de destaque */}
        <div className="news-quote">
          <h3 className="text-lg font-semibold text-accent-blue mb-3">
            🎯 Descubra se você tem o perfil para este método
          </h3>
          <p className="mb-4">
            Antes de conhecer a técnica, é importante descobrir se seu perfil é compatível com este método específico. Um teste rápido pode revelar suas chances de sucesso.
          </p>
          <Button onClick={handleCTAClick} variant="cta" className="w-full md:w-auto">
            FAZER O TESTE AGORA
          </Button>
        </div>

        <h2 className="news-subtitle">O que é esse método?</h2>
        
        <p>
          Diferente das abordagens tradicionais, este método se baseia em princípios de análise de padrões e timing específico. Segundo especialistas que estudaram a técnica, ela envolve uma combinação de fatores que muitos usuários desconhecem.
        </p>

        <p>
          "É surpreendente como algo tão simples pode fazer diferença nos resultados", comenta Maria Silva, de São Paulo, uma das primeiras a testar a abordagem. "Eu estava cética no início, mas os resultados me fizeram repensar minha estratégia."
        </p>

        <h2 className="news-subtitle">Por que tantos estão falando sobre isso?</h2>

        <p>
          O que mais chama atenção não são apenas os relatos individuais, mas a consistência dos resultados reportados. Pessoas de diferentes regiões do país estão compartilhando experiências similares após aplicarem os princípios da técnica.
        </p>

        <p>
          João Santos, de Minas Gerais, conta sua experiência: "Depois de conhecer este método, percebi que estava fazendo tudo de forma aleatória antes. Agora existe uma lógica por trás das minhas escolhas."
        </p>

        <h2 className="news-subtitle">Como começar a testar hoje mesmo</h2>

        <p>
          Para aqueles interessados em conhecer mais sobre a técnica, o primeiro passo é realizar uma avaliação de perfil. Este teste, desenvolvido especificamente para identificar candidatos com maior potencial de sucesso, leva apenas alguns minutos para ser concluído.
        </p>

        <p>
          O teste analisa fatores como padrões de comportamento, preferências pessoais e histórico de experiências com jogos de sorte para determinar a compatibilidade com o método.
        </p>

        {/* Segundo CTA */}
        <div className="bg-background-subtle p-6 rounded-lg border border-border-light my-8">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Pronto para descobrir seu potencial?
          </h3>
          <p className="text-text-body mb-4">
            Milhares de brasileiros já fizeram o teste. Descubra se você também tem o perfil para aplicar este método curioso que vem gerando tanto interesse.
          </p>
          <Button onClick={handleCTAClick} variant="cta">
            INICIAR TESTE GRATUITO
          </Button>
        </div>

        <p>
          <strong>Importante:</strong> O método não garante resultados e deve ser aplicado sempre com responsabilidade. Os relatos apresentados são baseados em experiências individuais e podem variar de pessoa para pessoa.
        </p>
      </div>
    </article>
  );
};

export default NewsArticle;
