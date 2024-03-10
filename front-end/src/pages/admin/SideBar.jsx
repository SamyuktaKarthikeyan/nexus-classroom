import { useState } from 'react';
import { useSelector } from 'react-redux';
const Sidebar = ({ setActiveLink }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { auth } = useSelector((state) => state.auth);
  const {userRoles}=auth;
  const handleLinkClick = (link) => {
    console.log(link);
    setActiveLink(link);
   
    console.log(userRoles);
  }
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }


  return (
    <>
      <div className={`fixed top-0 left-0 z-50 h-screen flex flex-col bg-clip-border bg-gradient-to-r from-slate-800 via-indigo-950 to-slate-800 text-gray-200 w-[15rem] p-4 shadow-xl shadow-teal-gray-900/5 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-all ease-in-out duration-300`}>
        <nav className="flex flex-col gap-1 min-w-[200px] p-2 font-sans text-base font-normal text-gray-200 ">
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
      <div className="fixed top-0 left-0 z-50 h-16 flex items-center justify-between w-full bg-gray-900 text-gray-200 px-4">
        <button onClick={toggleSidebar} className="text-gray-200 focus:outline-none">
          {sidebarOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M13.293 4.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 111.414-1.414L10 8.586l3.293-3.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14 5a1 1 0 00-1-1H7a1 1 0 100 2h6a1 1 0 001-1zM5 10a1 1 0 011-1h6a1 1 0 110 2H6a1 1 0 01-1-1zm8 4a1 1 0 00-1-1H7a1 1 0 100 2h5a1 1 0 001-1z" clipRule="evenodd" />
            </svg>
          )}
        </button>
        <div>Topbar Content</div>
      </div>

    </>
  );
}

export default Sidebar;

