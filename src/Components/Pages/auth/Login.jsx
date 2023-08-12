import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex h-[80vh] bg-gray-100">
      <div className="m-auto p-6 rounded-lg shadow-lg bg-white w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="input input-primary w-full"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your Email"
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
            <p className="mb-2">New In Lingify? <Link to="/signup" className="font-semibold text-primary">Register</Link></p>
          <button className="btn btn-primary w-full" type="submit">
            Login
          </button>
          <button className="btn btn-primary btn-outline mt-2 w-full" type="submit">
            Login With Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
