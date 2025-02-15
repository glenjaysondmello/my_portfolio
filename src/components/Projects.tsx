
const PROJECTS = [
  {
    title: "Hackfest'24 - National Hackathon",
    description: "Developed an innovative solution tackling real-world challenges. Demonstrated problem-solving, teamwork, and technical expertise.",
    achievement: "Top 93 out of 2,500 teams",
    location: "PSG Institute of Technology, Coimbatore",
    year: "2024",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 sm:px-6">
        <h2 className="section-title">Projects & Achievements</h2>
        <div className="grid gap-6 lg:gap-8 animate-fade-up">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="glass-card p-6 md:p-8 hover-card"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="text-sm text-white/60">{project.year}</div>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-accent">{project.achievement}</p>
                <p className="text-sm text-white/60">📍 {project.location}</p>
                <p className="mt-4 text-white/80">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
