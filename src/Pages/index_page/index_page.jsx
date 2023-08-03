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

  @media screen and (min-width: 320px) {
    #logogarena {
      width: 90%;
      left: 5%;
      bottom: -20px;
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
          font-size: 0.75rem;
          text-align: center;
        }
      }
    }
  }

  @media screen and (min-width: 360px) {
    #logogarena {
      margin-bottom: -4%;
    }

    .EventContainer {
      .topic {
        p {
          font-size: 0.9rem;
        }
      }
    }
  }
  @media screen and (min-width: 360px) and (min-height: 740px) {
    #logogarena {
      margin-bottom: 20%;
    }
  }

  @media screen and (min-width: 375px) and (min-height: 660px) {
    #logogarena {
      margin-bottom: 13%;
    }
  }

  @media screen and (min-width: 412px) {
    .EventContainer {
      .topic {
        hr {
          width: 60px;
        }

        p {
          font-size: 1rem;
        }
      }
    }
  }

  @media screen and (min-width: 430px) and (min-height: 850px) {
    #logogarena {
      margin-bottom: 1%;
    }
  }

  @media screen and (min-width: 600px) and (min-height: 800px) {
    #logogarena {
      bottom: -10%;
    }
  }

  @media screen and (min-width: 768px) {
    #logogarena {
      bottom: -0%;
    }
    .EventContainer {
      .topic {
        hr {
          width: 160px;
        }

        p {
          font-size: 1.4rem;
        }
      }
    }
  }
  @media screen and (min-width: 768px) and (min-height: 980px) {
    #logogarena {
      bottom: -5%;
    }
  }
  @media screen and (min-width: 800px) and (min-height: 1240px) {
    #logogarena {
      bottom: 0%;
    }
  }

  @media screen and (min-width: 1280px) and (min-height: 740px) {
    .EventContainer {
      .Date {
        top: -30px;
      }

      padding-top: 20px;
      .topic {
        margin: 20px;
        hr {
          width: 350px;
        }

        p {
          font-size: 1.4rem;
        }
      }
    }
  }

  @media screen and (min-width: 1280px) and (min-height: 790px) {
    #logogarena {
      bottom: -15%;
    }
  }

  @media screen and (min-width: 1450px) and (min-height: 670px) {
    .EventContainer {
      padding-top: 3%;
      .Date {
        width: 18%;
        left: 4.8%;
        top: 3%;
        font-size: 1.5rem;
      }

      .topic {
        margin: 2% auto;
        hr {
          width: 300px;
        }

        p {
          font-size: 1.8rem;
        }
      }
    }

    #logogarena {
      bottom: -50%;
    }
  }

  @media screen and (min-width: 1920px) and (min-height: 1080px) {
    .EventContainer {
      .Date {
        width: 18%;
        left: 4.8%;
        top: -5%;
        font-size: 1.5rem;
      }

      .topic {
        hr {
          width: 600px;
        }

        p {
          font-size: 1.8rem;
        }
      }
    }
    #logogarena {
      bottom: -20%;
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

  @media screen and (min-width: 320px) {
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

  @media screen and (min-width: 360px) {
    margin: 2% auto 3%;
  }

  @media screen and (min-width: 360px) and (min-height: 710px) {
    margin: 4% auto;
  }
  @media screen and (min-width: 360px) and (min-height: 790px) {
    margin: 7% auto;
  }

  @media screen and (min-width: 393px) {
    margin: 6% auto;
  }

  @media screen and (min-width: 768px) {
    margin: 2% auto;
    height: 80px;

    div {
      font-size: 1.1rem;
    }

    div:last-child {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 800px) and (min-height: 1240px) {
    margin: 5% auto;
  }

  @media screen and (min-width: 1280px) and (min-height: 740px) {
    margin: 0 auto;
  }

  @media screen and (min-width: 1450px) and (min-height: 670px) {
    height: 80px;
  }
  @media screen and (min-width: 1920px) and (min-height: 1080px) {
    height: 90px;
    margin-bottom: 1.5%;

    div {
      font-size: 1.5rem;
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
      font-size: 1.3rem;
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
