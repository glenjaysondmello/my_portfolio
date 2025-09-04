import { lazy, Suspense, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Loader1 from "@/components/styled_components/Loader1";
import { BouncyArc } from "ldrs/react";

const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const Projects = lazy(() => import("@/components/Projects"));
const Contact = lazy(() => import("@/components/Contact"));
const Card3 = lazy(() => import("@/components/styled_components/Card3"));
const Footer = lazy(() => import("@/components/Footer"));
const Reveal = lazy(() => import("@/components/styled_components/Reveal"));

// Navbar with scroll effect and mobile toggle
const Navbar = ({ activeSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo + Name */}
          <div className="flex items-center gap-10">
            <Loader1 />
            <span className="text-xl font-display font-bold">
              Glen Jayson Dmello
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden mr-3"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 mr-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => onSectionChange(section)}
                className={`capitalize nav-link ${
                  activeSection === section ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b md:hidden animate-fade-down">
            <div className="container mx-auto px-6 py-4">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    onSectionChange(section);
                    setIsOpen(false);
                  }}
                  className={`block py-2 w-full text-left nav-link ${
                    activeSection === section
                      ? "text-blue-600 font-semibold"
                      : ""
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const Index = () => {
  const [activeSection, setActiveSection] = useState("Home");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "Home":
        return (
          <Suspense
            fallback={
              <div className="flex justify-center items-center min-h-screen">
                <BouncyArc size="70" speed="1.65" color="black" />
              </div>
            }
          >
            <Card3 />
          </Suspense>
        );
      case "About":
        return (
          <Suspense
            fallback={
              <div className="flex justify-center items-center min-h-screen">
                <BouncyArc size="70" speed="1.65" color="black" />
              </div>
            }
          >
            <Reveal>
              <About />
            </Reveal>
          </Suspense>
        );
      case "Skills":
        return (
          <Suspense
            fallback={
              <div className="flex justify-center items-center min-h-screen">
                <BouncyArc size="70" speed="1.65" color="black" />
              </div>
            }
          >
            <Reveal delay={0.2}>
              <Skills />
            </Reveal>
          </Suspense>
        );
      case "Projects":
        return (
          <Suspense
            fallback={
              <div className="flex justify-center items-center min-h-screen">
                <BouncyArc size="70" speed="1.65" color="black" />
              </div>
            }
          >
            <Reveal delay={0.4}>
              <Projects />
            </Reveal>
          </Suspense>
        );
      case "Contact":
        return (
          <Suspense
            fallback={
              <div className="flex justify-center items-center min-h-screen">
                <BouncyArc size="70" speed="1.65" color="black" />
              </div>
            }
          >
            <Reveal delay={0.6}>
              <Contact />
            </Reveal>
          </Suspense>
        );
      default:
        return (
          <Suspense
            fallback={
              <div className="flex justify-center items-center min-h-screen">
                <BouncyArc size="70" speed="1.65" color="black" />
              </div>
            }
          >
            <Card3 />
          </Suspense>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            <BouncyArc size="70" speed="1.65" color="black" />
          </div>
        }
      >
        {/* Navbar with scroll + mobile toggle */}
        <Navbar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {/* Main content */}
        <main className="pt-16">{renderActiveSection()}</main>

        {/* Footer only visible on Contact */}
        {activeSection === "Contact" && <Footer />}
      </Suspense>
    </div>
  );
};

export default Index;
