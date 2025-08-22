import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-yellow-50 shadow-md py-4 px-2 flex justify-between items-center">
      <h1 className="font-bold text-yellow-900 xs:text-xs md:text-2xl 2xl:text-5xl">GlowNest Lights</h1>
    <div className="hidden md:block">
      <nav className='2xl:text-3xl'>
        <ul className="flex gap-6 text-yellow-800">
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </div>
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="text-yellow-900 outline-none focus:ring-2 focus:ring-yellow-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <div className={`absolute top-10 right-0 bg-white shadow-md mt-2 rounded-md w-48 ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col p-2">
          <li><a href="#products" className="block px-4 py-2 text-yellow-800 hover:bg-yellow-100">Products</a></li>
          <li><a href="#about" className="block px-4 py-2 text-yellow-800 hover:bg-yellow-100">About</a></li>
          <li><a href="#contact" className="block px-4 py-2 text-yellow-800 hover:bg-yellow-100">Contact</a></li>
        </ul>
      </div>
    </div>
  </header>
);
}
export default Header;
