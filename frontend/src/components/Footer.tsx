import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Our Clients', href: '/clients' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ];

  const services = [
    { name: 'Deliver', href: '/services/deliver' },
    { name: 'Bring', href: '/services/bring' },
    { name: 'Express', href: '/services/express' },
    { name: 'Package', href: '/services/package' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'thevittavardhan@gmail.com', href: 'mailto:thevittavardhan@gmail.com' },
    { icon: Phone, text: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: MapPin, text: 'Mumbai, Maharashtra, India', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/thevittavardhan', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/thevittavardhan', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/thevittavardhan', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/thevittavardhan', label: 'Instagram' },
  ];

  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img 
                src="/logo.png" 
                alt="THE VITTAVARDHAN Logo" 
                className="w-10 h-10 object-contain"
              />
              </div>
              <span className="font-bold text-xl">The VittaVardhan</span>
            </div>
            <p className="text-gray-600 mb-4">
              Your trusted partner for innovative solutions and exceptional service. 
              We deliver excellence in every project we undertake.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-gray-800 hover:bg-primary text-white transition-colors duration-200 p-2 rounded-full"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact Info</h3>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <info.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  {info.href.startsWith('mailto:') || info.href.startsWith('tel:') ? (
                    <a
                      href={info.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-gray-300">{info.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} The VittaVardhan. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
