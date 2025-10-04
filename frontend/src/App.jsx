// App.jsx
import React from 'react';
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
import Refer from './components/refer'; // Refer page
import PrivacyPolicy from './components/Privacypolicy'; // Added Privacy Policy
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
  return (
    <Router>
      <ConsentProvider>
        <div className="App">
          {/* Navbar */}
          <Navbar />

        {/* Routes */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<><Banner /><Services /><Contact /></>} />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Case Studies Page */}
          <Route path="/case-studies" element={<CaseStudies />} />

          {/* Services Pages */}
          <Route path="/services/marketing-strategy" element={<MarketingStrategy />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/operations-consulting" element={<OperationsConsulting />} />
          <Route path="/services/project-management-guidance" element={<ProjectManagementGuidance />} />
          <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/services/supply-chain-management" element={<SupplyChainManagement />} />

          {/* Collaboration Models Pages */}
          <Route path="/collaboration/business" element={<Business />} />
          <Route path="/collaboration/other" element={<OtherEngagementModels />} />

          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />

          {/* Referral Page */}
          <Route path="/refer" element={<Refer />} />

          {/* Privacy Policy & Terms */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />

          {/* Optional: Catch all route for 404 */}
          <Route path="*" element={<div className="text-center py-20 text-2xl">Page Not Found</div>} />
        </Routes>

        {/* Cookie UI */}
        <CookieBanner />
        <CookiePreferences />

          {/* Footer */}
          <Footer />
          <ReferUsButton />
        </div>
      </ConsentProvider>
    </Router>
  );
}

export default App;
