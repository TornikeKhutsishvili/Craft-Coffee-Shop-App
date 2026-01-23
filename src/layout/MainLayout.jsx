import { Outlet } from "react-router-dom";
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

const MainLayout = ({ title }) => {
  return (
    <>
      <Container>
        <Sidebar />
        <MainContent>
          <Header title={title} />
          <Outlet />
        </MainContent>
      </Container>
    </>
  );
};

export default MainLayout;
