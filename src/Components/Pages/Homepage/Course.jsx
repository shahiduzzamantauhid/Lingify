import axios from "axios";
import { useState } from "react";

const Course = () => {
  const [courses, setCourses] = useState([]);
  axios.get(`https://lingify-server.onrender.com/api/course`).then(function (response) {
    setCourses(response.data);
  });

  return (
    <>
      <div className="w-10/12 mx-auto my-20">
        <h2 className="text-center text-5xl font-bold mb-20"> Our Top Courses</h2>
        <div className="lg:grid grid-cols-3 gap-4">
          
          {courses.map((course) => (
            <div key={course._id} className="shadow-md relative hover:-translate-y-11 duration-500 mt-12">
            <div className="flex absolute top-4"><div className="px-4 py-1 bg-secondary text-white"><h5>Intermediate</h5></div> <div className="px-2 py-1 bg-primary font-semibold"><p>B1</p></div></div>
              <img className="w-full"
                src={course.image}
                alt=""
              />
              
              <div className="p-4 pt-3 h-40">
                <h3 className="font-bold text-3xl pb-3">{course.coursetitle}</h3>
                <p>
                  {course.description}
                </p>
              </div>
              <div className= "text-center py-4 duration-300 hover:bg-accent hover:text-base-100 bg-primary">
                <span className="text-2xl w-full mt-4">
                  New Batch will Start <span className="text-3xl italic text-white hover:text-primary">{course.startDate}!</span>
                </span>
              </div>
            </div>
            ))}
          
        </div>
      </div>
    </>
  );
};

export default Course;
