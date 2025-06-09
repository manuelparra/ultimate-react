import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/productos", element: <>Productos</> },
  { path: "/contacto", element: <>Contactos</> },
]);

export default router;
