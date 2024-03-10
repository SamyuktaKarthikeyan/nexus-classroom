import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import swal from "sweetalert";
import { useState } from "react";
import axios from "axios";
const PersonalCourses = () => {
  const { auth } = useSelector((state) => state.auth);
  const {userId, userRoles, tokenExpiration, jwtToken}=auth;
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate=useNavigate();
  const [courses, setCourses]=useState([]);
  const handleBuyNow = (course) => {
    setSelectedCourse(course);
    console.log(selectedCourse);
    setShowModal(true);
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
        setCourses(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
    }
},[jwtToken, navigate, userId, tokenExpiration, userRoles])


const handleSubmit = async(e) => {
  e.preventDefault();
  const payload={
    id:selectedCourse.id,
    paystatus:false,
    adminDate:new Date(),
    paydate:new Date(),
    userId:userId,
    amtPaid:selectedCourse.coursePrice,
    courseId:selectedCourse.courseId,
  }
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
        <h1 className="font-bold mb-5 bg-gradient-to-b from-yellow-200 to-yellow-400 bg-clip-text text-transparent  sm:text-3xl leading-10 text-3xl sm:leading-10 ">Your Course Collection</h1>
    <p className="mb-8  leading-relaxed text-slate-300"> Access a comprehensive list of courses you have purchased, enabling you to conveniently track your educational investments and seamlessly navigate through your acquired learning materials to maximize your learning experience.</p>
    <h1 className="font-semibold mb-5 bg-gradient-to-b from-yellow-200 to-yellow-400 bg-clip-text text-transparent   sm:text-3xl leading-10 text-3xl sm:leading-10 "> Fully Paid Courses </h1>

        {courses.filter(course => course.paystatus).length === 0 && (
          <p className="mb-8  leading-relaxed text-slate-300">No fully paid courses found</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
           course.paystatus && (
            <div key={course.courseId} className="bg-slate-800 shadow-lg rounded-lg overflow-hidden">
              <img src={course.courseImgUrl} alt={course.courseName} className="w-full p-4 h-56 object-cover object-center" />
              <div className="p-4">
                <h3 className="text-slate-100 text-xl font-medium mb-2">{course.courseName}</h3>
                <p className="text-slate-200 mb-2">Price: Rs. {course.coursePrice}</p>
                <p className="text-slate-200 mb-4">{course.courseDescription}</p>

                {/* <button
                  className="inline-flex items-center justify-center w-full px-4 py-3 mb-4 bottom-2 text-white bg-indigo-500 rounded-md hover:bg-blue-500 sm:w-auto sm:mb-0"
                  onClick={() => handleBuyNow(course)}
                >
                  Buy Now
                  <svg className="w-4 h-4 ml-1 hover:ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button> */}
              </div>
            </div>
          )))}
        </div>
          <br/>
    <h1 className="font-semibold mb-5 bg-gradient-to-b from-yellow-200 to-yellow-400 bg-clip-text text-transparent   sm:text-3xl leading-10 text-3xl sm:leading-10 "> Partially Paid Courses </h1>

    {courses.filter(course => !course.paystatus).length === 0 && (
          <p className="mb-8  leading-relaxed text-slate-300">No fully paid courses found</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
           !course.paystatus && (
            <div key={course.courseId} className="bg-slate-800 shadow-lg rounded-lg overflow-hidden">
              <img src={course.courseImgUrl} alt={course.courseName} className="w-full p-4 h-56 object-cover object-center" />
              <div className="p-4">
                <h3 className="text-slate-100 text-xl font-medium mb-2">{course.courseName}</h3>
                <p className="text-slate-200 mb-2">Price: Rs. {course.coursePrice}</p>
                <p className="text-slate-200 mb-4">{course.courseDescription}</p>

                <button
                  className="inline-flex items-center justify-center w-full px-4 py-3 mb-4 bottom-2 text-white bg-indigo-500 rounded-md hover:bg-blue-500 sm:w-auto sm:mb-0"
                  onClick={() => handleBuyNow(course)}
                >
                  Continue Payment
                  <svg className="w-4 h-4 ml-1 hover:ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          )))}
          <br/>
        </div>
      </div>
       {/* Modal */}
       {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <span className="absolute top-0 right-0 text-center cursor-pointer text-3xl text-pink-600" onClick={() => setShowModal(false)}>×</span>
            <h2 className="text-lg font-semibold mb-4">{selectedCourse?.courseName}</h2>
            <p className="mb-4">Price: Rs. {selectedCourse?.coursePrice}</p>
            <br/>
            <h2 className="text-lg font-semibold mb-4">Amount Balance : {selectedCourse?.coursePrice-selectedCourse?.amtPaid}</h2>
            
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
  )
}

export default PersonalCourses