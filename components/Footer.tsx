
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#0b3f59] border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#dcfe11] hover:text-[#0b3f59] transition-all">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#dcfe11] hover:text-[#0b3f59] transition-all">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#dcfe11] hover:text-[#0b3f59] transition-all">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="text-blue-300 text-sm">© 2026 جميع الحقوق محفوظة - Salon d'Emploi des Media Buyers</p>
        <p className="text-xs text-blue-500 mt-2 italic">الحدث رقمي 100% - استثمر في مهاراتك من أي مكان</p>
      </div>
    </footer>
  );
};

export default Footer;
