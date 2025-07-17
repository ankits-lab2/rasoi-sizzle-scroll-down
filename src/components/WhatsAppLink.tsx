import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppLink = () => {
  const [whatsappUrl, setWhatsappUrl] = useState("");

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const number = "917262025151";
    const message = encodeURIComponent("Hi,");

    const url = isMobile
      ? `https://wa.me/${number}?text=${message}`      // opens WhatsApp mobile app
      : `https://web.whatsapp.com/send?phone=${number}&text=${message}`; // opens WhatsApp Web

    setWhatsappUrl(url);
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
    >
      <MessageCircle size={32} color="white"  className="sm:w-10 sm:h-10" />
    </a>
  );
};

export default WhatsAppLink;
