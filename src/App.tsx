import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home  from './components/home/Home';
import Navbar from "./components/common/Navbar"
import AboutUs from "./pages/AboutUs"
import PersonalSafety from "./pages/PersonalSafety"
import LegalAwareness from "./pages/LegalAwareness"
import Resources from "./pages/Resources"
import { Footer } from "./components/common/Footer"

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/personal-safety" element={<PersonalSafety />} />
          <Route path="/legal-awareness" element={<LegalAwareness />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;