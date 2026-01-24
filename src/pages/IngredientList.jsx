import styled from "styled-components";
import root from "../rootStyle";
import { useContextApi } from "../contexts/ContextApi";
import { Link } from "react-router-dom";

const IngredientWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Card = styled.div`
  background: ${root.colors.white};
  border-radius: ${root.borderRadius};
  box-shadow: ${root.shadow};
  overflow: hidden;
  transition: transform 0.3s ease;
  margin-top: 20px;
  margin-right: 20px;
  width: 380px;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IngredientInfo = styled.div`
  padding: 15px;
`;

const IngredientName = styled.h3`
  color: ${root.colors.primary};
  margin-bottom: 5px;
`;

const IngredientDesc = styled.p`
  color: #777;
  font-size: 0.9rem;
  height: 40px;
  overflow: hidden;
`;

const IngredientStrength = styled.div`
  margin-bottom: 5px;
`;

const IngredientFlavor = styled.div`
  margin-bottom: 5px;
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
`;

const CurrencyToggle = styled.button`
  background: var(--accent-color);
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
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const IngredientList = () => {
  const { ingredients, loadingIngredients } = useContextApi();
  const { formatPrice } = useContextApi();

  if (loadingIngredients) return <p>Loading . . .</p>;
  if (!ingredients || ingredients.length === 0)
    return <p>No ingredients found.</p>;

  return (
    <>
      <IngredientWrapper>
        {ingredients.map((ingredient) => (
          <Card key={ingredient.id}>
            <IngredientInfo>
              <IngredientName>Name: {ingredient.name}</IngredientName>
              <IngredientDesc>Desc: {ingredient.description}</IngredientDesc>
              <IngredientStrength>
                Strength: {ingredient.strength}
              </IngredientStrength>
              <IngredientFlavor>Flavor: {ingredient.flavor}</IngredientFlavor>

              <PriceContainer>
                <Price>{formatPrice(ingredient.price)}</Price>
                <CurrencyToggle>
                  <i className="fas fa-exchange-alt"></i>
                </CurrencyToggle>
              </PriceContainer>

              <Buttons>
                <Link to={`/ingredient/${ingredient.id}`}>
                  <Btn $secondary>Details</Btn>
                </Link>
              </Buttons>
            </IngredientInfo>
          </Card>
        ))}
      </IngredientWrapper>
    </>
  );
};

export default IngredientList;
