
import { Badge } from "@/components/ui/badge";

const SKILLS = {
  "Industry Knowledge": [
    "Full-Stack Web Development (MERN)",
    "RESTful APIs & Backend Development",
    "Software Engineering & Project Management",
  ],
  Frontend: [
    "React.js",
    "Redux.js",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
  ],
  Backend: ["Node.js", "Express.js", "Firebase", "MongoDB", "MySQL"],
  "Tools & Others": [
    "Git",
    "Linux",
    "Postman API",
    "Python",
    "Java",
    "HTML",
    "CSS",
    "Prompt Engineering",
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4 sm:px-6">
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 animate-fade-up">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <div key={category} className="glass-card p-6 md:p-8 hover-card">
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
