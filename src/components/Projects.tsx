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
  FaPython,
  FaDatabase,
  FaCloud,
  FaEnvelope,
  FaFilePdf,
  FaMailBulk,
  FaEnvelopeOpen,
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
  SiSocketdotio,
  // SiNodemailer,
  // SiPdf,
  SiOpenai,
  SiJavascript,
} from "react-icons/si";
import { useState } from "react";

// Map of technology names to icons
const techIcons = {
  React: <FaReact className="text-cyan-400" />,
  Redux: <SiRedux className="text-purple-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "Express.js": <SiExpress className="text-gray-300" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
  "Firebase Auth": <SiFirebase className="text-yellow-400" />,
  Razorpay: <SiRazorpay className="text-blue-400" />,
  Cloudinary: <FaCloud className="text-blue-300" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  HTML: <FaHtml5 className="text-orange-500" />,
  JavaScript: <SiJavascript className="text-yellow-300" />,
  Flask: <SiFlask className="text-gray-200" />,
  "Google Maps API": <SiGooglemaps className="text-green-500" />,
  SocketIO: <SiSocketdotio className="text-gray-300" />,
  NodeMailer: <FaEnvelopeOpen className="text-green-300" />,
  Pdfkit: <FaFilePdf className="text-red-400" />,
  "Groq-Cloud": <SiOpenai className="text-purple-400" />,
  Database: <FaDatabase className="text-yellow-400" />,
};

const PROJECTS = [
  {
    title: "PG Finder – Full Stack PG Website",
    description:
      "Built a secure PG booking platform using MERN stack with payment integration. Implemented Firebase authentication, Razorpay for online payments, Cloudinary for image storage, and Socket.IO for real-time comment threads.",
    achievements: ["Advanced Full Stack Project"],
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
      "CSS",
      "NodeMailer",
      "Pdfkit",
      "Groq-Cloud",
    ],
  },
  {
    title: "DConnect – Smart Carpooling Platform",
    description:
      "Developed an innovative solution tackling real-world challenges and built a flexible ride-sharing app where users can switch between driver and passenger roles. Demonstrated problem-solving, teamwork, technical expertise, and enhanced daily commuting with convenience and efficiency.",
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

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <h2 className="section-title">Projects & Achievements</h2>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:gap-10">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className={`group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 transition-all duration-500 hover:bg-slate-800/60 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-blue-500/10 ${
                hoveredProject === idx ? "scale-[1.02]" : ""
              }`}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center text-slate-400 text-sm">
                        <FaCalendarAlt className="mr-1" /> {project.year}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2 mb-4">
                  {project.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center text-yellow-300"
                    >
                      <FaTrophy className="mr-2 text-yellow-400" />
                      <span className="font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Locations */}
                <div className="space-y-1 mb-4">
                  {project.locations.map((location, index) => (
                    <div
                      key={index}
                      className="flex items-center text-slate-400 text-sm"
                    >
                      <FaMapMarkerAlt className="mr-2 text-slate-500" />
                      {location}
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack with Icons */}
              <div className="mb-6">
                <h4 className="text-slate-300 font-medium mb-3 text-sm tracking-wide uppercase">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 bg-gradient-to-r from-slate-700/50 to-slate-600/50 hover:from-blue-600/20 hover:to-purple-600/20 text-slate-200 text-sm px-3 py-2 rounded-lg border border-slate-600/50 hover:border-blue-400/30 transition-all duration-300 cursor-default"
                    >
                      {techIcons[tech] || (
                        <FaDatabase className="text-gray-300" />
                      )}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-blue-500/20 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}

          {/* GitHub Card */}
          <div className="group relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center hover:border-slate-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaGithub className="text-3xl text-white group-hover:text-blue-300 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                Explore More Projects
              </h3>
              <p className="text-slate-400 mb-6 max-w-md mx-auto leading-relaxed">
                Check out my GitHub profile to see more of my work,
                contributions, and open-source projects.
              </p>
              <a
                href="https://github.com/glenjaysondmello"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Visit My GitHub
                <FaExternalLinkAlt className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
