import Login from "./Login/Login";
import Register from "./Register/Register";
import Backdrop from "../../../components/UI/Backdrop/Backdrop";
 
export const Auth = ({type, setType}) => {
  return (
    <>
      <Backdrop close={()=>setType("closed")} isOpened={type!=="closed"}/>
      <Login opened={type==='login'} change={() => setType("register")} close={()=>setType("closed")}/>
      <Register opened={type==='register'}  change={() => setType("login")} close={()=>setType("closed")} />
    </>
  );
};


