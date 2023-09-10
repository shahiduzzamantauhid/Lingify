import { useContext } from "react";

// import Modal from "./Modal";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
const AddCourse = () => {
  const { user } = useContext(AuthContext);
  let displayName = user.displayName;
  let email = user.email;
  const handleSumbit = (e) => {
    e.preventDefault();
    const form = e.target;
    const coursetitle = form.coursetitle.value;
    const regularPrice = parseFloat(form.regularPrice.value);
    const sellingPrice = parseFloat(form.sellingPrice.value);
    const ratting = parseFloat(form.ratting.value);
    const category =form.category.value === "--- select ---"? "Undefiend": form.category.value;
     const startDate = form.startDate.value;
    const image = form.image.value;
    const studentno = parseFloat(form.studentno.value);
    const classno = parseFloat(form.classno.value);
    const description = form.description.value;
    console.log(
      coursetitle,
      regularPrice,
      sellingPrice,
      ratting,
      category,
      startDate,
      studentno,
      classno,
      image,
      description
    );
    form.reset();
    const course = {
      displayName,
      email,
      coursetitle,
      regularPrice,
      sellingPrice,
      ratting,
      category,
      startDate,
      studentno,
      classno,
      image,
      description
    };
    fetch("https://lingify-server.onrender.com/api/course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course),
    })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Course Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="lg:w-8/12 mx-auto my-8">
      <h1 className="text-center text-3xl font-bold my-4">Add Course</h1>
      <form
        onSubmit={handleSumbit}
        className=" shadow-2xl bg-base-200 p-8 rounded-xl"
      >
        <div className="grid grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Course title</span>
            </label>
            <input
              type="text"
              placeholder="Course title"
              className="input input-bordered"
              name="coursetitle"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Select Category</span>
            </label>
            <select
              className="select select-bordered w-full"
              name="category"
              required
            >
              <option disabled selected>
                --- select ---
              </option>
              <option value={"English"}>English</option>
              <option value={"Portuguese"}>Portuguese</option>
              <option value={"Spanish"}>Spanish</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Regular Price</span>
            </label>
            <input
              type="text"
              placeholder="Its regular price"
              className="input input-bordered"
              name="regularPrice"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Offer Price</span>
            </label>
            <input
              type="text"
              placeholder="Its Offer price"
              className="input input-bordered"
              name="sellingPrice"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Ratting</span>
            </label>
            <input
              type="text"
              placeholder="Give a ratting out of 5"
              className="input input-bordered"
              name="ratting"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Start Date</span>
            </label>
            <input
              type="date"
              placeholder="Give a ratting out of 5"
              className="input input-bordered"
              name="startDate"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Number Of Classs</span>
            </label>
            <input
              type="number"
              placeholder="How many classes will be there?"
              className="input input-bordered"
              name="classno"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Students Number</span>
            </label>
            <input
              type="number"
              placeholder="How many students can apply?"
              className="input input-bordered"
              name="studentno"
              required
            />
          </div>
        </div>
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              placeholder="Image url"
              className="input input-bordered"
              name="image"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Course Description</span>
            </label>
            <textarea
              type="text"
              placeholder="Write something about your product"
              className="input input-bordered pt-1 h-24"
              name="description"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;