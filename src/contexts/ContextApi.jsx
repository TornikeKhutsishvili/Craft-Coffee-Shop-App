import { createContext, useContext, useMemo, useState } from "react";
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

  const convertCurrency = async (amount, to) => {
    if (to === "GEL") {
      const res = await fetch(
        `https://bankofgeorgia.ge/api/currencies/convert/USD/GEL?amountFrom=${amount}`,
      );

      const data = await res.json();
      return data.amountTo;
    }

    return amount;
  };

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
      setRate,

      convertCurrency,
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
