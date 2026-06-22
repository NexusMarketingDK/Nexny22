import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Nexus Marketing</h3>
            <p className="mb-4">Vi er specialister i telemarketing, mødebooking og salg for B2B virksomheder.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61559179262196" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/company/nexusmarketing-dk" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Hurtige Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Forside</Link>
              </li>
              <li>
                <Link to="/ydelser" className="text-gray-300 hover:text-white">Ydelser</Link>
              </li>
              <li>
                <Link to="/jobs/arbejd-hjemmefra" className="text-gray-300 hover:text-white">For Sælgere</Link>
              </li>
              <li>
                <Link to="/samarbejdspartner" className="text-gray-300 hover:text-white">Samarbejdspartner</Link>
              </li>
              <li>
                <Link to="/priser" className="text-gray-300 hover:text-white">Priser</Link>
              </li>
              <li>
                <Link to="/om-os" className="text-gray-300 hover:text-white">Om os</Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-300 hover:text-white">Kontakt</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Kontaktoplysninger</h3>
            <div className="space-y-6">
              {/* Spanish Office */}
              <div>
                <h4 className="font-medium mb-2">NexusMarketing Spanien</h4>
                <div className="flex items-start">
                  <MapPin size={20} className="mr-2 mt-1 text-blue-400" />
                  <span>
                    Calle Las Barcas, 2 2nd floor<br />
                    46002 Valencia
                  </span>
                </div>
              </div>

              {/* Danish Office */}
              <div>
                <h4 className="font-medium mb-2">NexusMarketing Danmark</h4>
                <div className="flex items-start">
                  <MapPin size={20} className="mr-2 mt-1 text-blue-400" />
                  <span>
                    Trindsøvej 6, 1. sal<br />
                    8000 Aarhus C
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <Phone size={20} className="mr-2 text-blue-400" />
                <a href="tel:+4591952794" className="hover:text-blue-400">91 95 27 94</a>
              </div>

              <div className="flex items-center">
                <Mail size={20} className="mr-2 text-blue-400" />
                <a href="mailto:kontakt@nexusmarketing.dk" className="hover:text-blue-400">kontakt@nexusmarketing.dk</a>
              </div>

              <div>
                <a href="https://www.nexusmarketing.dk" className="hover:text-blue-400">www.nexusmarketing.dk</a>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Nyhedsbrev</h3>
            <p className="mb-4">Tilmeld dig vores nyhedsbrev for at få de seneste nyheder og tilbud.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Din email" 
                className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
              >
                Tilmeld
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p>&copy; {new Date().getFullYear()} Nexus Marketing. Alle rettigheder forbeholdes.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Privatlivspolitik</a>
            <a href="#" className="text-gray-300 hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;