
import { Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Dr. G Ki Rasoi</h3>
            <p className="text-red-100 mb-4">डॉ. जी की रसोई</p>
            <p className="text-red-200">
              Authentic Marathi cuisine served with love and tradition.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-red-100">
              <p>📞 +91 98765 43210</p>
              <p>📧 info@drgikirasi.com</p>
              <div className="flex items-center justify-center space-x-2">
                <MapPin size={16} />
                <span>Pune, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110 font-bold text-lg"
              >
                G
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-red-400 mt-8 pt-8 text-center text-red-100">
          <p>&copy; 2024 Dr. G Ki Rasoi. All rights reserved. | Made with ❤️ in Maharashtra</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
