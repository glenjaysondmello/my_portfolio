import { Badge } from "@/components/ui/badge";
import { 
  FaReact, FaNodeJs, FaGitAlt, FaPython, FaJava, FaDatabase, FaCss3Alt, FaHtml5 
} from "react-icons/fa";  
import { SiRedux, SiTailwindcss, SiFirebase, SiMongodb, SiMysql, SiPostman, SiLinux } from "react-icons/si";
import { IoTerminal, IoCodeSlash, IoServer } from "react-icons/io5";


const SKILLS = {
  "Industry Knowledge": [
    { name: "Full-Stack Web Development (MERN)", icon: <IoCodeSlash size={18} /> },
    { name: "RESTful APIs & Backend Development", icon: <IoServer size={18} /> },
    { name: "Software Engineering & Project Management", icon: <FaGitAlt size={18} /> },
  ],
  Frontend: [
    { name: "React.js", icon: <FaReact size={18} className="text-blue-400" /> },
    { name: "Redux.js", icon: <SiRedux size={18} className="text-purple-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={18} className="text-blue-500" /> },
    { name: "TypeScript", icon: <IoCodeSlash size={18} className="text-blue-600" /> },
    { name: "JavaScript", icon: <IoCodeSlash size={18} className="text-yellow-400" /> },
    { name: "HTML", icon: <FaHtml5 size={18} className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt size={18} className="text-blue-500" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs size={18} className="text-green-500" /> },
    { name: "Express.js", icon: <IoServer size={18} className="text-gray-400" /> },
    { name: "Firebase", icon: <SiFirebase size={18} className="text-yellow-500" /> },
    { name: "MongoDB", icon: <SiMongodb size={18} className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql size={18} className="text-blue-600" /> },
  ],
  "Tools & Others": [
    { name: "Git", icon: <FaGitAlt size={18} className="text-orange-500" /> },
    { name: "Linux", icon: <SiLinux size={18} className="text-gray-500" /> },
    { name: "Postman API", icon: <SiPostman size={18} className="text-orange-500" /> },
    { name: "Python", icon: <FaPython size={18} className="text-blue-400" /> },
    { name: "Java", icon: <FaJava size={18} className="text-red-600" /> },
    { name: "Prompt Engineering", icon: <IoTerminal size={18} className="text-gray-500" /> },
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
                {skills.map(({ name, icon }) => (
                  <Badge
                    key={name}
                    variant="secondary"
                    className="bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-2 px-3 py-1"
                  >
                    {icon}
                    {name}
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
