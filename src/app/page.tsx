import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Impact from "@/components/Impact";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Organizations from "@/components/Organizations";
import Stories from "@/components/Stories";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureStrip />
        <About />
        <Experience />
        <Impact />
        <Skills />
        <Services />
        <Testimonials />
        <Organizations />
        <Stories />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
