import { NavLink } from "react-router-dom";
import styled from "styled-components";
import root from "../rootStyle";

const SidebarContainer = styled.div`
  width: 250px;
  background-color: ${root.colors.white};
  box-shadow: ${root.shadow};
  padding: 20px;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  @media (max-width: 768px) {
    width: 70px;
    padding: 10px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  h1 {
    font-size: 1.5rem;
    color: ${root.colors.primary};
  }
`;

const Nav = styled.ul`
  list-style: none;
  li {
    margin-bottom: 15px;
    a {
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: ${root.borderRadius};
      color: ${root.colors.text};
      text-decoration: none;
      &.active {
        background-color: ${root.colors.accent};
        color: white;
      }
    }
  }
`;

const Sidebar = () => {
  // const getLiClass = (isActive) => (isActive ? `` : ``);

  return (
    <>
      <SidebarContainer>
        <Logo>
          <img src="/images/coffee-logo.png" alt="Logo" />
          <h1>Bean Brew</h1>
        </Logo>
        <Nav>
          {/* <li className={getLiClass(isActive)}> */}
          <li>
            <NavLink to="/" end>
              Coffee Menu
            </NavLink>
          </li>
          {/* <li className={getLiClass(isActive)}> */}
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </Nav>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
