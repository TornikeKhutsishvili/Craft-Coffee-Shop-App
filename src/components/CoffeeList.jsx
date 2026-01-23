import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
`;

const CoffeeList = ({ id, coffee }) => {
  return (
    <Grid>
      <CoffeeCard key={id} coffee={coffee} />
      {/* {coffees.map((cof) => (
        <CoffeeCard key={cof.id} coffee={cof} />
      ))} */}
    </Grid>
  );
};

export default CoffeeList;
