import React from "react";
import styled from "styled-components";
import { ArrowRight } from "lucide-react";
import profile from "/profile.jpeg";

const Card3 = () => {
  return (
    <StyledWrapper>
      <div className="container">
        {/* Terminal Toolbar */}
        <div className="terminal_toolbar">
          <div className="butt">
            <button className="btn btn-color" />
            <button className="btn" />
            <button className="btn" />
          </div>
          <p className="user">glenjaysondmello@admin: ~</p>
          <div className="add_tab">+</div>
        </div>

        {/* Terminal Body */}
        <div className="terminal_body">
          <div className="terminal_prompt">
            <span className="terminal_user">glenjaysondmello@admin:</span>
            <span className="terminal_location">~</span>
            <span className="terminal_bling">$</span>
            <span className="terminal_cursor" />
          </div>
          <div className="terminal_output">
            <pre className="output_text">Welcome to My Portfolio</pre>
          </div>
          <div className="terminal_input">
            <input
              placeholder="Type a command..."
              className="input_text"
              type="text"
            />
          </div>
          {/* Hero Component */}
          <div className="hero_section">
            <img src={profile} alt="Profile" className="profile_img" />
            <div className="boxm">
              <h3>Tech Enthusiast</h3>
            </div>
            <h1 className="title">MERN Stack Developer</h1>
            <p className="subtitle">Full-Stack Innovator | Prompt Engineer</p>
            <div className="buttons">
              <a href="#contact" className="button-primary boxl mb-5">
                Get in touch <ArrowRight size={18} />
              </a>
              <a href="#projects" className="button-secondary boxr">
                View projects
              </a>
            </div>
            <div className="mt-10">
              <p>📍 Dakshina Kannada, Karnataka, India</p>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

// Styled Components
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .container {
    max-width: 500px;
    width: 90%;
    height: auto;
    background: #1e1e1e;
    font-family: Menlo, Consolas, monospace;
    font-size: 14px;
    color: #e6e6e6;
    border-radius: 5px;
    overflow: hidden;
  }

  .terminal_toolbar {
    display: flex;
    height: 30px;
    align-items: center;
    padding: 0 8px;
    box-sizing: border-box;
    background: #212121;
    justify-content: space-between;
  }

  .butt {
    display: flex;
    align-items: center;
  }

  .btn {
    margin-right: 5px;
    height: 12px;
    width: 12px;
    border-radius: 100%;
    background: linear-gradient(#7d7871 0%, #595953 100%);
    box-shadow: 0px 0px 1px 0px #41403a, 0px 1px 1px 0px #474642;
  }

  .btn-color {
    background: #ee411a;
  }

  .add_tab {
    border: 1px solid #fff;
    color: #fff;
    padding: 0 6px;
    border-radius: 4px 4px 0 0;
    border-bottom: none;
    cursor: pointer;
  }

  .user {
    color: #d5d0ce;
    margin-left: 6px;
    font-size: 14px;
    line-height: 15px;
  }

  .terminal_body {
    background: rgba(0, 0, 0, 0.6);
    padding: 20px;
    font-size: 12px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  /* Hero Section Styles */
  .hero_section {
    animation: fadeIn 1s ease-in-out;
  }

  .profile_img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
    box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.2);
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
    margin: 8px 0;
  }

  .subtitle {
    font-size: 14px;
    color: #aaaaaa;
  }

  .buttons {
    margin-top: 12px;
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .button-primary,
  .button-secondary {
    padding: 8px 14px;
    border-radius: 4px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
  }

  .button-primary {
    background: #007bff;
    color: white;
  }

  .button-secondary {
    background: #3a3a3a;
    color: white;
  }

  .location {
    margin-top: 10px;
    font-size: 12px;
    color: #bbbbbb;
  }

  .terminal_prompt {
    display: flex;
    align-items: center;
    padding: 4px;
  }

  .terminal_prompt span {
    margin-left: 4px;
  }

  .terminal_user {
    color: #1eff8e;
  }

  .terminal_location {
    color: #4878c0;
  }

  .terminal_bling {
    color: #dddddd;
  }

  .terminal_cursor {
    display: block;
    height: 14px;
    width: 5px;
    margin-left: 10px;
    animation: curbl 1200ms linear infinite;
  }

  .terminal_output {
    padding: 4px;
    flex-grow: 1;
    overflow-y: auto;
  }

  .output_text {
    margin: 0;
  }

  .terminal_input {
    padding: 4px;
  }

  .input_text {
    width: 100%;
    padding: 6px;
    background: transparent;
    border: none;
    color: #e6e6e6;
    caret-color: #1eff8e;
  }

  @keyframes curbl {
    0% {
      background: #ffffff;
    }

    49% {
      background: #ffffff;
    }

    60% {
      background: transparent;
    }

    99% {
      background: transparent;
    }

    100% {
      background: #ffffff;
    }
  }

  /* Responsive Design */
  @media (max-width: 600px) {
    .container {
      width: 100%;
      max-width: 350px;
    }

    .profile_img {
      width: 70px;
      height: 70px;
    }

    .title {
      font-size: 16px;
    }

    .subtitle {
      font-size: 13px;
    }

    .buttons {
      flex-direction: column;
    }

    .button-primary,
    .button-secondary {
      width: 100%;
      justify-content: center;
    }
  }

  /* Animation */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default Card3;
