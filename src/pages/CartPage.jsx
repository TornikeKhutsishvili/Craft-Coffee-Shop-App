import Cart from "../components/Cart";

const CartPage = ({ cartItems }) => {
  return (
    <>
      <Cart items={cartItems} />
    </>
  );
};

export default CartPage;
