
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 min-w-0 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl">
              A
            </div>
            <div className="min-w-0">
              <h2 className="text-lg sm:text-xl font-bold text-foreground truncate">ALD Química</h2>
              <p className="text-xs text-muted-foreground hidden xs:block">Qualidade Garantida</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-orange-600 transition-colors font-medium text-sm xl:text-base"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-orange-600 transition-colors font-medium text-sm xl:text-base"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-orange-600 transition-colors font-medium text-sm xl:text-base"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('produtos')}
              className="text-foreground hover:text-orange-600 transition-colors font-medium text-sm xl:text-base"
            >
              Produtos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-orange-600 transition-colors font-medium text-sm xl:text-base"
            >
              Contato
            </button>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-orange-600 hover:bg-orange-700 text-white text-sm xl:text-base px-4 xl:px-6"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden w-8 h-8 sm:w-10 sm:h-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-foreground hover:text-orange-600 transition-colors font-medium py-2 px-1"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-foreground hover:text-orange-600 transition-colors font-medium py-2 px-1"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-foreground hover:text-orange-600 transition-colors font-medium py-2 px-1"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('produtos')}
                className="text-left text-foreground hover:text-orange-600 transition-colors font-medium py-2 px-1"
              >
                Produtos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-foreground hover:text-orange-600 transition-colors font-medium py-2 px-1"
              >
                Contato
              </button>
              <Button 
                onClick={() => scrollToSection('contato')}
                className="bg-orange-600 hover:bg-orange-700 text-white mt-2 w-full justify-start"
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
