import { useHref, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import Nav from './Nav/Nav';
import homeHeader from '../../../assets/images/banner.png';
import Drawer from './Drawer/Drawer';
import Backdrop from '../../../components/UI/Backdrop/Backdrop';
import Bot from './Bot/Bot';

export const Header = ({ openReport, openModal }) => {
  const location = useLocation();
  const url = useHref();
  const [img, setImg] = useState('');
  const [open, setOpen] = useState(false);
  const [extended, setExtended] = useState(false);

  return (
    <header style={location.pathname === '/' ? { height: '110vh' } : { height: '15vh' }}>
      <Nav open={() => setOpen(true)} openModal={openModal} openReport={openReport} />
      {url === '/' ? <Bot extended={extended} setExtended={setExtended} /> : null}
      {url === '/' ? <Banner img={homeHeader} /> : null}
      <Drawer isOpen={open} close={() => setOpen(false)} />
      <Backdrop close={() => setOpen(false)} isOpen={open} />
    </header>
  );
};
