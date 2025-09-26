import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Beaker, Zap, Droplets, CircuitBoard } from 'lucide-react';

const Products = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(0);

  const productCategories = [
    {
      icon: Beaker,
      title: "Produtos para Galvanoplastia em Geral",
      items: [
        "ACETATO DE CADMIO",
        "ACETATO DE CHUMBO",
        "ACETATO DE COBALTO",
        "ACETATO DE COBRE",
        "Ácido Acético",
        "ÁCIDO BÓRICO",
        "ÁCIDO CÍTRICO",
        "Ácido Clorídrico",
        "ACIDO CLORÍDRICO 0,1 MOL",
        "ÁCIDO CLORÍDRICO 33%",
        "ÁCIDO CLORÍDRICO P.A. 37%",
        "ÁCIDO FOSFÓRICO 85%",
        "Ácido Nítrico",
        "ÁCIDO NÍTRICO 53%",
        "Ácido Sulfúrico",
        "ATIVADOR PARA ZAMAC ALD",
        "B-5 ALD PARA LIMPEZA DE PEÇAS",
        "BICARBONATO DE SÓDIO",
        "CARBONATO DE CALCIO P.A.",
        "CARBONATO DE SÓDIO ANIDRO (BARRILHA LEVE)",
        "Cianeto de Prata 54% ALD",
        "Cianeto de Potássio",
        "Cianeto de Sódio",
        "Cianeto de Cobre",
        "CITRATO DE POTÁSSIO MONOHIDRATADO",
        "CLORETO DE BÁRIO DIHIDRATADO",
        "CLORETO DE COBALTO II",
        "CLORETO DE NÍQUEL",
        "Cloreto de Níquel",
        "DICROMATO DE POTÁSSIO P.A.",
        "DICROMATO DE POTÁSSIO 10%",
        "EDTA DISSÓDICO",
        "EDTA 0,1M",
        "ESTANATO DE SÓDIO",
        "Estanato de Sódio",
        "FENOLFTALEINA 1%",
        "FENOLFITALEINA P.A.",
        "Hidróxido de Sódio / Potássio",
        "Sulfato de Cobre",
        "Sulfato de Níquel",
        "Ácidos em Geral"
      ]
    },
    {
      icon: Droplets,
      title: "Produtos para Tratamento de Efluentes",
      items: [
        "Coagulantes",
        "Floculantes", 
        "Neutralizantes",
        "Precipitantes",
        "Redutores de pH",
        "Elevadores de pH"
      ]
    },
    {
      icon: Zap,
      title: "Pré e Pós Tratamento",
      items: [
        "Desengraxantes Químicos",
        "Desengraxantes Eletrolíticos",
        "Ativadores",
        "Deplacantes - Ouro / Cobre / Níquel",
        "Verniz Protetivo Químicos / Eletrolítico",
        "Oxidantes - Prata / Latão"
      ]
    },
    {
      icon: CircuitBoard,
      title: "Anodos",
      items: [
        "Anodos de Cobre (Fosforoso/Eletrolítico)",
        "Anodos de Latão",
        "Anodos de Níquel", 
        "Anodos de Prata"
      ]
    }
  ];

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <section id="produtos" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Nossos Produtos
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl lg:max-w-2xl mx-auto">
              Catálogo completo de produtos químicos e equipamentos para galvanoplastia
            </p>
          </div>

          {/* Products Accordion */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon;
              const isOpen = openCategory === index;
              
              return (
                <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
                  <button 
                    onClick={() => toggleCategory(index)}
                    className="w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-orange-600" />
                      </div>
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground text-left">
                        {category.title}
                      </h3>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4">
                      <div className="grid sm:grid-cols-2 gap-1.5 sm:gap-2 md:gap-3 pt-3 sm:pt-4 border-t border-border">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-600 rounded-full flex-shrink-0"></div>
                            <span className="text-xs sm:text-sm md:text-base text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quality Badge */}
          <div className="mt-6 sm:mt-8 md:mt-12 text-center">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-white">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Beaker className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Controle de Qualidade Rigoroso</h3>
                <p className="text-orange-100 max-w-lg md:max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
                  Todos os nossos produtos passam por análise técnica e laboratorial, 
                  garantindo que atendam aos mais altos padrões de qualidade da indústria.
                </p>
                <a 
                  href="https://wa.me/5519988788452"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 sm:h-11 px-4 sm:px-6 md:px-8 bg-white text-orange-600 hover:bg-orange-50 transition-colors rounded-md font-medium text-xs sm:text-sm md:text-base gap-2"
                >
                  <img 
                    src="/lovable-uploads/da61b6e2-e3db-4e7c-8fc3-ac2e51a8bbe7.png" 
                    alt="WhatsApp" 
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                  Solicitar Catálogo Completo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
