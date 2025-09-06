import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import profile from "/profile.jpeg";
import Typed from "typed.js";
import Loader from "./Loader";

const Card3 = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "MERN Stack Developer",
        "Full Stack Innovator",
        "Flutter App Developer",
        "Aspiring AI Prompt Engineer",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <StyledWrapper>
      <div className="terminal-container">
        <div className="terminal-toolbar">
          <div className="buttons">
            <div className="dot red" />
            <div className="dot yellow" />
            <div className="dot green" />
          </div>
          <p className="terminal-title">bash</p>
        </div>
        <div className="container -mt-4" id="home">
          {/* Terminal Body */}
          <div className="terminal_body text-white p-4 rounded-md">
            <div className="terminal_prompt text-green-400 inline-flex space-x-1 mt-4 mb-2 ml-4 sm:ml-24">
              <span className="terminal_user">glenjaysondmello@admin:</span>
              <span className="terminal_location">~</span>
              <span className="terminal_bling">$</span>
              <span className="terminal_cursor mt-1"></span>
            </div>

            <div className="terminal_output mb-2">
              <pre className="output_text text-white">
                Welcome to My Portfolio
              </pre>
            </div>
            {/* Hero Section */}
            <div className="hero_section flex flex-col items-center mt-4">
              <img
                src={profile}
                alt="Profile"
                className="profile_img w-24 h-24 rounded-full border-2 border-gray-400"
              />
              <div className="boxm mt-2">
                <h3 className="text-white">Tech Enthusiast</h3>
              </div>
              <div className="buttons mt-2">
                <Loader />
              </div>
              <div className="typing-container mt-2">
                <h3
                  ref={typedRef}
                  className="typing-text text-xl font-bold text-white"
                ></h3>
              </div>
              <div className="mt-2">
                <a
                  href="/my_portfolio/resume____.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 mt-3 mb-3 text-sm font-semibold text-white bg-black border border-gray-400 rounded hover:bg-gray-900 transition"
                >
                  📄 View Resume
                </a>
              </div>

              <div className="mt-2">
                <p className="text-gray-400">
                  📍 Dakshina Kannada, Karnataka, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .terminal-container {
    background: black;
    color: white;
    border-radius: 8px;
    width: 100%;
    max-width: 500px;
    font-family: monospace;
    padding: 10px;
    animation: slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    opacity: 0;
    transform: translateY(30px);
  }

  @keyframes slideInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .terminal-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    background: #212121;
    border-radius: 8px 8px 0 0;
    animation: fadeInDown 0.6s ease-out 0.2s forwards;
    opacity: 0;
    transform: translateY(-10px);
  }

  @keyframes fadeInDown {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .buttons {
    display: flex;
    gap: 5px;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    animation: bounceIn 0.6s ease-out forwards;
    transform: scale(0);
  }

  .dot:nth-child(1) {
    animation-delay: 0.4s;
  }
  .dot:nth-child(2) {
    animation-delay: 0.5s;
  }
  .dot:nth-child(3) {
    animation-delay: 0.6s;
  }

  @keyframes bounceIn {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  .red {
    background: red;
  }
  .yellow {
    background: yellow;
  }
  .green {
    background: green;
  }

  .terminal_body {
    padding: 20px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 0 0 8px 8px;
  }

  .terminal_prompt {
    animation: typeWriter 1s ease-out 0.8s forwards;
    opacity: 0;
  }

  @keyframes typeWriter {
    0% {
      opacity: 0;
      width: 0;
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      width: 100%;
    }
  }

  .terminal_output {
    animation: fadeInSlide 0.8s ease-out 1.5s forwards;
    opacity: 0;
    transform: translateX(-20px);
  }

  @keyframes fadeInSlide {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .hero_section {
    animation: fadeInUp 1s ease-out 2s forwards;
    opacity: 0;
    transform: translateY(20px);
    text-align: center;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .profile_img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    animation: zoomInRotate 1s ease-out 2.5s forwards;
    opacity: 0;
    transform: scale(0) rotate(180deg);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .profile_img:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 0 20px rgba(30, 255, 142, 0.5);
  }

  @keyframes zoomInRotate {
    0% {
      opacity: 0;
      transform: scale(0) rotate(180deg);
    }
    70% {
      transform: scale(1.1) rotate(-10deg);
    }
    100% {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
  }

  .boxm {
    animation: slideInFromLeft 0.8s ease-out 3s forwards;
    opacity: 0;
    transform: translateX(-30px);
  }

  @keyframes slideInFromLeft {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .buttons {
    animation: pulseIn 0.8s ease-out 3.5s forwards;
    opacity: 0;
    transform: scale(0.8);
  }

  @keyframes pulseIn {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .typing-container {
    animation: slideInFromRight 0.8s ease-out 4s forwards;
    opacity: 0;
    transform: translateX(30px);
  }

  @keyframes slideInFromRight {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .typing-text {
    font-size: 1rem;
    font-weight: bold;
    color: #1eff8e;
    margin-top: 10px;
    text-shadow: 0 0 10px rgba(30, 255, 142, 0.3);
  }

  .mt-2 a {
    animation: bounceInUp 0.8s ease-out 4.5s forwards;
    opacity: 0;
    transform: translateY(20px);
    display: inline-block;
  }

  @keyframes bounceInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    60% {
      transform: translateY(-5px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .mt-2 p {
    animation: fadeInScale 0.8s ease-out 5s forwards;
    opacity: 0;
    transform: scale(0.9);
  }

  @keyframes fadeInScale {
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  a {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    overflow: hidden;
  }

  a::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  a:hover::before {
    left: 100%;
  }

  a:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border-color: #1eff8e;
  }

  @keyframes curbl {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .terminal_cursor {
    display: inline-block;
    height: 14px;
    width: 5px;
    background-color: #1eff8e;
    margin-left: 5px;
    animation: curbl 0.8s infinite;
  }
`;

export default Card3;
