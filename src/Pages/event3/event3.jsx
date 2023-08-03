import React from "react";
import { Nav } from "../../components/index";
import styled from "styled-components";
import moo1 from "../../items/event3/moo1.png";
import moo2 from "../../items/event3/moo2.png";
import moo3 from "../../items/event3/moo3.png";
import moo4 from "../../items/event3/moo4.png";
import register from "../../items/registerNow.svg";
import trueLab from "../../items/trueLab.svg";

const StyledContainer = styled.div`
  .container {
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
    flex-direction: column;
    height: 82vh;

    .head {
      height: 10%;
      width: 100%;
      display: flex;
      justify-content: center;

      p {
        background: linear-gradient(
          to right,
          rgb(128, 3, 154),
          rgb(255, 0, 101)
        );
        height: 28px;
        padding: 0.5%;
        font-weight: 700;
        width: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        border-radius: 20px;
        color: white;
        margin-top: 1%;
      }
    }

    .main {
      display: flex;
      height: 80%;

      .left {
        width: 50%;
        position: relative;

        img {
          width: 45%;
          height: 95%;

          position: absolute;
          top: 5%;
          left: 45%;
        }
      }

      .right {
        width: 50%;

        .header {
          color: white;
          width: 100%;
          padding-left: 12%;
          margin: 2.5% 0 3%;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .center {
          width: 100%;
          display: flex;
          margin-left: -8%;

          img {
            width: 50%;
          }

          .centerLeft {
            width: 50%;

            img {
              margin-left: 15%;
            }
          }

          .centerRight {
            width: 50%;
            display: flex;
            flex-direction: column;

            img {
              margin-left: -28%;
            }
          }
        }

        .contract {
          display: flex;
          margin-top: -2.5%;

          img {
            width: 40%;
            height: 90%;
          }

          .button {
          }

          .logo {
            margin-left: -30%;
          }
        }
      }
    }
  }

  @media screen and (min-width: 320px) {
    .container {
      height: 150vh;

      .head {
        height: 40px;

        p {
          width: 80%;
        }
      }

      .main {
        flex-direction: column;
        align-items: center;

        .left {
          display: flex;
          width: 100%;
          align-items: center;

          img {
            width: 300px;
            height: 400px;
            position: static;
            margin: 5% auto;
          }
        }

        .right {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;

          .header {
            text-align: center;
            padding: 0;
            background: linear-gradient(
              to right,
              rgb(128, 3, 154),
              rgb(255, 0, 101)
            );
            height: 40px;
            font-weight: 700;
            width: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
            border-radius: 20px;
            color: white;
            margin-top: 1%;
          }

          .center {
            flex-direction: column;
            justify-content: center;
            margin: 5% auto;

            .centerLeft {
              width: 100%;
              display: flex;
              justify-content: center;

              img {
                margin: 0;
                width: 70%;
              }
            }

            .centerRight {
              width: 100%;
              align-items: center;

              img {
                width: 70%;
                margin: 10px auto;
              }
            }
          }

          .contract {
            flex-direction: column;
            align-items: center;
            margin: 10px auto;

            .button {
              img {
                width: 230px;
                height: 230px;
                margin-top: -70px;
              }
            }

            .logo {
              margin: 0;
              img {
                width: 230px;
                height: 230px;
                margin-top: -130px;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    .container {
      height: auto;

      .head {
        height: 40px;

        p {
          width: 80%;
        }
      }

      .main {
        height: auto;
        flex-direction: row;
        align-items: center;
        margin-top: 8%;

        .left {
          display: flex;
          width: 100%;
          align-items: center;

          img {
            width: 300px;
            height: 400px;
            position: static;
            margin: -20% auto 0;
          }
        }

        .right {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;

          .header {
            text-align: center;
            padding: 0;
            background: linear-gradient(
              to right,
              rgb(128, 3, 154),
              rgb(255, 0, 101)
            );
            height: 40px;
            font-weight: 700;
            width: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
            border-radius: 20px;
            color: white;
            margin-top: 1%;
          }

          .center {
            flex-direction: row;
            justify-content: center;
            margin: 5% auto;

            .centerLeft {
              width: 100%;
              display: flex;
              justify-content: center;

              img {
                margin: 0;
                width: 70%;
              }
            }

            .centerRight {
              width: 100%;
              align-items: center;

              img {
                width: 70%;
                margin: 10px auto;
              }
            }
          }

          .contract {
            flex-direction: row;
            align-items: center;
            margin: 10px auto;

            .button {
              margin-right: 30px;
              img {
                width: 150px;
                height: 150px;
                margin-top: -50px;
              }
            }

            .logo {
              margin: 0;
              img {
                width: 150px;
                height: 150px;
                margin-top: -90px;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 800px) {
    .container {
      .main {
        .right {
          .center {
            .centerLeft {
              img {
                width: 90%;
              }
            }
            .centerRight {
              img {
                width: 90%;
              }
            }
          }
      }
    }
  }

  @media screen and (min-width: 1280px) {
    
    .container {
      .head {
        height: 40px;
        margin-top : 0.8%;
        p {
          width: 70%;
        }
      }

      .main {
        flex-direction: row;
        align-items: center;
        margin-top: 0%;
        height:75vh !important;
        

        .left {
          img {
            width: 350px;
            height: 500px;
            position: static;
            margin: 0 auto auto 35% ;
          }
        }

        .right {
          
          

          .header {
            width: 450px;
            margin-top: 10%;
            margin-left: -8%;
          }

          .center {
            margin: 0 auto 0;

            .centerLeft {
              height:410px;
              width : 450px;
              img {
                margin: 0 -50px 0 0;
                scale:1;
              }
            }

            .centerRight {
              
              img {
                height: 190px;
                width : 250px;
                margin: 10px auto;
              }
            }
          }

          .contract {
            flex-direction: row;
            align-items: center;
            margin: 0 0 0 -50px;

            .button {
              margin-right: 120px;
              img {
                width: 200px;
                height: 100px;
                margin-top: 0px;
              }
            }

            .logo {
              margin: 0;
              
              img {
                width: 200px;
                height: 100px;
                margin-top: 0px;
              }
            }
          }
        }
      }
    }
  }
`;

const Event3 = () => {
  return (
    <StyledContainer>
      <Nav />
      <div className="container">
        <div className="head">
          <p>สายมู</p>
        </div>
        <div className="main">
          <div className="left">
            <img src={moo1} alt="" srcset="" />
          </div>
          <div className="right">
            <div className="header">
              <p>รีวิว ตัวเลขเปลี่ยนชีวิต</p>
            </div>
            <div className="center">
              <div className="centerLeft">
                <img src={moo2} alt="" srcset="" />
              </div>
              <div className="centerRight">
                <img src={moo3} alt="" srcset="" />
                <img src={moo4} alt="" srcset="" />
              </div>
            </div>
            <div className="contract">
              <div className="button">
                <img src={register} alt="" srcset="" />
              </div>
              <div className="logo">
                <img src={trueLab} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Event3;
