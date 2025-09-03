import {
  FaGithub,
  FaCalendarAlt,
  FaTrophy,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaCloud,
  FaCode,
  FaDatabase,
} from "react-icons/fa";
import {
  SiRedux,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiRazorpay,
  SiTailwindcss,
  SiFlask,
  SiGooglemaps,
  SiOpenai,
  SiJavascript,
  SiFlutter,
  SiNestjs,
  SiPrisma,
  SiRedis,
} from "react-icons/si";
import { GoMortarBoard } from "react-icons/go";

// --- Tech Icon Mapping ---
const techIcons = {
  React: <FaReact className="text-[#61DAFB]" />,
  Redux: <SiRedux className="text-[#764ABC]" />,
  "Node.js": <FaNodeJs className="text-[#68A063]" />,
  "Express.js": <SiExpress className="text-gray-300" />,
  MongoDB: <SiMongodb className="text-[#4DB33D]" />,
  Firebase: <SiFirebase className="text-[#FFCA28]" />,
  Razorpay: <SiRazorpay className="text-[#02042B]" />,
  Cloudinary: <FaCloud className="text-[#3448C5]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#38B2AC]" />,
  CSS: <FaCss3Alt className="text-[#1572B6]" />,
  HTML: <FaHtml5 className="text-[#E34F26]" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
  Flask: <SiFlask className="text-gray-200" />,
  "Google Maps API": <SiGooglemaps className="text-[#34A853]" />,
  "Groq AI": <SiOpenai className="text-purple-400" />,
  Flutter: <SiFlutter className="text-[#027DFD]" />,
  NestJS: <SiNestjs className="text-[#E0234E]" />,
  Prisma: <SiPrisma className="text-[#2D3748]" />,
  Redis: <SiRedis className="text-[#DC382D]" />,
  Qdrant: <FaDatabase className="text-[#AC1337]" />,
};

// --- Project Data ---
const PROJECTS = [
  {
    title: "FluentEdge – AI-Powered Communication Coach App",
    description:
      "An AI-driven mobile app to help users master English communication and typing skills. Features real-time pronunciation feedback, fluency scoring, and personalized typing speed tests.",
    achievements: ["Feature-Rich Communication App"],
    locations: ["Personal Project"],
    year: "2024",
    techStack: ["Flutter", "NestJS", "Prisma", "Groq AI", "Firebase"],
    githubUrl: "https://github.com/glenjaysondmello/FluentEdge",
  },
  {
    title: "PG Finder – Full Stack Booking Platform",
    description:
      "A comprehensive MERN stack application for booking PG accommodations. Features secure user authentication, seamless payment integration, and a robust property management system.",
    achievements: ["Advanced Full-Stack Personal Project"],
    locations: ["Personal Project"],
    year: "2025",
    techStack: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Razorpay",
      "Cloudinary",
      "Tailwind CSS",
      "Redis",
      "Qdrant",
      "Groq AI",
    ],
    liveUrl: "https://pgfinder-wheat.vercel.app",
    githubUrl: "https://github.com/glenjaysondmello/pgfinder",
  },
  {
    title: "DConnect – Smart Carpooling Platform",
    description:
      "An innovative ride-sharing application that allows users to seamlessly switch between driver and passenger roles. Designed to optimize daily commutes with real-time route matching and payment integration.",
    achievements: ["Top 93 out of 2,500 teams at Hackfest'24"],
    locations: ["PSG Institute of Technology, Coimbatore"],
    year: "2024",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Flask",
      "MongoDB",
      "Google Maps API",
      "Razorpay",
    ],
  },
];

// --- LinkButton Component ---
const LinkButton = ({ href, icon, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 bg-slate-800/80 border border-slate-700/60 rounded-lg px-4 py-2 transition-all duration-300 hover:bg-slate-700/70 hover:text-white hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
  >
    {icon}
    {text}
  </a>
);

// --- Projects Component ---
const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Projects & Creations
          </h2>
          <p className="text-lg text-slate-400 mt-3 max-w-2xl mx-auto">
            A selection of projects that showcase my passion for building and
            problem-solving.
          </p>
        </div>

        {/* --- Projects Grid --- */}
        <div className="grid grid-cols-1 gap-8 lg:gap-10 max-w-4xl mx-auto">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="p-8 flex-grow">
                {/* --- Header --- */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-4 mb-2 text-sm text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <FaCalendarAlt />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaMapMarkerAlt />
                        <span>{project.locations[0]}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* --- Achievements (Conditional) --- */}
                {project.achievements && project.achievements[0] && (
                  <div className="flex items-center text-amber-300 mb-5 text-sm font-medium bg-amber-900/20 border border-amber-500/20 rounded-md px-3 py-2">
                    <FaTrophy className="mr-2 text-amber-400" />
                    <span>{project.achievements[0]}</span>
                  </div>
                )}

                {/* --- Description --- */}
                <p className="text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* --- Tech Stack --- */}
                <div className="mt-auto">
                  <h4 className="text-slate-300 font-medium mb-3 text-sm tracking-wide uppercase">
                    Built With
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-slate-700/50 text-slate-200 text-sm px-3 py-1.5 rounded-md border border-transparent transition-all duration-300 cursor-default group-hover:bg-slate-700"
                        title={tech}
                      >
                        {techIcons[tech] || (
                          <FaCode className="text-gray-300" />
                        )}
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* --- Footer with Links --- */}
              <div className="bg-slate-900/50 border-t border-slate-700/50 rounded-b-2xl px-8 py-4 mt-auto">
                <div className="flex items-center justify-end gap-4">
                  {project.githubUrl && (
                    <LinkButton
                      href={project.githubUrl}
                      icon={<FaGithub />}
                      text="Source Code"
                    />
                  )}
                  {project.liveUrl && (
                    <LinkButton
                      href={project.liveUrl}
                      icon={<FaExternalLinkAlt />}
                      text="Live Demo"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* --- "More Projects" Card --- */}
          <div className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="mb-4">
              <GoMortarBoard className="text-5xl text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Want to see more?
            </h3>
            <p className="text-slate-400 mb-6 max-w-md mx-auto">
              Visit my GitHub profile for a full list of my projects,
              experiments, and contributions.
            </p>
            <a
              href="https://github.com/glenjaysondmello"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <FaGithub />
              View My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
