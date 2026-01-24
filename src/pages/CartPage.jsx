import Cart from "../components/Cart";
import { useContextApi } from "../contexts/ContextApi";

const CartPage = () => {
  const { cartItems } = useContextApi();

  return (
    <>
      <Cart items={cartItems} />
    </>
  );
};

export default CartPage;
