import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuthContext from "../../Hooks/useAuthContext";

const Courses = () => {
  const {user} = useAuthContext();
  let name = user.displayName;
  let userEmail = user.email;
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios.get(`https://lingify-server.onrender.com/api/course`).then(function (response) {
    setCourses(response.data);
  });
  }, []);
  const addToCart = (course) => {
    console.log(course);
    const { coursetitle, sellingPrice, image, ratting, category  } = course;
    const cart = { name, userEmail, coursetitle, sellingPrice, image, ratting, category };
    useEffect(() => {
      axios.post(`https://lingify-server.onrender.com/api/cart`, cart).then(function (response) {
        response.data && Swal.fire({
        icon: "success",
        title: "Course Added Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(response.data);
    }, []);
  });
  };
    return (
        <>
            <div className="w-10/12 mx-auto my-20">
        <h2 className="text-center text-5xl font-bold mb-6"> Learn a Foreign Language to Speak to the World</h2>
        <p className="text-center text-xl w-3/6 mb-6 mx-auto">We offer modern language courses in Arabic, French, German, Italian, Japanese, Mandarin and Portuguese.
</p>
<div className="lg:grid grid-cols-3 justify-between items-center gap-4">
          {courses.map((course) => (<div key={course._id} className="mt-12 shadow-md relative hover:-translate-y-11 duration-500">
            <div className="flex absolute top-4">
              <div className="px-4 py-2 bg-primary font-semibold text-xl">
                <h5>From ${course.sellingPrice}</h5>
              </div>{" "}
            </div>
            <img
              className="w-full"
              src={course.image}
              alt=""
            />
            <div className="p-4 pt-3 lg:h-40">
              <h3 className="font-bold text-3xl pb-3">
                {course.coursetitle}
              </h3>
              <div className="grid grid-cols-3 gap-4 text-lg">
                <div>Start Date</div>
                <div className=" h-0.5 bg-slate-200 mt-3"></div>
                <div className="text-right"> {course.startDate}</div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-lg">
                <div>Class Number</div>
                <div className="h-0.5 bg-slate-200 mt-3"></div>
                <div className="text-right">{course.classno}</div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-lg">
                <div>Available Sit</div>
                <div className="h-0.5 bg-slate-200 mt-3"></div>
                <div className="text-right">{course.studentno}</div>
              </div>
            </div>
            <div className="text-center py-4 duration-300 hover:bg-accent hover:text-base-100 bg-primary cursor-pointer">
              <a onClick={()=>{addToCart(course)}} className="text-2xl w-full mt-4 cursor-pointer">
                Add To Cart
              </a>
            </div>
          </div>))}
          
        </div>
      
    </div>
    </>
  );
};

export default Courses;