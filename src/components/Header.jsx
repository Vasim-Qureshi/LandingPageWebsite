const Header = () => (
  <header className="bg-yellow-50 shadow-md py-4 px-6 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-yellow-900">GlowNest Lights</h1>
    <nav>
      <ul className="flex gap-6 text-yellow-800">
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
