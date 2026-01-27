import styled from "styled-components";
import root from "../rootStyle";
import { useContextApi } from "../contexts/ContextApi";

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
  color: ${root.colors.primary};
  font-size: 1.8rem;
`;

const CurrencySelector = styled.select`
  padding: 8px 12px;
  border-radius: ${root.borderRadius};
  border: 1px solid #ddd;
  outline: none;
  background-color: ${root.colors.white};
  cursor: pointer;
`;

const CurrencySelectorTitle = styled.label`
  color: black;
`;

const CurrencyDiv = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: center;
`;

const Header = ({ title }) => {
  const { currency, setCurrency } = useContextApi();

  return (
    <>
      <HeaderContainer>
        <Title>{title}</Title>

        <CurrencyDiv>
          <CurrencySelectorTitle>Currency:</CurrencySelectorTitle>
          <CurrencySelector
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="GEL">GEL (₾)</option>
            <option value="USD">USD ($)</option>
          </CurrencySelector>
        </CurrencyDiv>
      </HeaderContainer>
    </>
  );
};

export default Header;
