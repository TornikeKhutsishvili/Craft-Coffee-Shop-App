import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useContextApi } from "../contexts/ContextApi";
import root from "../rootStyle";

const Container = styled.div`
  background: ${root.colors.white};
  border-radius: ${root.borderRadius};
  box-shadow: ${root.shadow};
  padding: 25px;
  max-width: 100%;
`;

const Title = styled.h2`
  color: ${root.colors.primary};
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const Meta = styled.div`
  font-size: 0.9rem;
  color: #777;
`;

const IngredientDetail = () => {
  const { id } = useParams();
  const { ingredients, loadingIngredients, ingredientsError } = useContextApi();

  if (loadingIngredients) return <p>Loading...</p>;
  if (ingredientsError) return <p>Error ...</p>;
  if (!ingredients) return null;

  const ingredient = ingredients.find((i) => i.id.toString() === id);

  if (!ingredient) return <p>Ingredient not found</p>;

  return (
    <Container>
      <Title>{ingredient.name}</Title>
      <Description>
        {ingredient.description || "No description available."}
      </Description>
      <Meta>
        <p>
          <strong>Strength:</strong> {ingredient.strength || "Unknown"}
        </p>
        <p>
          <strong>Flavor:</strong> {ingredient.flavor || "N/A"}
        </p>
      </Meta>
    </Container>
  );
};

export default IngredientDetail;
