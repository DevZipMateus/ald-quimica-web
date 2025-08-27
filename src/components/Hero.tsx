
import React from 'react';
import { ArrowRight, Award, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center bg-gradient-to-br from-background via-orange-50/30 to-background pt-16 sm:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                ALD Química
                <span className="block text-orange-600">Satisfação e Qualidade</span>
                <span className="block text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mt-2">
                  Garantida
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Com 4 anos de mercado, somos referência em qualidade e satisfação na produção e distribuição de produtos químicos para galvanoplastia. Uma empresa inovadora com estrutura técnica e laboratorial.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg mx-auto mb-2">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-foreground">4</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Anos de Mercado</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg mx-auto mb-2">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-foreground">30+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Produtos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg mx-auto mb-2">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-foreground">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Qualidade</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a 
                href="https://wa.me/5519988788452"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 px-6 sm:px-8 bg-white/10 text-foreground border border-orange-600/60 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-300 rounded-md font-medium w-full sm:w-auto"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 sm:p-8 text-white">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold">Nossos Diferenciais</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">Controle de Qualidade Rigoroso</h4>
                      <p className="text-orange-100 text-sm">Análise técnica e laboratorial de todos os produtos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">Processos Inovadores</h4>
                      <p className="text-orange-100 text-sm">Elaboração de aditivos e fabricação de sais metálicos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">Protocolos de Segurança</h4>
                      <p className="text-orange-100 text-sm">Manuseio seguro das matérias químicas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-2 -right-2 sm:-top-4 sm:-right-4 w-full h-full bg-orange-200/30 rounded-2xl"></div>
            <div className="absolute -z-20 -top-4 -right-4 sm:-top-8 sm:-right-8 w-full h-full bg-orange-100/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
