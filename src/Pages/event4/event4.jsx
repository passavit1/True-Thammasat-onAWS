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
      width: 80%;
      a {
        display: flex;
        justify-content: center;
      }
    }
  }

  @media screen and (min-width: 0px) {
    .content {
      height: auto;
      .mainContent {
        flex-direction: column;
        .pic {
          margin: 5% auto 10%;
          display: flex;
          justify-content: center;

          img {
            width: 90%;
          }
        }

        .agenda {
          margin-bottom: 8%;
          .icon {
            width: 70%;
            height: 30px;
            font-size: 1.5rem;
            padding-top: 1%;
            margin-bottom: 8%;
          }

          #agenda {
            width: 90%;
          }

          #freeItem {
            width: 70%;
          }
        }
      }

      .contract {
        flex-direction: column;
        height: auto;
        margin-bottom: 5%;

        a {
          img {
            width: 100%;
          }
        }
      }
    }
  }

  @media screen and (min-width: 600px) {
    .content {
      .mainContent {
        flex-direction: row;
        .pic {
          margin: auto auto;
          img {
            width: 95%;
            margin-top: -10%;
          }
        }
        .agenda {
          margin-top: 2%;
          #agenda {
            width: 95%;
          }
          #freeItem {
            width: 60%;
          }
        }
      }
      .contract {
        align-items: center;

        a {
          img {
            width: 80%;
          }
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    .content {
      .mainContent {
        flex-direction: row;
        .pic {
          margin: auto auto;
          img {
            width: 95%;
            margin-top: -10%;
          }
        }
        .agenda {
          margin-top: 2%;
          #agenda {
            width: 95%;
          }
          #freeItem {
            width: 60%;
          }
        }
      }
      .contract {
        align-items: center;

        a {
          img {
            width: 80%;
          }
        }
      }
    }
  }
  @media screen and (min-width: 1280px) {
    .content {
      .mainContent {
        flex-direction: row;

        .pic {
          margin: auto auto;
          img {
            width: 95%;
            margin-top: -10%;
          }
        }
        .agenda {
          margin-right: 3%;
        }
      }
      .contract {
        align-items: center;
        margin-bottom: 0;
        margin-top: -5%;

        a {
          img {
            width: 60%;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1920px) and (min-height: 1080px) {
    .content {
      .mainContent {
        .pic {
          width: 50%;
          img {
            width: 90%;
            margin-top: -100px;
          }
        }
        .agenda {
          width: 50%;
          margin-right: 3%;

          .icon {
            margin-bottom: 5%;
          }

          #agenda {
            width: 80%;
          }

          #freeItem {
            width: 50%;
          }
        }
      }
      .contract {
        align-items: center;
        margin-bottom: 0;
        margin-top: -5%;

        a {
          img {
            width: 60%;
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
