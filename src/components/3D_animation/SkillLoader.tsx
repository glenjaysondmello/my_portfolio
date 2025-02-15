import React from 'react';
import styled from 'styled-components';

const SkillLoader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="circle circle1" />
        <div className="circle circle2" />
        <div className="circle circle3" />
        <span />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .loader {
    position: relative;
    width: 50vw;
    height: 50vw;
    max-width: 650px;
    max-height: 650px;
    background: transparent;
    border-radius: 50%;
    box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.55);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .circle {
    position: absolute;
    border-radius: 50%;
    border: 2px dashed #444;
    box-shadow: inset -5px -5px 25px rgba(0, 0, 0, 0.25),
        inset 5px 5px 35px rgba(0, 0, 0, 0.25);
  }

  .circle1 {
    width: 80%;
    height: 80%;
  }

  .circle2 {
    width: 55%;
    height: 55%;
  }

  .circle3 {
    width: 30%;
    height: 30%;
  }

  .loader span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 100%;
    background: transparent;
    transform-origin: top left;
    animation: radar81 2s linear infinite;
    border-top: 1px dashed #fff;
  }

  .loader span::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fc5185;
    transform-origin: top left;
    transform: rotate(-55deg);
    filter: blur(30px) drop-shadow(20px 20px 20px #fc5185);
  }

  @keyframes radar81 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    .loader {
      width: 70vw;
      height: 70vw;
    }
    .circle1 {
      width: 75%;
      height: 75%;
    }
    .circle2 {
      width: 50%;
      height: 50%;
    }
    .circle3 {
      width: 25%;
      height: 25%;
    }
  }

  @media (max-width: 480px) {
    .loader {
      width: 80vw;
      height: 80vw;
    }
    .circle1 {
      width: 70%;
      height: 70%;
    }
    .circle2 {
      width: 45%;
      height: 45%;
    }
    .circle3 {
      width: 22%;
      height: 22%;
    }
  }
`;

export default SkillLoader;
