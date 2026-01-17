
import React from 'react';

const features = [
  { icon: 'target', title: 'استهداف دقيق', desc: 'ستتمكن من استهدف الزبائن المستعدين للحجز الآن' },
  { icon: 'chart-line', title: 'نتائج قابلة للقياس', desc: 'حوّل حملاتك من صرف ميزانية إلى نتائج ملموسة' },
  { icon: 'award', title: 'صورة قوية', desc: 'ابنِ صورة قوية لوكالتك وسط المنافسة الشديدة' },
  { icon: 'users', title: 'خبراء حقيقيون', desc: 'تواصل مع خبراء يفهمون البيانات ويتقنون التحليل' }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0b3f59] to-[#1875bb]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-black mb-4">لماذا هذا الحدث <span className="text-[#dcfe11]">مختلف</span>؟</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">لن تستمع إلى نظريات عامة، بل ستلتقي مباشرة مع محترفين اشتغلو مع أكبر الوكالات في الوطن العربي</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-[#dcfe11]/50 transition-all reveal">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0094d9] to-[#1875bb] rounded-2xl flex items-center justify-center mb-6">
                <i className={`fas fa-${f.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
