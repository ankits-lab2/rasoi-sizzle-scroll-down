
import { useState } from 'react';
import { X, Coffee, Salad, Bread, Wine, Cake } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MenuModalProps {
  onClose: () => void;
}

const menuData = {
  starters: [
    { name: "Bhel Puri", marathi: "भेळ पुरी", price: "₹120", description: "Crispy puffed rice with tangy chutneys" },
    { name: "Misal Pav", marathi: "मिसळ पाव", price: "₹150", description: "Spicy curry with bread rolls" },
    { name: "Vada Pav", marathi: "वडा पाव", price: "₹80", description: "Mumbai's favorite street food" },
    { name: "Kachori", marathi: "कचोरी", price: "₹100", description: "Crispy filled pastries" }
  ],
  mainCourse: [
    { name: "Puran Poli", marathi: "पुरण पोळी", price: "₹180", description: "Sweet lentil stuffed flatbread" },
    { name: "Bharli Vangi", marathi: "भरली वांगी", price: "₹220", description: "Stuffed baby eggplants" },
    { name: "Kolhapuri Mutton", marathi: "कोल्हापुरी मटण", price: "₹350", description: "Spicy Kolhapuri style mutton curry" },
    { name: "Pandhra Rassa", marathi: "पांढरा रस्सा", price: "₹280", description: "White curry with coconut" }
  ],
  breads: [
    { name: "Bhakri", marathi: "भाकरी", price: "₹40", description: "Traditional millet flatbread" },
    { name: "Chapati", marathi: "चपाती", price: "₹25", description: "Soft wheat flatbread" },
    { name: "Naan", marathi: "नान", price: "₹60", description: "Leavened bread" },
    { name: "Jowar Roti", marathi: "ज्वार रोटी", price: "₹35", description: "Sorghum flatbread" }
  ],
  beverages: [
    { name: "Solkadhi", marathi: "सोल कढी", price: "₹80", description: "Coconut curry leaf drink" },
    { name: "Masala Chai", marathi: "मसाला चहा", price: "₹40", description: "Spiced tea" },
    { name: "Kokum Sherbet", marathi: "कोकम शरबत", price: "₹70", description: "Refreshing kokum drink" },
    { name: "Buttermilk", marathi: "ताक", price: "₹50", description: "Spiced yogurt drink" }
  ],
  desserts: [
    { name: "Modak", marathi: "मोदक", price: "₹120", description: "Steamed rice flour dumplings" },
    { name: "Puran Poli", marathi: "पुरण पोळी", price: "₹150", description: "Sweet lentil flatbread" },
    { name: "Shrikhand", marathi: "श्रीखंड", price: "₹100", description: "Sweetened yogurt dessert" },
    { name: "Basundi", marathi: "बासुंदी", price: "₹130", description: "Thick sweetened milk" }
  ]
};

const categoryIcons = {
  starters: Salad,
  mainCourse: Coffee,
  breads: Bread,
  beverages: Wine,
  desserts: Cake
};

const MenuModal = ({ onClose }: MenuModalProps) => {
  const [activeCategory, setActiveCategory] = useState('starters');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">Our Menu</h2>
            <p className="text-red-100">आमचा मेनू</p>
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm" 
            className="text-white hover:bg-red-600 rounded-full p-2"
          >
            <X size={24} />
          </Button>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto border-b bg-gray-50 px-4">
          {Object.entries(menuData).map(([category, items]) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                  activeCategory === category
                    ? 'border-red-500 text-red-600 bg-white'
                    : 'border-transparent text-gray-600 hover:text-red-500'
                }`}
              >
                <Icon size={18} />
                <span className="capitalize">
                  {category === 'mainCourse' ? 'Main Course' : category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Menu Items */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {menuData[activeCategory as keyof typeof menuData].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-red-600 font-medium">{item.marathi}</p>
                  </div>
                  <span className="text-xl font-bold text-green-600">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 text-center border-t">
          <p className="text-gray-600">
            Call us for orders: <span className="font-semibold text-green-600">+91 98765 43210</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
