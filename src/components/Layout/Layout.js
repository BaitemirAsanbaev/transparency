import { useState } from "react";
import { Auth } from "../../modules/Auth";
import { Footer } from "../../modules/Footer"
import { Header } from "../../modules/Header";
import Slider from "../../modules/Slider/Slider";
import BotIcon from "../BotIcon/BotIcon";

const Layout = ({ children }) => {
  
  const [type, setType] = useState("closed");
  return (<>
    <Header/>
    {/* <BotIcon/> */}
    {children}
    <Footer />
  </>);
}

export default Layout;