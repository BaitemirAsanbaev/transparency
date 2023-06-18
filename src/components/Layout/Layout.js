import { Footer } from "../../modules/Footer"
import { Header } from "../../modules/Header";
import Slider from "../../modules/Slider/Slider";
import BotIcon from "../BotIcon/BotIcon";

const Layout = ({ children }) => {
  return (<>
    <Header/>
    {children}
    <Footer />
  </>);
}

export default Layout;