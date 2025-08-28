import { Instagram, Facebook, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
          {/* Brand Section */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold">Shree Vitthal Pure Veg</h3>
            <p className="text-red-100 text-sm sm:text-base">श्री विठ्ठल शुद्ध शाकाहारी</p>
            <p className="text-red-200 text-sm sm:text-base">
              आम्ही चवीने माणसे जोडतो
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-right space-y-2">
            <h4 className="text-lg sm:text-xl font-semibold">Contact Us</h4>

            <p className="text-red-100 text-sm sm:text-base">📞 7043433001/7043433009</p>
            {/* <p className="text-red-100 text-sm sm:text-base">
              📧 mangotreeresturant2024@gmail.com
            </p> */}

            <div className="flex flex-col items-center md:items-end">
              <div className="flex items-start gap-2 max-w-sm md:max-w-none text-center md:text-right">
                <MapPin className="w-5 h-5 mt-1 text-red-200 flex-shrink-0 " />
                <p className="text-white text-sm sm:text-base">
                  Shree vitthal pure veg restaurant and banquet hall,Narhe Ambegaon Rd, opposite Star market, Ambegaon Budruk, Pune, Maharashtra 411046                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-red-400 pt-6 text-center text-white text-sm sm:text-base">
          <p className="mb-1">
            &copy; 2025 Shree Vitthal Pure Veg. All rights reserved. | Made with ❤️ by{" "}
            <a
              href="https://www.sydnytech.com/"
              className="text-white underline hover:text-red-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sydnytech
            </a>
          </p>

          {/* Uncomment if you want to show GitHub credit */}
          {/* <p>
            X{" "}
            <a
              href="https://github.com/lazydev-ak"
              className="text-white underline hover:text-red-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              @lazydev-ak
            </a>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
