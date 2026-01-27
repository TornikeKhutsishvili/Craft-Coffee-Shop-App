// Layout
import MainLayout from "./layouts/MainLayout";
// Pages
import CoffeeList from "./pages/CoffeeList";
import IngredientList from "./pages/IngredientList";
import CartPage from "./pages/CartPage";
import CoffeeDetail from "./pages/CoffeeDetail";
import IngredientDetail from "./pages/IngredientDetail";
// Error Page
import ErrorPage from "./pages/ErrorPage";
import Purchase from "./pages/Purchase";

const router = [
  // Nested Routes
  {
    element: <MainLayout />,
    children: [
      {
        element: <CoffeeList />,
        path: "/",
      },
      {
        element: <CoffeeList />,
        path: "/coffee",
      },
      {
        element: <IngredientList />,
        path: "/ingredient",
      },
      {
        element: <CartPage />,
        path: "/cart",
      },
      {
        element: <Purchase />,
        path: "/purchase",
      },
      // dynamic Routes
      {
        element: <CoffeeDetail />,
        path: "/coffee/:id",
      },
      {
        element: <IngredientDetail />,
        path: "/ingredient/:id",
      },
    ],
  },
  // Error Handling Routes
  {
    element: <ErrorPage />,
    path: "*",
  },
];

export default router;
