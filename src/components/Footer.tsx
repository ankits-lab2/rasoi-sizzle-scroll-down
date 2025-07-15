import { Instagram, Facebook, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 h-fit">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Mango Tree Resto
            </h3>
            <p className="text-red-100 mb-3 sm:mb-4 text-sm sm:text-base">
              मॅंगो ट्री रेस्टो
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
              <p>📞 +91 7262025151</p>
              <p>📧 info@drgikirasi.com</p>
              <div className=" md:relative  flex justify-center md:justify-end">
                <div className=" md:min-w-fit flex justify-center md:justify-end gap-1 md:right-0 md:absolute">
                  <MapPin size={16} className="relative " />
                  <div className="w-1/3">
                    Ambegaon Bk, Aamraai Sosayati opposite,Pune,
                     Maharashtra 411046
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-400 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-white text-sm sm:text-base">
          <p>
            &copy; 2025 Mango Tree Resto. All rights reserved. | Made with ❤️
            
             <a
              href="https://www.sydnytech.com/"
              className="text-white hover:underline"
            >
              Sydnytech 
            </a>
            {/* {" "} X {" "}
            <a
              href="https://github.com/lazydev-ak"
              className="text-white hover:underline"
            >
              @lazydev-ak
            </a> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
