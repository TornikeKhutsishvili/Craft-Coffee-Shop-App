import IngredientList from "./IngredientList";
import styled from "styled-components";
import root from "../rootStyle";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.div`
  flex: 1;
  min-height: 350px;
  background: ${`url(${root.img}) center/cover no-repeat`};
  border-radius: ${root.borderRadius};
`;

const Info = styled.div`
  flex: 2;
`;

const Title = styled.h2`
  color: ${(p) => p.theme.colors.primary};
`;

const Price = styled.p`
  color: ${(p) => p.theme.colors.secondary};
  font-weight: bold;
`;

const Description = styled.p``;

const CoffeeDetail = () => {
  const { id } = useParams();
  const { data: coffees } = useFetch("http://localhost:3004/coffees");
  const { data: ingredients } = useFetch("http://localhost:3004/ingredients");

  const coffee = coffees.find((cof) => cof.id.toString() === id);
  if (!coffee) return <p>Coffee not found</p>;

  const coffeeIngredients = ingredients.filter((ingred) =>
    coffee.ingredients.includes(ingred.id),
  );

  return (
    <>
      <Container>
        <Image img={coffee.Image} />
        <Info>
          <Title>{coffee.name}</Title>
          <Price>₾{coffee.price}</Price>
          <Description>{coffee.description}</Description>
          <h3>Ingredients:</h3>
          <IngredientList ingredients={coffeeIngredients} />
        </Info>
      </Container>
    </>
  );
};

export default CoffeeDetail;
