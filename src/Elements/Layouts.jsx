import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  const userId = useSelector(state => state.userId)
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("/api/user")
      .then((res) => {
        console.log("User: ", res);
        dispatch({ type: "LOGIN", payload: res.data.userId });
      })
      .catch((err) => console.log(err));
  }, [userId]);

  return (
    <div >
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
