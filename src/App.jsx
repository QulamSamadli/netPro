import { FaWhatsapp } from "react-icons/fa";
import HeaderTop from "./Components/HeaderTop";
import Myroute from "./Components/MyRoute";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NavbarMob from "./NavbarMob";

function App() {
  return (
    <>
    <NavbarMob />
      <HeaderTop /> 
      <Header/>
      <Myroute/>
      <Footer/>
    </>
  );
}

export default App;
