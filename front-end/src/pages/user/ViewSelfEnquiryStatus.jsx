import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { format } from 'date-fns';

import axios from 'axios'
const ViewSelfEnquiryStatus = () => {
  const navigate=useNavigate();
  const[pend, setPend]=useState([]);
  const[reply,setReply]=useState([]);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy');
  };
  const { auth } = useSelector((state) => state.auth);
  const {userId, userRoles, tokenExpiration, jwtToken}=auth;
  useEffect(()=>{
    if(userRoles!=="STUDENT" || jwtToken===null || Date.now() > tokenExpiration){
      navigate("/nexus");
    }
    if(jwtToken){
      axios.get(`http://localhost:2020/api/enquiry/pendingSelf/${userId}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then(response => {
        setPend(response.data);
      })
      .catch(error => {
        console.error('Error fetching enquiries:', error);
      });

      axios.get(`http://localhost:2020/api/enquiry/repliedSelf/${userId}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then(response => {
        setReply(response.data);
      })
      .catch(error => {
        console.error('Error fetching enquiries:', error);
      });
    }
  },[jwtToken, navigate, userId, tokenExpiration, userRoles])
  return (
    <div className="bg-slate-950">
   <div className="bg-gradient-to-b from-slate-950 to-indigo-950 p-16 rounded-b-[70px]">
    <h1 className="font-bold mb-5 bg-gradient-to-b from-yellow-200 to-yellow-400 bg-clip-text text-transparent  sm:text-3xl leading-10 text-3xl sm:leading-10 ">Check Your Enquiry Status</h1>
    <p className="mb-8  leading-relaxed text-slate-300">Curious about the status of your course enquiries? Track them here and stay in the loop as our team works to provide you with the information you need.</p>
    <h1 className="font-semibold mb-5 bg-gradient-to-b from-yellow-200 to-yellow-400 bg-clip-text text-transparent   sm:text-3xl leading-10 text-3xl sm:leading-10 ">Pending Status</h1>
    {pend.length === 0 ? (
        <p className="mb-8  leading-relaxed text-slate-300">No pending enquiries found</p>
      ) : (
        <table className="w-full bg-white border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Enquiry No.</th>
                <th className="border border-gray-300 px-4 py-2">Enquiry Date</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {pend.map(pend => (
                <tr key={pend.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{pend.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{formatDate(pend.enqDate)}</td>
                  <td className="border border-gray-300 px-4 py-2">{pend.enqDesc}</td>
                  <td className="border border-gray-300 px-4 py-2">Pending</td>
                </tr>
              ))}
            </tbody>
          </table>
      )}
      <br/>
    <h1 className="font-semibold mb-5 bg-gradient-to-b from-yellow-200 to-yellow-400 bg-clip-text text-transparent   sm:text-3xl leading-10 text-3xl sm:leading-10 ">Replied Enquiries Status</h1>
    {reply.length === 0 ? (
        <p className="mb-8  leading-relaxed text-slate-300">No enquiries replied yet. Please be patient...</p>
      ) : (
        <table className="w-full bg-white border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Enquiry No.</th>
                <th className="border border-gray-300 px-4 py-2">Enquiry Date</th>
                <th className="border border-gray-300 px-4 py-2">Reply Date</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
                <th className="border border-gray-300 px-4 py-2">Reply</th>
              </tr>
            </thead>
            <tbody>
              {reply.map(reply => (
                <tr key={reply.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{reply.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{formatDate(reply.enqDate)}</td>
                  <td className="border border-gray-300 px-4 py-2">{formatDate(reply.replyDate)}</td>
                  <td className="border border-gray-300 px-4 py-2">{reply.enqDesc}</td>
                  <td className="border border-gray-300 px-4 py-2">{reply.enqReply}</td>
                </tr>
              ))}
            </tbody>
          </table>
      )}
      <br/>
    </div>
    </div>
  )
}

export default ViewSelfEnquiryStatus