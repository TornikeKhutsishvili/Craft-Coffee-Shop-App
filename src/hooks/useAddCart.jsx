import { useNavigate } from "react-router-dom";
import { useContextApi } from "../contexts/ContextApi";
import { toast } from "react-toastify";

const useAddCart = () => {
  const { cartItems, setCartItems } = useContextApi();
  const navigate = useNavigate();

  const addToCart = (coffee) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === coffee.id);

      if (existing) {
        toast.success(`${coffee.title} quantity increased`);
        return prevItems.map((i) =>
          i.id === coffee.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }

      toast.success(`${coffee.title} added to cart`);
      return [
        ...prevItems,
        {
          id: coffee.id,
          title: coffee.title,
          price: coffee.price,
          quantity: 1,
        },
      ];
    });

    navigate("/cart");
  };

  const removeFromCart = (id) => {
    const item = cartItems.find((i) => i.id === id);
    setCartItems((prev) => prev.filter((i) => i.id !== id));

    if (item) toast.info(`${item.title} removed from cart`);
  };

  const clearCart = () => {
    setCartItems([]);
    toast.warn("Cart cleared");
  };

  return { addToCart, removeFromCart, clearCart, cartItems };
};

export default useAddCart;
