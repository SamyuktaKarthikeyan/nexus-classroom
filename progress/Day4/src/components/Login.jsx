
const Login = () => {
  return (
    <div>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden h-[150px] w-full md:flex md:w-1/2 md:h-full bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center ">
          <img src="signin-pat.svg" className="w-full"/>
        </div>
        
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">Welcome Backhello </p>
            {/* <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <img src="settings-ico.svg" className="w-[24px] h-[24p]"/>
              <select className="pl-2 pr-10 outline-none border-none  text-gray-600 ">
                <option value="">Select type of user</option>
                <option value="student">Student</option>
                <option value="admin">Admin</option>
                <option value="office_staff">Office Staff</option>
              </select>
            </div> */}
			<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20"
					fill="currentColor">
					<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clipRule="evenodd" />
				</svg>
				<input className="pl-2 outline-none border-none  text-gray-600" type="text" name="" id="" placeholder="Username" />
      </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <input className="pl-2 outline-none border-none  text-gray-600" type="text" name="" id="" placeholder="Password" />
            </div>
            <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
            <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

					

// 	  const Login = () => {
//   return (
//     <div>
//       <div className="h-screen md:flex">
// 	<div
// 		className="relative overflow-hidden h-[150px] w-full md:flex md:w-1/2 md:h-full bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center ">
// 		<img src="signin-pat.svg" className="w-full"/>

// 	</div>
	
// 	<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
// 		<form className="bg-white">
// 			<h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
// 			<p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
// 			<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
// 					<img src="settings-ico.svg" className="w-[24px] h-[24p]"/>
// 					<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Type of User" />
//       </div>
// 			<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
// 				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
// 					fill="currentColor">
// 					<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
// 						clipRule="evenodd" />
// 				</svg>
// 				<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Full name" />
//       </div>
				
// 					{/* <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
// 						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
// 							viewBox="0 0 24 24" stroke="currentColor">
// 							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
// 								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
// 						</svg>
// 						<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
//       </div> */}
// 						<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
// 							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
// 								fill="currentColor">
// 								<path fillRule="evenodd"
// 									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
// 									clipRule="evenodd" />
// 							</svg>
// 							<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password" />
//       </div>
// 							<button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
// 							<span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
// 		</form>
// 	</div>
// </div>


//     </div>
//   )
// }

// export default Login