
import { Menu, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b-4 border-red-500">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">Dr</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-red-600">Dr. G Ki Rasoi</h1>
            <p className="text-sm text-gray-600">डॉ. जी की रसोई</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-green-600">
            <Phone size={18} />
            <span className="font-semibold">+91 98765 43210</span>
          </div>
          <button className="md:hidden p-2 text-red-600">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
