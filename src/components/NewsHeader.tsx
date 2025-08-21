import { Button } from "@/components/ui/button";

const NewsHeader = () => {
  return (
    <header className="bg-background border-b border-border-light py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-accent-blue font-headline">
              Notícias Hoje Online
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-text-body hover:text-accent-blue transition-colors">
                Início
              </a>
              <a href="#" className="text-text-body hover:text-accent-blue transition-colors">
                Brasil
              </a>
              <a href="#" className="text-text-body hover:text-accent-blue transition-colors">
                Curiosidades
              </a>
            </nav>
          </div>
          <div className="text-xs text-text-muted">
            {new Date().toLocaleDateString('pt-BR')}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NewsHeader;