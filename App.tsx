import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Matrix from './pages/Matrix';
import QuikxChat from './pages/QuikxChat';
import Donate from './pages/Donate';
import About from './pages/About';
import Legal from './pages/Legal';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1, marginTop: '64px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/matrix" element={<Matrix />} />
            <Route path="/quikxchat" element={<QuikxChat />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/about" element={<About />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
