
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const target = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-24 pb-12 bg-gradient-to-b from-[#0b3f59] to-[#16498c]">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm text-blue-200 mb-8 animate-pulse">
          إذا كانت ميزانيتك الإعلانية تُصرف… دون نتائج حقيقية، فقد حان الوقت لتغيير الطريقة
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          اكتشف كيف يمكن لـ 
          <span className="text-[#dcfe11]"> المحترفين </span>
          <br /> تحويل وكالتك إلى آلة حجوزات فعّالة
        </h1>

        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
          سترى بنفسك كيف يمكن لحلول بسيطة ومنظمة أن تغيّر أداء وكالتك خلال فترة قصيرة…
          <span className="text-[#dcfe11] font-bold"> وكل ذلك مجاناً وبشكل رقمي.</span>
        </p>

        <a href="#registration" className="inline-flex items-center gap-3 px-10 py-5 bg-[#dcfe11] text-[#0b3f59] font-bold text-xl rounded-full shadow-[0_10px_40px_rgba(220,254,17,0.3)] hover:scale-105 transition-transform">
          سجّل الآن — الحضور مجاني
          <i className="fas fa-arrow-left"></i>
        </a>

        <div className="mt-16">
          <p className="text-sm text-blue-300 mb-4">الوقت المتبقي للتسجيل المبكر:</p>
          <div className="flex justify-center gap-4">
            {[
              { label: 'يوم', value: timeLeft.days },
              { label: 'ساعة', value: timeLeft.hours },
              { label: 'دقيقة', value: timeLeft.minutes },
              { label: 'ثانية', value: timeLeft.seconds }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-bold">
                  {String(item.value).padStart(2, '0')}
                </div>
                <span className="text-xs text-blue-200 mt-2">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
