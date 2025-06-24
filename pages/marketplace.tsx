import Head from 'next/head';

export default function Marketplace() {
  return (
    <>
      <Head>
        <title>Urban Warriors Marketplace</title>
        <meta name="description" content="Explore rare street NFTs and digital urban gear." />
      </Head>

      <main style={{
        backgroundColor: '#111',
        color: '#fff',
        minHeight: '100vh',
        padding: '2rem',
        fontFamily: 'sans-serif'
      }}>
        <h1 style={{ fontSize: '2.5rem', color: '#FFD700', marginBottom: '1rem' }}>
          Marketplace
        </h1>

        <p style={{ marginBottom: '2rem' }}>
          Explore rare, gritty, street-inspired NFTs. Click any to learn more.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 0 10px rgba(255, 0, 100, 0.4)'
            }}>
              <div style={{ height: '200px', backgroundColor: '#333' }}></div>
              <div style={{ padding: '1rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>NFT #{n}</h3>
                <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Cyber Street Art Drop</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
