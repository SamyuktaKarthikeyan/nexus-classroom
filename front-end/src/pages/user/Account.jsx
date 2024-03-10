
import { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

import swal from'sweetalert';
const Account = () => {
  const enqRef = useRef("");
  const [showModal, setShowModal] = useState(false);
  const navigate=useNavigate();
  const { auth } = useSelector((state) => state.auth);
  const {userId, userRoles, tokenExpiration, jwtToken}=auth;
  useEffect(()=>{
    if(userRoles!=="STUDENT" || jwtToken===null || Date.now() > tokenExpiration){
      navigate("/nexus");
    }
  })
  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    const enqDesc = enqRef.current.value;
      const backendURL = 'http://localhost:2020/api/enquiry/addEnquiry'; 
      const payload = {
        id:0,
        enqDate:new Date(),
        replyDate: new Date(),
        enqDesc: enqDesc,
        enqReply: enqDesc,
        enqStatus: false,
        userid:userId
      };

      if (jwtToken) {
    axios.post(backendURL, payload, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
      .then(response => {
        swal('Success', 'Enquiry submitted successfully', 'success');
        console.log(response);
        setShowModal(false);
      })
      .catch(error => {
        console.error('Error:', error);
        swal('Error', 'Failed to submit enquiry', 'error');
      });
  } else {
    swal('Error', 'Failed to submit enquiry', 'error');
  }
  
    };

  return (
    <div>
        <div className="bg-slate-950">
   <div className="bg-gradient-to-b from-slate-950 to-indigo-950 rounded-b-[70px]">
        <section className="body-font">
  <div className="container mx-auto flex px-5 pt-24 pb-15 md:flex-row flex-col items-center ">
    <div className="lg:flex-grow md:w-3/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font ml-2 sm:text-4xl text-3xl mb-4 font-medium text-slate-50">Navigate into your
        <br/> <span className="font-bold bg-gradient-to-b from-yellow-200 to-yellow-400 bg-clip-text text-transparent">Courses Collection</span>
      </h1>
      <p className="mb-8 ml-2 leading-relaxed text-slate-300">
      Explore the courses you have acquired, whether fully paid or partially paid, to keep track of your educational investments and continue your learning journey with ease.</p>
<a  href="https://icons8.com/icon/Alsmzv0mFxxJ/menu" className="hidden">Menu</a> <a href="https://icons8.com" className="hidden">Icons8</a>
      <div className="flex justify-center">
        <button className="ml-2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>navigate("/nexus/user/your-courses")}>Explore your courses</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className=" mr-0  object-cover object-center rounded md:ml-16" alt="hero" src="/imgs/courses.png"/>
    </div>
  </div>
</section>
   
        <section className="body-font">
  <div className="container mx-auto flex px-5 pt-15 pb-15 md:flex-row flex-col-reverse items-center ">
    <div className="lg:max-w-lg lg:w-full md:w-3/4 ">
      <img className=" ml-0  object-cover object-center rounded md:mr-16" alt="hero" src="/imgs/Enquiry.png"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 w-5/6 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font ml-2 sm:text-4xl text-3xl mb-4 font-medium text-slate-50">Ask away your
        <br/> <span className="font-bold bg-gradient-to-b from-yellow-200 to-yellow-400 bg-clip-text text-transparent">Course Enquiries</span>
      </h1>
      <p className="mb-8 ml-2 leading-relaxed text-slate-300">
      Have questions about specific courses? Feel free to submit your inquiries here, and our team will promptly assist you in finding the information you need to make informed decisions about your educational journey.</p>
<a  href="https://icons8.com/icon/Alsmzv0mFxxJ/menu" className="hidden">Menu</a> <a href="https://icons8.com" className="hidden">Icons8</a>
      <div className="flex justify-center">
        <button className="ml-2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => setShowModal(true)}>Add Enquiries</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" onClick={()=>navigate("/nexus/user/enquiry-status")}>Enquiry Status</button>
        {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <span className="absolute top-0 right-0 text-center cursor-pointer" onClick={() => setShowModal(false)}>×</span>
            <h2 className="mb-4 text-center text-l text-slate-800 font-bold md:text-2xl">Enter your Enquiries here</h2>

            <textarea 
              className="w-full h-32 border border-gray-300 rounded-md p-2 mb-4" 
              type="text"
              ref={enqRef}
              placeholder="Enter your enquiry" 
            />
            <button 
              className="bg-indigo-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600" 
              onClick={handleEnquirySubmit}
            >
              Submit
            </button>
            <button 
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400" 
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  </div>
</section>

        <section className="body-font">
  <div className="container mx-auto flex px-5 pb-24 pt-15 md:flex-row flex-col items-center ">
    <div className="lg:flex-grow md:w-3/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font ml-2 sm:text-4xl text-3xl mb-4 font-medium text-slate-50">Your Comprehensive 
        <br/> <span className="font-bold bg-gradient-to-b from-yellow-200 to-yellow-400 bg-clip-text text-transparent">Purchase History</span>
      </h1>
      <p className="mb-8 ml-2 leading-relaxed text-slate-300">
      Explore your course purchase history to track all the educational adventures and review your payment history for a complete overview of your transactions.</p>
<a  href="https://icons8.com/icon/Alsmzv0mFxxJ/menu" className="hidden">Menu</a> <a href="https://icons8.com" className="hidden">Icons8</a>
      <div className="flex justify-center">
        <button className="ml-2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>navigate("/nexus/user/payment-history")}>View Purchase History</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className=" mr-0  object-cover object-center rounded md:ml-16" alt="hero" src="/imgs/payhistory.png"/>
    </div>
  </div>
</section>
    </div>
    </div>
    </div>
  )
}

export default Account