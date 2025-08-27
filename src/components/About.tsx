
import React from 'react';
import { Factory, Users, Target, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sobre a ALD Química
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça nossa história de inovação e excelência na indústria de galvanoplastia
            </p>
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Nossa História</h3>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  Com uma trajetória de 30 anos na indústria de Galvanoplastia de bijouterias, 
                  <strong className="text-foreground"> Antônio Libero Dioto</strong> iniciou as atividades 
                  da ALD Química em <strong className="text-orange-600">1° de maio de 2020</strong>.
                </p>
                <p>
                  Em pouco tempo de mercado, a ALD Química já é referência de qualidade e satisfação 
                  na produção e distribuição de produtos químicos para galvânicas. Uma empresa inovadora 
                  com estrutura técnica e laboratorial que analisa com rigoroso controle os requisitos 
                  de qualidade dos produtos que revende.
                </p>
                <p>
                  Elaboramos vários processos como aditivos e fabricação de sais metálicos. 
                  A ALD Química segue os protocolos nos manuseios das matérias químicas.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 sm:p-8 text-white order-1 lg:order-2">
              <div className="space-y-6">
                <Factory className="w-10 h-10 sm:w-12 sm:h-12" />
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2">30 Anos de Experiência</h4>
                  <p className="text-orange-100 text-sm sm:text-base">
                    Três décadas de expertise em galvanoplastia de bijouterias, 
                    garantindo conhecimento técnico aprofundado e soluções inovadoras.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-7 h-7 sm:w-8 sm:h-8 text-orange-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">Missão</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Fornecer produtos químicos de alta qualidade para galvanoplastia, 
                garantindo satisfação e resultados excepcionais para nossos clientes.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-orange-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">Visão</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Ser a empresa líder em inovação e qualidade no setor de produtos 
                químicos para galvanoplastia no Brasil.
              </p>
            </div>
            
            <div className="text-center space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-orange-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">Valores</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Qualidade, inovação, segurança e compromisso com a satisfação 
                do cliente são os pilares que guiam nossa empresa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
