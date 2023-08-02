import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../../items/TruexTU.svg";
import { Link } from "react-router-dom";

const scaleOutCenter = keyframes`
  0% {
    transform: scale(1.5);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 1;
  }
`;

const StyledLogo = styled.div`
  height: 93vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    transform: scale(1.5);
    transition: transform 0.5s ease;
  }

  &.animate img {
    animation: ${scaleOutCenter} 0.8s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }

  &:hover img {
    transform: scale(2);
  }

  @media screen and (max-width: 450px) {
    img {
      transform: scale(0.6);
    }

    &:hover img {
      transform: scale(0.8);
    }
  }
`;

const LandingPage = () => {
  const [animate, setAnimate] = useState(false);

  const handleImageClick = (event) => {
    event.preventDefault();
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      window.location.href = "/index";
    }, 800); // Adjust the delay to match the animation duration
  };

  return (
    <div>
      <StyledLogo className={animate ? "animate" : ""}>
        <Link to="/index" onClick={handleImageClick}>
          <img src={logo} alt="" />
        </Link>
      </StyledLogo>
    </div>
  );
};

export default LandingPage;
