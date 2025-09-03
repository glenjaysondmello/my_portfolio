import firebase from "/firebase-svgrepo-com.svg";
import mongodb from "/mongo-svgrepo-com.svg";
import express from "/express-svgrepo-com.svg";
import node from "/nodejs-icon-logo-svgrepo-com.svg";
import java from "/java-svgrepo-com.svg";
import mysql from "/mysql-svgrepo-com.svg";
import postman from "/postman-icon-svgrepo-com.svg";
import react from "/react-svgrepo-com.svg";
import js from "/javascript-svgrepo-com.svg";
import ts from "/typescript-svgrepo-com.svg";
import linux from "/linux-tux-svgrepo-com.svg";
import tailwind from "/tailwind-svgrepo-com.svg";
import git from "/git-svgrepo-com.svg";
import docker from "/docker-icon-svgrepo-com.svg";
import redux from "/redux-svgrepo-com1.svg";
import dart from "/dart-svgrepo-com.svg";
import flutter from "/flutter-svgrepo-com.svg";
import prisma from "/light-prisma-svgrepo-com.svg";
import nestjs from "/nestjs-svgrepo-com.svg";
import nextjs from "/nextjs-fill-svgrepo-com.svg";

const skills = [
  // Frontend & Mobile
  { name: "React.js", imgSrc: react },
  { name: "Next.js", imgSrc: nextjs },
  { name: "TypeScript", imgSrc: ts },
  { name: "JavaScript", imgSrc: js },
  { name: "Redux", imgSrc: redux },
  { name: "Flutter", imgSrc: flutter },
  { name: "Dart", imgSrc: dart },
  { name: "Tailwind CSS", imgSrc: tailwind },

  // Backend
  { name: "Node.js", imgSrc: node },
  { name: "NestJS", imgSrc: nestjs },
  { name: "Express.js", imgSrc: express },
  { name: "Prisma", imgSrc: prisma },
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

      {/* 1. MODIFIED THIS LINE */}
      <div className="flex flex-wrap justify-center gap-10 sm:grid sm:grid-cols-4 md:grid-cols-5">
        {skills.map(({ name, imgSrc }) => (
          <div
            key={name}
            // 2. MODIFIED THIS LINE
            className="relative flex w-20 flex-col items-center group sm:w-auto lg:px-10 md:px-8"
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
