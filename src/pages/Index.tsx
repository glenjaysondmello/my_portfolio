import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Card from "@/components/3D_animation/Card";
import Card1 from "@/components/3D_animation/Card1";
import Card3 from "@/components/3D_animation/Card3";
import Tooltip from "@/components/3D_animation/Tooltip";

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
      <div className="flex items-center justify-center">
        <Card />
      </div>
      <Contact />
      <div className="flex items-center justify-center mb-[50rem]">
        <Card1 />
      </div>
      <div className="flex items-center justify-center mb-96">
        <Tooltip />
      </div>
    </div>
  );
};

export default Index;
