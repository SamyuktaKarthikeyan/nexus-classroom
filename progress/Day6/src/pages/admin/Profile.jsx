import courses from "../data/Courselist"
import usersBuyingCourses from "../data/UsersList"
import BarGraph from "./BarGraph"
const Profile = () => {
  return (
    <div className="  text-white flex flex-col justify-center">
      <div className="container m-5 text-black bg-slate-300 w-[60vw] rounded-2xl">
       <BarGraph courses={courses} users={usersBuyingCourses} />
       </div>
    </div>
  )
}

export default Profile