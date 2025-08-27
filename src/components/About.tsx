
import React from 'react';
import { Factory, Users, Target, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sobre a ALD Química
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça nossa história de inovação e excelência na indústria de galvanoplastia
            </p>
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Nossa História</h3>
              <div className="space-y-4 text-muted-foreground">
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
            
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <Factory className="w-12 h-12" />
                <div>
                  <h4 className="text-xl font-bold mb-2">30 Anos de Experiência</h4>
                  <p className="text-orange-100">
                    Três décadas de expertise em galvanoplastia de bijouterias, 
                    garantindo conhecimento técnico aprofundado e soluções inovadoras.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Missão</h3>
              <p className="text-muted-foreground">
                Fornecer produtos químicos de alta qualidade para galvanoplastia, 
                garantindo satisfação e resultados excepcionais para nossos clientes.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Visão</h3>
              <p className="text-muted-foreground">
                Ser a empresa líder em inovação e qualidade no setor de produtos 
                químicos para galvanoplastia no Brasil.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Valores</h3>
              <p className="text-muted-foreground">
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
