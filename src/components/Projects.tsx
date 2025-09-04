import { motion } from "framer-motion";
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
  React: <FaReact className="text-[#61DAFB]" title="React" />,
  Redux: <SiRedux className="text-[#764ABC]" title="Redux" />,
  "Node.js": <FaNodeJs className="text-[#68A063]" title="Node.js" />,
  "Express.js": <SiExpress className="text-gray-300" title="Express.js" />,
  MongoDB: <SiMongodb className="text-[#4DB33D]" title="MongoDB" />,
  Firebase: <SiFirebase className="text-[#FFCA28]" title="Firebase" />,
  Razorpay: <SiRazorpay className="text-[#02042B]" title="Razorpay" />,
  Cloudinary: <FaCloud className="text-[#3448C5]" title="Cloudinary" />,
  "Tailwind CSS": (
    <SiTailwindcss className="text-[#38B2AC]" title="Tailwind CSS" />
  ),
  CSS: <FaCss3Alt className="text-[#1572B6]" title="CSS" />,
  HTML: <FaHtml5 className="text-[#E34F26]" title="HTML" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E]" title="JavaScript" />,
  Flask: <SiFlask className="text-gray-200" title="Flask" />,
  "Google Maps API": (
    <SiGooglemaps className="text-[#34A853]" title="Google Maps API" />
  ),
  "Groq AI": <SiOpenai className="text-purple-400" title="Groq AI" />,
  Flutter: <SiFlutter className="text-[#027DFD]" title="Flutter" />,
  NestJS: <SiNestjs className="text-[#E0234E]" title="NestJS" />,
  Prisma: <SiPrisma className="text-[#2D3748]" title="Prisma" />,
  Redis: <SiRedis className="text-[#DC382D]" title="Redis" />,
  Qdrant: <FaDatabase className="text-[#AC1337]" title="Qdrant" />,
};

// --- Project Data ---
const PROJECTS = [
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
    thumbnail: "pg.jpeg",
  },
  {
    title: "FluentEdge – AI-Powered Communication Coach App",
    description:
      "An AI-driven mobile app to help users master English communication and typing skills. Features real-time pronunciation feedback, fluency scoring, and personalized typing speed tests.",
    achievements: ["Feature-Rich Communication App"],
    locations: ["Personal Project"],
    year: "2024",
    techStack: ["Flutter", "NestJS", "Prisma", "Groq AI", "Firebase"],
    githubUrl: "https://github.com/glenjaysondmello/FluentEdge",
    thumbnail: "edge.jpeg",
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
    thumbnail: "dconnect.jpeg",
  },
];

// --- Projects Component ---
const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            Projects & Creations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-400 mt-3 max-w-2xl mx-auto"
          >
            A selection of projects that showcase my passion for building and
            problem-solving.
          </motion.p>
        </div>

        {/* --- Projects Grid --- */}
        <motion.div
          className="grid grid-cols-1 gap-10 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="group relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              {/* Thumbnail with Overlay */}
              <div className="relative w-full h-60 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-90"></div>

                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-800/90 rounded-full text-white hover:bg-blue-600 transition"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-800/90 rounded-full text-white hover:bg-green-500 transition"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
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

                {project.achievements && project.achievements[0] && (
                  <div className="inline-flex items-center text-amber-300 mb-4 text-sm font-medium bg-amber-900/30 border border-amber-500/30 rounded-full px-4 py-1.5">
                    <FaTrophy className="mr-2 text-amber-400" />
                    {project.achievements[0]}
                  </div>
                )}

                <p className="text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech Stack - Icons Only */}
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-700/40 hover:bg-slate-700 transition"
                      title={tech}
                    >
                      {techIcons[tech] || <FaCode className="text-gray-300" />}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* --- More Projects Card --- */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.95 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-10 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-purple-500/10"
          >
            <GoMortarBoard className="text-5xl text-blue-400 mb-4" />
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
