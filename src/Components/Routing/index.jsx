import Error from "../../Pages/Error";
import Home from "../../Pages/Home";
import Products from "../../Pages/Products";
import Services from "../../Pages/Services";
import Blog from "../../Pages/Blog";
import About from "../../Pages/About";
import Contact from "../../Pages/Contact";
import Vertiv from "../Vertiv";
import Services2 from "../Services2";

 export const routes = [
  { id: 1, path: "/", element: <Home />, title: "Əsas səhifə" },
  { id: 2, path: "/about", element: <About />, title: "Haqqımızda" },
  { id: 3, path: "/products", element: <Products />, title: "Məhsullar" },
  { id: 4, path: "/services",element: <Services />,title: "Xidmətlər və Həllər"},
  { id: 5, path: "/blog", element: <Blog />, title: "Qalereya və Bloq" },
  { id: 6, path: "/contact", element: <Contact />, title: "Əlaqə" },
  { id: 7, path: "/vertiv", element: <Vertiv/> },
  { id: 8, path: "/solution2", element: <Services2/> },
  { id: 9, path: "*", element: <Error /> },
];
