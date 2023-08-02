import React from "react";
import { Nav } from "../../components/index";
import styled from "styled-components";
import moo1 from "../../items/event3/moo1.png";
import moo2 from "../../items/event3/moo2.png";
import moo3 from "../../items/event3/moo3.png";
import moo4 from "../../items/event3/moo4.png";
import register from "../../items/registerNow.svg";
import trueLab from "../../items/trueLab.svg";

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

    display: flex;
    flex-direction: column;
    height: 82vh;

    .head {
      height: 10%;
      width: 100%;
      display: flex;
      justify-content: center;

      p {
        background: linear-gradient(
          to right,
          rgb(128, 3, 154),
          rgb(255, 0, 101)
        );
        padding: 0.5%;
        font-weight: 700;
        height: 28px;
        width: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        border-radius: 20px;
        color: white;
        margin-top: 1%;
      }
    }

    .main {
      display: flex;
      height: 80%;

      .left {
        width: 50%;
        position: relative;

        img {
          width: 45%;
          height: 95%;

          position: absolute;
          top: 5%;
          left: 45%;
        }
      }

      .right {
        width: 50%;

        .header {
          color: white;
          width: 100%;
          padding-left: 12%;
          margin: 2.5% 0 3%;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .center {
          width: 100%;
          display: flex;
          margin-left: -8%;

          img {
            width: 50%;
          }

          .centerLeft {
            width: 50%;

            img {
              margin-left: 15%;
            }
          }

          .centerRight {
            width: 50%;
            display: flex;
            flex-direction: column;

            img {
              margin-left: -28%;
            }
          }
        }

        .contract {
          display: flex;
          margin-top: -2.5%;

          img {
            width: 40%;
            height: 90%;
          }

          .button {
          }

          .logo {
            margin-left: -30%;
          }
        }
      }
    }
  }
`;

const Event3 = () => {
  return (
    <StyledContainer>
      <Nav />
      <div className="container">
        <div className="head">
          <p>สายมู</p>
        </div>
        <div className="main">
          <div className="left">
            <img src={moo1} alt="" srcset="" />
          </div>
          <div className="right">
            <div className="header">
              <p>รีวิว ตัวเลขเปลี่ยนชีวิต</p>
            </div>
            <div className="center">
              <div className="centerLeft">
                <img src={moo2} alt="" srcset="" />
              </div>
              <div className="centerRight">
                <img src={moo3} alt="" srcset="" />
                <img src={moo4} alt="" srcset="" />
              </div>
            </div>
            <div className="contract">
              <div className="button">
                <img src={register} alt="" srcset="" />
              </div>
              <div className="logo">
                <img src={trueLab} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Event3;
