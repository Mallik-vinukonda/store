import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-10 pb-4">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Store Info */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Sri Ramdoot Dryfruit Store</h3>
            <p className="mb-4">Your trusted source for premium quality dry fruits in Vizag since 2005.</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-secondary mt-1 mr-3" />
                <span>123 Main Street, Dwaraka Nagar, Visakhapatnam, Andhra Pradesh 530016</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-secondary mr-3" />
                <a href="tel:+919876543210" className="text-white hover:text-secondary transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-secondary mr-3" />
                <a href="mailto:info@sriramdoot.com" className="text-white hover:text-secondary transition-colors">info@sriramdoot.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
  <h3 className="text-xl font-display font-semibold mb-4">Quick Links</h3>
  <ul className="space-y-2">
    <li>
      <Link to="/" className="text-white hover:text-secondary transition-colors">Home</Link>
    </li>
    <li>
      <Link to="/products" className="text-white hover:text-secondary transition-colors">Products</Link>
    </li>
    <li>
      <Link to="/about" className="text-white hover:text-secondary transition-colors">About Us</Link>
    </li>
    <li>
      <Link to="/contact" className="text-white hover:text-secondary transition-colors">Contact</Link>
    </li>
    <li>
      <Link to="/faq" className="text-white hover:text-secondary transition-colors">FAQ</Link>
    </li>
    <li>
      <Link to="/privacy-policy" className="text-white hover:text-secondary transition-colors">Privacy Policy</Link>
    </li>
    <li>
      <Link to="/terms" className="text-white hover:text-secondary transition-colors">Terms & Conditions</Link>
    </li>
  </ul>
</div>
          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM - 6:00 PM</span>
              </li>
            </ul>
            
            <h3 className="text-xl font-display font-semibold mt-6 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Free Delivery Banner */}
        <div className="bg-secondary text-white p-2 rounded-lg text-center mb-2">
          <h4 className="font-display font-semibold">FREE DELIVERY IN VIZAG CITY!</h4>
          <p>On all orders above ₹500</p>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-white/20">
          <p>&copy; {new Date().getFullYear()} Sri Ramdoot Dryfruit Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
