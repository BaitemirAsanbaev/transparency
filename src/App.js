import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import styles from './style/global.module.scss'
import InstitutionPage from './pages/Institution';
const App = () => {

  
  return (<div className={styles.app}>
    <Layout>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path='institution' element={<InstitutionPage/>}/>
    </Routes>
    </Layout>
  </div>);
}

export default App;