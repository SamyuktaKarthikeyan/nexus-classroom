import  { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginPage = ({ setLoginStatus }) => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userEmail = emailRef.current.value;
    const userPassword = passwordRef.current.value;

    try {
      const response = await axios.post(
        "http://localhost:2020/api/auth/login",
        {
          userEmail: userEmail,
          userPassword: userPassword,
        }
      );
  
      const { user, jwtToken } = response.data;
      if (user && jwtToken) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            
              userId: response.data.user.id,
              userEmail: response.data.user.email,
              userMobileNum: response.data.user.mobilenum,
              userName: response.data.user.name,
              userRoles: response.data.user.roles,

            jwtToken: response.data.jwtToken,
            tokenExpiration: Date.now() + 86400000 
          }
        });
      }
 
      if(response.data.user.roles==="ADMIN"){
        navigate("/nexus/admin/dashboard");
      }
      else{
        navigate("/nexus/user/home");
      }
      
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden h-[150px] w-full md:flex md:w-1/2 md:h-full bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center ">
          <img src="/imgs/signin-pat.jpeg" className="w-full" alt="background" />
        </div>
        
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white" onSubmit={handleFormSubmit}>
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back to NIIT Nexus</p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input className="pl-2 outline-none border-none" type="text" name="username" placeholder="Email Address" ref={emailRef} />
            </div> 
              
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <input className="pl-2 outline-none border-none  text-gray-600" type="password" name="password" placeholder="Password" ref={passwordRef} />
            </div>
            <button type="submit" className="block w-full bg-blue-800 hover:bg-blue-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
            <div className="text-sm ml-2 hover:text-blue-500 text-center  cursor-pointer">Forgot Password ?</div> <br />
            <div className="text-sm ml-2  text-center cursor-pointer">New to NIIT Nexus</div>
            <button type="submit" className="block w-full bg-blue-800 hover:bg-blue-600 mt-2 py-2 rounded-2xl text-white font-semibold mb-2">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
