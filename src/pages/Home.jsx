import CoffeeList from "../components/CoffeeList";

const Home = ({ coffees }) => {
  return (
    <>
      <CoffeeList coffees={coffees} />
    </>
  );
};

export default Home;
