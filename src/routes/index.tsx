import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
