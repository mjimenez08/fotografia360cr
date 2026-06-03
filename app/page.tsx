import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Audience from "@/components/Audience";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Differentiators from "@/components/Differentiators";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Audience />
        <Services />
        <Process />
        <Portfolio />
        <Differentiators />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
