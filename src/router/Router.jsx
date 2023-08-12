import CategoryPage from "../Components/Pages/Courses/CategoryPage";
import Courses from "../Components/Pages/Courses/Course";
import ErrorPage from "../Components/Pages/ErrorPage";
import SingleCourse from "../Components/Pages/Courses/SingleCourse";
import Home from "../Components/Pages/Homepage/Home";
import Instractors from "../Components/Pages/InstractorPage/Instractors";
import Instractor from "../Components/Pages/InstractorPage/Username";
import MainLayout from "../Layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";

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
        element: <Courses />,
      },
      {
        path: "/instractors/username",
        element: <Instractor />,
      },
      {
        path: "/category",
        element: <CategoryPage />,
      },
      {
        path: "/course",
        element: <SingleCourse />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
