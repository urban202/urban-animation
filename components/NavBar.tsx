import Link from 'next/link';
import ConnectWalletButton from './ConnectWalletButton';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
       <Link href="/" className="nav-link">NFT DETAILS</Link>
        <Link href="/animated" className="nav-link">Enter</Link>
        <Link href="/nfts" className="nav-link">NFTs</Link>
        <a href="https://urbanwarriors.club" target="_blank" rel="noopener noreferrer" className="nav-link">
          Main Site
        </a>
      </div>
      <ConnectWalletButton />
    </nav>
  );
};

export default NavBar;
