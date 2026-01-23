import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  color: ${(p) => p.theme.colors.primary};
  font-size: 1.8rem;
`;

const CurrencySelector = styled.select`
  padding: 8px 12px;
  border-radius: ${(p) => p.theme.borderRadius};
  border: 1px solid #ddd;
  outline: none;
  background-color: ${(p) => p.theme.colors.white};
  cursor: pointer;
`;

const Header = ({ title }) => {
  return (
    <>
      <HeaderContainer>
        <Title>{title}</Title>
        <CurrencySelector>
          <option value="GEL">GEL (₾)</option>
          <option value="USD">USD ($)</option>
        </CurrencySelector>
      </HeaderContainer>
    </>
  );
};

export default Header;
