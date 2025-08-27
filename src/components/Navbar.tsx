
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Produtos', id: 'produtos' },
    { label: 'Contato', id: 'contato' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/9fd655b0-24cf-4fcd-bc3d-4589d709e69e.png" 
              alt="ALD Química Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <div className="text-lg sm:text-xl font-bold text-foreground">
              ALD Química
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 lg:px-4 py-2 text-sm lg:text-base text-muted-foreground hover:text-orange-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <a 
              href="https://wa.me/5519988788452"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center px-4 lg:px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors text-sm lg:text-base gap-2"
            >
              <img 
                src="/lovable-uploads/da61b6e2-e3db-4e7c-8fc3-ac2e51a8bbe7.png" 
                alt="WhatsApp" 
                className="w-4 h-4"
              />
              Contato
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-orange-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base text-muted-foreground hover:text-orange-600 hover:bg-muted/50 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a 
                href="https://wa.me/5519988788452"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full px-3 py-2 mt-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md font-medium transition-colors gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <img 
                  src="/lovable-uploads/da61b6e2-e3db-4e7c-8fc3-ac2e51a8bbe7.png" 
                  alt="WhatsApp" 
                  className="w-4 h-4"
                />
                Contato WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
