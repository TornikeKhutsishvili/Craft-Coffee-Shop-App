import styled from "styled-components";
import root from "../rootStyle";
import { useContextApi } from "../contexts/ContextApi";

const Card = styled.div`
  background: ${root.colors.white};
  border-radius: ${root.borderRadius};
  box-shadow: ${root.shadow};
  overflow: hidden;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const CoffeeImage = styled.div`
  height: 180px;
  background: ${root.colors.accent};
  background-size: cover;
  background-position: center;
`;

const CoffeeInfo = styled.div`
  padding: 15px;
`;

const CoffeeName = styled.h3`
  color: ${root.colors.primary};
  margin-bottom: 5px;
`;

const CoffeeDesc = styled.p`
  color: #777;
  font-size: 0.9rem;
  height: 40px;
  overflow: hidden;
`;

const PriceP = styled.p``;

const CoffeeCard = ({ coffee }) => {
  const { currency } = useContextApi();

  const price =
    currency === "GEL" ? `₾${coffee.priceGEL}` : `$${coffee.priceUSD}`;

  return (
    <>
      <Card>
        <CoffeeImage style={{ backgroundImage: `url(${coffee.image})` }} />
        <CoffeeInfo>
          <CoffeeName>{coffee.title}</CoffeeName>
          <PriceP>{price}</PriceP>
          <CoffeeDesc>{coffee.description}</CoffeeDesc>
        </CoffeeInfo>
      </Card>
    </>
  );
};

export default CoffeeCard;
