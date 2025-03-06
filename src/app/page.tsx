import React from 'react';
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import dynamic from 'next/dynamic';

const WelcomeModalService = dynamic(() => import('@/components/Modals/Service/WelcomeModalService'), { ssr: false });

const HomePage: React.FC = () => {
  return (
    <>
      <WelcomeModalService />
      <Hero />
      <Logos />
      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Nuestros Productos"
          description="Elige el producto que más te gusta al mejor precio."
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="Que dicen nuestros clientes"
          description="Nuestros clientes están encantados con nosotros."
        >
          <Testimonials />
        </Section>

        <Section
          id="preguntasFrecuentes"
          title=""
          description="">
          <FAQ />
        </Section>
      </Container>
    </>
  );
};

export default HomePage;