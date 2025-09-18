import { Button } from "@/components/ui/button";
import { Utensils, Star, Clock, FacebookIcon } from "lucide-react";
import { Instagram, Facebook, MessageCircle, MapPin, Mail } from "lucide-react";
import image2 from "./assests/2.png";
import image3 from "./assests/1.png";
import imageLogo from "./assests/logo.png";
import WhatsAppLink from "./WhatsAppLink";
import { FcGoogle } from "react-icons/fc"; // Google colored G icon
import { SocialIcon } from "react-social-icons";
import instaggram from "./assests/instgram.png";
import maps from "./assests/maps.png";
import googleMaps from "./assests/googleMaps.png";
import facebook from "./assests/facebook.png";
import SpecialOffer from "./WhatsAppLinkSpicailOffer";
interface HeroProps {
  onMenuClick: () => void;
}

const Hero = ({ onMenuClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 h-screen  bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 ">
        {/* <img src={image2} className="hidden md:block" />
        <img src={image3} className="md:hidden w-full h-full object-cover" /> */}
      </div>

      <div className="container mx-auto  text-center relative z-10">
        <div className="flex justify-center text-center items-center">
          <img src={imageLogo} className="w-40" />
        </div>
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl  sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 animate-fade-in">
            Shree Vitthal Pure Veg
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-yellow-400 mb-4 sm:mb-6 animate-fade-in delay-200">
           श्री विठ्ठल शुद्ध शाकाहारी
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-yellow-100 mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in delay-300 px-4">
            आम्ही चवीने माणसे जोडतो
          </p>

          {/* Features */}
          {/* <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 animate-fade-in delay-400">
            <div className="flex items-center justify-center space-x-2 text-lime-100">
              <Star className="fill-current" size={20} />
              <span className="font-medium text-sm sm:text-base">
                Fresh Ingredients
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-lime-100">
              <Utensils size={20} />
              <span className="font-medium text-sm sm:text-base">
                Traditional Recipes
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-lime-100">
              <Clock size={20} />
              <span className="font-medium text-sm sm:text-base">
                Quick Service
              </span>
            </div>
          </div> */}

          {/* CTA Button */}
          <Button
            onClick={onMenuClick}
            className="bg-gradient-to-br from-[#43a047] via-[#f57c00] to-[#1a1a1a] hover:from-red-600 hover:to-orange-600 text-white text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-fade-in delay-500"
          >
            <Utensils className="mr-2 sm:mr-3" size={20} />
            <span className="hidden sm:inline">View Menu • मेनू पहा</span>
            <span className="sm:hidden">View Menu</span>
          </Button>

          <SpecialOffer />
          {/* Social Media */}
          <div className="text-center mt-10 ">
            <h4 className="text-lg text-white sm:text-xl font-semibold mb-3 sm:mb-4">
              To Follow Us Click on Below Buttons
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                            <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 flex justify-center items-center">

              <a
                href="https://www.instagram.com/shreevitthalpureveg"
                className="w-10 h-10 sm:w-12 sm:h-12  rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
              >
                <img src={instaggram} alt="" />
                {/* <Instagram
                  size={32}
                  color="white"
                  className="sm:w-10 sm:h-10"
                /> */}
                {/* <SocialIcon url="https://www.instagram.com/" /> */}
              </a>
              </div>
              <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 flex justify-center items-center">

              <a
                href="https://maps.app.goo.gl/LUw6sXYdAUzHwGAt9"
                className="w-10 h-10 sm:w-12 sm:h-12  rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
              >
                <img src={maps} alt="" />
                {/* <MapPin size={32} color="white" className="sm:w-10 sm:h-10" /> */}
              </a>
              </div>
              {/* <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 flex justify-center items-center">
              <a
                href="mailto:mangotreeresturant2024@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12  rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
              >
                <img src={googleMaps} alt="" />
              </a>
              </div> */}
                {/* <Mail size={32} color="white" className="sm:w-10 sm:h-10" /> */}
              <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 flex justify-center items-center">
                <a
                  href="https://www.facebook.com/share/1BSZzzgeUT/?mibextid=wwXIfr"
                  className="w-10 h-10 sm:w-12 sm:h-12  rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
                >
                  <img src={facebook} alt="" />
                  {/* <FacebookIcon
                  size={32}
                  color="white"
                  className="sm:w-10 sm:h-10"
                /> */}
                </a>
              </div>

              <a
                href="https://maps.app.goo.gl/LUw6sXYdAUzHwGAt9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-300 bg-white px-3 py-2 rounded hover:shadow transition-all duration-300 text-sm sm:text-base"
              >
                <FcGoogle size={24} />
                <span className="text-gray-800 font-medium whitespace-nowrap">
                  Check Reviews
                </span>
              </a>
              <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 flex justify-center items-center">

              <WhatsAppLink />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
    </section>
  );
};

export default Hero;
