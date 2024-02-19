import  { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="mx-auto flex flex-wrap items-center justify-between p-5 bg-indigo-950 lg:justify-around">
        <a className="flex title-font font-medium items-center text-gray-50 mb-1 md:mb-1">
    <img className="w-10 h-10" src="pic.png" alt="" />
      <span className="ml-3 text-xl">NIIT Nexus</span>
    </a>
        <div className="flex lg:hidden">
          <button id="hamburger" onClick={toggleMenu}>
            <img
              className={`toggle ${menuOpen ? 'hidden' : 'block'}`}
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
              alt="Menu"
            />
            <img
              className={`toggle ${menuOpen ? 'block' : 'hidden'}`}
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
              alt="Close"
            />
          </button>
        </div>
        <div
          className={`toggle ${menuOpen ? 'block' : 'hidden'} w-full lg:w-auto lg:flex text-right text-bold mt-5 lg:mt-0 border-t-2 border-blue-900 lg:border-none`}
        >
          <a
            href="#"
            className="block lg:inline-block text-slate-100 hover:text-yellow-100 px-3 py-3 border-b-2 border-blue-900 lg:border-none"
          >
            Home
          </a>
          <a
            href="#"
            className="block lg:inline-block text-slate-100 hover:text-yellow-100 px-3 py-3 border-b-2 border-blue-900 lg:border-none"
          >
            Products
          </a>
          <a
            href="#"
            className="block lg:inline-block text-slate-100 hover:text-yellow-100 px-3 py-3 border-b-2 border-blue-900 lg:border-none"
          >
            Pricing
          </a>
          <a
            href="#"
            className="block lg:inline-block text-slate-100 hover:text-yellow-100 px-3 py-3 border-b-2 border-blue-900 lg:border-none"
          >
            Contact
          </a>
        </div>
        <div className='hidden lg:flex lg:flex-row'>
        <a
          href="#"
          className={`hidden  lg:flex w-full lg:w-auto px-4 py-2 text-right font-semibold bg-blue-800 hover:bg-blue-700 text-white lg:rounded lg:mr-5`}
        >
          Login
        </a>
        <a
          href="#"
          className={`hidden lg:flex w-full lg:w-auto px-4 py-2 text-right font-semibold bg-amber-400 hover:bg-yellow-400 text-indigo-950 lg:rounded`}
        >
          Sign Up
        </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
