

const SignUp = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto p-6 rounded-lg shadow-lg bg-white w-96">
        <h2 className="text-2xl font-semibold mb-4">SignUp</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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
          <input type="file" name="Photo" id=""
            className="mb-4 file-input w-full "
          />
          <button
            className="w-full btn btn-primary"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
