import { NavLink } from "react-router-dom";
import axios from "axios";
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";


const NavBar = () => {
  const { user } = useAuth0();
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
          <>
            <NavLink
              to="/profile"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Profile
            </NavLink>
  
          </>
          {user?<LogoutButton/>:<LoginButton/>}
          <Dropdown
            title="About"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <Dropdown.Item as="a" href="/affiliates">
              Our Supporters
            </Dropdown.Item>
            <Dropdown.Item as="a" href="/about-conductor">
              Conductor
            </Dropdown.Item>
            <Dropdown.Item as="a" href="/about-chorale">
              Chorale
            </Dropdown.Item>
            <Dropdown.Item as="a" href="/about-artists">
              Guest Artists
            </Dropdown.Item>
            <Dropdown.Item as="a" href="/about-executive-team">
              Executive Team
            </Dropdown.Item>
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
