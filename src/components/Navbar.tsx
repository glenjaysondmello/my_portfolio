import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { quantum } from "ldrs";
import Loader1 from "./3D_animation/Loader1";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  quantum.register();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            {/* <l-quantum size="45" speed="1.5" color="white"></l-quantum> */}
            <Loader1 />
            <span className="text-xl font-display font-bold">
              Glen Jayson Dmello
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden mr-5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 mr-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b md:hidden animate-fade-down">
              <div className="container mx-auto px-6 py-4">
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
