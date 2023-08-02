import React from "react";
import { Nav } from "../../components/index";
import styled from "styled-components";

const StyledContent = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 93vh;

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
          <p>ส่วนลดค่าเครื่อง &nbsp;500 - 1,000</p>
          <p>ส่วนลดค่ารายเดือน 25%</p>
          <p>item สุดพิเศษจาก การีนา</p>
          <p>online course มูลค่า 1,000-</p>
        </div>
        <div className="topic">
          <hr />
          <p>TOL</p>
          <hr />
        </div>
        <div className="promotion">
          <p>ฟรีค่าติดตั้ง* 890-</p>
          <p>ส่วนลดค่าติดตั้ง 100-</p>
          <p>item สุดพิเศษจาก การีนา</p>
          <p>online course มูลค่า 1,000-</p>
        </div>
      </StyledContent>
    </div>
  );
};

export default Event2;
