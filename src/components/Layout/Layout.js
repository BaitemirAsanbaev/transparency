import { useState } from "react";
import { Auth } from "../../modules/Auth";
import { Footer } from "../../modules/Footer"
import { Header } from "../../modules/Header";
import Report from "../Report/Report";

const Layout = ({ children }) => {
  
  const [type, setType] = useState("closed");
  const [opened, setOpened] = useState(false);
  return (<>
    <Header openReport={setOpened} openModal={setType}/>
    <Auth type={type} setType={setType}/>
    <Report opened={opened} setOpened={setOpened}/>
    {/* <BotIcon/> */}
    {children}
    <Footer />
  </>);
}

export default Layout;