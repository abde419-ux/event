
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0b3f59]/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="h-10 md:h-14">
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDdBH19o2tpyK9HdHIA6S4yWB047zGRhx6IFzHUdsR-QUMnEZamjtiEw48ob3b9m0kBxFKFd4UcvWsPAOC57McRfmxYZ7mt5M9mJpe2Ai00XOpnyIZKP9RBTytrgtRutrbC8dEWuOF7Mpmv66qzDWsvLfBWHxwWAokaxctz-6JTXCJm5NJD2zaeD7dltg/s582/Artboard%2010.png" 
            alt="Logo" 
            className="h-full object-contain"
          />
        </div>
        <div className="h-10 md:h-14">
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrgci3enXjDXFz42VM0iIixsGmZgsxVuMo5F_fwZvFsyVagKsI3TONiocz6s1wkzjOLUao0U5KqVyM9De4-2b-bqqNYo278E62JhMdqS90Xh7oAclvIkJNnEOLCh0YRnZHWqEU4CLcuXck80V5VBGW_iPrrO8-bK5nuvV7YUetczRKXEdFD2QGTuaVZcc/s564/Logo%20(4).png" 
            alt="Partner Logo" 
            className="h-full object-contain"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
