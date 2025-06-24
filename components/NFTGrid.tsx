import Head from 'next/head';
import Header from '@/components/Header';
import NFTGrid from '@/components/NFTGrid';

export default function Home() {
  return (
    <>
      <Head>
        <title>Urban Warriors Marketplace</title>
      </Head>

      <Header />

      <main className="min-h-screen bg-black text-white">
        <section className="text-center py-12 px-6">
          <h2 className="text-4xl font-bold text-gold mb-4">Urban Drip in the Metaverse</h2>
          <p className="text-lg text-gray-400">
            Own rare digital streetwear NFTs from the Urban Warriors collection.
          </p>
        </section>

        <NFTGrid />
      </main>
    </>
  );
}
