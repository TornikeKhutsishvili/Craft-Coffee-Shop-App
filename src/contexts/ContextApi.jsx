import { createContext, useContext, useMemo } from "react";
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

  const contextValue = useMemo(
    () => ({
      coffees,
      ingredients,
      loadingCoffees,
      loadingIngredients,
      coffeeError,
      ingredientsError,
    }),
    [
      coffees,
      ingredients,
      loadingCoffees,
      loadingIngredients,
      coffeeError,
      ingredientsError,
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
