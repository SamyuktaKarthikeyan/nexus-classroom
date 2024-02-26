import usersBuyingCourses from "../data/UsersList";
import courses from "../data/Courselist";
const PaymentHistory = () => {
  const paidUsers = usersBuyingCourses.filter(user => user.paid_status);

  return (
    <div className="container m-5 p-10 text-black bg-slate-300 w-[60vw] rounded-2xl">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">User ID</th>
            <th className="px-4 py-2">Users Name</th>
            <th className="px-4 py-2">Course Name</th>
            <th className="px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
        {paidUsers.map((user) => {
            const course = courses.find(course => course.id === user.course_id);
            return (
              <tr key={user.id} className="border-b">
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.cust_name}</td>
                <td className="px-4 py-2">{user.course_name}</td>
                <td className="px-4 py-2">${course.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
