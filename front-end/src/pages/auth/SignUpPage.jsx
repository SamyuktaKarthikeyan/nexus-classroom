import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate=useNavigate();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const mobRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const mob = mobRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if(mob.length!=10){
      setError("Enter correct mobile number");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:2020/api/auth/registerStudent",
        {
          id:0,
          name: name,
          email:email,
          mobilenum:mob,
          password:password,
          roles:"STUDENT",
        }
      );
      console.log(response.data);
      navigate("/nexus/login");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div>
        <div className="h-screen md:flex">
          <div className="relative overflow-hidden h-[150px] w-full md:flex md:w-1/2 md:h-full bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center ">
            <img src="/imgs/signin-pat.jpeg" className="w-full" alt="Background" />
          </div>

          <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
            <form className="bg-white" onSubmit={handleSubmit}>
              <h1 className="text-gray-800 font-bold text-2xl mb-1">Welcome to NIIT Nexus</h1>
              <p className="text-sm font-normal text-gray-600 mb-7">Sign Up Here</p>
              
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <input ref={nameRef} className="pl-2 outline-none border-none  text-gray-600" type="text" name="name" placeholder="Username" required />
              </div>

              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input ref={emailRef} className="pl-2 outline-none border-none" type="email" name="email" placeholder="Email Address" required />
              </div>

              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7.772 2.439l1.077-.344c1.008-.322 2.086.199 2.518 1.217l.86 2.028c.375.883.167 1.922-.514 2.568L9.82 9.706c.117 1.076.478 2.135 1.084 3.177a8.68 8.68 0 0 0 2.271 2.595l2.276-.76c.862-.287 1.801.044 2.33.821l1.232 1.81c.616.904.505 2.15-.258 2.916l-.818.821c-.814.817-1.976 1.114-3.052.778c-2.539-.792-4.873-3.143-7.003-7.053c-2.133-3.916-2.885-7.24-2.258-9.968c.264-1.148 1.082-2.063 2.15-2.404" />
                </svg>
                <input ref={mobRef} className="pl-2 outline-none border-none" type="tel" name="mob" placeholder="Mobile Number" required />
              </div>

              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <input ref={passwordRef} className="pl-2 outline-none border-none" type="password" name="password" placeholder="Password" required />
              </div>

              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <input ref={confirmPasswordRef} className="pl-2 outline-none border-none" type="password" name="confirmPassword" placeholder="Re-enter Password" required />
              </div>
              {error && <p className="text-red-500">{error}</p>}

              <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
