import { ArrowRight } from "lucide-react";
import profile from "/profile.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 sm:px-6 py-12">
        <div className="text-center space-y-6 animate-fade-up">
          <img
            src={profile}
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover mx-auto shadow-lg animated-border"
          />
          <div className="inline-block px-3 py-1 text-sm box-mid">
            Tech Enthusiast
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            MERN Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            Full-Stack Innovator | Aspiring AI Prompt Engineer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="#contact" className="button-primary boxl">
              Get in touch
              <ArrowRight size={18} />
            </a>
            <a href="#projects" className="button-secondary boxr">
              View projects
            </a>
          </div>
          <div className="mt-12 text-white/60">
            <p>📍 Dakshina Kannada, Karnataka, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
