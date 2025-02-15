
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SkillLoader from "@/components/3D_animation/SkillLoader";
import Loader from "../components/3D_animation/Loader";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <SkillLoader/>
      <Contact />
      <Loader/>
    </div>
  );
};

export default Index;
