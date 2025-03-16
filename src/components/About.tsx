const About = () => {
  return (
    <section id="about" className="py-20 mt-32">
      <div className="px-4 sm:px-6">
        <h2 className="section-title">About Me</h2>

        {/* Single Unified Box */}
        <div className="space-y-6 animate-fade-up hover-card p-6 md:p-8">
          {/* About Description */}
          <p className="leading-relaxed text-white/90 break-words md:whitespace-normal">
            I am a passionate MERN Stack Developer currently pursuing Computer
            Science Engineering at SJEC Mangalore VTU. I specialize in building
            intuitive, scalable, and secure web applications, seamlessly
            integrating front-end and back-end development. With a strong focus
            on performance and user experience, I strive to create efficient,
            high-quality solutions. Always eager to collaborate on impactful
            projects—let’s connect! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
