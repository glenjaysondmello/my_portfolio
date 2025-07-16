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
            <div className="terminal_prompt text-green-400 inline-flex space-x-1 mt-4 mb-2">
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
            {/* Hero Component */}
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
                  href="/my_portfolio/my__resume.pdf"
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
  }

  .terminal-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    background: #212121;
    border-radius: 8px 8px 0 0;
  }

  .buttons {
    display: flex;
    gap: 5px;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
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

  .terminal-body {
    padding: 20px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 0 0 8px 8px;
  }

  .hero-section {
    text-align: center;
  }

  .profile-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .typing-text {
    font-size: 1rem;
    font-weight: bold;
    color: #1eff8e;
    margin-top: 10px;
  }

  .location {
    color: gray;
    font-size: 0.9rem;
    margin-top: 8px;
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
    background-color: #1eff8e; /* Green color for visibility */
    margin-left: 5px;
    animation: curbl 0.8s infinite;
  }

  .resume-btn {
    background-color: #1eff8e;
    color: black;
    padding: 8px 16px;
    font-size: 0.9rem;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .resume-btn:hover {
    background-color: #00cc6a;
  }
`;

export default Card3;
