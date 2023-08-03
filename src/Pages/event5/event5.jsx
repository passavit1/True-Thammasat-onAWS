import React from "react";
import { Nav } from "../../components/index";
import styled from "styled-components";
import banner from "../../items/contentCreater/banner.svg";
import v1 from "../../items/contentCreater/v1.svg";
import v2 from "../../items/contentCreater/v2.svg";
import v3 from "../../items/contentCreater/v3.svg";
import v4 from "../../items/contentCreater/v4.svg";
import search from "../../items/contentCreater/search.svg";

const StyledContainer = styled.div`
  .container {
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
  }

  @media screen and (min-width: 320px) {
    .container {
      height: auto;
      display: flex;
      .main {
        height: 100%;
        width: 100%;
        background-color: rgb(17, 17, 17);

        .search {
          display: flex;
          justify-content: center;
          img {
            width: 90%;
            margin: 4% auto;
          }
        }

        .poster {
          img {
            width: 100%;
          }
        }

        .video {
          width: 100%;
          color: white;

          div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: 5%;

            img {
              width: 70%;
              margin-bottom: 10%;
            }

            .time {
              margin-bottom: 10%;
              background-color: rgb(59, 59, 59);
              width: 35%;
              height: 40px;
              border-radius: 20px;
            }

            .description {
              width: 80%;
              text-align: center;
              font-weight: 600;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .container {
      .main {
        .video {
          display: flex;
          margin-bottom: 6%;

          div {
            width: 25%;
            height: 100%;

            img {
              width: 85%;
              height: 60%;
              margin-bottom: 15%;
            }

            .time {
              width: 60%;
              height: 10%;
              margin-bottom: 15%;
            }

            .description {
              height: 20%;
            }
          }
        }
      }
    }
  }

  @media screen and (min-height: 1090px) {
    .container {
      .main {
        .poster {
          margin-bottom: 2%;
        }
        .video {
          margin-bottom: 9%;

          div {
            img {
              width: 85%;
              height: 60%;
              margin-bottom: 30%;
            }

            .time {
              width: 60%;
              height: 40px;
              margin-bottom: 25%;
              font-weight: 600;
            }

            .description {
              height: 20%;
            }
          }
        }
      }
    }
  }
  @media screen and (min-height: 1190px) {
    .container {
      .main {
        .video {
          margin-bottom: 15.2%;

          div {
            img {
              margin-bottom: 40%;
            }

            .time {
              margin-bottom: 35%;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1280px) {
    .container {
      .main {
        .video {
          margin-bottom: 0%;

          div {
            img {
              width: 85%;
              height: 60%;
              margin-bottom: 15%;
            }

            .time {
              width: 60%;
              height: 40px;
              margin-bottom: 15%;
              font-weight: 600;
              font-size: 1.5rem;
            }

            .description {
              height: 20%;
              font-size: 1.4rem;
            }
          }
        }
      }
    }
  }
`;

const Event5 = () => {
  return (
    <StyledContainer>
      <Nav />
      <div className="container">
        <div className="main">
          <div className="search">
            <img src={search} alt=".loading." srcset="" />
          </div>
          <div className="poster">
            <img src={banner} alt=".loading." srcset="" />
          </div>
          <div className="video">
            <div className="v1">
              <img src={v1} alt=".loading." />
              <div className="time">10.00 a.m.</div>
              <div className="description">
                Join and Why to be an influencer and Creator with TrueID
                Creator?
              </div>
            </div>
            <div className="v2">
              <img src={v2} alt=".loading." />
              <div className="time">10.15 a.m.</div>
              <div className="description">
                How to create Articles and Videos on the platform.
              </div>
            </div>
            <div className="v3">
              <img src={v3} alt=".loading." />
              <div className="time">10.45 a.m.</div>
              <div className="description">Basic of SEO</div>
            </div>
            <div className="v4">
              <img src={v4} alt=".loading." />
              <div className="time">11.20 a.m.</div>
              <div className="description">
                Grouping with TrueID Creator. Rewards: Exclusive for Attendees
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Event5;
