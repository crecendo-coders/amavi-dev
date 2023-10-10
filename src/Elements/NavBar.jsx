
// import { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import Logo from "./Logo";

const navLinks = [
  { name: "Events", route: "/events" },
  { name: "Conductor", route: "/about-conductor" },
  { name: "Chorale", route: "/about-chorale" },
  { name: "Guests", route: "/about-guests" },
  { name: "Support Us", route: "/support-us" },
  { name: "Audition", route: "/audition" },
];


const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const userId = useSelector((state) => state.userId);

  const handleLogout = () => {
    axios
      .delete("/api/logout")
      .then(() => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
      })
      .catch((err) => console.error("Logout Error", err));
  };
  return (
      <NavLink to=>
          <p>Hello</p>
      </NavLink>
    );
  }

  export default NavBar