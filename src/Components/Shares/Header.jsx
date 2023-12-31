import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/LingiFy.png";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  
  console.log(user);
  const handleLogout = () => {
    logOut()
    .then(() => {} )
    .catch();
  }
  return (
    <div className="bg-white shadow-xl">
      <div className="navbar mx-auto">
        <div className="navbar-start lg:w-2/12">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="">
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
            <NavLink to="/instractors">Instractors</NavLink>
            </li>
            <li>
            <NavLink to="/class">Class</NavLink>
            </li>
            <li>
            <NavLink to="/admission">Admission</NavLink>
            </li>

            <li>
            <NavLink to="/contact">Contact Us</NavLink>
            </li>
            </ul>
          </div>
          <Link to="/"><img src={Logo} alt="Lingify" /></Link>
        </div>
        <div className="navbar-start lg:pl-16 lg:flex hidden">
          <ul className="menu menu-horizontal px-1 font-semibold text-xl">
            <li className="">
              <NavLink className="" to="/">Home</NavLink>
            </li>

            <li>
            <NavLink to="/instractors">Instractors</NavLink>
            </li>
            <li>
            <NavLink to="/courses">Courses</NavLink>
            </li>
            <li>
            <NavLink to="/admission">Admission</NavLink>
            </li>

            <li>
            <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {!user && <NavLink to="/login" className="btn btn-secondary">Log in</NavLink> || <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={!user && "http://gg.gg/148o34" || user.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        
        <li> <Link to="/dashboard/" className="between">Dashboard</Link></li>
        <li> <Link onClick={handleLogout} className="between">Logout</Link></li>
      </ul>
    </div>}

        </div>
      </div>
    </div>
  );
};

export default Header;
