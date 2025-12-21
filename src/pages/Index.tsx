import { lazy, Suspense } from "react";
import Snowfall from "react-snowfall";

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
      <Snowfall
        // Soft, natural snow color (pure white looks artificial)
        color="#e6ecff"
        // Density: realistic, not overwhelming
        snowflakeCount={60}
        // Size variation (very important)
        radius={[0.6, 3.2]}
        // Vertical falling speed (slow & smooth)
        speed={[0.3, 2.2]}
        // Horizontal wind drift
        wind={[-0.6, 1.2]}
        // Wind + speed change frequency
        changeFrequency={180}
        // Depth illusion
        opacity={[0.4, 1]}
        // Subtle rotation
        rotationSpeed={[-0.6, 0.6]}
        // Enables leaf-like 3D tumbling (looks premium)
        enable3DRotation={true}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          pointerEvents: "none", // IMPORTANT
          zIndex: 50, // adjust if needed
        }}
      />

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
