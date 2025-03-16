import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Card3 from "@/components/3D_animation/Card3";
import React from "react";

const sections = [Card3, About, Skills, Projects, Contact];

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let isScrolling = false;

  const changeSection = (direction: "up" | "down") => {
    if (isScrolling) return;
    isScrolling = true;

    setCurrentIndex((prev) => {
      let newIndex = prev;
      if (direction === "down") newIndex = Math.min(prev + 1, sections.length - 1);
      if (direction === "up") newIndex = Math.max(prev - 1, 0);
      return newIndex;
    });

    setTimeout(() => {
      isScrolling = false;
    }, 800);
  };

  const handleScroll = (event: WheelEvent) => {
    if (event.deltaY > 0) {
      changeSection("down");
    } else if (event.deltaY < 0) {
      changeSection("up");
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      changeSection("down");
    } else if (event.key === "ArrowUp") {
      changeSection("up");
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col items-center justify-between">
      {/* ✅ Navbar remains fixed */}
      <Navbar setCurrentIndex={setCurrentIndex} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="w-full h-full flex items-center justify-center absolute top-0 left-0 px-4 pb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
          exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.5 } }}
        >
          <div className="w-full h-full flex items-center justify-center p-4">
            {sections[currentIndex] ? React.createElement(sections[currentIndex]) : null}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ✅ Footer is now FIXED & RESPONSIVE */}
      <Footer />
    </div>
  );
};

export default Index;
