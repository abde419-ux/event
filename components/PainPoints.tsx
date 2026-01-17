
import React from 'react';

const PainPoints: React.FC = () => {
  const problems = [
    "كليكات كثيرة… زيارات عديدة… لكن الحجوزات قليلة",
    "الميزانية تتناقص دون تفسير منطقي",
    "الاستهداف العشوائي والحملات غير المنظمة",
    "الاعتماد على التجريب بدل التخطيط",
    "فوضى في الميزانية وضغط مستمر"
  ];

  const solutions = [
    "الحملات تصبح محسوبة ومدروسة",
    "الزبائن الجادّون يصلون يومياً",
    "الميزانية تُستثمر لا تُهدر",
    "نتائج الوكالة تتضاعف دون رفع المصاريف",
    "استراتيجية واضحة ومنهجية احترافية"
  ];

  return (
    <section className="py-24 bg-[#0b3f59]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-3xl md:text-5xl font-black mb-8">هل تعاني وكالتك من هذه <span className="text-red-400">المشاكل</span>؟</h2>
            <div className="space-y-4">
              {problems.map((p, i) => (
                <div key={i} className="flex items-center gap-4 bg-red-500/10 border border-red-500/20 p-4 rounded-2xl">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <p className="text-blue-100">{p}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-[#dcfe11]">هذا ما سيتغير بعد الحدث</h2>
            <div className="space-y-4">
              {solutions.map((s, i) => (
                <div key={i} className="flex items-center gap-4 bg-[#dcfe11]/10 border border-[#dcfe11]/20 p-4 rounded-2xl">
                  <div className="w-3 h-3 bg-[#dcfe11] rounded-full"></div>
                  <p className="text-blue-50">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
