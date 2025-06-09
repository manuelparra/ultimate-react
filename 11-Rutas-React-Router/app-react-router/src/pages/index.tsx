import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/product", element: <Product /> },
  { path: "/contacto", element: <>Contactos</> },
]);

export default router;
