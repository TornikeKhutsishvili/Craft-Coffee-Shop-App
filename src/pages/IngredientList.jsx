import styled from "styled-components";

const List = styled.ul`
  list-style: disc;
  padding-left: 20px;
`;

const Item = styled.li`
  margin-bottom: 5px;
`;

const IngredientList = ({ ingredients }) => {
  if (!ingredients) return null;

  return (
    <>
      <List>
        {ingredients.map((ingred) => (
          <Item key={ingred.id}>{ingred.name}</Item>
        ))}
      </List>
    </>
  );
};

export default IngredientList;
