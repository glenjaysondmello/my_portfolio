import { lazy, Suspense } from "react";

const Navbar = lazy(() => import("@/components/Navbar"));
const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const Projects = lazy(() => import("@/components/Projects"));
const Contact = lazy(() => import("@/components/Contact"));
const Card3 = lazy(() => import("@/components/styled_components/Card3"));
const Footer = lazy(() => import("@/components/Footer"));
const Reveal = lazy(() => import("@/components/styled_components/Reveal"));

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
};

export default Index;
