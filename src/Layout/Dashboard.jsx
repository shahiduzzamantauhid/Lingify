// import axios from 'axios';
import logo from "../assets/Images/LingiFytrn.png";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
  FaRegAddressCard,
  FaMoneyBill,
  FaUsers,
  FaCog,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaShoppingCart,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/Providers/AuthProviders";
import axios from "axios";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    let userEmail = user?.email;
    console.log(userEmail);
    axios.get(`http://localhost:5000/api/admin/${userEmail}`).then(function (response) {
      setUserInfo(response.data);
  });
 
  }, [user]);
  console.log(userInfo.role);

  //   var role = user.email;
  return (
    <>
      <Helmet>
        <title>Lingify | Admin Dashboard</title>
      </Helmet>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <nav className="w-1/4 bg-blue-500 p-6">
          <div className="flex justify-between">
            <img src={logo} alt="" />
            <Link
              to="/"
              className="text-white text-5xl text-center font-bold mt-6"
            >
              <FaHome />
            </Link>
          </div>
          <ul className="mt-12 space-y-4 text-2xl">
            <li className="">
              <NavLink
                to="/dashboard/cart"
                className="flex items-center space-x-2"
              >
                <FaShoppingCart className="text-white" />
                <span className="text-white">Cart</span>
              </NavLink>
            </li>
            {
              userInfo.role === "admin" ? (
                <li className="">
              <NavLink
                to="/dashboard/allusers"
                className="flex items-center space-x-2"
              >
                <FaUsers className="text-white" />
                <span className="text-white">Users</span>
              </NavLink>
            </li>
              ) : (null)
            }
            {userInfo.role === "admin" ? (
              <li className="">
              <NavLink
                to="/dashboard/instructors"
                className="flex items-center space-x-2"
              >
                <FaChalkboardTeacher className="text-white" />
                <span className="text-white">Instructors</span>
              </NavLink>
            </li>) : (null)
              }
            {
              userInfo.role === "admin" || userInfo.role === "instructor" ? (
                <li className="">
              <NavLink
                to="/dashboard/addcourse"
                className="flex items-center space-x-2"
              >
                <FaRegAddressCard className="text-white" />
                <span className="text-white">Add Courses</span>
              </NavLink>
            </li>
              ) : (null)
            }
            <li className="">
              <NavLink
                to="/dashboard/students"
                className="flex items-center space-x-2"
              >
                <FaUserGraduate className="text-white" />
                <span className="text-white">Students</span>
              </NavLink>
            </li>

            <li className="">
              <NavLink to="/" className="flex items-center space-x-2">
                <FaMoneyBill className="text-white" />
                <span className="text-white">Transections</span>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/" className="flex items-center space-x-2">
                <FaMoneyBill className="text-white" />
                <span className="text-white">My Courses</span>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/" className="flex items-center space-x-2">
                <FaCog className="text-white" />
                <span className="text-white">Settings</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="w-3/4 p-10">
          <h2 className="text-4xl font-semibold">
            Welcome{" "}
            <span className="text-primary text-4xl uppercase">
              {" "}
              {user? user.displayName : " "}
            </span>
          </h2>
          {/* Your dashboard content goes here */}

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
