import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./router";
import AdminProvider from "./contexts/AdminContext";

const appRouter = createBrowserRouter(router);

function App() {
  return (
    <>
      <AdminProvider>
        <RouterProvider router={appRouter} />
      </AdminProvider>
    </>
  );
}

export default App;
