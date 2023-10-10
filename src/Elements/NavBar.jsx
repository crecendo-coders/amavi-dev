
// import { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";

import { Dropdown } from "rsuite"; 
import "rsuite/dist/rsuite.min.css"; 

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
    <nav className="dropdown-menu">
      <NavLink to="/events">Events</NavLink>
      <NavLink to="/support" >Support Us</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/affiliates">Our Supporters</NavLink>
      <Dropdown title="About"> 
        <Dropdown.Item as="a" href= "/about-conductor">Conductor</Dropdown.Item> 
        <Dropdown.Item as="a" href= "/about-chorale">Chorale</Dropdown.Item> 
        <Dropdown.Item as="a" href= "/about-artists">Guest Artists</Dropdown.Item> 
      </Dropdown> 
      <NavLink to="/audition">Join Us</NavLink>
    </nav>
    );
  }

  export default NavBar