import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Card3 from "@/components/3D_animation/Card3";
import Tooltip from "@/components/3D_animation/Tooltip";
import SkillLoader from "@/components/3D_animation/SkillLoader";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* <Hero /> */}
      <div className="mt-40">
        <Card3 />
      </div>

      <About />
      <Skills />
      <Projects />
      {/* <div className="flex items-center justify-center">
        <Card1 />
      </div> */}
      <div className="flex items-center justify-center">
        <SkillLoader />
      </div>
      <div className="mb-96">
        <Contact />
      </div>

      <div className="flex items-center justify-center mb-96">
        <Tooltip />
      </div>
    </div>
  );
};

export default Index;
