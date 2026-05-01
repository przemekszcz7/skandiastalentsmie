import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import JoinUs from './pages/JoinUs';
import Events from './pages/Events';
import Projects from './pages/Projects';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import BranchPage from './pages/BranchPage';
import Branches from './pages/Branches';
import GrantsInfo from './pages/GrantsInfo';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';

function ScrollToTopComponent() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <ScrollToTopComponent />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-nas" element={<About />} />
            <Route path="/dolacz" element={<JoinUs />} />
            <Route path="/wydarzenia" element={<Events />} />
            <Route path="/projekty" element={<Projects />} />
            <Route path="/czlonkostwo" element={<Membership />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/filie" element={<Branches />} />
            <Route path="/projekty/info" element={<GrantsInfo />} />
            <Route path="/filia/:id" element={<BranchPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </LanguageProvider>
    </Router>
  );
}
