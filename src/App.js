import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import styles from './style/global.module.scss'
import InstitutionPage from './pages/Institution';
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import styles from "./style/global.module.scss";
import BotPage from "./pages/BotPage";
import Profile from "./pages/Profile";
const App = () => {
  return (
    <div className={styles.app}>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="menu" element={<Menu />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
