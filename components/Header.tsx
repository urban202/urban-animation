const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-black text-white border-b border-red-600">
      <h1 className="text-2xl font-bold text-red-500">Urban Warriors</h1>
      <nav className="space-x-6 text-sm">
        <a href="#" className="hover:text-gold">Explore</a>
        <a href="#" className="hover:text-gold">Collections</a>
        <a href="#" className="bg-red-600 px-4 py-2 rounded text-white font-semibold hover:bg-red-700">Connect Wallet</a>
      </nav>
    </header>
  );
};

export default Header;
