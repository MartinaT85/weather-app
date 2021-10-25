import { Link } from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <div className="links-container show-container">
        <ul className="links">
          <li>
            <a href="#">Weather Chart</a>
          </li>
          <li>
            <a href="#">Heat Index</a>
          </li>
        </ul>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);

  .links-container {
    width: 90vw;
    margin: 0 auto;
  }

  a {
    color: #fff;
    display: block;
    padding-left: 3rem;

    :hover {
      color: #d06d6d;
    }
  }

  ul {
    display: flex;
    justify-content: end;
  }
`;

export default Nav;
