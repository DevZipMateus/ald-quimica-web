
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
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="font-bold text-lg">ALD Química</span>
            </div>
            <p className="text-muted text-sm">
              Satisfação e qualidade garantida em produtos químicos para galvanoplastia.
              4 anos de excelência no mercado.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-8 h-8 bg-background/10 hover:bg-orange-600 text-background rounded flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-background/10 hover:bg-orange-600 text-background rounded flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
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
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Principais Serviços</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>Processos de Metais Preciosos</li>
              <li>Equipamentos e Acessórios</li>
              <li>Produtos para Galvanoplastia</li>
              <li>Recuperação de Metais Nobres</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3 text-sm text-muted">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Av Dr Antonio de Luna, 1005</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <div>
                  <div>(19) 3702-7219</div>
                  <div>(19) 98878-8452</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
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

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-muted">
          <p>
            © 2024 ALD Indústria e Comércio de Produtos Químicos Ltda. 
            CNPJ: 40.015.668/0001-27. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
