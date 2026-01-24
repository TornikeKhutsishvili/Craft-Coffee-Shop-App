import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useContextApi } from "../contexts/ContextApi";
import root from "../rootStyle";
import useAddCart from "../hooks/useAddCart";

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  transition: all 0.3s;
`;

const CoffeeDetailWrapper = styled.div`
  display: flex;
  background-color: white;
  border-radius: ${root.borderRadius};
  overflow: hidden;
  box-shadow: ${root.shadow};
  margin-bottom: 30px;
  padding: 15px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const CoffeeImage = styled.div`
  flex: 1;
  max-width: 40%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${root.borderRadius};
  }

  @media (max-width: 992px) {
    max-width: 100%;
    height: 300px;
  }
`;

const CoffeeInfo = styled.div`
  flex: 1;
  padding: 30px;
`;

const CoffeeTitle = styled.h2`
  color: ${root.colors.primary};
  margin-bottom: 15px;
  font-size: 1.8rem;
`;

const CoffeeMeta = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const MetaItem = styled.div`
  background-color: ${root.colors.accent};
  color: ${root.colors.dark || "#333"};
  padding: 6px 12px;
  border-radius: ${root.borderRadius};
  font-size: 0.9rem;
  font-weight: 500;
`;

const CoffeeDescription = styled.p`
  margin-bottom: 20px;
  line-height: 1.8;
`;

const IngredientsList = styled.div`
  margin-bottom: 20px;
`;

const IngredientsTitle = styled.h4`
  color: ${root.colors.primary};
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

const IngredientItem = styled.div`
  background-color: #f5f5f5;
  padding: 10px 15px;
  border-radius: ${root.borderRadius};
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IngredientName = styled.span`
  font-weight: 500;
`;

const IngredientDetails = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

const ActionButtons = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 15px;

  a {
    text-decoration: none;
  }
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 12px 32px;
  border: none;
  border-radius: ${root.borderRadius};
  cursor: pointer;
  background: ${root.colors.primary};
  color: white;
  font-size: 0.95rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${root.colors.secondary};
  }
`;

const SecondaryBtn = styled(Btn)`
  background: ${root.colors.accent};
  color: ${root.colors.text || "#333"};

  &:hover {
    background-color: ${root.colors.secondary};
    color: white;
  }
`;

const CoffeeDetail = () => {
  const { id } = useParams();
  const { coffees, ingredients, currency, formatPrice } = useContextApi();
  const { addToCart } = useAddCart();

  if (!coffees || !ingredients) return <p>Loading . . .</p>;

  const coffee = coffees.find((cof) => cof.id.toString() === id);
  if (!coffee) return <p>Coffee not found</p>;

  const coffeeIngredients = ingredients.filter((ing) =>
    coffee.ingredients?.includes(ing.id),
  );

  return (
    <MainContent>
      <CoffeeDetailWrapper>
        <CoffeeImage>
          <img src={coffee.image} alt={coffee.title} />
        </CoffeeImage>

        <CoffeeInfo>
          <CoffeeTitle>{coffee.title}</CoffeeTitle>

          <CoffeeMeta>
            <MetaItem>{coffee.size || "Medium"}</MetaItem>
            <MetaItem>{coffee.strength || "Normal"}</MetaItem>
            <MetaItem>{coffee.type || "Hot"}</MetaItem>
          </CoffeeMeta>

          <CoffeeDescription>{coffee.description}</CoffeeDescription>

          <IngredientsList>
            <IngredientsTitle>Ingredients</IngredientsTitle>

            {coffeeIngredients.map((ing) => (
              <IngredientItem key={ing.id}>
                <IngredientName>{ing.name}</IngredientName>
                <IngredientDetails>
                  {ing.flavor} · {ing.strength}
                </IngredientDetails>
              </IngredientItem>
            ))}
          </IngredientsList>

          <ActionButtons>
            <Link>
              <Btn onClick={() => addToCart(coffee)}>
                Add to Cart —{" "}
                {formatPrice
                  ? formatPrice(coffee.price)
                  : `${currency} ${coffee.price}`}
              </Btn>
            </Link>
          </ActionButtons>
        </CoffeeInfo>
      </CoffeeDetailWrapper>

      <ActionButtons>
        <Link to="/">
          <SecondaryBtn>
            <i className="fas fa-arrow-left"></i>
            Back to Menu
          </SecondaryBtn>
        </Link>
      </ActionButtons>
    </MainContent>
  );
};

export default CoffeeDetail;
