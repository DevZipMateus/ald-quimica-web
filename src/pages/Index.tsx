
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ALD Química - Produtos Químicos para Galvanoplastia | Qualidade e Satisfação Garantida</title>
        <meta name="description" content="ALD Química: 4 anos de excelência em produtos químicos para galvanoplastia. Processos de metais preciosos, equipamentos e acessórios com qualidade garantida." />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ALD Química - Produtos Químicos para Galvanoplastia | Qualidade e Satisfação Garantida" />
        <meta property="og:description" content="ALD Química: 4 anos de excelência em produtos químicos para galvanoplastia. Processos de metais preciosos, equipamentos e acessórios com qualidade garantida." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/favicon.ico" />
        
        {/* Additional SEO tags */}
        <meta name="keywords" content="galvanoplastia, produtos químicos, metais preciosos, ouro, prata, níquel, cobre, bijouterias" />
        <meta name="author" content="ALD Indústria e Comércio de Produtos Químicos Ltda" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Products />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default Index;
