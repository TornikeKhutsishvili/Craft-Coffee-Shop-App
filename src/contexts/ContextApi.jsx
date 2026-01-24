import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import useFetch from "../hooks/useFetch";

const ContextApi = createContext(null);
const API_URL = "http://localhost:3004";

const ContextApiProvider = ({ children }) => {
  const {
    data: coffees,
    loading: loadingCoffees,
    error: coffeeError,
  } = useFetch(`${API_URL}/coffees`);
  const {
    data: ingredients,
    loading: loadingIngredients,
    error: ingredientsError,
  } = useFetch(`${API_URL}/ingredients`);

  const [currency, setCurrency] = useState("GEL");
  const [rate, setRate] = useState(1);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const res = await fetch(
          "https://bankofgeorgia.ge/api/currencies/convert/USD/GEL?amountFrom=1",
        );

        const data = await res.json();
        const usd = data.data.find((c) => c.ccy === "GEL");

        if (usd?.currentRate) {
          setRate(usd.currentRate);
        } else {
          throw new Error("USD rate not found");
        }

        // setRate(data.amountTo);
      } catch (e) {
        console.error("Currency fetch error", e);
        setRate(2.7);
      }
    };

    fetchRate();
  }, [currency]);

  const formatPrice = useCallback(
    (usdPrice) => {
      if (!usdPrice) return "";

      if (currency === "USD") {
        return `$${(usdPrice / rate).toFixed(2)}`;
      }
      return `₾${usdPrice.toFixed(2)}`;
    },
    [currency, rate],
  );

  const CART_KEY = "coffee_cart";
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const contextValue = useMemo(
    () => ({
      coffees,
      ingredients,

      loadingCoffees,
      loadingIngredients,
      coffeeError,
      ingredientsError,

      currency,
      setCurrency,

      rate,
      formatPrice,

      cartItems,
      setCartItems,
    }),
    [
      coffees,
      ingredients,

      loadingCoffees,
      loadingIngredients,
      coffeeError,
      ingredientsError,

      currency,
      rate,
      formatPrice,
      cartItems,
    ],
  );

  return (
    <ContextApi.Provider value={contextValue}>{children}</ContextApi.Provider>
  );
};

export const useContextApi = () => {
  const contextValues = useContext(ContextApi);
  if (!contextValues)
    throw new Error("useContextApi must be used within ContextApiProvider");
  return contextValues;
};

export default ContextApiProvider;
