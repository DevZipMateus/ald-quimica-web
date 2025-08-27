
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
    <section id="inicio" className="min-h-screen flex items-center bg-gradient-to-br from-background via-orange-50/30 to-background">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                ALD Química
                <span className="block text-orange-600">Satisfação e Qualidade</span>
                <span className="block text-2xl md:text-3xl font-medium text-muted-foreground mt-2">
                  Garantida
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Com 4 anos de mercado, somos referência em qualidade e satisfação na produção e distribuição de produtos químicos para galvanoplastia. Uma empresa inovadora com estrutura técnica e laboratorial.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-2">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-foreground">4</div>
                <div className="text-sm text-muted-foreground">Anos de Mercado</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-2">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-foreground">30+</div>
                <div className="text-sm text-muted-foreground">Produtos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-2">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Qualidade</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a 
                href="https://wa.me/5519988788452"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 px-8 bg-white/10 text-foreground border border-orange-600/60 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-300 rounded-md font-medium"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Nossos Diferenciais</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Controle de Qualidade Rigoroso</h4>
                      <p className="text-orange-100">Análise técnica e laboratorial de todos os produtos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Processos Inovadores</h4>
                      <p className="text-orange-100">Elaboração de aditivos e fabricação de sais metálicos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Protocolos de Segurança</h4>
                      <p className="text-orange-100">Manuseio seguro das matérias químicas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-orange-200/30 rounded-2xl"></div>
            <div className="absolute -z-20 -top-8 -right-8 w-full h-full bg-orange-100/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
