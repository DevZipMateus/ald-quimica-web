
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img 
                src="/logo.jpg" 
                alt="ALD Química Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
              <span className="font-bold text-sm sm:text-base md:text-lg">ALD Química</span>
            </div>
            <p className="text-muted text-xs sm:text-sm">
              Satisfação e qualidade garantida em produtos químicos para galvanoplastia.
              4 anos de excelência no mercado.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              <a 
                href="#" 
                className="w-7 h-7 sm:w-8 sm:h-8 bg-background/10 hover:bg-orange-600 text-background rounded flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a 
                href="#" 
                className="w-7 h-7 sm:w-8 sm:h-8 bg-background/10 hover:bg-orange-600 text-background rounded flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-sm sm:text-base md:text-lg">Links Rápidos</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-muted hover:text-orange-400 transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-muted hover:text-orange-400 transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-muted hover:text-orange-400 transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('produtos')}
                  className="text-muted hover:text-orange-400 transition-colors"
                >
                  Produtos
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-sm sm:text-base md:text-lg">Principais Serviços</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted">
              <li>Processos de Metais Preciosos</li>
              <li>Equipamentos e Acessórios</li>
              <li>Produtos para Galvanoplastia</li>
              <li>Recuperação de Metais Nobres</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-sm sm:text-base md:text-lg">Contato</h3>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted">
              <div className="flex items-start space-x-1.5 sm:space-x-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                <span>Av Dr Antonio de Luna, 1005</span>
              </div>
              <div className="flex items-start space-x-1.5 sm:space-x-2">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>(19) 3702-7219</div>
                  <div>(19) 98878-8452</div>
                </div>
              </div>
              <div className="flex items-start space-x-1.5 sm:space-x-2">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:aldquimica@aldquimica.com.br"
                  className="hover:text-orange-400 transition-colors break-all"
                >
                  aldquimica@aldquimica.com.br
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8 text-center text-xs sm:text-sm text-muted">
          <p>
            © 2025 ALD Indústria e Comércio de Produtos Químicos Ltda. 
            CNPJ: 40.015.668/0001-27. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
