import Head from 'next/head';
import LottieAnimation from '../components/LottieAnimation';

export default function AnimatedPage() {
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
      <h1 className="glitch" data-text="Urban Warriors">
  Urban Warriors
</h1>

        <p style={{ color: '#FFD700', marginBottom: '2rem' }}>
          The streets are watching. The future is urban.
        </p>

        <LottieAnimation
          src="/animations/urban-animation.json"
          height={400}
          width={400}
          backgroundColor="#111"
          glowColor="#ff00ff"
        />

        <a
          href="https://urbanwarriors.club"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: '2rem',
            padding: '1rem 2rem',
            color: '#ff00ff',
            backgroundColor: 'black',
            border: '2px solid #ff00ff',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff',
          }}
        >
          Enter Site
        </a>
      </main>
    </>
  );
}
