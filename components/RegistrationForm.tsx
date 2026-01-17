
import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xojjjrle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً.');
      }
    } catch (err) {
      setError('يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="registration" className="py-24 bg-[#0b3f59]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white rounded-[2rem] p-12 text-center text-[#0b3f59] shadow-2xl reveal active">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-envelope-open-text text-5xl text-green-500"></i>
            </div>
            <h2 className="text-4xl font-black mb-4">تم حجز مقعدك!</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              لقد استلمنا طلبك بنجاح. سنرسل لك تفاصيل الدخول إلى بريدك الإلكتروني قريباً.
            </p>
            <button onClick={() => setSubmitted(false)} className="bg-[#0b3f59] text-white px-8 py-3 rounded-full font-bold">تسجيل طلب آخر</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="py-24 relative overflow-hidden bg-gradient-to-br from-[#0b3f59] to-[#16498c]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden reveal">
          <div className="bg-slate-50 p-10 text-center border-b border-gray-100">
            <h2 className="text-3xl font-black text-[#0b3f59] mb-2">سجّل الآن مجاناً</h2>
            <p className="text-gray-500">نحن لا نقبل إلا الأعداد المحدودة لضمان التركيز</p>
          </div>

          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">الاسم الكامل</label>
                  <input type="text" name="name" className="form-input" placeholder="مثال: أحمد محمد" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">رقم الهاتف (واتساب)</label>
                  <input type="tel" name="phone" className="form-input text-left" dir="ltr" placeholder="+212 6 XX XX XX XX" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">البريد الإلكتروني</label>
                <input type="email" name="email" className="form-input text-left" dir="ltr" placeholder="example@mail.com" required />
              </div>

              <div className="pt-6 border-t border-gray-100 mt-6">
                <p className="text-sm font-bold text-blue-600 mb-6 bg-blue-50 inline-block px-4 py-1.5 rounded-lg">
                  <i className="fas fa-chart-pie ml-2"></i> بيانات إضافية للتخصيص:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">الميزانية الشهرية</label>
                    <select name="budget" className="form-select" required>
                      <option value="" disabled selected>اختر النطاق...</option>
                      <option value="أقل من $1,000">أقل من $1,000</option>
                      <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                      <option value="أكثر من $5,000">أكثر من $5,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">أكبر تحدي يواجهك</label>
                    <select name="challenge" className="form-select" required>
                      <option value="" disabled selected>اختر التحدي...</option>
                      <option value="الكرييتف - Creatives">الكرييتف - Creatives</option>
                      <option value="الاستهداف - Targeting">الاستهداف - Targeting</option>
                      <option value="السكيلينج - Scaling">السكيلينج - Scaling</option>
                      <option value="التتبع - Tracking">التتبع - Tracking</option>
                    </select>
                  </div>
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-bold flex items-center gap-3">
                  <i className="fas fa-exclamation-triangle"></i>
                  {error}
                </div>
              )}

              <div className="pt-8">
                <button type="submit" disabled={loading} className="w-full bg-[#dcfe11] text-[#0b3f59] font-black text-xl py-5 rounded-2xl shadow-[0_15px_30px_rgba(220,254,17,0.3)] hover:translate-y-[-2px] hover:shadow-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50">
                  {loading ? (
                    <i className="fas fa-circle-notch fa-spin"></i>
                  ) : (
                    <>
                      <span>احجز مقعدي المجاني الآن</span>
                      <i className="fas fa-rocket"></i>
                    </>
                  )}
                </button>
                <div className="mt-6 flex items-center justify-center gap-4 opacity-50">
                  <div className="flex -space-x-2 flex-row-reverse">
                    <div className="w-6 h-6 rounded-full bg-gray-300 border border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-gray-400 border border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-gray-500 border border-white"></div>
                  </div>
                  <span className="text-xs font-bold text-gray-400">انضم لـ +500 مسجل حتى الآن</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
