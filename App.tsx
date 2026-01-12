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
import Blog from './pages/Blog';
import Contact from './pages/Contact';

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
              <Route path="/blog" element={<Blog />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/contact" element={<Contact />} />
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
