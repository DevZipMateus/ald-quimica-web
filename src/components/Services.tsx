
import React from 'react';
import { Sparkles, Wrench, Recycle, Shield } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      icon: Sparkles,
      title: "Processos de Metais Preciosos",
      items: [
        "Banho de Pré Ouro ALD (Com e sem cianeto)",
        "Banho de Cor Final ALD (Com e sem cianeto na tonalidade desejada)",
        "Banho de Folheação Alcalina ALD",
        "Banho de Folheação Ácida NI ALD",
        "Banho de Folheação Ácida Co ALD",
        "Banho de Pré Prata Aditivada ALD",
        "Banho de Prata Brilhante ALD HT"
      ],
      color: "orange"
    },
    {
      icon: Wrench,
      title: "Processos Intermediários",
      items: [
        "Cobre Alcalino ALD",
        "Níquel Brilhante ALD",
        "Níquel Grafite ALD",
        "Níquel Free New White ALD"
      ],
      color: "slate"
    },
    {
      icon: Shield,
      title: "Equipamentos / Acessórios",
      items: [
        "Resistências de inox e teflon",
        "Termostato digital",
        "Termômetros",
        "Densímetros",
        "Vidrarias Laboratoriais"
      ],
      color: "blue"
    },
    {
      icon: Recycle,
      title: "Recuperação de Metais Nobres",
      items: [
        "Ouro",
        "Prata"
      ],
      color: "green"
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções completas em galvanoplastia com qualidade e tecnologia de ponta
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      category.color === 'orange' ? 'bg-orange-100' :
                      category.color === 'slate' ? 'bg-slate-100' :
                      category.color === 'blue' ? 'bg-blue-100' : 'bg-green-100'
                    }`}>
                      <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${
                        category.color === 'orange' ? 'text-orange-600' :
                        category.color === 'slate' ? 'text-slate-600' :
                        category.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                        {category.title}
                      </h3>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Precisa de uma solução personalizada?
              </h3>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                Nossa equipe técnica especializada pode desenvolver processos específicos 
                para suas necessidades. Entre em contato conosco!
              </p>
              <a 
                href="https://wa.me/5519988788452"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 px-6 sm:px-8 bg-white text-orange-600 hover:bg-orange-50 transition-colors rounded-md font-medium text-sm sm:text-base"
              >
                Solicitar Consultoria
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
