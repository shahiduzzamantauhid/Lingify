import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../Hooks/useAuthContext";
import { useContext } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
  const { signInWithGoogle } = useAuthContext();
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email,password)
        .then(() =>{
          form.reset();
          navigate(from, {replace: true});
        })
        .catch((error) => {
          const errorMessage = error.message;
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMessage,
          });
      });
    }
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result); // TODO: Add a toast message or Alert
      })
      .catch((error) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.message,
          showConfirmButton: false,
          timer: 1500
        }); // TODO: Add a toast message or Alert
      });
  };
  return (
    <><Helmet>
      <title>Login</title>
    </Helmet>

    <div className="flex h-[80vh] bg-gray-100">
      <div className="m-auto p-6 rounded-lg shadow-lg bg-white w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="input input-primary w-full"
                  name="email"
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
              className="input input-primary w-full"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <Link className="mt-1 italic">Forget Password?</Link>
          </div>
          <p className="mb-2">
            New In Lingify?{" "}
            <Link to="/signup" className="font-semibold text-primary">
              Register
            </Link>
          </p>
          <button className="btn btn-primary w-full" type="submit">
            Login
          </button>
        </form>
        <a onClick={handleGoogleLogin}
            className="btn btn-primary btn-outline mt-2 w-full"
          >
            Login With Google
          </a>
      </div>
    </div>
    </>
  );
};

export default Login;
