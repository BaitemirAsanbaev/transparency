import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Delivery from './pages/Delivery';
import Home from './pages/Home';
import Menu from './pages/Menu';
import NotFound from './pages/NotFound';
import styles from './style/global.module.scss'
import BotPage from './pages/BotPage';
const App = () => {

  
  return (<div className={styles.app}>
    <Layout>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path='bot' element={<BotPage/>}/>
        {/* <Route path='*' element={<NotFound/>}/> */}
        <Route path='menu' element={<Menu/>}/>
        <Route path='delivery' element={<Delivery/>}/>
    </Routes>
    </Layout>
  </div>);
}

export default App;