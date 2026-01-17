
import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#16498c]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            شاهد كيف يمكن أن تتغير <span className="text-[#dcfe11]">نتائج وكالتك</span>
          </h2>
          <p className="text-blue-200">اكتشف الطريقة الصحيحة لإدارة حملاتك الإعلانية مع خبرائنا</p>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 reveal">
          <div className="aspect-video bg-black flex items-center justify-center relative group">
            <iframe 
                src="https://www.youtube.com/embed/m4BLbEUifm0?rel=0" 
                title="Marketing Video" 
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
