import React from "react";
import { Nav } from "../../components/index";
import styled from "styled-components";
import star1 from "../../items/(Cleaning Logo)/1.svg";
import star2 from "../../items/(Cleaning Logo)/2.svg";
import star3 from "../../items/(Cleaning Logo)/3.svg";
import star4 from "../../items/(Cleaning Logo)/4.svg";

const StyledContent = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;

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

  .header {
    position: relative;
    width: 100%;

    h1 {
      position: absolute;
      width: 350px;
      height: 40px;
      text-align: center;
      padding: 0.5%;
      scale: 0.8;
      font-size: 1.5rem;
      background: linear-gradient(to right, rgb(128, 3, 154), rgb(255, 0, 101));
      top: 20px;
      left: 8%;
    }

    div {
      position: absolute;
      width: 90px;
      height: 70px;
      background: rgb(55, 47, 42);
      font-size: 1.1rem;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      top: -90px;
      left: 30%;
    }
  }

  .topic {
    display: flex;
    align-items: center;
    justify-content: center;

    hr {
      width: 500px;
      margin: 0 20px;
      border: none;
      border-top: 0.5px solid white;
    }

    p {
      background: linear-gradient(to right, rgb(255, 0, 101), rgb(254, 95, 73));
      padding: 0.5%;
      font-weight: 700;
      height: 40px;
      width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
    }
  }

  div:nth-child(2) {
    margin-top: 7%;
  }

  .promotion {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 4% 0;

    p {
      position: relative;
      width: 12%;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0.4%;
      background-color: rgb(59, 59, 59);
      font-weight: 550;
      font-size: 1.5rem;
      padding: 1rem;
      text-align: center;

      img {
        scale: 0.2;
        position: absolute;
        right: 0;
        bottom: -100%;
      }
    }
  }

  @media screen and (min-width: 320px) {
    margin-top: 20%;
    height: 70vh;

    .header {
      h1 {
        scale: 0.6;
        left: -6%;
        top: -70px;
      }

      div {
        width: 50%;
        height: 30px;
        top: -43px;
        left: 25%;
      }
    }

    .topic {
      hr {
        width: 80px;
        margin: 0 -10px;
      }

      p {
        scale: 0.7;
      }
    }

    .promotion {
      scale: 0.85;

      p {
        font-size: 0.9rem;
        height: 90px;
        width: 14%;
        font-weight: 450;
        line-height: 1.2rem;

        img {
          scale: 0.12;
          left: -320%;
          z-index: 1;
        }
      }
    }
  }

  @media screen and (min-width: 360px) {
    .header {
      h1 {
        scale: 0.6;
        left: 0%;
        top: -70px;
      }
    }

    .promotion {
      p {
        img {
          scale: 0.12;
          left: -300%;
          z-index: 1;
        }
      }
    }
  }

  @media screen and (min-width: 375px) and (min-height: 640px) {
    .header {
      h1 {
        scale: 0.6;
        left: 2%;
        top: -70px;
      }
    }
  }
  @media screen and (min-width: 390px) and (min-height: 670px) {
    .header {
      h1 {
        scale: 0.7;
        left: 4%;
        top: -70px;
      }
    }

    .promotion {
      p {
        img {
          scale: 0.12;
          left: -290%;
          z-index: 1;
          bottom: -105%;
        }
      }
    }
  }

  @media screen and (min-width: 410px) and (min-height: 720px) {
    .header {
      h1 {
        scale: 0.7;
        left: 5%;
        top: -70px;
      }
    }

    .promotion {
      p {
        img {
          scale: 0.12;
          left: -270%;
          z-index: 1;
          bottom: -105%;
        }
      }
    }
  }
  @media screen and (min-width: 410px) and (min-height: 820px) {
    .header {
      h1 {
        scale: 0.7;
        left: 7%;
        top: -70px;
      }
    }

    .promotion {
      p {
        img {
          scale: 0.12;
          left: -275%;
          z-index: 1;
          bottom: -105%;
        }
      }
    }
  }
  @media screen and (min-width: 420px) and (min-height: 750px) {
    .header {
      h1 {
        scale: 0.7;
        left: 8%;
        top: -70px;
      }
    }
  }
  @media screen and (min-width: 600px) and (min-height: 800px) {
    .promotion {
      p {
        img {
          scale: 0.15;
          left: -205%;
          z-index: 1;
          bottom: -105%;
        }
      }
    }
  }
  @media screen and (min-width: 760px) and (min-height: 930px) {
    margin-top: 15%;
    height: auto;

    .header {
      h1 {
        scale: 0.8;
        left: 8%;
        top: -70px;
      }

      div {
        width: 12%;
        height: 70px;
        top: -120px;
        left: 55%;
      }
    }

    .topic {
      margin-bottom: 3%;
      hr {
        width: 180px;
        margin: 0 20px;
      }

      p {
        scale: 1.05;
      }
    }

    .promotion {
      scale: 1.1;
      margin-bottom: 6%;

      p {
        font-size: 1.1rem;
        height: 90px;
        width: 14%;
        font-weight: 450;
        line-height: 1.4rem;

        img {
          scale: 0.15;
          left: -175%;
          z-index: 1;
          bottom: -105%;
        }
      }
    }
  }

  @media screen and (min-width: 800px) and (min-height: 600px) {
    margin-top: 15%;

    height: auto;

    .header {
      h1 {
        scale: 0.8;
        left: 8%;
        top: -70px;
      }

      div {
        width: 12%;
        height: 70px;
        top: -120px;
        left: 55%;
      }
    }

    .topic {
      margin-bottom: 3%;
      hr {
        width: 180px;
        margin: 0 20px;
      }

      p {
        scale: 1.05;
      }
    }

    .promotion {
      scale: 1.1;
      margin-bottom: 6%;

      p {
        font-size: 1.1rem;
        height: 90px;
        width: 14%;
        font-weight: 450;
        line-height: 1.4rem;

        img {
          scale: 0.15;
          left: -175%;
          z-index: 1;
          bottom: -105%;
        }
      }
    }
  }

  @media screen and (min-width: 1270px) and (min-height: 740px) {
    margin-top: 0%;
    height: auto;

    .header {
      h1 {
        scale: 0.8;
        left: 3%;
        top: 20px;
        font-size: 2rem;
        padding: 0;
        height: 55px;
      }

      div {
        width: 15%;
        height: 50px;
        top: -68px;
        left: 30%;
        font-size: 1.2rem;
      }
    }

    .topic {
      margin-bottom: 0%;
      hr {
        width: 450px;
        margin: 0 20px;
      }

      p {
        scale: 1.05;
      }
    }

    .promotion {
      scale: 1.1;
      margin-bottom: 0%;
      margin: 3% auto;

      p {
        font-size: 1.3rem;
        height: 90px;
        width: 14%;
        font-weight: 450;
        line-height: 2rem;

        img {
          scale: 0.17;
          left: -115%;
          z-index: 1;
          bottom: -105%;
        }
      }
    }
  }

  @media screen and (min-width: 1920px) and (min-height: 1080px) {

    .header{
      h1 {
        scale : 1;
      }

      div{
        font-size: 1.3rem;
        left : 25%;
        top: -100px;
      }

    }

    .topic{
      margin-bottom:20px;
      hr{
        width : 550px;
        margin: 0 60px;
      }

      p{
        scale : 1.2
        
      }
    }

    .promotion {
 
      p {
        font-size: 1.6rem;

        img {
          scale: 0.2;
          left: -80%;
          z-index: 1;
          bottom: -105%;
        }
      }
    }
  }
  }
