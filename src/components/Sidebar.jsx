import { NavLink } from "react-router-dom";
import styled from "styled-components";
import root from "../rootStyle";
import CartBadge from "./CartBadge";

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
    width: 0px;
    padding: 10px;
    left: -200px;
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
  position: relative;

  li {
    margin-bottom: 15px;

    a {
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: ${root.borderRadius};
      color: ${root.colors.text};
      text-decoration: none;
      gap: 5px;

      &.active {
        background-color: ${root.colors.accent};
        color: white;
      }

      &:hover {
        background-color: ${root.colors.accent};
        color: white;
      }
    }
  }
`;

const CartBadgeContainer = styled.div`
  position: absolute;
  top: 110px;
  right: 0px;
`;

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <Logo>
          <img src="/logo.png" alt="Logo" />
          <h1>Bean Brew</h1>
        </Logo>
        <Nav>
          <li>
            <NavLink to="/" end>
              <i className="fas fa-mug-hot"></i>
              Coffee Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/ingredient">
              <i className="fa-solid fa-cubes-stacked"></i>
              Ingredients
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <i className="fas fa-shopping-cart"></i>
              Cart
            </NavLink>
            <CartBadgeContainer>
              <CartBadge />
            </CartBadgeContainer>
          </li>
        </Nav>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
