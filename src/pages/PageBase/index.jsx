//COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
//REACT ROUTER
import { Outlet } from "react-router-dom";

const PageBase = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PageBase;
