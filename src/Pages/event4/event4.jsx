import React from "react";
import { Nav } from "../../components/index";
import styled from "styled-components";
import agenda from "../../items/eventGame/agenda.svg";
import contract from "../../items/registerNow.svg";
import winzy from "../../items/eventGame/winzy.svg";
import freeItem from "../../items/eventGame/freeItem.svg";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 1%;

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
      display: flex;
      flex-direction: row;
      width: 100%;

      .winzy {
        width: 50%;

        img {
          width: 70%;
          margin-left: 25%;
        }
      }

      .agenda {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .icon {
          width: 60%;
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
          padding: 0.1% 0;
          margin-bottom: 2%;
        }

        #agenda {
          width: 80%;
        }

        #freeItem {
          width: 30%;
        }
      }
    }

    .contract {
      width: 100%;

      a {
        display: flex;
        justify-content: center;
        margin: 1% 0;

        img {
          width: 15%;
        }
      }
    }

    @media screen and (max-width: 1100px) {
      margin-top: 2%;
    }
    @media screen and (max-width: 576px) {
      .mainContent {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        .winzy {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 8%;
          img {
            width: 80%;
            margin: 0;
          }
        }

        .agenda {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;

          .icon {
            width: 80%;
            color: white;
            background: linear-gradient(
              to right,
              rgb(255, 19, 146),
              rgb(255, 102, 0)
            );
            text-align: center;
            border-radius: 20px;
            font-size: 1.8rem;
            font-weight: bold;
            padding: 0.1% 0;
            margin-bottom: 5%;
          }

          #agenda {
            width: 90%;
            margin-bottom: 5%;
          }

          #freeItem {
            width: 50%;
            margin-bottom: 5%;
          }
        }
      }

      .contract {
        width: 100%;

        a {
          display: flex;
          justify-content: center;
          margin: 1% 0;

          img {
            width: 50%;
          }
        }
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
          <div className="winzy">
            <img src={winzy} alt="" srcset="" />
          </div>
          <div className="agenda">
            <div className="icon">AGENDA</div>
            <img src={agenda} alt="agenda" srcset="" id="agenda" />
            <img src={freeItem} alt="" srcset="" id="freeItem" />
          </div>
        </div>
        <div className="contract">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdqI-GNeDrgmJ_BhqsaUbloIyfw_40ECxsNO27kYyiW5ADBjw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={contract} alt="" srcset="" />
          </a>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Event4;
