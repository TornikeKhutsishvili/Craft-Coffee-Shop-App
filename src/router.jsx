// Layout
import MainLayout from "./layouts/MainLayout";
// Pages

// Error Page
import ErrorPage from "./pages/ErrorPage";

const router = [
  // Nested Routes
  {
    element: <MainLayout />,
    children: [
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
