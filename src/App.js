import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import styles from './style/global.module.scss'
import InstitutionPage from './pages/Institution';
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Delivery from "./pages/Delivery";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import styles from "./style/global.module.scss";
import BotPage from "./pages/BotPage";
import Profile from "./pages/Profile";
const App = () => {
  return (
    <div className={styles.app}>
      {/* <Layout>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path='institution' element={<InstitutionPage/>}/>
        <Route path='bot' element={<BotPage/>}/>
        {/* <Route path='*' element={<NotFound/>}/> 


        <Route path='menu' element={<Menu/>}/>
        <Route path='delivery' element={<Delivery/>}/>
    </Routes>
    </Layout> */}
      <Profile />
    </div>
  );
};

export default App;
