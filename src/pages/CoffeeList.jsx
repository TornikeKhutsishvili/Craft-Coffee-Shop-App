import styled from "styled-components";
import CoffeeCard from "../components/CoffeeCard";
import useFetch from "../hooks/useFetch";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
`;

const CoffeeList = () => {
  const {
    data: coffees,
    loading,
    error,
  } = useFetch("http://localhost:3004/coffees");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Grid>
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </Grid>
  );
};

export default CoffeeList;
