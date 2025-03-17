import { FaGithub } from "react-icons/fa";

const PROJECTS = {
  title: "DConnect – Smart Carpooling Platform",
  description:
    "Developed an innovative solution tackling real-world challenges and built a flexible ride-sharing app where users can switch between driver and passenger roles. Demonstrated problem-solving, teamwork, technical expertise, and enhanced daily commuting with convenience and efficiency.",
  achievements: ["Top 93 out of 2,500 teams at Hackfest'24"],
  locations: ["PSG Institute of Technology, Coimbatore"],
  year: "2024",
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <h2 className="section-title">Projects & Achievements</h2>
        <div className="grid gap-6 lg:gap-8 animate-fade-up">
          {/* Project Card */}
          <div className="p-6 md:p-8 hover-card box-mid bg-[#1b1b1b] rounded-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 md:max-w-fit">
              <h3 className="text-xl font-semibold">{PROJECTS.title}</h3>
              <div className="text-sm text-white/60">{PROJECTS.year}</div>
            </div>
            <div className="space-y-2">
              {PROJECTS.achievements.map((achievement, index) => (
                <p key={index} className="font-medium text-accent">
                  {achievement}
                </p>
              ))}
              {PROJECTS.locations.map((location, index) => (
                <p key={index} className="text-sm text-white/60">
                  📍 {location}
                </p>
              ))}
              <p className="mt-4 text-white/80">{PROJECTS.description}</p>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="p-6 md:p-8 hover-card flex flex-col items-center text-center box-mid bg-[#1b1b1b] rounded-md">
            <FaGithub className="text-4xl text-white mb-3" />
            <h3 className="text-xl font-semibold text-white">
              Explore More Projects
            </h3>
            <p className="text-white/70 mt-2">
              Check out my GitHub profile to see more of my work, contributions,
              and open-source projects.
            </p>
            <a
              href="https://github.com/glenjaysondmello"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-accent hover:bg-accent-dark text-white font-medium py-2 px-4 rounded-lg transition"
            >
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
