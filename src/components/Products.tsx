import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Beaker, Zap, Droplets, CircuitBoard } from 'lucide-react';

const Products = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(0);

  const productCategories = [
    {
      icon: Beaker,
      title: "Produtos para Galvanoplastia em Geral",
      items: [
        "Ácido Acético",
        "Ácido Clorídrico", 
        "Ácido Nítrico",
        "Ácido Sulfúrico",
        "Cianeto de Prata 54% ALD",
        "Cianeto de Potássio",
        "Cianeto de Sódio",
        "Cianeto de Cobre",
        "Cloreto de Níquel",
        "Estanato de Sódio",
        "Hidróxido de Sódio / Potássio",
        "Sulfato de Cobre",
        "Sulfato de Níquel",
        "Ácido Bórico",
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
    <section id="produtos" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Produtos
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Catálogo completo de produtos químicos e equipamentos para galvanoplastia
            </p>
          </div>

          {/* Products Accordion */}
          <div className="space-y-3 sm:space-y-4">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon;
              const isOpen = openCategory === index;
              
              return (
                <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
                  <button 
                    onClick={() => toggleCategory(index)}
                    className="w-full px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground text-left">
                        {category.title}
                      </h3>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-4">
                      <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 pt-4 border-t border-border">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0"></div>
                            <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
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
          <div className="mt-8 sm:mt-12 text-center">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 sm:p-8 text-white">
              <div className="space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Beaker className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Controle de Qualidade Rigoroso</h3>
                <p className="text-orange-100 max-w-2xl mx-auto text-sm sm:text-base">
                  Todos os nossos produtos passam por análise técnica e laboratorial, 
                  garantindo que atendam aos mais altos padrões de qualidade da indústria.
                </p>
                <a 
                  href="https://wa.me/5519988788452"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 px-6 sm:px-8 bg-white text-orange-600 hover:bg-orange-50 transition-colors rounded-md font-medium text-sm sm:text-base gap-2"
                >
                  <img 
                    src="/lovable-uploads/da61b6e2-e3db-4e7c-8fc3-ac2e51a8bbe7.png" 
                    alt="WhatsApp" 
                    className="w-5 h-5"
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
