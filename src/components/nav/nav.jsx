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

  .compare {
    color: white;
    font-size: 3rem;
    position: absolute;
    top: 2%;
    right: 5%;
  }

  @media screen and (max-width: 450px) {
    .inside {
      font-size: 2rem;
    }

    .compare {
      font-size: 1.5rem;
      top: 30%;
    }

    .inside {
      img {
        width: 200px;
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
      {/* <Link to="/compare" style={{ textDecoration: "none" }}>
        <div className="compare">compare</div>
      </Link> */}
    </StyledNav>
  );
};

export default Nav;
