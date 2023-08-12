import { Outlet } from "react-router-dom";
import Header from "../Components/Shares/Header";
import Footer from "../Components/Shares/Footer";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
