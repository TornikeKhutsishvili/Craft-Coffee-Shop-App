import styled from "styled-components";
import CoffeeCard from "../components/CoffeeCard";
import { useContextApi } from "../contexts/ContextApi";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
`;

const CoffeeList = () => {
  const { coffees, loadingCoffees } = useContextApi();

  if (loadingCoffees) return <p>Loading . . .</p>;

  return (
    <Grid>
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </Grid>
  );
};

export default CoffeeList;
