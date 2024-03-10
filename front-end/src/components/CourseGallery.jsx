import courses from "../pages/data/Courselist";
const CourseGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <div key={course.id} className="bg-slate-800 shadow-lg rounded-lg overflow-hidden">
          <img src={course.img_url} alt={course.course_name} className="w-full p-4 h-56 object-cover object-center" />
          <div className="p-4">
            <h3 className="text-slate-100 text-xl font-medium mb-2">{course.course_name}</h3>
            <p className="text-slate-200 mb-2">Author: {course.author_name}</p>
            <p className="text-slate-200 mb-2">Price: ${course.price}</p>
            <p className="text-slate-200 mb-4">{course.description}</p>
            
            <a href="#_" className="inline-flex items-center justify-center w-full px-4 py-3 mb-4 bottom-2 text-white bg-indigo-500 rounded-md hover:bg-blue-500  sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
            Get Started
            <svg className="w-4 h-4 ml-1 hover:ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>

          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseGallery;
