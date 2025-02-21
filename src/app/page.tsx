import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
// import Stats from "@/components/Stats";
// import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Precios"
          description="Elige el plan que mejor se adapte a tus necesidades."
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

        <FAQ />
{/* 
        <Stats />
        
        <CTA /> */}
      </Container>
    </>
  );
};

export default HomePage;
