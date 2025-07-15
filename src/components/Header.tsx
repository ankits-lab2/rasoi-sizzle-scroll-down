
import { Menu, Phone } from 'lucide-react';
import Logo from './assests/logo.png';
const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b-4 border-red-500">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12  rounded-full flex items-center justify-center">
            {/* <span className="text-white font-bold text-lg sm:text-xl">Dr</span> */}
            <img src={Logo} className='w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center' />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-red-600">Mango Tree Resto</h1>
            <p className="text-xs sm:text-sm text-gray-600">मॅंगो ट्री रेस्टो</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="hidden lg:flex items-center space-x-2 text-green-600">
            <Phone size={18} />
            <span className="font-semibold">+91 7262025151</span>
          </div>
          {/* <button className="lg:hidden p-2 text-red-600">
            <Menu size={24} />
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
