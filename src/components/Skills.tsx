import React from "react";
import firebase from "/firebase-svgrepo-com.svg";
import mongodb from "/mongo-svgrepo-com.svg";
import express from "/express-svgrepo-com.svg";
import node from "/nodejs-icon-logo-svgrepo-com.svg";
import fastapi from "/Fastapi--Streamline-Simple-Icons.svg";
import java from "/java-svgrepo-com.svg";
import mysql from "/mysql-svgrepo-com.svg";

const skills = [
  { name: "React.js", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Tailwind CSS", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "TypeScript", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
  { name: "JavaScript", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
  { name: "Node.js", imgSrc: node },
  { name: "Express.js", imgSrc: express },
  { name: "FastAPI", imgSrc: fastapi },
  { name: "Firebase", imgSrc: firebase },
  { name: "MongoDB", imgSrc: mongodb },
  { name: "MySQL", imgSrc: mysql },
  { name: "Git", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" },
  { name: "Linux", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png" },
  { name: "Postman API", imgSrc: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Python", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
  { name: "Java", imgSrc: java },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 text-white text-center">
      <h2 className="section-title mb-28">Skills</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-10 justify-center ">
        {skills.map(({ name, imgSrc }) => (
          <div key={name} className="relative flex flex-col items-center group lg:px-10 md:px-8">
            {/* Skill Icon */}
            <img
              src={imgSrc}
              alt={name}
              className={`w-14 h-14 object-contain transition-transform duration-300 group-hover:opacity-30 ${
                name === "FastAPI" ? "fastapi-green" : ""
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
