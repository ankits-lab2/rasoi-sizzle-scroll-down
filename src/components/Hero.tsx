import { Button } from "@/components/ui/button";
import { Utensils, Star, Clock } from "lucide-react";
import { Instagram, Facebook, MessageCircle, MapPin } from "lucide-react";
import image2 from "./assests/2.png";
import image3 from "./assests/1.png";
interface HeroProps {
  onMenuClick: () => void;
}

const Hero = ({ onMenuClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 h-screen ">
        <img src={image2} className="hidden md:block" />
        <img src={image3} className="md:hidden w-full h-full object-cover" />
      </div>

      <div className="container mx-auto  text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl  sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-red-600 mb-3 sm:mb-4 animate-fade-in">
            Dr. G Ki Rasoi
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-orange-600 mb-4 sm:mb-6 animate-fade-in delay-200">
            डॉ. जी की रसोई
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in delay-300 px-4">
            Authentic Marathi Flavors • स्वादिष्ट महाराष्ट्रीयन जेवण
          </p>

          {/* Features */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 animate-fade-in delay-400">
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <Star className="fill-current" size={20} />
              <span className="font-medium text-sm sm:text-base">
                Fresh Ingredients
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <Utensils size={20} />
              <span className="font-medium text-sm sm:text-base">
                Traditional Recipes
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <Clock size={20} />
              <span className="font-medium text-sm sm:text-base">
                Quick Service
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={onMenuClick}
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-fade-in delay-500"
          >
            <Utensils className="mr-2 sm:mr-3" size={20} />
            <span className="hidden sm:inline">View Menu • मेनू पहा</span>
            <span className="sm:hidden">View Menu</span>
          </Button>

          {/* Social Media */}
          <div className="text-center mt-10 ">
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Follow Us
            </h4>
            <div className="flex justify-center  space-x-3 sm:space-x-4">
              <a
                href="https://www.instagram.com/dr.g_ki_rasoi_/#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
              >
                <Instagram size={32} className="sm:w-10 sm:h-10" />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
              >
                <Facebook size={32} className="sm:w-10 sm:h-10" />
              </a> */}
              <a
                href="https://web.whatsapp.com/send?phone=918421801594&text=Hi%2C"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
              >
                <MessageCircle size={32} className="sm:w-10 sm:h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
    </section>
  );
};

export default Hero;
