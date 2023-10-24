import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {

  return (
    <div>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
