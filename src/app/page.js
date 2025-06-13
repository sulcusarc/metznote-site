'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SplashPage() {
  const router = useRouter();
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex items-center justify-center flex-col min-h-screen w-screen bg-[#332352] overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Mobile Speech Bubble */}
     {/* 🖥️ SVG Bubble for Desktop */}
<img
  src="/splash/bubble-btn.svg"
  alt="Speech Bubble"
  className="absolute z-10 w-[220px] hidden sm:block top-[10%] left-[10%]"
/>

{/* 📱 Text Bubble for Mobile */}
{showBubble && (
  <div className="absolute z-10 px-4 py-2 text-xs rounded-xl bg-white text-black shadow-lg top-[10%] left-1/2 -translate-x-1/2 sm:hidden animate-fadeIn">
    “Hi! I'm Dr. Metzenbaum”
  </div>
)}



      {/* Dr. Metz */}
      <img
        src="/splash/doctor-metz.svg"
        alt="Dr. Metz"
        className="z-10 w-[300px] sm:w-[400px] md:w-[480px] lg:w-[520px] h-auto block"
      />

      {/* Enter Button */}
      <img
        src="/splash/enter-btn.svg"
        alt="Enter Site Button"
        onClick={() => router.push('/intro')}
        className="z-10 mt-6 sm:mt-8 md:mt-10 w-[140px] sm:w-[160px] md:w-[180px] h-auto cursor-pointer hover:opacity-90 hover:scale-[0.97] active:scale-95 transition"
      />
    </div>
  );
}
