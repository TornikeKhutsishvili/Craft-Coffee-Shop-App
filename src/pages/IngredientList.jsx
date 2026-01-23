import styled from "styled-components";

const List = styled.ul`
  list-style: disc;
  padding-left: 20px;
`;

const Item = styled.li`
  margin-bottom: 5px;
`;

const IngredientList = ({ ingredients }) => {
  return (
    <>
      <List>
        {ingredients.map((ingr) => (
          <Item key={ingr.id}>{ingr.name}</Item>
        ))}
      </List>
    </>
  );
};

export default IngredientList;
