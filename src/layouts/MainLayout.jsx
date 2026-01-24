import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Header from "../components/Header";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 30px;
  margin-left: 250px;

  @media (max-width: 768px) {
    margin-left: 70px;
    padding: 20px;
  }
`;

const titles = {
  "/": "Coffee Selection",
  "/cart": "Your Shopping Cart",
  "/coffee": "Coffee",
  "/coffee/:id": "Coffee Details",
  "/ingredient": "Ingredients",
  "/ingredient/:id": "Ingredient Details",
};

const MainLayout = () => {
  const location = useLocation();
  const path = location.pathname;

  const title = Object.keys(titles).find((key) => {
    if (key.includes(":")) {
      const base = key.split("/:")[0];
      return path.startsWith(base);
    }
    return key === path;
  });

  return (
    <>
      <Container>
        <Sidebar />
        <MainContent>
          <Header title={title ? titles[title] : ""} />
          <Outlet />
        </MainContent>
      </Container>
    </>
  );
};

export default MainLayout;
