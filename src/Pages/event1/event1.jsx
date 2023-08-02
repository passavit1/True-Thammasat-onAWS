import React from "react";

import styled from "styled-components";
import { Nav } from "../../components/index";

const StyledContainer = styled.div`
  height: 100vh;
  color: white;
  position: relative;

  .content {
    height: 83vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-top: -3vh;

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

    .topic {
      position: absolute;
      background: linear-gradient(to right, rgb(128, 3, 154), rgb(255, 0, 101));
      padding: 0.5%;
      scale: 1.3;
      top: 15%;
      left: 10%;
    }

    h1 {
      align-self: flex-start;
      margin: 3% 6% 1%;
      scale: 0.8;
    }
  }

  @media screen and (max-width: 450px) {
    .content {
      margin-top: 7vh;

      .topic {
        scale: 1.2;
        top: 20%;
        left: 30%;
      }

      h1 {
        font-size: 1.1rem;
        text-align: center;
        margin: 3% auto;
        width: 110%;
        margin-left: -5%;
      }
    }
  }
`;

const StyledTable = styled.table`
  width: 80%;
  height: 70%;
  border-collapse: collapse;
  color: black;
  font-weight: 600;

  th,
  td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
    background-color: white;
  }

  th {
    background-color: rgb(238, 238, 238);
    text-align: center;
    font-size: 1.2rem;
    padding: 1rem 0;
  }

  tbody tr {
    td:first-child {
      background-color: rgb(238, 238, 238);
    }

    td:nth-child(2) {
      text-align: center;
    }

    #special {
      text-align: left;
    }

    td:nth-child(3) {
      text-align: left;
    }

    #addline {
      display: flex;
      height: 100%;
      align-items: flex-start;
      border: none;
    }

    button {
      position: absolute;
      width: 110px;
      height: 20px;
      border: 2px solid black;
      border-radius: 20px;
      font-weight: bold;
      background-color: white;
      top: 40.1%;
      left: 62.5%;
    }

    button:hover {
      background-color: green;
      transition: 0.5s ease-in-out;
    }
  }

  @media screen and (max-width: 450px) {
    font-size: 0.8rem;
    font-weight: 500;
    width: 95%;

    tbody tr {
      height: 80px;

      td {
        text-align: center;
      }

      button {
        scale: 0.7;
        top: 48%;
        left: 67%;
      }
    }
  }
`;

const Event1 = () => {
  return (
    <StyledContainer>
      <Nav />
      <div className="content">
        <div className="topic">Booth งานรับเพื่อนใหม่</div>
        <h1>รวมสูตรลับ รับของให้คุ้มจาก บู๊ธ ทรู @กิจกรรมรับเพื่อนใหม่</h1>
        <StyledTable className="table">
          <thead>
            <tr>
              <th></th>
              <th>สินค้า</th>
              <th>ของรางวัล</th>
              <th>วิธีร่วมสนุก</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>อยากดูแลเพื่อนใหม่</td>
              <td>ลุ้นจับไข่ รางวัลพิเศษกับทรู #TruexTU</td>
              <td id="addline">
                แอดไลน์ True Klong luang
                <button>CLICK HERE </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td rowSpan={2}>True E-Sport</td>
              <td>item A พิเศษ จาก Garena Freefire</td>
              <td>Like & Follow Tiktok</td>
            </tr>
            <tr>
              <td>2</td>
              <td id="special">item B พิเศษ จาก Garena Freefire</td>
              <td>Log in Game Free Fire</td>
            </tr>
            <tr>
              <td>3</td>
              <td>True Money</td>
              <td>
                ได้เงินคืน 20 บาทเมื่อสมัครทรูมันนี่ และใช้ครั้งแรกที่ 7-eleven
              </td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td>True Money x Lisa</td>
              <td>
                สิทธ์ลุ้นตั๋วเครื่องบินไป กรุงเทพ-โซล / Poster Black Pink
                Limited Edition พร้อมลายเซนลิซ่า
              </td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td>CP Future Campus</td>
              <td>
                Online Course จากผู้มีประสบการณ์ตรงสอน skill
                ที่จำเป็นในโลกการทำงาน มูลค่า 1,000 บาท
              </td>
              <td>
                ให้สัมภาษณ์ว่าอยากเรียน course ไหน เพราะอะไร เอาไปต่อยอดอย่างไร
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>True Course</td>
              <td>Free Workshop!! UpSkill สร้างรายได้ ตั้งแต่วัยเรีียน</td>
              <td>register ได้ก่อนใคร</td>
            </tr>
          </tbody>
        </StyledTable>
      </div>
    </StyledContainer>
  );
};

export default Event1;
