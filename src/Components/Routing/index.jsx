import Error from "../../Pages/Error";
import Home from "../../Pages/Home";
import Products from "../../Pages/Products";
import Services from "../../Pages/Services";
import Blog from "../../Pages/Blog";
import About from "../../Pages/About";
import Contact from "../../Pages/Contact";
import ServiceSingle from "../../Pages/ServiceSingle";
import VertivSingle from "../VertivSingle";
import Vertiv from "../../Pages/Vertiv";

export const routes = [
  { id: 1, path: "/", element: <Home />, title: "Əsas səhifə" },
  { id: 2, path: "/about", element: <About />, title: "Haqqımızda" },
  { id: 3, path: "/products", element: <Vertiv />, title: "Məhsullar" },
  {
    id: 4,
    path: "/services",
    element: <Services />,
    title: "Xidmətlər və Həllər",
  },
  { id: 5, path: "/blog", element: <Blog />, title: "Qalereya və Bloq" },
  { id: 6, path: "/contact", element: <Contact />, title: "Əlaqə" },
  { id: 10, path: "/vertiv", element: <Vertiv /> },
  { id: 7, path: "/vertiv/:id", element: <VertivSingle /> },
  { id: 8, path: "/services/:id", element: <ServiceSingle /> },
  { id: 9, path: "*", element: <Error /> },
];
