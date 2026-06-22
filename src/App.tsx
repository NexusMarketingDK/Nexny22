import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import FreelancersPage from './pages/FreelancersPage';
import PartnersPage from './pages/PartnersPage';
import PricingPage from './pages/PricingPage';
import OutsourcingPage from './pages/OutsourcingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import Layout from './components/Layout';
import ContactSubmissions from './pages/admin/ContactSubmissions';

// Blog Posts
import SaaSLoesninger2026 from './pages/blog/SaaSLoesninger2026';
import AIAutomation2026 from './pages/blog/AIAutomation2026';
import Modebooking2026 from './pages/blog/Modebooking2026';
import Telesalg2026 from './pages/blog/Telesalg2026';
import OutboundSales2026 from './pages/blog/OutboundSales2026';

// Job Landing Pages
import RemoteWorkPage from './pages/jobs/RemoteWorkPage';
import WebBureauPage from './pages/jobs/WebBureauPage';
import LedLightingPage from './pages/jobs/LedLightingPage';
import EnergySalesPage from './pages/jobs/EnergySalesPage';
import CoffeeServicePage from './pages/jobs/CoffeeServicePage';
import SolarEnergyPage from './pages/jobs/SolarEnergyPage';
import MatServicePage from './pages/jobs/MatServicePage';
import PensionPage from './pages/jobs/PensionPage';
import DebtCollectionPage from './pages/jobs/DebtCollectionPage';

// Digital Project Pages
import WebDevelopmentPage from './pages/digital/WebDevelopmentPage';
import ApiSaasPage from './pages/digital/ApiSaasPage';
import WebsitesPage from './pages/digital/WebsitesPage';
import AiIntegrationPage from './pages/digital/AiIntegrationPage';

// Meeting Booking Page
import MeetingBookingPage from './pages/MeetingBookingPage';

// Lead Generation Page
import LeadGenerationPage from './pages/LeadGenerationPage';

function App() {
  const redirects = [
    {from: '/forside', to: '/'},
    {from: '/arbejd-hjemmefra-freelance', to: '/jobs/arbejd-hjemmefra'},
    {from: '/moedebooker-inden-for-solceller-og-vedvarende-energi', to: '/jobs/solenergi'},
    {from: '/privat-strom-salg', to: '/jobs/energi-salg'},
    {from: '/samarbejde-med-nexusmarketing', to: '/samarbejdspartner'},
    {from: '/om-nexusmarketing', to: '/om-os'},
    {from: '/moedebooker-hjemmeside-seo-og-marketing', to: '/jobs/webudvikling-salg'},
    {from: '/kontakt-nexusmarketing', to: '/kontakt'},
    {from: '/freelance-modebooker-pension', to: '/jobs/pensionsordning'},
    {from: '/nexusmarketing-freelance-moedebooker', to: '/jobs/arbejd-hjemmefra'},
    {from: '/nexusmarketing.dk/contact', to: '/kontakt'},
    {from: '/nexusmarketing.dk/jobs/remote-work', to: '/jobs/arbejd-hjemmefra'},
    {from: '/contact', to: '/kontakt'},
    {from: '/partners', to: '/samarbejdspartner'},
    {from: '/freelancers', to: '/freelance-telemarketing'},
    {from: '/freelancere', to: '/freelance-telemarketing'},
    {from: '/telemarketing-freelance-opgave-inkasso/', to: '/jobs/inkasso'},
    {from: '/hvorfor-outsource', to: '/hvorfor-nexusmarketing'}
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          
          {redirects.map(({from, to}) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          
          <Route path="/ydelser" element={<ServicesPage />} />
          <Route path="/freelance-telemarketing" element={<FreelancersPage />} />
          <Route path="/samarbejdspartner" element={<PartnersPage />} />
          <Route path="/priser" element={<PricingPage />} />
          <Route path="/hvorfor-nexusmarketing" element={<OutsourcingPage />} />
          <Route path="/om-os" element={<AboutPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* New Blog Posts 2026 */}
          <Route path="/blog/saas-loesninger-2026" element={<SaaSLoesninger2026 />} />
          <Route path="/blog/ai-automation-2026" element={<AIAutomation2026 />} />
          <Route path="/blog/modebooking-2026" element={<Modebooking2026 />} />
          <Route path="/blog/telesalg-2026" element={<Telesalg2026 />} />
          <Route path="/blog/outbound-sales-2026" element={<OutboundSales2026 />} />
          
          {/* Admin Routes */}
          <Route path="/admin/contact-submissions" element={<ContactSubmissions />} />
          
          {/* Job Landing Pages */}
          <Route path="/jobs/arbejd-hjemmefra" element={<RemoteWorkPage />} />
          <Route path="/jobs/webudvikling-salg" element={<WebBureauPage />} />
          <Route path="/jobs/web-bureau" element={<Navigate to="/jobs/webudvikling-salg" replace />} />
          <Route path="/jobs/led-belysning" element={<LedLightingPage />} />
          <Route path="/jobs/energi-salg" element={<EnergySalesPage />} />
          <Route path="/jobs/kaffe-service" element={<CoffeeServicePage />} />
          <Route path="/jobs/solenergi" element={<SolarEnergyPage />} />
          <Route path="/jobs/matte-service" element={<MatServicePage />} />
          <Route path="/jobs/pensionsordning" element={<PensionPage />} />
          <Route path="/jobs/inkasso" element={<DebtCollectionPage />} />

          {/* Digital Project Pages */}
          <Route path="/digital/webudvikling" element={<WebDevelopmentPage />} />
          <Route path="/digital/api-saas" element={<ApiSaasPage />} />
          <Route path="/digital/hjemmesider" element={<WebsitesPage />} />
          <Route path="/digital/ai-integration" element={<AiIntegrationPage />} />

          {/* Meeting Booking Page */}
          <Route path="/modebooking-priser" element={<MeetingBookingPage />} />
          <Route path="/modebooking" element={<Navigate to="/modebooking-priser" replace />} />

          {/* Lead Generation Page */}
          <Route path="/leadgenerering" element={<LeadGenerationPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;