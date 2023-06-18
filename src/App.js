import Layout from './components/Layout/Layout';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import styles from "./style/global.module.scss";
import Profile from "./pages/Profile";
import InstitutionPage from './pages/Institution';
const App = () => {
  return (
    <div className={styles.app}>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="profile" element={<Profile />} />
          <Route path="institution" element={<InstitutionPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
