
const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container px-4 sm:px-6">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 animate-fade-up glass-card p-6 md:p-8">
            <p className="text-lg leading-relaxed text-white/90">
              As a passionate and driven MERN Stack Developer, I specialize in crafting
              intuitive, scalable, and secure web applications. With hands-on experience
              in building full-stack projects and a strong foundation in JavaScript,
              TypeScript, React, Node.js, Express.js, and MongoDB, I seamlessly
              integrate front-end creativity with back-end logic to deliver impactful
              solutions.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">My Journey Includes:</h3>
              <ul className="space-y-3 list-disc list-inside text-white/70">
                <li>
                  Full-Stack Development: Built web applications integrating Firebase
                  authentication and MongoDB for efficient data management.
                </li>
                <li>
                  Scalability & Security: Developed applications prioritizing security,
                  performance, and user-centric design.
                </li>
                <li>
                  Hackathon Excellence: Participated in Hackfest'24, ranked top 93 out
                  of 2,500 teams, demonstrating creativity and problem-solving skills.
                </li>
              </ul>
            </div>
          </div>
          <div className="glass-card p-8 animate-fade-up delay-100 hover-card">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-3">
              <p className="font-medium text-white/90">Bachelor of Technology (B.Tech)</p>
              <p className="text-white/70">Computer Science Engineering</p>
              <p className="text-white/70">
                St. Joseph Engineering College, Mangaluru
              </p>
              <p className="text-sm text-white/60">2022 - 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
