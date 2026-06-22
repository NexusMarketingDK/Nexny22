import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { jobListings } from '../data/jobListings';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isJobsDropdownOpen, setIsJobsDropdownOpen] = useState(false);
  const [isDigitalDropdownOpen, setIsDigitalDropdownOpen] = useState(false);
  const [isPartnerDropdownOpen, setIsPartnerDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleJobsDropdown = () => setIsJobsDropdownOpen(!isJobsDropdownOpen);
  const toggleDigitalDropdown = () => setIsDigitalDropdownOpen(!isDigitalDropdownOpen);
  const togglePartnerDropdown = () => setIsPartnerDropdownOpen(!isPartnerDropdownOpen);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50'}`;

  const digitalServices = [
    { path: '/digital/webudvikling', title: 'Webudvikling' },
    { path: '/digital/api-saas', title: 'API & SaaS' },
    { path: '/digital/hjemmesider', title: 'Hjemmesider' },
    { path: '/digital/ai-integration', title: 'AI Integration' }
  ];

  const partnerOptions = [
    { path: '/samarbejdspartner', title: 'Bliv samarbejdspartner' },
    { path: '/priser', title: 'Priser & Pakker' },
    { path: '/hvorfor-nexny', title: 'Hvorfor Nexny?' },
    { path: '/modebooking-priser', title: 'Mødebooking' },
    { path: '/leadgenerering', title: 'Leadgenerering' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="text-blue-600 mr-2"><Phone size={24} /></div>
            <span className="text-xl font-bold text-blue-600">Nexny</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={navLinkClass} end>Forside</NavLink>
            <NavLink to="/ydelser" className={navLinkClass}>Ydelser</NavLink>

            <div className="relative">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-blue-600 hover:bg-blue-50 flex items-center" onClick={toggleDigitalDropdown}>
                Digital <ChevronDown size={16} className="ml-1" />
              </button>
              {isDigitalDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                  {digitalServices.map((s) => (
                    <Link key={s.path} to={s.path} className="block px-4 py-2 text-sm text-gray-500 hover:bg-blue-50 hover:text-blue-600" onClick={() => setIsDigitalDropdownOpen(false)}>{s.title}</Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-blue-600 hover:bg-blue-50 flex items-center" onClick={toggleJobsDropdown}>
                Job søgere <ChevronDown size={16} className="ml-1" />
              </button>
              {isJobsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                  {jobListings.map((job) => (
                    <Link key={job.path} to={job.path} className="block px-4 py-2 text-sm text-gray-500 hover:bg-blue-50 hover:text-blue-600" onClick={() => setIsJobsDropdownOpen(false)}>{job.title}</Link>
                  ))}
                  <Link to="/freelance-telemarketing" className="block px-4 py-2 text-sm text-gray-500 hover:bg-blue-50 hover:text-blue-600 border-t border-gray-100 mt-2" onClick={() => setIsJobsDropdownOpen(false)}>Se alle stillinger</Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-blue-600 hover:bg-blue-50 flex items-center" onClick={togglePartnerDropdown}>
                Samarbejde <ChevronDown size={16} className="ml-1" />
              </button>
              {isPartnerDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                  {partnerOptions.map((o) => (
                    <Link key={o.path} to={o.path} className="block px-4 py-2 text-sm text-gray-500 hover:bg-blue-50 hover:text-blue-600" onClick={() => setIsPartnerDropdownOpen(false)}>{o.title}</Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/om-os" className={navLinkClass}>Om os</NavLink>
            <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
            <NavLink to="/kontakt" className={navLinkClass}>Kontakt</NavLink>
            <Link to="/kontakt" className="ml-4 btn btn-primary">Kontakt os</Link>
          </nav>

          <button type="button" className="md:hidden text-gray-500 hover:text-blue-600 focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 visible bg-white shadow-md' : 'max-h-0 opacity-0 invisible'}`}>
        <nav className="flex flex-col px-4 pt-2 pb-4 space-y-1">
          <NavLink to="/" className={navLinkClass} end onClick={toggleMenu}>Forside</NavLink>
          <NavLink to="/ydelser" className={navLinkClass} onClick={toggleMenu}>Ydelser</NavLink>
          <div className="py-2 px-3">
            <div className="font-medium text-gray-500 mb-2">Digital:</div>
            {digitalServices.map((s) => (<Link key={s.path} to={s.path} className="block py-2 text-sm text-gray-500 hover:text-blue-600" onClick={toggleMenu}>{s.title}</Link>))}
          </div>
          <div className="py-2 px-3">
            <div className="font-medium text-gray-500 mb-2">Job søgere:</div>
            {jobListings.map((job) => (<Link key={job.path} to={job.path} className="block py-2 text-sm text-gray-500 hover:text-blue-600" onClick={toggleMenu}>{job.title}</Link>))}
            <Link to="/freelance-telemarketing" className="block py-2 text-sm text-blue-600 font-medium" onClick={toggleMenu}>Se alle stillinger →</Link>
          </div>
          <div className="py-2 px-3">
            <div className="font-medium text-gray-500 mb-2">Samarbejde:</div>
            {partnerOptions.map((o) => (<Link key={o.path} to={o.path} className="block py-2 text-sm text-gray-500 hover:text-blue-600" onClick={toggleMenu}>{o.title}</Link>))}
          </div>
          <NavLink to="/om-os" className={navLinkClass} onClick={toggleMenu}>Om os</NavLink>
          <NavLink to="/blog" className={navLinkClass} onClick={toggleMenu}>Blog</NavLink>
          <NavLink to="/kontakt" className={navLinkClass} onClick={toggleMenu}>Kontakt</NavLink>
          <Link to="/kontakt" className="mt-4 btn btn-primary text-center" onClick={toggleMenu}>Kontakt os</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
