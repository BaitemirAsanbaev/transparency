import { useState } from "react";
import { Auth } from "../../modules/Auth";
import { Footer } from "../../modules/Footer"
import { Header } from "../../modules/Header";

const Layout = ({ children }) => {
  
  const [type, setType] = useState("closed");
  return (<>
    <Header openModal={setType}/>
    <Auth type={type} setType={setType}/>
    {/* <BotIcon/> */}
    {children}
    <Footer />
  </>);
}

export default Layout;