import React from "react";
import styled from "styled-components";
import { Nav } from "../../components/index";
import like1 from "../../items/event1/freefireofficial.png";
import like2 from "../../items/event1/ffesportsth.png";

const StyledContainer = styled.div`
  color: white;

  .content {
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
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;

    .topic {
      background: linear-gradient(to right, rgb(128, 3, 154), rgb(255, 0, 101));
      padding: 0.8%;
      width: 15%;
      text-align: center;
      margin-bottom: 1%;
      align-self: flex-start;
      margin-left: 5%;
      font-size: 1.5rem;
      font-weight: bold;
    }

    h1 {
      margin-bottom: 1%;
      align-self: flex-start;
      margin-left: 10%;
    }

    .table {
      border-collapse: collapse;
      color: black;
      font-weight: 600;
      width: 80%;

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

      td:first-child {
        width: 5%;
        text-align: center;
      }
      td:nth-child(2) {
        width: 15%;
      }
      td:nth-child(3) {
        width: 40%;
      }

      td:last-child {
        width: 40%;
      }

      tbody tr {
        height: 5vh;
        font-size: 1.2rem;
        line-height: 2rem;

        &td:first-child {
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

        .addline {
          div {
            margin: 1% 0 2% 1%;
          }

          button {
            width: 20%;
            border: 2px solid black;
            border-radius: 20px;
            font-weight: bold;
            background-color: white;
            padding: 1% 0;
            margin-left: 5%;
          }
          button:hover {
            background-color: green;
            transition: 0.5s ease-in-out;
          }
        }

        .likePage {
          div {
            display: flex;
            img {
              width: 30%;
              padding-top: 2%;
            }

            img:first-child {
              margin-right: 3%;
            }
          }
        }
      }
    }

    @media screen and (max-width: 1900px) {
      .table {
        tbody tr {
          height: 6vh;
        }
      }
    }
    @media screen and (max-width: 1400px) {
      .topic {
        padding: 1.2%;
        width: 20%;
      }
      .table {
        td:nth-child(2) {
          width: 15%;
        }
        td:nth-child(3) {
          width: 35%;
        }

        td:last-child {
          width: 35%;
        }

        tbody tr {
          height: 7vh;

          .addline {
            div {
              margin: 1% 0 1% 1%;
            }

            button {
              width: 30%;
              border: 2px solid black;
              border-radius: 20px;
              font-weight: bold;
              background-color: white;
              padding: 1% 0;
              margin-left: 5%;
              margin-bottom: 2%;
            }
            button:hover {
              background-color: green;
              transition: 0.5s ease-in-out;
            }
          }

          .likePage {
            div {
              display: flex;
              img {
                width: 40%;
                padding-top: 2%;
              }

              img:first-child {
                margin-right: 5%;
                margin-left: 1%;
              }
            }
          }
        }
      }
    }
    @media screen and (max-width: 1100px) {
      .topic {
        padding: 1.2%;
        width: 30%;
        margin-bottom: 1.5%;
      }
      h1 {
        margin-bottom: 1.5%;
        font-size: 1.8rem;
      }
      .table {
        td:nth-child(2) {
          width: 20%;
        }
        td:nth-child(3) {
          width: 40%;
        }

        td:last-child {
          width: 25%;
        }

        tbody tr {
          height: 7vh;
          font-size: 1.1rem;

          .addline {
            div {
              margin: 1% 0 1% 1%;
            }

            button {
              width: 50%;
              padding: 3% 0;
              margin-left: 20%;
              margin-bottom: 2%;
            }
            button:hover {
              background-color: green;
              transition: 0.5s ease-in-out;
            }
          }

          .likePage {
            div {
              display: flex;
              img {
                width: 45%;
                padding-top: 2%;
              }

              img:first-child {
                margin-right: 5%;
                margin-left: 1%;
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: 890px) {
      .table {
        tbody tr {
          font-size: 0.9rem;
        }
      }
    }

    @media screen and (max-width: 850px) {
      .table {
        tbody tr {
          font-size: 0.85rem;

          button {
            font-size: 0.75rem;
          }
        }
      }
    }

    @media screen and (max-width: 790px) {
      h1 {
        margin-bottom: 1.5%;
        font-size: 1.3rem;
      }
      .table {
        tbody tr {
          height: auto;
          font-size: 0.8rem;
          line-height: 1.5rem;

          .addline {
            div {
              margin: 1% 0 1% 1%;
            }

            button {
              width: 60%;
              padding: 2% 0;
              margin-left: 20%;
              margin-bottom: 2%;
            }
            button:hover {
              background-color: green;
              transition: 0.5s ease-in-out;
            }
          }

          .likePage {
            div {
              display: flex;
              img {
                width: 45%;
                padding-top: 2%;
              }

              img:first-child {
                margin-right: 5%;
                margin-left: 1%;
              }
            }
          }
        }
      }
    }
    @media screen and (max-width: 576px) {
      .topic {
        padding: 1.2%;
        width: 40%;
        font-size: 1.2rem;
        margin-left: 28%;
        margin-bottom: 2%;
      }
      h1 {
        margin-bottom: 2%;
        margin-left: 12%;
        font-size: 1.1rem;
      }
      .table {
        th {
          font-size: 1.1rem;
        }

        tbody tr {
          font-size: 0.9rem;
          font-weight: 550;

          td {
            text-align: center !important;
          }

          .addline {
            div {
              margin: 1% 0 1% 1%;
            }

            button {
              width: 80%;
              padding: 2% 0;
              margin-left: 5%;
              margin-bottom: 2%;
              font-size: 0.8rem;
            }
            button:hover {
              background-color: green;
              transition: 0.5s ease-in-out;
            }
          }

          .likePage {
            div {
              display: flex;
              flex-direction: column;
              align-items: center;

              img {
                width: 90%;
                padding-top: 2%;
              }

              img:first-child {
                margin: 0;
                margin-bottom: 2%;
              }
            }
          }
        }
      }
    }
    @media screen and (max-width: 500px) {
      .topic {
        padding: 1%;
        width: 40%;
        font-size: 1rem;
        margin-left: 28%;
        margin-bottom: 2%;
        margin-top: 2%;
      }
      h1 {
        margin-bottom: 2%;
        margin-left: 15%;
        font-size: 0.9rem;
      }
      .table {
        th {
          font-size: 0.9rem;
        }

        tbody tr {
          font-size: 0.8rem;
          font-weight: 550;

          .addline {
            button {
              width: 100%;
              padding: 2% 0;
              margin-left: 0%;
              margin-bottom: 2%;
              font-size: 0.7rem;
            }
            button:hover {
              background-color: green;
              transition: 0.5s ease-in-out;
            }
          }

          .likePage {
            div {
              display: flex;
              flex-direction: column;
              align-items: center;

              img {
                width: 100%;
                padding-top: 2%;
              }

              img:first-child {
                margin-bottom: 5%;
              }
            }
          }
        }
      }
    }
    @media screen and (max-width: 450px) {
      h1 {
        margin-bottom: 2%;
        margin-left: 20%;
        font-size: 0.75rem;
      }
      .table {
        tbody tr {
          line-height: 1rem;
          font-size: 0.7rem;
          font-weight: 550;

          .addline {
            div {
              margin-bottom: 5%;
            }

            button {
              width: 100%;
              padding: 2% 0;
              margin-left: 0%;
              margin-bottom: 2%;
              font-size: 0.6rem;
            }
          }

          .likePage {
            div {
              display: flex;
              flex-direction: column;
              align-items: center;

              img {
                width: 110%;
                padding-top: 2%;
              }

              img:first-child {
                margin-bottom: 5%;
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: 420px) {
      h1 {
        margin-left: 14%;
      }
    }

    @media screen and (max-width: 380px) {
      .topic {
        width: 50%;
        font-size: 0.8rem;
        margin-left: 25%;
        margin-top: 5%;
      }
      h1 {
        font-size: 0.65rem;
        margin-left: 17%;
      }
      .table {
        th {
          font-size: 0.7rem;
        }

        tbody tr {
          font-size: 0.6rem;
          font-weight: 550;
          line-height: 0.9rem;

          .addline {
            button {
              width: 100%;
              padding: 2.5% 0;
              font-size: 0.5rem;
            }
          }

          .likePage {
            div {
              img {
                width: 110%;
                padding-top: 2%;
              }
            }
          }
        }
      }
    }
    @media screen and (max-width: 320px) {
      h1 {
        margin-left: 10%;
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
        <div className="table">
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
              <td className="addline">
                <div>แอดไลน์ True Klong luang</div>
                <button>CLICK HERE </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td rowSpan={2}>True E-Sport</td>
              <td>item A พิเศษ จาก Garena Freefire</td>
              <td className="likePage">
                <div>Like & Follow Tiktok</div>
                <div>
                  <img src={like1} alt="" />
                  <img src={like2} alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td id="special">item B พิเศษ จาก Garena Freefire</td>
              <td id="special2">Log in Game Free Fire</td>
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
              <td>Free Workshop!! UpSkill สร้างรายได้ ตั้งแต่วัยเรียน</td>
              <td>register ได้ก่อนใคร</td>
            </tr>
          </tbody>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Event1;
