import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./router";
import ContextApi from "./contexts/ContextApi";

const appRouter = createBrowserRouter(router);

function App() {
  return (
    <>
      <ContextApi>
        <RouterProvider router={appRouter} />
      </ContextApi>
    </>
  );
}

export default App;
