const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container px-4 sm:px-6">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 animate-fade-up glass-card p-6 md:p-8">
            <p className="text-lg leading-relaxed text-white/90">
              As a passionate and results-driven MERN Stack Developer, I
              specialize in building intuitive, scalable, and secure web
              applications. With expertise in JavaScript, TypeScript, React,
              Node.js, Express.js, MongoDB, and Firebase, I seamlessly integrate
              front-end creativity with back-end efficiency to deliver
              high-performance solutions.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                My skill set extends to:
              </h3>
              <ul className="space-y-3 list-disc list-inside text-white/70">
                <li>
                  Full-stack development with Firebase authentication and
                  MongoDB for robust data management.
                </li>
                <li>
                  Version control and collaboration using Git, ensuring clean,
                  maintainable, and well-documented code.
                </li>

                <li>
                  Proficient in AI interaction and prompt engineering,
                  leveraging effective communication with AI to refine
                  responses.
                </li>

                <li>
                  Building scalable and secure applications, prioritizing
                  performance, data protection, and user experience.
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Highlights of my journey:
              </h3>
              <ul className="space-y-3 list-disc list-inside text-white/70">
                <li>
                  Skilled in prompt engineering, effectively communicating with
                  AI to generate optimal responses and solutions.
                </li>
                <li>
                  Hackfest'24 Finalist – My team, Epsilon, ranked among the top
                  93 out of 2,500 teams nationally, showcasing problem-solving
                  and innovation.
                </li>
                <li>
                  I am always eager to collaborate on cutting-edge projects that
                  drive meaningful impact. Let’s connect if you're looking for a
                  versatile developer, an AI innovator, or a collaborator for
                  transformative ideas.
                </li>
              </ul>
            </div>
          </div>
          <div className="glass-card p-8 animate-fade-up delay-100 hover-card">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-3">
              <p className="font-medium text-white/90">
                Bachelor of Technology (B.Tech)
              </p>
              <p className="text-white/70">Computer Science Engineering</p>
              <p className="text-white/70">
                St. Joseph Engineering College, Mangaluru
              </p>
              <p className="text-sm text-white/60">2022 - 2026</p>
            </div>

            <hr className="border-white/30 my-4" />

            <div className="space-y-3">
              <p className="font-medium text-white/90">
                Pre-University Course (PUC) - Science, PCMC
              </p>
              <p className="text-white/70">
                Pompei College, Talipady, Aikala Post, Kinnigoli-574141
              </p>
            </div>

            <hr className="border-white/30 my-4" />

            <div className="space-y-3">
              <p className="font-medium text-white/90">
                Secondary School Leaving Certificate (SSLC)
              </p>
              <p className="text-white/70">Maryvale High School</p>
              <p className="text-white/70">8th - 10th</p>
            </div>

            <hr className="border-white/30 my-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
