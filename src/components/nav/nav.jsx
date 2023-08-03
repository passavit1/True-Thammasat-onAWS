import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../items/logoandMonth.svg";

const StyledNav = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: "TrueThammasat";
  margin-bottom: -2vh;

  .inside {
    font-size: 3rem;
    color: white;

    img {
      width: 250px;
    }
  }

  @media screen and (min-width: 320px) {
    .inside {
      font-size: 2rem;
    }

    .inside {
      img {
        width: 150px;
      }
    }
  }

  @media screen and (min-width: 360px) {
    .inside {
      img {
        width: 200px;
      }
    }
  }

  @media screen and (min-width: 412px) {
    .inside {
      img {
        width: 230px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .inside {
      img {
        width: 280px;
      }
    }
  }
  @media screen and (min-width: 834px) {
    .inside {
      img {
        width: 300px;
      }
    }
  }
  @media screen and (min-width: 1280px) {
    .inside {
      img {
        width: 250px;
      }
    }
  }
  @media screen and (min-width: 1728px) {
    .inside {
      img {
        width: 350px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/index" style={{ textDecoration: "none" }}>
        <div className="inside">
          <img src={logo} alt="" srcset="" />
        </div>
      </Link>
    </StyledNav>
  );
};

export default Nav;
