import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Nexny</h3>
            <p className="mb-4">Din vækstpartner inden for telesalg, mødebooking, webudvikling, leadgenerering og AI-udviklingsopgaver.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61559179262196" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/company/nexusmarketing-dk" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Hurtige Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Forside</Link></li>
              <li><Link to="/ydelser" className="text-gray-300 hover:text-white">Ydelser</Link></li>
              <li><Link to="/jobs/arbejd-hjemmefra" className="text-gray-300 hover:text-white">For Sælgere</Link></li>
              <li><Link to="/samarbejdspartner" className="text-gray-300 hover:text-white">Samarbejdspartner</Link></li>
              <li><Link to="/priser" className="text-gray-300 hover:text-white">Priser</Link></li>
              <li><Link to="/om-os" className="text-gray-300 hover:text-white">Om os</Link></li>
              <li><Link to="/kontakt" className="text-gray-300 hover:text-white">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Kontaktoplysninger</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Nexny Spanien</h4>
                <div className="flex items-start">
                  <MapPin size={20} className="mr-2 mt-1 text-blue-400 flex-shrink-0" />
                  <p className="text-gray-300">Spanien</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Nexny Danmark</h4>
                <div className="flex items-start">
                  <MapPin size={20} className="mr-2 mt-1 text-blue-400 flex-shrink-0" />
                  <p className="text-gray-300">Danmark</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 text-blue-400 flex-shrink-0" />
                <a href="mailto:kontakt@nexny.dk" className="text-gray-300 hover:text-white">kontakt@nexny.dk</a>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-2 text-blue-400 flex-shrink-0" />
                <a href="tel:+4570123456" className="text-gray-300 hover:text-white">+45 70 12 34 56</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Vores Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ydelser" className="text-gray-300 hover:text-white">Telemarketing</Link></li>
              <li><Link to="/modebooking-priser" className="text-gray-300 hover:text-white">Mødebooking</Link></li>
              <li><Link to="/leadgenerering" className="text-gray-300 hover:text-white">Leadgenerering</Link></li>
              <li><Link to="/digital/webudvikling" className="text-gray-300 hover:text-white">Webudvikling</Link></li>
              <li><Link to="/digital/ai-integration" className="text-gray-300 hover:text-white">AI Integration</Link></li>
              <li><Link to="/hvorfor-nexusmarketing" className="text-gray-300 hover:text-white">Outsourcing af salg</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Nexny. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
