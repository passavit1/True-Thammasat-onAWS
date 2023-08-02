import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "../../components/index";
import logogarena from "../../items/logoGarena.svg";

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  cursor: default;
  color: white;

  #logogarena {
    width: 50%;
    height: 10%;
    position: absolute;
    bottom: 6%;
    left: 27%;
  }

  .EventContainer {
    height: 93%;
    padding-bottom: 1%;
    position: relative;

    animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    @keyframes scale-in-center {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

    .Date {
      width: 9%;
      height: 6%;
      border-radius: 10px;
      background-color: #3b3b3b;
      position: absolute;
      left: 5%;
      top: -6%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .topic {
      display: flex;
      align-items: center;
      justify-content: center;

      hr {
        width: 600px;
        margin: 0 20px;
        border: none;
        border-top: 0.5px solid white;
      }

      p {
        font-weight: 600;
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 450px) {
    #logogarena {
      width: 90%;
      left: 5%;
      bottom: 2.5%;
    }

    .EventContainer {
      padding-top: 8%;

      .Date {
        width: 18%;
        top: -0.8%;
      }

      .topic {
        margin: 5% 0;

        hr {
          width: 40px;
        }

        p {
          font-size: 1rem;
          text-align: center;
        }
      }
    }
  }
`;

const StyledEvent = styled.div`
  height: 8%;
  padding: 0.5rem 0;
  margin: 1.5% auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  width: 90%;

  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  div:first-child {
    width: 10%;
    background-color: #3b3b3b;
    border-radius: 10px 0 0 10px;
  }

  div:nth-child(2) {
    border-radius: 0 10px 10px 0;
    width: 30%;
    background: linear-gradient(to right, rgb(128, 3, 154), rgb(255, 0, 101));
  }

  div:last-child {
    width: 60%;
    justify-content: flex-start;
    padding-left: 4%;
    text-align: left;
  }

  @media screen and (max-width: 450px) {
    height: 60px;
    margin: 0 auto 3%;
    padding: 0 0 0 0;

    div {
      font-size: 0.8rem;
      height: 70%;
    }

    div:first-child {
      width: 20%;
    }

    div:nth-child(2) {
      width: 30%;
    }

    div:last-child {
      width: 50%;
      font-size: 0.7rem;
    }
  }
`;

const Index_page = () => {
  const navigate = useNavigate();

  const handleButtonClick = (eventPath) => {
    navigate(eventPath);
  };

  return (
    <StyledContainer>
      <div className="NavContainer">
        <Nav />
      </div>
      <div className="EventContainer">
        <div className="Date">Date</div>
        <StyledEvent onClick={() => handleButtonClick("/event1")}>
          <div>5</div>
          <div>Booth งานรับเพื่อนใหม่</div>
          <div>เล่นเกมส์ ลุ้นรางวัลรวมกว่า xx บาท</div>
        </StyledEvent>
        <StyledEvent onClick={() => handleButtonClick("/event2")}>
          <div>5 - 22</div>
          <div>สาย Shop</div>
          <div>
            Sales! คุ้มกว่า การันตี!! พร้อมของแถมสุดพิเศษมูลค่ารวม xx บาท
          </div>
        </StyledEvent>
        <div className="topic">
          <hr />
          <p>คอร์สฟรี Up Skills สร้างรายได้ </p>
          <hr />
        </div>
        <StyledEvent onClick={() => handleButtonClick("/event3")}>
          <div>7 , 14 , 16 </div>
          <div>สายมู</div>
          <div>ไขกุญแจ เปิดโลกลับ กับศาสตร์ตัวเลขที่จะเปลี่ยนชีวิตคุณ</div>
        </StyledEvent>
        <StyledEvent onClick={() => handleButtonClick("/event4")}>
          <div>18</div>
          <div>สายเกมส์</div>
          <div>
            ห้ามพลาด! ปรากฏการณ์ใหญ่ 3 เทพมาเจอกัน
            เผยไต๋เบื้องลึกเบื้องหลังวงการ E-Sport พร้อมรับ item จาก Garena
          </div>
        </StyledEvent>
        <StyledEvent onClick={() => handleButtonClick("/event5")}>
          <div>22</div>
          <div>สาย Content Creator</div>
          <div>
            สร้างรายได้ในวัยเรียน ไม่ไกลเกินเอื้อม Trick & Tips จากคนวงใน
            โอกาสร่วมงานกับบริษัทชั้นนำระดับประเทศ
          </div>
        </StyledEvent>
      </div>
      <img src={logogarena} alt="" srcset="" id="logogarena" />
    </StyledContainer>
  );
};

export default Index_page;
