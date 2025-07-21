
import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuModal from '@/components/MenuModal';
import Footer from '@/components/Footer';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* <Header /> */}
      <Hero onMenuClick={() => setIsMenuOpen(true)} />
      {isMenuOpen && <MenuModal onClose={() => setIsMenuOpen(false)} />}
      <Footer />
    </div>
  );
};

export default Index;
