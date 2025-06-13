'use client';

import { useRouter } from 'next/navigation';

export default function SplashPage() {
  const router = useRouter();

  const handleEnter = () => {
    router.push('/intro');
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#332352',
      backgroundImage: 'linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)',
      backgroundSize: '40px 40px',
      flexDirection: 'column',
      position: 'relative'
    }}>

      <img
        src="/splash/bubble-btn.svg"
        alt="Speech Bubble"
        style={{
          position: 'absolute',
          top: 'calc(50% - 20px)',
          left: 'calc(50% - 400px)',
          width: '300px',
          height: 'auto',
        }}
      />

      <img
        src="/splash/doctor-metz.svg"
        alt="Dr. Metz"
        style={{
          width: '520px',
          height: 'auto',
          display: 'block',
        }}
      />

      <img
        src="/splash/enter-btn.svg"
        alt="Enter Site Button"
        onClick={handleEnter}
        style={{
          marginTop: '2rem',
          width: '180px',
          height: 'auto',
          cursor: 'pointer',
        }}
      />
    </div>
  );
}
