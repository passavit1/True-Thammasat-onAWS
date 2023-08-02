import React from "react";
import { Nav } from "../../components/index";
import styled from "styled-components";
import agenda from "../../items/eventGame/agenda.svg";
import contract from "../../items/eventGame/contract.svg";
import winzy from "../../items/eventGame/winzy.png";
import freeItem from "../../items/eventGame/freeItem.svg";

const StyledContainer = styled.div`
  .content {
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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

    .mainContent {
      height: 80%;
      width: 100%;
      display: flex;

      .pic {
        margin: 1% 5% 1% 10%;
      }

      .agenda {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;

        .icon {
          width: 200px;
          height: 40px;
          color: white;
          background: linear-gradient(
            to right,
            rgb(255, 19, 146),
            rgb(255, 102, 0)
          );

          text-align: center;
          border-radius: 20px;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 20px;
        }

        #agenda {
          margin-bottom: 5%;
        }

        #freeItem {
          width: 80%;
        }
      }
    }

    .contract {
      height: 20%;
      width: 100%;
      display: flex;
      justify-content: center;

      img {
        scale: 0.7;
      }
    }
  }
`;

const Event4 = () => {
  return (
    <StyledContainer>
      <Nav />
      <div className="content">
        <div className="mainContent">
          <div className="pic">
            <img src={winzy} alt="" srcset="" />
          </div>
          <div className="agenda">
            <div className="icon">AGENDA</div>
            <img src={agenda} alt="agenda" srcset="" id="agenda" />
            <img src={freeItem} alt="" srcset="" id="freeItem" />
          </div>
        </div>
        <div className="contract">
          <img src={contract} alt="" srcset="" />
        </div>
      </div>
    </StyledContainer>
  );
};

export default Event4;
