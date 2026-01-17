
import React from 'react';

const faqData = [
  {
    question: "هل الحضور مجاني فعلاً؟",
    answer: "نعم، الحدث مجاني بالكامل 100%. هدفنا هو بناء علاقات مع أصحاب الوكالات الجادين ومساعدتهم على النمو."
  },
  {
    question: "هل الحدث مناسب للمبتدئين؟",
    answer: "هذا الحدث موجّه لأصحاب الوكالات والميديا بايرز الراغبين في تحسين نتائجهم. الهدف هو التعاون العملي، تنفيذ الحملات، وتحقيق نتائج حقيقية. المبتدئ سيستفيد من رؤية كيف يعمل المحترفون خلف الكواليس."
  },
  {
    question: "كيف سأحضر الحدث؟",
    answer: "بمجرد التسجيل، ستصلك رسالة تأكيد فورية عبر البريد الإلكتروني. الرابط المباشر للجلسة سيتم إرساله قبل الموعد بـ 24 ساعة."
  },
  {
    question: "ماذا لو لم أتمكن من الحضور في الوقت المحدد؟",
    answer: "نوصي بشدة بالحضور المباشر للتفاعل وطرح الأسئلة، ولكننا قد نوفر تسجيلات محدودة للمسجلين فقط لفترة قصيرة بعد الحدث."
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center text-[#0b3f59] mb-4 reveal">أسئلة شائعة</h2>
          <p className="text-center text-gray-500 mb-12 reveal">كل ما تود معرفته حول كيفية الاستفادة القصوى من الجلسة</p>
          
          <div className="space-y-4 reveal">
            {faqData.map((item, index) => (
              <details key={index} className="group bg-slate-50 p-6 rounded-2xl border border-slate-200 transition-all hover:shadow-md">
                <summary className="font-bold text-lg text-gray-800 flex justify-between items-center list-none cursor-pointer">
                  <span>{item.question}</span>
                  <i className="fas fa-plus text-blue-500 transition-transform group-open:rotate-45"></i>
                </summary>
                <div className="mt-4 text-gray-600 leading-relaxed text-base border-t border-slate-200 pt-4">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
