// Layout
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
// Pages

// Error Page
import ErrorPage from "./pages/ErrorPage";

const router = [
  // Nested Routes
  {
    element: <MainLayout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <CartPage />,
        path: "/cart",
      },
      // dynamic Routes
    ],
  },
  // Error Handling Routes
  {
    element: <ErrorPage />,
    path: "*",
  },
];

export default router;
