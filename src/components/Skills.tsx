import firebase from "/firebase-svgrepo-com.svg";
import mongodb from "/mongo-svgrepo-com.svg";
import express from "/express-svgrepo-com.svg";
import node from "/nodejs-icon-logo-svgrepo-com.svg";
// import fastapi from "/Fastapi--Streamline-Simple-Icons.svg";
import java from "/java-svgrepo-com.svg";
import mysql from "/mysql-svgrepo-com.svg";
import postman from "/postman-icon-svgrepo-com.svg";
import react from "/react-svgrepo-com.svg";
import js from "/javascript-svgrepo-com.svg";
import ts from "/typescript-svgrepo-com.svg";
import linux from "/linux-tux-svgrepo-com.svg";
import tailwind from "/tailwind-svgrepo-com.svg";
// import python from "/python-svgrepo-com.svg";
import git from "/git-svgrepo-com.svg";
import docker from "/docker-icon-svgrepo-com.svg";
import redux from "/redux-svgrepo-com1.svg";

const skills = [
  // Frontend
  { name: "React.js", imgSrc: react },
  { name: "TypeScript", imgSrc: ts },
  { name: "JavaScript", imgSrc: js },
  { name: "Tailwind CSS", imgSrc: tailwind },
  { name: "Redux", imgSrc: redux },

  // Backend
  { name: "Node.js", imgSrc: node },
  { name: "Express.js", imgSrc: express },
  { name: "Java", imgSrc: java },

  // Databases
  { name: "MongoDB", imgSrc: mongodb },
  { name: "MySQL", imgSrc: mysql },
  { name: "Firebase", imgSrc: firebase },

  // DevOps & Tools
  { name: "Docker", imgSrc: docker },
  { name: "Git", imgSrc: git },
  { name: "Postman", imgSrc: postman },
  { name: "Linux", imgSrc: linux },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 text-white text-center">
      <h2 className="section-title mb-16">Skills</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-10 justify-center ">
        {skills.map(({ name, imgSrc }) => (
          <div
            key={name}
            className="relative flex flex-col items-center group lg:px-10 md:px-8"
          >
            {/* Skill Icon */}
            <img
              src={imgSrc}
              alt={name}
              className={`w-14 h-14 object-contain transition-transform duration-300 group-hover:opacity-30 ${
                name === "FastAPI" ? "fastapi-green" : ""
              }
                ${name === "Express.js" ? "invert" : ""}
              }`}
            />

            {/* Hover Effect (Text Above Icon) */}
            <span className="absolute bottom-12 opacity-0 group-hover:opacity-100 group-hover:-translate-y-3 transition-all duration-300 text-emerald-400 text-sm font-semibold bg-black/80 px-3 py-1 rounded-md shadow-lg">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
