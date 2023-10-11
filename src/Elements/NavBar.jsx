import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";

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
    <nav className="bg-blue-500 py-2 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <NavLink
            to="/events"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Events
          </NavLink>
          <NavLink
            to="/support"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Support Us
          </NavLink>
          {userId ? ( 
            <>
              <NavLink
                to="/profile"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Profile
              </NavLink>
              <button
                onClick={handleLogout}
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Login
            </NavLink>
          )}
          <Dropdown title="About" className="text-white hover:text-gray-300 transition duration-300">
            <Dropdown.Item as="a" href="/affiliates">Our Supporters</Dropdown.Item>
            <Dropdown.Item as="a" href="/about-conductor">Conductor</Dropdown.Item>
            <Dropdown.Item as="a" href="/about-chorale">Chorale</Dropdown.Item>
            <Dropdown.Item as="a" href="/about-artists">Guest Artists</Dropdown.Item>
            <Dropdown.Item as="a" href="/about-executive-team">Executive Team</Dropdown.Item>
          </Dropdown>
          <NavLink
            to="/audition"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Join Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
