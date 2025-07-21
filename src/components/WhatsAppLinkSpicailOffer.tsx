import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import whatsapp from './assests/whatsapp.jpeg';
import { Button } from "./ui/button";

const SpecialOffer = () => {
  const [whatsappUrl, setWhatsappUrl] = useState("");

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const number = "917262025151";
    const message = encodeURIComponent("Special Offer");

    const url = isMobile
      ? `https://wa.me/${number}?text=${message}`      // opens WhatsApp mobile app
      : `https://web.whatsapp.com/send?phone=${number}&text=${message}`; // opens WhatsApp Web

    setWhatsappUrl(url);
  }, []);

  return (
    <div className="mt-4 flex justify-center items-center">
      <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
    >
      <Button className="bg-gradient-to-br from-[#43a047] via-[#f57c00] to-[#1a1a1a] hover:from-red-600 hover:to-orange-600 text-white text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-fade-in delay-500">Special Offer</Button>
      {/* <img src={whatsapp} alt="" /> */}
      {/* <MessageCircle size={32} color="white"  className="sm:w-10 sm:h-10" /> */}
    </a>
    </div>
  );
};

export default SpecialOffer;
