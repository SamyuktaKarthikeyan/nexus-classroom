import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import axios from "axios";
const CoursesHome = () => {
  const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [paymentOption, setPaymentOption] = useState("full");
  const [amtPaid,setAmtPaid]=useState(0);
  const [partialAmount, setPartialAmount] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate();
  const { auth } = useSelector((state) => state.auth);
  const { userId, userRoles, tokenExpiration, jwtToken}=auth;
  useEffect(()=>{
    if(userRoles!=="STUDENT" || jwtToken===null || Date.now() > tokenExpiration){
      navigate("/nexus");
    }
    if(jwtToken){
      axios.get(`http://localhost:2020/api/courses/getAllCourses`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching enquiries:', error);
      });
    }
  },[jwtToken, navigate, tokenExpiration, userRoles])


  const handleBuyNow = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handlePaymentOptionChange = (e) => {
    setPaymentOption(e.target.value);
    if (e.target.value === "partial") {
      setPartialAmount("");
    }
  };

  const handlePartialAmountChange = (e) => {
    setPartialAmount(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    let updatedAmtPaid=0;
    if (paymentOption === "partial") {
      updatedAmtPaid = partialAmount;
    } else {
      updatedAmtPaid = selectedCourse.price;
    }  
    setAmtPaid(updatedAmtPaid);
    if(paymentOption=="partial" && selectedCourse.price<partialAmount){
      setError("Enter correct amount");
      return;
    }
   
    const payload={
      id:0,
      paystatus:false,
      adminDate:new Date(),
      paydate:new Date(),
      userId:userId,
      amtPaid:updatedAmtPaid,
      courseId:selectedCourse.id,
    }
    console.log(payload);
    const backendURL = 'http://localhost:2020/api/student/admission/addadmission'; 
    if (jwtToken) {
      axios.post(backendURL, payload, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
    
      })
      .then(response => {
        swal('Success', 'Payment completed successfully', 'success');
        console.log(response);
        setShowModal(false);
      })
      .catch(error => {
        console.error('Error:', error);
        swal('Error', 'Failed to buy the course', 'error');
      });
  } else {
    swal('Error', 'Failed to buy the course', 'error');
  }
  };
  

  return (
   <div className="bg-slate-950">
      <div className="bg-gradient-to-b from-slate-950 to-indigo-950 rounded-b-[70px] p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div key={course.id} className="bg-slate-800 shadow-lg rounded-lg overflow-hidden">
              <img src={course.imgUrl} alt={course.name} className="w-full p-4 h-56 object-cover object-center" />
              <div className="p-4">
                <h3 className="text-slate-100 text-xl font-medium mb-2">{course.name}</h3>
                <p className="text-slate-200 mb-2">Price: Rs. {course.price}</p>
                <p className="text-slate-200 mb-4">{course.description}</p>

                <button
                  className="inline-flex items-center justify-center w-full px-4 py-3 mb-4 bottom-2 text-white bg-indigo-500 rounded-md hover:bg-blue-500 sm:w-auto sm:mb-0"
                  onClick={() => handleBuyNow(course)}
                >
                  Buy Now
                  <svg className="w-4 h-4 ml-1 hover:ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <span className="absolute top-0 right-0 text-center cursor-pointer text-3xl text-pink-600" onClick={() => setShowModal(false)}>×</span>
            <h2 className="text-lg font-semibold mb-4">{selectedCourse?.name}</h2>
            <p className="mb-4">Price: Rs. {selectedCourse?.price}</p>
            <label className="block mb-2">Payment Option:</label>
            
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
      <img src="/imgs/money.svg" className="w-[24px] h-[24p]"/>
      <select className="pl-2 pr-10 outline-none border-none  text-gray-600 " value={paymentOption} onChange={handlePaymentOptionChange}>
      <option value="full">Full Payment</option>
      <option value="partial">Partial Payment</option>
      </select>

    </div>
    {paymentOption === "partial" && (
  <>
    <input
      type="number"
      value={partialAmount}
      onChange={handlePartialAmountChange}
      placeholder="Enter partial amount"
      className="mb-4 w-full border border-gray-300 rounded-md p-2"
    />
    {paymentOption === "partial" && error && <p className="text-red-500">{error}</p>}
  </>
)}
<button 
              className="bg-indigo-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600" 
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button 
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400" 
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesHome;