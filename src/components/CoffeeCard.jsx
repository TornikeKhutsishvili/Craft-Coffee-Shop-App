import styled from "styled-components";
import root from "../rootStyle";
import { useContextApi } from "../contexts/ContextApi";
import { Link } from "react-router-dom";
import useAddCart from "../hooks/useAddCart";

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
  background-color: #e5b299;
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

const Price = styled.p`
  font-weight: bold;
  color: ${root.colors.secondary};
  margin: 10px 0;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;

  & a {
    width: 100%;
  }
`;

const Btn = styled.button`
  flex: 1;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: ${root.borderRadius};
  cursor: pointer;
  background: ${({ $secondary }) =>
    $secondary ? root.colors.accent : root.colors.primary};
  color: white;

  &:hover {
    background: ${({ $secondary }) => ($secondary ? "#d4b3a2" : "#b28375")};
  }
`;

const CurrencyToggle = styled.button`
  background: ${root.colors.accent};
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 0.7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  margin-left: 7px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const CoffeeCard = ({ coffee }) => {
  const { formatPrice, setCurrency } = useContextApi();
  const { addToCart } = useAddCart();

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "GEL" ? "USD" : "GEL"));
  };

  return (
    <>
      <Card>
        <CoffeeImage style={{ backgroundImage: `url(${coffee.image})` }} />
        <CoffeeInfo>
          <CoffeeName>{coffee.title}</CoffeeName>
          <CoffeeDesc>{coffee.description}</CoffeeDesc>

          <PriceContainer>
            <Price>{formatPrice(coffee.price)}</Price>
            <CurrencyToggle onClick={toggleCurrency}>
              <i className="fas fa-exchange-alt"></i>
            </CurrencyToggle>
          </PriceContainer>

          <Buttons>
            <Link>
              <Btn onClick={() => addToCart(coffee)}>Add to Cart</Btn>
            </Link>
            <Link to={`/coffee/${coffee.id}`}>
              <Btn $secondary>Details</Btn>
            </Link>
          </Buttons>
        </CoffeeInfo>
      </Card>
    </>
  );
};

export default CoffeeCard;
