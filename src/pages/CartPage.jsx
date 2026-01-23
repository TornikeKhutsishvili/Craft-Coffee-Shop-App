import Cart from "../components/Cart";
import { useContextApi } from "../contexts/ContextApi";

const CartPage = () => {
  const { cartItems, currency, convertPrice } = useContextApi();

  const itemsWithConvertPrice = cartItems.map((item) => ({
    ...item,
    price: convertPrice(item.price),
  }));

  return (
    <>
      <Cart items={itemsWithConvertPrice} currency={currency} />
    </>
  );
};

export default CartPage;
