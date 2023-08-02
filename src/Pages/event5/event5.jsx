import React from "react";
import { Nav } from "../../components/index";
import styled from "styled-components";
import side1 from "../../items/contentCreater/side1.svg";
import side2 from "../../items/contentCreater/side2.svg";
import side3 from "../../items/contentCreater/side3.svg";
import search from "../../items/contentCreater/search.svg";

const StyledContainer = styled.div`
  .container {
    height: 82vh;
    display: flex;

    animation: tilt-in-right-1 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    @keyframes tilt-in-right-1 {
      0% {
        transform: rotateX(-30deg) translateX(300px) skewX(30deg);
        opacity: 0;
      }
      100% {
        transform: rotateX(0deg) translateX(0) skewX(0deg);
        opacity: 1;
      }
    }

    .sidebar {
      height: 100%;
      width: 16%;
      background-color: rgb(55, 47, 42);
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 70%;
      }

      img:first-child {
        margin-bottom: 10%;
        margin-top: 10%;
      }

      img:nth-child(2) {
        margin-bottom: 10%;
      }
    }

    .main {
      height: 100%;
      width: 84%;
      background-color: rgb(17, 17, 17);

      .search {
        height: 10%;
      }

      .poster {
        height: ;
      }
    }
  }
`;

const Event5 = () => {
  return (
    <StyledContainer>
      <Nav />
      <div className="container">
        <div className="sidebar">
          <img src={side1} alt="" srcset="" />
          <img src={side2} alt="" srcset="" />
          <img src={side3} alt="" srcset="" />
        </div>
        <div className="main">
          <div className="search">
            <img src={search} alt="" srcset="" />
          </div>
          <div className="poster"></div>
          <div className="video"></div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Event5;
