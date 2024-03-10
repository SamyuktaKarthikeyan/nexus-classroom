
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {format} from 'date-fns'
import { useEffect,useState } from "react";
import axios from "axios";
const SelfPayHistory = () => {
    const [pay,setPay]=useState([])
    const navigate=useNavigate();
    const { auth } = useSelector((state) => state.auth);
    const { userId, userRoles, tokenExpiration, jwtToken}=auth;
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'dd/MM/yyyy');
      };
    useEffect(()=>{
       if(userRoles!=="STUDENT" || jwtToken===null || Date.now() > tokenExpiration){
       navigate("/nexus");
    }
    if(jwtToken){
        axios.get(`http://localhost:2020/api/student/payments/${userId}`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        })
        .then(response => {
          setPay(response.data);
        //   console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching payments:', error);
        });
    }
},[jwtToken, navigate, userId, tokenExpiration, userRoles]);
  return (
    <div className="bg-slate-950">
   <div className="bg-gradient-to-b from-slate-950 to-indigo-950 p-16 rounded-b-[70px]">
    <h1 className="font-bold mb-5 bg-gradient-to-b from-yellow-200 to-yellow-400 bg-clip-text text-transparent  sm:text-3xl leading-10 text-3xl sm:leading-10 ">Your Payment History</h1>
    <p className="mb-8  leading-relaxed text-slate-300"> Immerse yourself in the expansive repository of your course acquisitions, meticulously chronicling each milestone of your educational odyssey. From the very first course to the latest, track your learning journey with detailed insights at your fingertips. </p>
    <h1 className="font-semibold mb-5 bg-gradient-to-b from-yellow-200 to-yellow-400 bg-clip-text text-transparent   sm:text-3xl leading-10 text-3xl sm:leading-10 ">Pending Status</h1>
    {pay.length === 0 ? (
        <p className="mb-8  leading-relaxed text-slate-300">No pending enquiries found</p>
      ) : (
        <table className="w-full bg-white border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Payment No.</th>
                <th className="border border-gray-300 px-4 py-2">Admission Date</th>
                <th className="border border-gray-300 px-4 py-2">Payment Date</th>
                <th className="border border-gray-300 px-4 py-2">Course Name</th>
                <th className="border border-gray-300 px-4 py-2">Course Price</th>
                <th className="border border-gray-300 px-4 py-2">Amount Paid</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {pay.map(pay => (
                <tr key={pay.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{pay.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{formatDate(pay.adminDate)}</td>
                  <td className="border border-gray-300 px-4 py-2">{formatDate(pay.paydate)}</td>
                  <td className="border border-gray-300 px-4 py-2">{pay.courseName}</td>
                  <td className="border border-gray-300 px-4 py-2">{pay.coursePrice}</td>
                  <td className="border border-gray-300 px-4 py-2">{pay.amtPaid}</td>
                  <td className="border border-gray-300 px-4 py-2">{(pay.paystatus)?"Complete":"Pending"}</td>
                </tr>
              ))}
            </tbody>
          </table>
      )}
      <br/>    
      <br/>
    </div>
    </div>
  )
}

export default SelfPayHistory