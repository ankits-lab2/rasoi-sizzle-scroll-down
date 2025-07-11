import { Instagram, Facebook, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Dr. G Ki Rasoi
            </h3>
            <p className="text-red-100 mb-3 sm:mb-4 text-sm sm:text-base">
              डॉ. जी की रसोई
            </p>
            <p className="text-red-200 text-sm sm:text-base">
              Authentic Marathi cuisine served with love and tradition.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Contact Us
            </h4>
            <div className="space-y-2 text-red-100 text-sm sm:text-base">
              <p>📞 +91 98765 43210</p>
              <p>📧 info@drgikirasi.com</p>
              <div className=" md:relative  flex justify-center md:justify-end">
                <div className=" md:w-44 flex justify-center md:justify-end gap-1 md:right-0 md:absolute">
                  <MapPin size={16} className="relative " />
                  <span>Pune, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-400 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-red-100 text-sm sm:text-base">
          <p>
            &copy; 2024 Dr. G Ki Rasoi. All rights reserved. | Made with ❤️ in
            Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
