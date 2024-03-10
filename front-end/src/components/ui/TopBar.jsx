// import { useState } from 'react';

// const TopBar = () => {
//     const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
    
//     const toggleAccountDropdown = () => {
//       setAccountDropdownOpen(!accountDropdownOpen);
//     };
//   return (
//     <nav className="fixed top-0 z-50 w-full bg-slate-900  text-white">
//   <div className="px-3 py-3 lg:px-5 lg:pl-3">
//     <div className="flex items-center justify-between">
//       <div className="flex items-center justify-start rtl:justify-end">
        
//         <span  className="flex ms-2 md:me-24">
//           <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
//           <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Flowbite</span>
//         </span>
//       </div>
//      <div className="hidden mr-5 lg:flex lg:flex-row md:mr-5">
//           <div className="flex flex-col">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="black"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="white"
//               className="w-6 h-6 cursor-pointer relative"
//               onClick={toggleAccountDropdown}
//               >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
//                 />
//             </svg>
//           </div>
//         </div>
//      </div>
//      </div>
//                  {accountDropdownOpen && (
//                    <div className="absolute mt-0 mr-3.5 right-0 bg-white w-32 py-2 rounded-md shadow-lg z-10">
//                      <a
//                        href="#"
//                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                      >
//                        Account
//                      </a>
//                      <a
//                        href="#"
//                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                      >
//                        Log Out
//                      </a>
                     
//                    </div>
//                  )}
// </nav>
//   )
// }

// export default TopBar

const TopBar = () => {


  return (
   
    <div>
      <nav className="mx-auto w-full flex flex-wrap items-center justify-between px-5 py-3 bg-slate-950 lg:justify-between">
        <a className="flex title-font font-medium items-center text-gray-50 mb-1 ml-2 md:mb-1 md:ml-3">
          <img className="w-10 h-10" src="/imgs/pic.png" alt="" />
          <span className="ml-3 text-xl">NIIT Nexus</span>
        </a>
       </nav>
    </div>
  );
};

export default TopBar;
