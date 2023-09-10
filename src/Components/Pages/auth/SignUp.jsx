import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import axios from "axios";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photourl = form.photourl.value;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    const data = { displayName: name, email, role: "student" };

    fetch("https://lingify-server.onrender.com/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        handleNamePhotourl(user, name, photourl);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Logged In",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const handleNamePhotourl = (user, name, photourl) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photourl,
    }).then(() => {
      navigate(from, { replace: true });
    });
  };
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        const loggedInUser = result.user;
        const saveuser = {
          displayName: loggedInUser.name,
          email: loggedInUser.email,
          role: "student",
        };
        fetch("https://lingify-server.onrender.com/api/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(saveuser),
        }).then(() => {
          console.log(data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Logged In",
            showConfirmButton: false,
            timer: 1500,
          });
        });
        navigate(from, { replace: true });
        // TODO: Add a toast message or Alert
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        }); // TODO: Add a toast message or Alert
      });
  };
  return (
    <>
      <Helmet>
        <title>SignUp</title>
      </Helmet>
      <div className="flex h-screen bg-gray-100">
        <div className="m-auto p-6 rounded-lg shadow-lg bg-white w-96">
          <h2 className="text-2xl font-semibold mb-4">SignUp</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
                id="username"
                name="name"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Photo Url
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
                id="imgUrl"
                name="photourl"
                placeholder="Your Photo Url"
              />
            </div>
            <p className="mb-2">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-primary">
                Log in
              </Link>
            </p>
            <button className="w-full btn btn-primary" type="submit">
              Register
            </button>
          </form>
          <a
            onClick={handleGoogleLogin}
            className="btn btn-primary btn-outline mt-2 w-full"
          >
            Login With Google
          </a>
        </div>
      </div>
    </>
  );
};

export default SignUp;
