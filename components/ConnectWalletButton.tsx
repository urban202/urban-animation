import { useState } from 'react';

const ConnectWalletButton = () => {
  const [connected, setConnected] = useState(false);

  const handleConnect = () => {
    // Placeholder: add wallet logic here
    setConnected(true);
  };

  return (
    <button
      onClick={handleConnect}
      style={{
        position: 'absolute',
        top: '20px',
        right: '30px',
        padding: '0.75rem 1.5rem',
        background: connected ? '#0f0' : 'transparent',
        color: connected ? '#000' : '#FF0000',
        border: '2px solid #FF0000',
        textTransform: 'uppercase',
        fontWeight: '900',
        letterSpacing: '1px',
        fontFamily: '"Bebas Neue", Impact, sans-serif',
        fontSize: '1.1rem',
        cursor: 'pointer',
        boxShadow: connected
          ? '0 0 10px #0f0, 0 0 20px #0f0'
          : '0 0 10px #FF0000, 0 0 20px #FF0000',
        transition: 'all 0.3s ease-in-out',
        zIndex: 9999,
      }}
    >
      {connected ? 'Wallet Connected' : 'Connect Wallet'}
    </button>
  );
};

export default ConnectWalletButton;
