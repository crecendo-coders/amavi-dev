
// import { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";

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
    <nav>
      <NavLink to="/events">Events</NavLink>
      <NavLink to="/support">Support Us</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/affiliates">Our Supporters</NavLink>
      <NavLink to="/about-conductor">Conductor</NavLink>
      <NavLink to="/about-chorale">Chorale</NavLink>
      <NavLink to="/about-artists">Guest Artists</NavLink>
      <NavLink to="/audition">Join Us</NavLink>
    </nav>
    );
  }

  export default NavBar