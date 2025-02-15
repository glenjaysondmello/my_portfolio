
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-display font-bold">Glen Jayson Dmello</span>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8">
            {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
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
                {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
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
