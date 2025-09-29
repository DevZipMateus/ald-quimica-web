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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                ALD Química
                <span className="block text-orange-600">Satisfação e Qualidade</span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mt-1 sm:mt-2">
                  Garantida
                </span>
              </h1>
               <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl lg:max-w-2xl mx-auto lg:mx-0">
                 Com 5 anos de mercado, somos referência em qualidade e satisfação na produção e distribuição de produtos químicos para galvanoplastia. Uma empresa inovadora com estrutura técnica e laboratorial.
               </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-xs sm:max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg mx-auto mb-1 sm:mb-2">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-orange-600" />
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">5</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Anos de Mercado</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg mx-auto mb-1 sm:mb-2">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-orange-600" />
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">30+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Produtos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg mx-auto mb-1 sm:mb-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-orange-600" />
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Qualidade</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto text-sm sm:text-base"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a 
                href="https://wa.me/5519988788452"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 px-4 sm:px-6 md:px-8 bg-white/10 text-foreground border border-orange-600/60 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-300 rounded-md font-medium w-full sm:w-auto gap-2 text-sm sm:text-base"
              >
                <img 
                  src="/lovable-uploads/da61b6e2-e3db-4e7c-8fc3-ac2e51a8bbe7.png" 
                  alt="WhatsApp" 
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-white">
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Nossos Diferenciais</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">Controle de Qualidade Rigoroso</h4>
                      <p className="text-orange-100 text-xs sm:text-sm">Análise técnica e laboratorial de todos os produtos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">Processos Inovadores</h4>
                      <p className="text-orange-100 text-xs sm:text-sm">Elaboração de aditivos e fabricação de sais metálicos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">Protocolos de Segurança</h4>
                      <p className="text-orange-100 text-xs sm:text-sm">Manuseio seguro das matérias químicas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-1 -right-1 sm:-top-2 sm:-right-2 md:-top-4 md:-right-4 w-full h-full bg-orange-200/30 rounded-xl sm:rounded-2xl"></div>
            <div className="absolute -z-20 -top-2 -right-2 sm:-top-4 sm:-right-4 md:-top-8 md:-right-8 w-full h-full bg-orange-100/20 rounded-xl sm:rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
