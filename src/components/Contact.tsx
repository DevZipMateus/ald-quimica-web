
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import ContactMap from '@/components/ContactMap';

const Contact = () => {
  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entre em Contato
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para atender suas necessidades em produtos químicos para galvanoplastia
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Informações de Contato</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Endereço</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Av Dr Antonio de Luna, 1005<br />
                      CNPJ: 40.015.668/0001-27
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Telefones</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      <a href="tel:1937027219" className="hover:text-orange-600 transition-colors">
                        (19) 3702-7219
                      </a>
                      <br />
                      <a 
                        href="https://wa.me/5519988788452" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-orange-600 transition-colors"
                      >
                        (19) 98878-8452 - WhatsApp
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">E-mail</h4>
                    <p className="text-muted-foreground text-sm sm:text-base break-all">
                      <a 
                        href="mailto:aldquimica@aldquimica.com.br" 
                        className="hover:text-orange-600 transition-colors"
                      >
                        aldquimica@aldquimica.com.br
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Horário de Funcionamento</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Segunda a Quinta-feira<br />
                      das 7:30 às 17:30
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="border-t border-border pt-4 sm:pt-6">
                <h4 className="font-semibold text-foreground mb-4 text-sm sm:text-base">Redes Sociais</h4>
                <div className="flex space-x-3 sm:space-x-4">
                  <a 
                    href="#" 
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 hover:bg-orange-600 hover:text-white text-orange-600 rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 hover:bg-orange-600 hover:text-white text-orange-600 rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <a 
                  href="https://wa.me/5519988788452"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-full inline-flex items-center justify-center h-11 sm:h-12 px-6 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors text-sm sm:text-base"
                >
                  Falar no WhatsApp
                </a>
                <a 
                  href="mailto:aldquimica@aldquimica.com.br"
                  className="w-full inline-flex items-center justify-center h-11 sm:h-12 px-6 bg-white/10 text-foreground border border-orange-600/60 hover:bg-orange-600 hover:text-white hover:border-orange-600 rounded-lg font-medium transition-colors text-sm sm:text-base"
                >
                  Enviar E-mail
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Localização</h3>
              <div className="h-64 sm:h-80 lg:h-96">
                <ContactMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
