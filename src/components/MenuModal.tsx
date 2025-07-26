import { useEffect, useState } from "react";
import { X, Coffee, Salad, Cookie, Wine, Cake, HelpCircle, ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";


interface MenuModalProps {
  onClose: () => void;
}

interface MenuItem {
  name: string;
  marathi: string;
  price: string;
  description: string;
}

interface MenuData {
  veg: { [category: string]: MenuItem[] };
  nonVeg: { [category: string]: MenuItem[] };
}

const categoryIcons = {
  // Veg categories
  papadSaladRaita: Salad,
  vegStarters: Coffee,
  vegTandoorStarters: Coffee,
  vegSoups: Coffee,
  chineseStarters: Coffee,
  chineseNoodlesAndRice: Cookie,
  mangoTreeSpecialVeg: Coffee,
  sweetSubji: Coffee,
  dalItems: Coffee,
  subjiKiPeshkash: Coffee,
  paneerSpecialities: Coffee,
  rotiNaanParatha: Cookie,
  ricePulavBiryani: Cookie,
  iceCreamAndDesserts: Cake,
  coldBeverages: Wine,
  mastaniAndFalooda: Wine,
  sizzlers: Coffee,
  
  // Non-veg categories
  chickenStarters: Coffee,
  chickenTandoor: Coffee,
  muttonSpecials: Coffee,
  seafoodItems: Coffee,
  nonVegSoups: Coffee,
  chickenCurry: Coffee,
  muttonCurry: Coffee,
  fishCurry: Coffee,
  nonVegBiryani: Cookie,
  nonVegSizzlers: Coffee,
};

const MenuModal = ({ onClose }: MenuModalProps) => {
  const [activeCategory, setActiveCategory] = useState("");
  const [menuData, setMenuData] = useState<MenuData | null>(null);
  const [menuType, setMenuType] = useState<'veg' | 'nonVeg'>('veg');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCategories, setShowCategories] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    console.log("Fetching menu data...");
    setLoading(true);
    fetch(
      "https://raw.githubusercontent.com/ankits-lab2/hotelMenus/refs/heads/main/mangoTreeRestro"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Data fetched:", data);
        setMenuData(data);
        setError(null);
      })
      .catch((err) => {
        console.error("Failed to load menu:", err);
        setError("Failed to load menu. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Set first category when menu data changes
  useEffect(() => {
    if (menuData && menuData[menuType]) {
      const categories = Object.keys(menuData[menuType]);
      console.log(`Available ${menuType} categories:`, categories);
      if (categories.length > 0) {
        setActiveCategory(categories[0]);
      }
    }
  }, [menuData, menuType]);

  const currentMenuData = menuData?.[menuType];

  // Handle menu type switching with proper logging
  const handleMenuTypeChange = (type: 'veg' | 'nonVeg') => {
    console.log(`Switching from ${menuType} to ${type}`);
    console.log('Menu data available:', !!menuData);
    console.log('Target menu data available:', !!menuData?.[type]);
    
    setMenuType(type);
    setShowCategories(false);
    
    // Force category reset after menu type change
    if (menuData && menuData[type]) {
      const categories = Object.keys(menuData[type]);
      console.log(`${type} categories:`, categories);
      if (categories.length > 0) {
        setActiveCategory(categories[0]);
      }
    }
  };

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    setShowCategories(false);
  };

  const getCategoryDisplayName = (category: string) => {
    return category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  };

  // Debug current state
  console.log('Current state:', {
    menuType,
    activeCategory,
    hasMenuData: !!menuData,
    hasCurrentMenuData: !!currentMenuData,
    vegAvailable: !!menuData?.veg,
    nonVegAvailable: !!menuData?.nonVeg
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full h-full md:rounded-2xl md:shadow-2xl md:w-full md:max-w-6xl md:h-[95vh] md:m-4 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#ff8c00] via-[#2e7d32] to-[#121212] text-white p-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl md:text-3xl font-bold">Our Menu</h2>
            <p className="text-red-100 text-sm">आमचा मेनू</p>
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-red-600 rounded-full p-2"
          >
            <X size={20} className="md:w-6 md:h-6" />
          </Button>
        </div>

        {/* Veg/Non-Veg Toggle Buttons */}
        <div className="flex justify-center bg-gray-50 py-3 border-b">
          <div className="flex bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => handleMenuTypeChange('veg')}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-200 text-sm md:text-base ${
                menuType === 'veg'
                  ? 'bg-green-500 text-white shadow-md'
                  : 'text-green-600 hover:bg-green-50'
              }`}
              disabled={loading}
            >
              🥬 Vegetarian
            </button>
            <button
              onClick={() => handleMenuTypeChange('nonVeg')}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-200 text-sm md:text-base ${
                menuType === 'nonVeg'
                  ? 'bg-red-500 text-white shadow-md'
                  : 'text-red-600 hover:bg-red-50'
              } ${!menuData?.nonVeg && !loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              🍖 Non-Vegetarian
            </button>
          </div>
        </div>

        {/* Mobile Category Selector */}
        {isMobile && currentMenuData && (
          <div className="bg-white border-b p-3">
            <button
              onClick={() => setShowCategories(true)}
              className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
            >
              <div className="flex items-center space-x-2">
                {(() => {
                  const Icon = categoryIcons[activeCategory as keyof typeof categoryIcons] || Salad;
                  return <Icon size={18} />;
                })()}
                <span className="font-medium text-sm">
                  {getCategoryDisplayName(activeCategory)}
                </span>
              </div>
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* Desktop Category Tabs */}
        {!isMobile && (
          <div className="bg-gray-50 border-b overflow-hidden" style={{ height: '100px' }}>
            <div className="flex space-x-2 p-3 overflow-x-auto scrollbar-hide h-full">
              {currentMenuData &&
                Object.entries(currentMenuData).map(([category, items]) => {
                  const Icon = categoryIcons[category as keyof typeof categoryIcons] || Salad;
                  const displayName = getCategoryDisplayName(category);
                  
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`flex flex-col items-center justify-center space-y-1 px-3 py-2 text-xs font-medium transition-all duration-200 rounded-lg border-2 min-w-fit whitespace-nowrap ${
                        activeCategory === category
                          ? "border-red-500 text-red-600 bg-white shadow-md"
                          : "border-transparent text-gray-600 hover:text-red-500 hover:bg-white hover:border-red-200"
                      }`}
                    >
                      <Icon size={16} className="flex-shrink-0" />
                      <span className="text-center leading-tight">
                        {displayName}
                      </span>
                    </button>
                  );
                })}
            </div>
          </div>
        )}

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto" style={{ height: isMobile ? 'calc(100vh - 180px)' : 'calc(95vh - 280px)' }}>
          <div className="p-4">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
                  <p className="text-gray-500 text-lg">Loading menu...</p>
                </div>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <p className="text-red-500 text-lg mb-4">{error}</p>
                  <Button 
                    onClick={() => window.location.reload()} 
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    Try Again
                  </Button>
                </div>
              </div>
            ) : !currentMenuData ? (
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <p className="text-gray-500 text-lg">
                    {menuType === 'nonVeg' ? 'Non-vegetarian menu not available!' : 'No menu data available'}
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentMenuData[activeCategory]?.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1 pr-2">
                        <h3 className="text-base font-semibold text-gray-800 leading-tight">
                          {item.name}
                        </h3>
                        {item.marathi && (
                          <p className="text-sm text-red-600 font-medium mt-1">
                            {item.marathi}
                          </p>
                        )}
                      </div>
                      <span className="text-lg font-bold text-green-600 flex-shrink-0">
                        {item.price}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                )) || (
                  <div className="col-span-full text-center py-8">
                    <p className="text-gray-500">No items available in this category</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Categories Popup */}
        {showCategories && isMobile && (
          <div className="fixed inset-0 z-60 bg-black bg-opacity-50 flex items-end">
            <div className="bg-white w-full rounded-t-2xl max-h-[80vh] overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b bg-gray-50">
                <h3 className="text-lg font-semibold">Select Category</h3>
                <Button
                  onClick={() => setShowCategories(false)}
                  variant="ghost"
                  size="sm"
                  className="p-2"
                >
                  <X size={20} />
                </Button>
              </div>
              <div className="overflow-y-auto max-h-[60vh] p-4">
                <div className="space-y-2">
                  {currentMenuData &&
                    Object.entries(currentMenuData).map(([category, items]) => {
                      const Icon = categoryIcons[category as keyof typeof categoryIcons] || Salad;
                      const displayName = getCategoryDisplayName(category);
                      
                      return (
                        <button
                          key={category}
                          onClick={() => handleCategorySelect(category)}
                          className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                            activeCategory === category
                              ? "bg-red-50 border-2 border-red-200 text-red-600"
                              : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                          }`}
                        >
                          <Icon size={20} />
                          <div className="flex-1 text-left">
                            <span className="font-medium">{displayName}</span>
                            <p className="text-xs text-gray-500">
                              {items.length} items
                            </p>
                          </div>
                          {activeCategory === category && (
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          )}
                        </button>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default MenuModal;