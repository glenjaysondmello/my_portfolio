import React from "react";
import firebase from "/firebase-svgrepo-com.svg";

const skills = [
  { name: "React.js", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Tailwind CSS", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "TypeScript", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
  { name: "JavaScript", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
  { name: "Node.js", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "Express.js", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
  { name: "Firebase", imgSrc: firebase },
  { name: "MongoDB", imgSrc: "https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg" },
  { name: "MySQL", imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
  { name: "Git", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" },
  { name: "Linux", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png" },
  { name: "Postman API", imgSrc: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Python", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
  { name: "Java", imgSrc: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
];


const Skills = () => {
  return (
    <section id="skills" className="py-20 text-white text-center">
      <h2 className="text-4xl font-bold text-orange-400 flex items-center justify-center gap-2">
        <span className="text-gray-300 text-5xl">⚙️</span> Skills
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 mt-10">
        {skills.map(({ name, imgSrc }) => (
          <div
            key={name}
            className="relative group flex items-center justify-center"
          >
            <img
              src={imgSrc}
              alt={name}
              className="w-14 h-14 object-contain transition-transform duration-300 group-hover:opacity-30"
            />
            <span className="absolute opacity-0 group-hover:opacity-100 text-white bg-black bg-opacity-75 text-lg font-bold px-3 py-1 rounded transition-opacity duration-300">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
