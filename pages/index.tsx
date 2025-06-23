import { useEffect, useState } from 'react';
import Head from 'next/head';
import Lottie from 'lottie-react';

export default function AnimatedPage() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch('/animations/urban-animation.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Failed to load animation:', err));
  }, []);

  return (
    <>
      <Head>
        <title>Urban Warriors Animation</title>
      </Head>
      <main
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
        }}
      >
        <h1 className="glitch" data-text="Urban Warriors">
          Urban Warriors
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#FFD700', marginBottom: '2rem' }}>
          The streets are watching. The future is urban.
        </p>

        {animationData ? (
          <div style={{ width: 400, height: 400, marginBottom: '2rem' }}>
            <Lottie animationData={animationData} loop autoplay />
          </div>
              width={16}
        ) : (
          <p>Loading animation...</p>
        )}

        <a
          href="https://urbanwarriors.club"
          target="_blank"
          rel="noopener noreferrer"
          className="glow-button"
        >
          Enter Site
        </a>
      </main>
    </>
  );
}
