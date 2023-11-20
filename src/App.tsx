import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import NavBarLayout from "./layout/NavBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Recommendation from "./pages/Recommendation";

const router = createBrowserRouter([
  {
    element: <NavBarLayout />,
    children: [
      {
        path: "/stream-page/",
        element: <Home />,
      },
      {
        path: "/stream-page/favoritos",
        element: <Favorites />,
      },
      {
        path: "/stream-page/recomendacoes",
        element: <Recommendation />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
