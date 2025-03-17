import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Card3 from "@/components/styled_components/Card3";
import Footer from "@/components/Footer";
import Reveal from "@/components/styled_components/Reveal"; // Import Reveal component

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main content */}
      <main className="flex-grow">
        <div className="mt-20 md:mt-40">
          <Card3 />
        </div>

        {/* Animate Sections on Scroll */}
        <Reveal>
          <About />
        </Reveal>
        <Reveal delay={0.2}>
          <Skills />
        </Reveal>
        <Reveal delay={0.4}>
          <Projects />
        </Reveal>

        <div className="mb-40">
          <Reveal delay={0.6}>
            <Contact />
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
