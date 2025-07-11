
import { Button } from '@/components/ui/button';
import { Utensils, Star, Clock } from 'lucide-react';

interface HeroProps {
  onMenuClick: () => void;
}

const Hero = ({ onMenuClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100">
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b35' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-red-600 mb-3 sm:mb-4 animate-fade-in">
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
              <span className="font-medium text-sm sm:text-base">Fresh Ingredients</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <Utensils size={20} />
              <span className="font-medium text-sm sm:text-base">Traditional Recipes</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <Clock size={20} />
              <span className="font-medium text-sm sm:text-base">Quick Service</span>
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
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 bg-red-400 rounded-full opacity-20 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-2 sm:left-5 w-10 h-10 sm:w-16 sm:h-16 bg-green-400 rounded-full opacity-20 animate-pulse delay-500" />
    </section>
  );
};

export default Hero;
