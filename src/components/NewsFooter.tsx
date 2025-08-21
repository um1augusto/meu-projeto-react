const NewsFooter = () => {
  return (
    <footer className="bg-background-subtle border-t border-border-light py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="text-sm text-text-muted">
            <p>© 2024 Notícias Hoje Online. Todos os direitos reservados.</p>
          </div>
          
          <div className="text-xs text-text-muted max-w-2xl mx-auto leading-relaxed">
            <p className="mb-2">
              <strong>Aviso importante:</strong> Este site não se responsabiliza pelos resultados individuais. 
              Material apenas informativo.
            </p>
            <p>
              Os relatos apresentados são baseados em experiências pessoais e não constituem garantia de resultados. 
              Sempre pratique jogos de forma responsável e consciente dos riscos envolvidos.
            </p>
          </div>

          <div className="flex justify-center space-x-6 text-xs text-accent-blue">
            <a href="#" className="hover:underline">Política de Privacidade</a>
            <a href="#" className="hover:underline">Termos de Uso</a>
            <a href="#" className="hover:underline">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewsFooter;