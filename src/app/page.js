'use client';

import { useRouter } from 'next/navigation';

export default function SplashPage() {
  const router = useRouter();

  const handleEnter = () => {
    router.push('/intro');
  };

  return (
    <div className="relative flex items-center justify-center flex-col min-h-screen w-screen bg-[#332352] overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Speech Bubble */}
      <img
        src="/splash/bubble-btn.svg"
        alt="Speech Bubble"
        className="absolute z-10 w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] top-[10%] left-[10%] sm:top-[8%] sm:left-[15%] md:top-[10%] md:left-[20%]"
      />

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
        onClick={handleEnter}
        className="z-10 mt-6 sm:mt-8 md:mt-10 w-[140px] sm:w-[160px] md:w-[180px] h-auto cursor-pointer hover:opacity-90 hover:scale-[0.97] active:scale-95 transition"
      />
    </div>
  );
}
