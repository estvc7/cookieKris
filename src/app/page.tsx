import React from 'react';
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import OrderInfo from "@/components/OrderInfo";
import Container from "@/components/Container";
import Section from "@/components/Section";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Section
          id="pricing"
          title="Nuestros Productos"
          description="Elige el producto que más te gusta al mejor precio."
        >
          <Pricing />
        </Section>

        <OrderInfo />
        <FAQ />
      </Container>
    </>
  );
};

export default HomePage;