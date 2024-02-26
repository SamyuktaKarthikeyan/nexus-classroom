
const SideBar = ({ setActiveLink }) => {

  const handleLinkClick = (link) => {
    console.log(link);
    setActiveLink(link);
  }

  return (
    <>
      <div className="relative flex flex-col bg-clip-border  bg-gradient-to-r from-slate-800 via-indigo-950 to-slate-800 text-gray-200 h-screen w-full max-w-[15rem] p-4 shadow-xl shadow-teal-gray-900/5">
        
        <nav className="flex flex-col gap-1 min-w-[200px] p-2 font-sans text-base font-normal text-gray-200">
          <div role="button" onClick={() => handleLinkClick("link1")} tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-slate-700 hover:bg-opacity-80 focus:bg-slate-700 focus:bg-opacity-80 active:bg-slate-700 active:bg-opacity-80 hover:text-slate-100 focus:text-slate-100 active:text-slate-100 outline-none">
            <div className="grid place-items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4m7.943 14.076A9.959 9.959 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.958 9.958 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22a9.947 9.947 0 0 0 5.675-1.765a10.055 10.055 0 0 0 1.918-1.728l.355-.413zM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clipRule="evenodd" /></svg>
            </div>Dashboard
          </div>
          <div role="button" onClick={() => handleLinkClick("link2")} tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-slate-700 hover:bg-opacity-80 focus:bg-slate-700 focus:bg-opacity-80 active:bg-slate-700 active:bg-opacity-80 hover:text-slate-100 focus:text-slate-100 active:text-slate-100 outline-none">
            <div className="grid place-items-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M10 14h4v-2h-4zm0-3h8V9h-8zm0-3h8V6h-8zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V6h2v14h14v2zM8 4v12z"/></svg>
              </div>Courses
          </div>
          <div role="button" onClick={() => handleLinkClick("link1")} tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-slate-700 hover:bg-opacity-80 focus:bg-slate-700 focus:bg-opacity-80 active:bg-slate-700 active:bg-opacity-80 hover:text-slate-100 focus:text-slate-100 active:text-slate-100 outline-none">
          <div className="grid place-items-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M11.95 18q.525 0 .888-.363t.362-.887q0-.525-.362-.888t-.888-.362q-.525 0-.887.363t-.363.887q0 .525.363.888t.887.362m-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825M12 22q-2.075 0-3.9-.787t-3.175-2.138q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"/></svg>          
             </div> Enquiries
          </div>
          
          <div role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-slate-700 hover:bg-opacity-80 focus:bg-slate-700 focus:bg-opacity-80 active:bg-slate-700 active:bg-opacity-80 hover:text-slate-100 focus:text-slate-100 active:text-slate-100 outline-none">
          <div className="grid place-items-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M22 3H2c-1.09.04-1.96.91-2 2v14c.04 1.09.91 1.96 2 2h20c1.09-.04 1.96-.91 2-2V5a2.074 2.074 0 0 0-2-2m0 16H2V5h20zm-8-2v-1.25c0-1.66-3.34-2.5-5-2.5c-1.66 0-5 .84-5 2.5V17zM9 7a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 9 12a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 9 7m5 0v1h6V7zm0 2v1h6V9zm0 2v1h4v-1z"/></svg>           
          </div>Admission Details
          </div>
          <div role="button" onClick={() => handleLinkClick("link3")} tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-slate-700 hover:bg-opacity-80 focus:bg-slate-700 focus:bg-opacity-80 active:bg-slate-700 active:bg-opacity-80 hover:text-slate-100 focus:text-slate-100 active:text-slate-100 outline-none">
          <div className="grid place-items-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89l.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18m-1 5v5l4.25 2.52l.77-1.29l-3.52-2.09V8z"/></svg>          
           </div>Payment History 
          </div>
          
        </nav>
      </div>
    </>
  )
}

export default SideBar  







// import  { useState } from 'react';

// function Sidebar() {
//   const [isSubMenuOpen, setSubMenuOpen] = useState(false);
//   const [isSidebarOpen, setSidebarOpen] = useState(true);

//   const toggleSubMenu = () => {
//     setSubMenuOpen(!isSubMenuOpen);
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div>
      
//           <div className="absolute text-4xl top-5 left-4 w-[30vh] h-[10vh] cursor-pointer md:hidden" onClick={toggleSidebar}>
//           </div>
//     <div className={`sidebar ${isSidebarOpen ? '' : 'hidden'} lg:left-0 bottom-0 h-[80vh] p-2 w-[300px] overflow-y-auto text-center bg-gray-900`}>
//       <div className="text-gray-100 text-xl">
//         <div className="p-2.5 mt-1 flex items-center">
//           <div className="p-2.5 mt-1 flex items-center">
//             <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
//             <h1 className="font-bold text-gray-200 text-[15px] ml-3">TailwindCSS</h1>
//             <span className="cursor-pointer ml-28 lg:hidden" onClick={toggleSidebar}>x</span>
//           </div>
//           <div className="my-2 bg-gray-600 h-[1px]"></div>
//         </div>
//       </div>
//       <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
//         <i className="bi bi-search text-sm"></i>
//         <input type="text" placeholder="Search" className="text-[15px] ml-4 w-full bg-transparent focus:outline-none" />
//       </div>
//       <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
//         <i className="bi bi-house-door-fill"></i>
//         <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
//       </div>
//       <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
//         <i className="bi bi-bookmark-fill"></i>
//         <span className="text-[15px] ml-4 text-gray-200 font-bold">Bookmark</span>
//       </div>
//       <div className="my-4 bg-gray-600 h-[1px]"></div>
//       <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={toggleSubMenu}>
//         <i className="bi bi-chat-left-text-fill"></i>
//         <div className="flex justify-between w-full items-center">
//           <span className="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
//           <span className={`text-sm ${isSubMenuOpen ? 'rotate-180' : ''}`} id="arrow">
//             <i className="bi bi-chevron-down"></i>
//           </span>
//         </div>
//       </div>
//       <div className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${isSubMenuOpen ? '' : 'hidden'}`} id="submenu">
//         <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Social</h1>
//         <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Personal</h1>
//         <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Friends</h1>
//       </div>
//       <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
//         <i className="bi bi-box-arrow-in-right"></i>
//         <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Sidebar;
