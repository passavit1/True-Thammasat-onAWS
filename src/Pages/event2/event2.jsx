import React from "react";
import { Nav } from "../../components/index";
import styled from "styled-components";
import pro1 from "../../items/event2/pro1.svg";
import pro2 from "../../items/event2/pro1.svg";
import pro3 from "../../items/event2/pro1.svg";
import pro4 from "../../items/event2/pro1.svg";
import pro5 from "../../items/event2/pro1.svg";
import pro6 from "../../items/event2/pro1.svg";
import pro7 from "../../items/event2/pro1.svg";
import pro8 from "../../items/event2/pro1.svg";

const StyledContainer = styled.div`
  color: white;
  height: 100vh;
  .container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;

    .header {
      display: flex;
      width: 100%;
      justify-content: flex -start;
      margin-left: 20%;
      margin-bottom: 3%;
      margin-top: 2%;

      h1 {
        width: 18%;
        height: 50%;
        text-align: center;
        padding: 0.5%;
        font-size: 220%;
        background: linear-gradient(
          to right,
          rgb(128, 3, 154),
          rgb(255, 0, 101)
        );
        margin-right: 5%;
      }

      div {
        width: 13%;
        height: 5.4rem;
        background: rgb(55, 47, 42);
        font-size: 1.5rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
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
        background: linear-gradient(
          to right,
          rgb(255, 0, 101),
          rgb(254, 95, 73)
        );
        padding: 0.5%;
        font-weight: 700;
        height: 60px;
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.3rem;
        text-align: center;
      }
    }

    .promotion {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 3%;
      flex-wrap: wrap;
      img {
        width: 18%;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .container {
      .header {
        h1 {
          font-size: 180%;
        }

        div {
          font-size: 1.3rem;
        }
      }

      .topic {
        p {
          font-size: 1.1rem;
        }
      }

      .promotion {
        img {
          width: 22%;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      .header {
        h1 {
          font-size: 160%;
        }

        div {
          font-size: 1.2rem;
        }
      }

      .topic {
        p {
          font-size: 1rem;
        }
      }

      .promotion {
        img {
          width: 30%;
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    .container {
      .header {
        flex-direction: column;
        align-items: center;

        h1 {
          font-size: 160%;
          margin-bottom: 1rem;
        }

        div {
          font-size: 1.2rem;
          margin-right: 0;
          margin-bottom: 1rem;
        }
      }

      .topic {
        flex-direction: column;
        align-items: center;

        hr {
          margin: 10px 0;
        }

        p {
          font-size: 1rem;
          margin-bottom: 1rem;
        }
      }

      .promotion {
        img {
          width: 50%;
          margin-bottom: 1rem;
        }
      }
    }
  }
`;

const Event2 = () => {
  return (
    <StyledContainer>
      <Nav />
      <div className="container">
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
          <img src={pro1} alt="" />
          <img src={pro2} alt="" />
          <img src={pro3} alt="" />
          <img src={pro4} alt="" />
        </div>

        <div className="topic">
          <hr />
          <p>TOL</p>
          <hr />
        </div>
        <div className="promotion">
          <img src={pro5} alt="" />
          <img src={pro6} alt="" />
          <img src={pro7} alt="" />
          <img src={pro8} alt="" />
        </div>
      </div>
    </StyledContainer>
  );
};

export default Event2;
