import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <ProductsPage /> },
  { path: "/products/:id", element: <ProductDetailPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contact", element: <ContactPage /> },
]);

export default router;
