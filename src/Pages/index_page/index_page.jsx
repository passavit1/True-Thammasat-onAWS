import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "../../components/index";

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  cursor: default;

  .NavContainer {
    height: 7%;
  }

  .EventContainer {
    height: 93%;
    padding-bottom: 1%;
    position: relative;
    padding-top: 5%;

    .Date {
      width: 9%;
      height: 6%;
      border-radius: 10px;
      background-color: #fff;
      position: absolute;
      left: 5%;
      top: 4%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and (max-width: 450px) {
    .EventContainer {
      padding-top: 20%;

      .Date {
        background-color: green;
        width: 18%;
      }
    }
  }
`;

const StyledEvent = styled.div`
  height: 12%;
  border-radius: 10px;
  background-color: #dedbd5;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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
    background-color: yellow;
  }

  div:nth-child(2) {
    width: 30%;
    background-color: grey;
  }

  div:last-child {
    width: 60%;
    background-color: pink;
  }

  @media screen and (max-width: 450px) {
    height: 15%;

    div:first-child {
      width: 20%;
    }

    div:nth-child(2) {
      width: 30%;
    }

    div:last-child {
      width: 50%;
      font-size: 0.8rem;
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
    </StyledContainer>
  );
};

export default Index_page;
