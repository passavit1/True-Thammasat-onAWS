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
      border-radius: 10px;
      background-color: #3b3b3b;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: 1.5rem;
      margin-right: 50%;
      margin-bottom: 2%;
      padding: 0.5%;
    }

    .card {
      width: 100%;

      display: flex;
      text-align: center;
      justify-content: center;
      margin-bottom: 2%;

      transition: transform 0.5s ease;
      &:hover {
        transform: scale(1.05);
      }

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        padding: 0.8%;
      }

      div:first-child {
        width: 5%;
        background-color: #3b3b3b;
        border-radius: 10px 0 0 10px;
        font-weight: bold;
      }

      div:nth-child(2) {
        border-radius: 0 10px 10px 0;
        width: 20%;
        background: linear-gradient(
          to right,
          rgb(128, 3, 154),
          rgb(255, 0, 101)
        );
        font-weight: bold;
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
      margin-bottom: 1%;
      text-align: center;

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

  @media screen and (max-width: 1900px) {
    .content {
      .Date {
        padding: 0.5%;
        margin-right: 68%;
      }

      .card {
        div:first-child {
          width: 10%;
        }

        div:nth-child(2) {
          width: 20%;
        }

        div:last-child {
          width: 40%;
        }
      }

      .topic {
        margin-bottom: 2%;

        p {
          font-size: 2rem;
        }
      }
    }
  }
  @media screen and (max-width: 1400px) {
    .content {
      .Date {
        padding: 0.8% 1.5%;
        margin-right: 67%;
      }

      .card {
        margin-bottom: 2.5%;
      }

      .topic {
        margin-bottom: 2.5%;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    .content {
      .card {
        margin-bottom: 2.5%;
      }

      .topic {
        margin-bottom: 2.5%;

        hr {
          width: 20%;
        }

        p {
          font-size: 1.7rem;
        }
      }

      #logogarena {
        margin-top: 1.5%;
        width: 75%;
      }
    }
  }
  @media screen and (max-width: 992px) {
    .content {
      .card {
        margin-bottom: 3%;

        div {
          font-size: 1.4rem;
        }
      }

      .topic {
        margin-bottom: 3%;

        hr {
          width: 18%;
        }

        p {
          font-size: 1.7rem;
        }
      }

      #logogarena {
        margin-top: 2.5%;
        width: 80%;
      }
    }
  }
  @media screen and (max-width: 790px) {
    .content {
      .card {
        margin-bottom: 4%;

        div {
          font-size: 1.25rem;
        }
      }

      .topic {
        margin-bottom: 4%;

        hr {
          width: 15%;
        }
      }
    }
  }
  @media screen and (max-width: 576px) {
    .content {
      .Date {
        padding: 1.3% 2.3%;
        font-size: 1.2rem;
      }

      .card {
        margin-bottom: 6%;

        div {
          font-size: 1rem;
        }
      }

      .topic {
        margin-bottom: 7%;

        hr {
          width: 15%;
        }

        p {
          font-size: 1.5rem;
        }
      }

      #logogarena {
        margin-top: 1.5%;
        width: 90%;
      }
    }
  }
  @media screen and (max-width: 450px) {
    .content {
      .Date {
        padding: 1.3% 2.3%;
        font-size: 1.2rem;
        margin-bottom: 3.5%;
      }

      .card {
        margin-bottom: 6%;

        div {
          font-size: 0.8rem;
        }
      }

      .topic {
        margin-bottom: 7%;

        hr {
          width: 12%;
        }

        p {
          font-size: 1.1rem;
        }
      }

      #logogarena {
        margin-top: 1.5%;
        width: 85%;
      }
    }
  }
  @media screen and (max-width: 360px) {
    .content {
      .Date {
        padding: 1.8% 2.8%;
        font-size: 1rem;
        margin-bottom: 3%;
      }

      .card {
        margin-bottom: 6%;

        div {
          font-size: 0.6rem;
        }
      }

      .topic {
        margin-bottom: 7%;

        hr {
          width: 12%;
          margin: 0 15px;
        }

        p {
          font-size: 0.9rem;
        }
      }

      #logogarena {
        margin-top: 1.5%;
        width: 85%;
      }
    }
  }
  @media screen and (max-width: 320px) {
    .content {
      .Date {
        padding: 1.8% 2.8%;
        font-size: 0.8rem;
        margin-bottom: 3%;
      }

      .card {
        margin-bottom: 6%;

        div {
          font-size: 0.6rem;
        }
      }

      .topic {
        margin-bottom: 7%;

        hr {
          width: 12%;
          margin: 0 15px;
        }

        p {
          font-size: 0.9rem;
        }
      }

      #logogarena {
        margin-top: 1.5%;
        width: 80%;
      }
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
          <div>รับคูปอง 100 บาท* ร่วมล่นเกมส์ ลุ้นรางวัลรวมกว่า 30,000 บาท</div>
        </div>
        <div className="card" onClick={() => handleButtonClick("/event2")}>
          <div>5 - 22</div>
          <div>สาย Shop</div>
          <div>
            Sales! คุ้มกว่า การันตี!! พร้อมของแถมสุดพิเศษมูลค่าสูงสุด 2,500 บาท
          </div>
        </div>
        <div className="topic">
          <hr />
          <p>
            คอร์ส<span style={{ color: "rgb(255,207,3)" }}>ฟรี</span> Up Skills
            สร้างรายได้{" "}
          </p>
          <hr />
        </div>
        <div className="card" onClick={() => handleButtonClick("/event3")}>
          <div>7 , 16 </div>
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
