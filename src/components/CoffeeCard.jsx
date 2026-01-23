import styled from "styled-components";

const Card = styled.div`
  background: ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.borderRadius};
  box-shadow: ${(p) => p.theme.shadow};
  overflow: hidden;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const CoffeeImage = styled.div`
  height: 180px;
  background: ${(p) => p.theme.colors.accent};
  background-size: cover;
  background-position: center;
`;

const CoffeeInfo = styled.div`
  padding: 15px;
`;

const CoffeeName = styled.h3`
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 5px;
`;

const CoffeeDesc = styled.p`
  color: #777;
  font-size: 0.9rem;
  height: 40px;
  overflow: hidden;
`;

const CoffeeCard = ({ coffee }) => {
  return (
    <>
      <Card>
        <CoffeeImage style={{ backgroundImage: `url(${coffee.image})` }} />
        <CoffeeInfo>
          <CoffeeName>{coffee.title}</CoffeeName>
          <CoffeeDesc>{coffee.description}</CoffeeDesc>
        </CoffeeInfo>
      </Card>
    </>
  );
};

export default CoffeeCard;
