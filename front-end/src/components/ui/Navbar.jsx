import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAccountDropdown = () => {
    setAccountDropdownOpen(!accountDropdownOpen);
  };

  return (
    <div>
      <nav className="mx-auto flex flex-wrap items-center justify-between p-5 bg-slate-950 lg:justify-between">
        <a className="flex title-font font-medium items-center text-gray-50 mb-1 ml-2 md:mb-1 md:ml-3">
          <img className="w-10 h-10" src="/imgs/pic.png" alt="" />
          <span className="ml-3 text-xl">NIIT Nexus</span>
        </a>
        <div className="flex lg:hidden">
          <button id="hamburger" onClick={toggleMenu}>
            <img
              className={`toggle ${menuOpen ? 'hidden' : 'block'}`}
              src="/imgs/hamburger.png"
              width="30"
              height="30"
              alt="Menu"
            />
            <img
              className={`toggle ${menuOpen ? 'block' : 'hidden'}`}
              src="/imgs/menu-cross.png"
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
            onClick={() => navigate('/nexus/user/home')}
            className="block lg:inline-block cursor-pointer text-slate-100 hover:text-yellow-100 px-3 py-3 border-b-2 border-blue-900 lg:border-none"
          >
            Home
          </a>
          <a
            onClick={() => navigate('/nexus/user/courses')}
            className="block lg:inline-block cursor-pointer text-slate-100 hover:text-yellow-100 px-3 py-3 border-b-2 border-blue-900 lg:border-none"
          >
            Courses
          </a>
          <a
            onClick={() => navigate('/nexus/user/about-us')}
            className="block lg:inline-block cursor-pointer text-slate-100 hover:text-yellow-100 px-3 py-3 border-b-2 border-blue-900 lg:border-none"
          >
            About Us
          </a>
          <a
            onClick={() => navigate('/nexus/user/faqs')}
            className="block lg:inline-block cursor-pointer text-slate-100 hover:text-yellow-100 px-3 py-3 border-b-2 border-blue-900 lg:border-none"
          >
            FAQ
          </a>
          <a
            href="#"
            className="block lg:hidden  cursor-pointer text-slate-100 hover:text-yellow-100 px-3 py-3 border-b-2 border-blue-900 lg:border-none"
          >
            Account
          </a>
          <a
            href="#"
            className="block lg:hidden cursor-pointer text-slate-100 hover:text-yellow-100 px-3 py-3 border-b-2 border-blue-900 lg:border-none"
          >
            Log Out
          </a>
          
        </div>
        <div className="hidden mr-5 lg:flex lg:flex-row md:mr-5">
          <div className="flex flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6 cursor-pointer relative"
              onClick={toggleAccountDropdown}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
        </div>
      </nav>
            {accountDropdownOpen && (
              <div className="absolute mt-0  mr-3.5 right-0 bg-white w-32 py-2 rounded-md shadow-lg z-10">
                <a
                  onClick={()=>navigate("/nexus/user/account")}
                  className="block px-4 py-2 cursor-pointer text-gray-800 hover:bg-gray-200"
                >
                  Account
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 cursor-pointer text-gray-800 hover:bg-gray-200"
                >
                  Log Out
                </a>
                
              </div>
            )}
    </div>
  );
};

export default Navbar;
