import styled from "styled-components";
import CoffeeCard from "./CoffeeCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
`;

const CoffeeList = ({ coffees }) => {
  return (
    <Grid>
      {coffees.map((cof) => (
        <CoffeeCard key={cof.id} coffee={cof} />
      ))}
    </Grid>
  );
};

export default CoffeeList;