`;

const Event2 = () => {
  return (
    <div>
      <Nav />
      <StyledContent>
        <div className="header">
          <h1>สาย shop</h1>
          <div>Pre-order ภายในงาน</div>
        </div>
        <div className="topic">
          <hr />
          <p>iPad + Apple Pencil</p>
          <hr />
        </div>
        <div className="promotion">
          <p>
            <img src={star1} alt="" srcset="" />
            ส่วนลดค่าเครื่อง &nbsp;500 - 1,000
          </p>
          <p>
            <img src={star2} alt="" srcset="" />
            Shared Plan ได้ 2 ซิม
          </p>
          <p>
            item สุดพิเศษจาก การีนา
            <img src={star3} alt="" srcset="" />
          </p>
          <p>
            online course มูลค่า 1,000-
            <img src={star4} alt="" srcset="" />
          </p>
        </div>
        <div className="topic">
          <hr />
          <p>TOL</p>
          <hr />
        </div>
        <div className="promotion">
          <p>
            ฟรีค่าติดตั้ง* 890-
            <img src={star1} alt="" srcset="" />
          </p>
          <p>
            <img src={star2} alt="" srcset="" />
            ส่วนลดค่าติดตั้ง 100-
          </p>
          <p>
            <img src={star3} alt="" srcset="" />
            item สุดพิเศษจาก การีนา
          </p>
          <p>
            <img src={star4} alt="" srcset="" />
            online course มูลค่า 1,000-
          </p>
        </div>
      </StyledContent>
    </div>
  );
};

export default Event2;
