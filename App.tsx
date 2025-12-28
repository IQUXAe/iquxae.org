import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Matrix from './pages/Matrix';
import MatrixGuide from './pages/MatrixGuide';
import QuikxChat from './pages/QuikxChat';
import Donate from './pages/Donate';
import About from './pages/About';
import Legal from './pages/Legal';
import News from './pages/News';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1, marginTop: '64px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/matrix" element={<Matrix />} />
              <Route path="/matrix/guide" element={<MatrixGuide />} />
              <Route path="/quikxchat" element={<QuikxChat />} />
              <Route path="/news" element={<News />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/about" element={<About />} />
              <Route path="/legal" element={<Legal />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;
