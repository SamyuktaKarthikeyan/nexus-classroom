import courses from "../pages/data/Courselist";
const CourseGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <div key={course.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={course.img_url} alt={course.course_name} className="w-full h-48 object-cover object-center" />
          <div className="p-4">
            <h3 className="text-xl font-medium mb-2">{course.course_name}</h3>
            <p className="text-gray-700 mb-2">Author: {course.author_name}</p>
            <p className="text-gray-700 mb-2">Price: ${course.price}</p>
            <p className="text-gray-600">{course.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseGallery;
