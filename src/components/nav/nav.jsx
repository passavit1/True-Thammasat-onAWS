import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const StyledNav = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: "TrueThammasat";

  .inside {
    font-size: 3rem;
    color: white;
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
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="inside">TRUE @ THAMMASAT</div>
      </Link>
      <Link to="/compare" style={{ textDecoration: "none" }}>
        <div className="compare">compare</div>
      </Link>
    </StyledNav>
  );
};

export default Nav;
