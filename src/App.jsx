import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./router";
import ContextApi from "./contexts/ContextApi";

const appRouter = createBrowserRouter(router);

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <ContextApi>
        <RouterProvider router={appRouter} />
      </ContextApi>
    </>
  );
}

export default App;
