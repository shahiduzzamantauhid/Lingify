import CategoryPage from "../Components/Pages/Courses/CategoryPage";
import Courses from "../Components/Pages/Courses/Course";
import ErrorPage from "../Components/Pages/ErrorPage";
import SingleCourse from "../Components/Pages/Courses/SingleCourse";
import Home from "../Components/Pages/Homepage/Home";
import Instractors from "../Components/Pages/InstractorPage/Instractors";
import Instractor from "../Components/Pages/InstractorPage/Username";
import MainLayout from "../Layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Pages/auth/Login";
import SignUp from "../Components/Pages/auth/SignUp";
import PrivateRoute from "../router/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Components/Pages/UnderDashboard/AllUsers";
import AddCourse from "../Components/Pages/UnderDashboard/AddCourse";
import Instructors from "../Components/Pages/UnderDashboard/Instructors";
import Cart from "../Components/Pages/UnderDashboard/Cart";
import Students from "../Components/Pages/UnderDashboard/Students";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instractors",
        element: <Instractors />,
      },
      {
        path: "/courses",
        element: (
          <PrivateRoute>
            <Courses />
          </PrivateRoute>
        ),
      },
      {
        path: "/instractors/username",
        element: <Instractor />,
      },
      {
        path: "/course",
        element: <SingleCourse />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
      path: "/dashboard/allusers",
      element: <AllUsers />,
    },
    {
      path: "/dashboard/addcourse",
      element: <AddCourse />,
    },
    {
      path: "/dashboard/instructors",
      element: <Instructors />,
    },
    {
      path: "/dashboard/cart",
      element: <Cart />,
    },
    {
      path: "/dashboard/students",
      element: <Students />,
    },
    ]
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
