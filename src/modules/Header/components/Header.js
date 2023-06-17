import { useHref } from "react-router-dom";
import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";
import homeHeader from '../../../assets/images/banner.png'
import menuHeader from '../../../assets/images/menu-header.png'
import deliveryHeader from '../../../assets/images/delivery-header.png'
import Drawer from "./Drawer/Drawer";
import Backdrop from "../../../components/UI/Backdrop/Backdrop";
export const Header = ({openModal}) => {
  const url = useHref()
  const [img, setImg] = useState('')
  const [open, setOpen] = useState(false)
  
  const [extended, setExtended] = useState(false)
  const pages = [
    '/',
    '/menu',
    '/delivery'
  ]
useEffect(()=>{
  switch (url) {
    case '/':
      setImg(homeHeader)
      break;
    case '/menu':
      setImg(menuHeader)
      break;
    case '/delivery':
      setImg(deliveryHeader)
      break;
    default:
      break;
  }
}, [url])
  return ( <header style={{height:'100vh'}}>
    <Nav open={()=>setOpen(true)} openModal={openModal}/>
    
    <Drawer isOpen={open} close={()=>setOpen(false)}/>
    <Backdrop close={()=>setOpen(false)} isOpen={open}/>
    {pages.includes(url) ? <Banner img={img}/> : null}

  </header> );
}
 