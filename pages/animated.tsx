import { useEffect, useState } from 'react';
import Head from 'next/head';
import Lottie from 'lottie-react';

const AnimatedPage = () => {
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
          backgroundColor: 'black',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: 'white' }}>Urban Warriors</h1>
        <p style={{ color: '#FFD700', marginBottom: '2rem' }}>
          The streets are watching. The future is urban.
        </p>

        {animationData ? (
          <div style={{ width: 300, height: 300, marginBottom: '2rem' }}>
            <Lottie animationData={animationData} loop autoplay />
          </div>
        ) : (
          <p style={{ color: 'white' }}>Loading animation...</p>
        )}

        <a
          href="https://urbanwarriors.club"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '1rem 2rem',
            borderRadius: '8px',
            backgroundColor: 'black',
            color: '#ff00ff',
            fontWeight: 'bold',
            border: '2px solid #ff00ff',
            textDecoration: 'none',
            boxShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff',
            transition: 'transform 0.2s, box-shadow 0.3s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px #ff00ff, 0 0 40px #ff00ff';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = '0 0 10px #ff00ff, 0 0 20px #ff00ff';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Enter Site
        </a>
      </main>
    </>
  );
};

export default AnimatedPage;
