import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";

const PricingAndDates = () => {
  const {user} = useContext(AuthContext);

  const [courses, setCourses] = useState([]);
  axios.get(`https://lingify-server.onrender.com/api/course`).then(function (response) {
    setCourses(response.data);
  });
  const addToCart = (course) => {
    let name = user.displayName;
    let userEmail = user.email;
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
    }
    );
    }, []);
  };
  return (
    <>
      <div className="w-10/12 mx-auto my-20">
        <div className="lg:w-4/6 mx-auto">
          <h2 className="text-center text-5xl font-bold mt-40 mb-8">
            Price & Dates
          </h2>
          <h2 className="text-center text-xl mb-16">
            Our interactive teaching method engages you in the learning process
            so that you learn communication skills and develop confidence
            quickly.
          </h2>
        </div>
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
            <div className="text-center py-4 duration-300 hover:bg-accent hover:text-base-100 bg-primary">
              <a onClick={()=>{addToCart(course)}} className="text-2xl w-full mt-4">
                Add To Cart
              </a>
            </div>
          </div>))}
          
        </div>
      </div>
    </>
  );
};

export default PricingAndDates;
