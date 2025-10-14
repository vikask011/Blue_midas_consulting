import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import CookiePreferences from './components/CookiePreferences';
import CookiePolicy from './components/CookiePolicy';
import { ConsentProvider } from './context/ConsentContext';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Refer from './components/refer';
import PrivacyPolicy from './components/Privacypolicy';
import ReferUsButton from './components/ReferUsButton';

// Pages / Services
import MarketingStrategy from './pages/Marketingstrategy';
import DataAnalytics from './pages/Dataanalytics';
import OperationsConsulting from './pages/OperationsConsulting';
import ProjectManagementGuidance from './pages/ProjectMngmtGuidance';
import DigitalTransformation from './pages/DigitalTransformation';
import SupplyChainManagement from './pages/SupplyChainManagement';

// Collaboration Models Pages
import Business from './pages/Business';
import OtherEngagementModels from './pages/OtherEngagementModels';

function App() {
  const navbarRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavHeight(navbarRef.current.offsetHeight);
      const handleResize = () => setNavHeight(navbarRef.current.offsetHeight);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <Router>
      <ConsentProvider>
        <div className="App">
          {/* Navbar */}
          <Navbar ref={navbarRef} />

          {/* Main content with dynamic padding */}
          <main style={{ paddingTop: navHeight }}>
            <Routes>
              {/* Home Page */}
              <Route path="/" element={<><Banner /><Services /><Contact /></>} />
              <Route path="/about" element={<About />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/services/marketing-strategy" element={<MarketingStrategy />} />
              <Route path="/services/data-analytics" element={<DataAnalytics />} />
              <Route path="/services/operations-consulting" element={<OperationsConsulting />} />
              <Route path="/services/project-management-guidance" element={<ProjectManagementGuidance />} />
              <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/services/supply-chain-management" element={<SupplyChainManagement />} />
              <Route path="/collaboration/business" element={<Business />} />
              <Route path="/collaboration/other" element={<OtherEngagementModels />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/refer" element={<Refer />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="*" element={<div className="text-center py-20 text-2xl">Page Not Found</div>} />
            </Routes>

            {/* Footer */}
            <Footer />
            <ReferUsButton />

            {/* Cookie UI */}
            <CookieBanner />
            <CookiePreferences />
          </main>
        </div>
      </ConsentProvider>
    </Router>
  );
}

export default App;
