import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "../../components/index";
import logogarena from "../../items/logoGarena.svg";

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  color: white;

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
      height: 30px;
      border-radius: 10px;
      background-color: #3b3b3b;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: 1.5rem;
      margin-right: 50%;
    }

    .card {
      width: 100%;
      height: 60px;
      padding: 0.5rem 0;
      margin: 1.5% auto;
      display: flex;
      text-align: center;
      justify-content: center;

      transition: transform 0.5s ease;
      &:hover {
        transform: scale(1.05);
      }

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: 1.5rem;
      }

      div:first-child {
        width: 5%;
        background-color: #3b3b3b;
        border-radius: 10px 0 0 10px;
      }

      div:nth-child(2) {
        border-radius: 0 10px 10px 0;
        width: 20%;
        background: linear-gradient(
          to right,
          rgb(128, 3, 154),
          rgb(255, 0, 101)
        );
      }

      div:last-child {
        width: 30%;
        justify-content: flex-start;
        padding-left: 4%;
        text-align: left;
      }
    }

    .topic {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      hr {
        width: 30%;
        margin: 0 20px;
        border: none;
        border-top: 0.5px solid white;
      }

      p {
        font-weight: 600;
        font-size: 1.5rem;
      }
    }

    #logogarena {
      margin-top: 1%;
      width: 50%;
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
      <Nav />
      <div className="content">
        <div className="Date">Date</div>
        <div className="card" onClick={() => handleButtonClick("/event1")}>
          <div>5</div>
          <div>Booth งานรับเพื่อนใหม่</div>
          <div>เล่นเกมส์ ลุ้นรางวัลรวมกว่า xx บาท</div>
        </div>
        <div className="card" onClick={() => handleButtonClick("/event2")}>
          <div>5 - 22</div>
          <div>สาย Shop</div>
          <div>
            Sales! คุ้มกว่า การันตี!! พร้อมของแถมสุดพิเศษมูลค่ารวม xx บาท
          </div>
        </div>
        <div className="topic">
          <hr />
          <p>คอร์สฟรี Up Skills สร้างรายได้ </p>
          <hr />
        </div>
        <div className="card" onClick={() => handleButtonClick("/event3")}>
          <div>7 , 14 , 16 </div>
          <div>สายมู</div>
          <div>ไขกุญแจ เปิดโลกลับ กับศาสตร์ตัวเลขที่จะเปลี่ยนชีวิตคุณ</div>
        </div>
        <div className="card" onClick={() => handleButtonClick("/event4")}>
          <div>18</div>
          <div>สายเกมส์</div>
          <div>
            ห้ามพลาด! ปรากฏการณ์ใหญ่ 3 เทพมาเจอกัน
            เผยไต๋เบื้องลึกเบื้องหลังวงการ E-Sport พร้อมรับ item จาก Garena
          </div>
        </div>
        <div className="card" onClick={() => handleButtonClick("/event5")}>
          <div>22</div>
          <div>สาย Content Creator</div>
          <div>
            สร้างรายได้ในวัยเรียน ไม่ไกลเกินเอื้อม Trick & Tips จากคนวงใน
            โอกาสร่วมงานกับบริษัทชั้นนำระดับประเทศ
          </div>
        </div>
        <img src={logogarena} alt="" srcset="" id="logogarena" />
      </div>
    </StyledContainer>
  );
};

export default Index_page;
