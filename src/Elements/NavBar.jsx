import { NavLink } from "react-router-dom";
import { ButtonGroup, Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";
import Admin from "../Pages/Admin";
import { Menu } from "@headlessui/react";

const activeNav =
    "bg-blue-500 text-lg text-white m-2 px-4 py-4 rounded-full underline  focus:text-white hover:text-white";
const inactiveNav =
    "bg-blue-500 text-lg text-white m-2 px-4 py-4 rounded-full hover:bg-white no-underline hover:no-underline focus:no-underline";

const transitionActive =
    "text-white hover:text-gray-300 transition duration-300";

const NavBar = () => {
    const { user } = useAuth0();
    return (
        <nav className="bg-blue-500 py-2 sticky top-0 z-10">
            <div className="container mx-auto flex flex-row">
                <div className="flex flex-row">
                    <div className=" flex flex-row">
                        <NavLink
                            to="/events"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-blue-500 text-lg m-2 text-white px-4 py-4 rounded-full underline  focus:text-white hover:text-white"
                                    : "bg-blue-500 text-lg m-2 text-white px-4 py-4 rounded-full hover:bg-white no-underline hover:no-underline focus:no-underline"
                            }
                        >
                            Events
                        </NavLink>
                        <NavLink
                            to="/support"
                            className={({ isActive }) =>
                                isActive ? activeNav : inactiveNav
                            }
                        >
                            Support Us
                        </NavLink>
                        

                        <Menu as='div'
                        className='relative rounded-full'
                        >
                            <Menu.Button className={`appearance-none text-black flex align-middle p-4 hover:underline whitespace-nowrap m-4 rounded-full`}>About</Menu.Button>

                            <Menu.Items className={`absolute right--4 w-32 origin-top-right rounded-xl divide-y bg-white divide-black/50 ring-1 ring-black ring-opacity-50 focus:outline-none`}>
                                <Menu.Item>
                                    {({ active }) => (
                                        <NavLink
                                            to="/affiliates"
                                            className={`${
                                                active
                                                    ? `text-black `
                                                    : `text-black `
                                            } group flex w-full items-center rounded-lg px-2 py-2 text-sm`}
                                        >
                                            Our Supporters
                                        </NavLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                  <NavLink
                                      to="/about-conductor"
                                      className={`${
                                          active
                                              ? `${
                                                    location.pathname ===
                                                    "/home"
                                                        ? "bg-calPoly/80 text-white"
                                                        : "bg-third text-white"
                                                }`
                                              : `${
                                                    location.pathname ===
                                                    "/home"
                                                        ? " text-white"
                                                        : " text-black"
                                                }`
                                      } group flex w-full items-center rounded-lg px-2 py-2 text-sm`}
                                  >
                                      Conductor
                                  </NavLink>
                              )}
                                    
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                  <NavLink
                                      to="/about-artists"
                                      className={`${
                                          active
                                              ? `${
                                                    location.pathname ===
                                                    "/home"
                                                        ? "bg-calPoly/80 text-white"
                                                        : "bg-third text-white"
                                                }`
                                              : `${
                                                    location.pathname ===
                                                    "/home"
                                                        ? " text-white"
                                                        : " text-black"
                                                }`
                                      } group flex w-full items-center rounded-lg px-2 py-2 text-sm`}
                                  >
                                      Guest Artists
                                  </NavLink>
                              )}
                                    
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                  <NavLink
                                      to="/about-chorale"
                                      className={`${
                                          active
                                              ? `${
                                                    location.pathname ===
                                                    "/home"
                                                        ? "bg-calPoly/80 text-white"
                                                        : "bg-third text-white"
                                                }`
                                              : `${
                                                    location.pathname ===
                                                    "/home"
                                                        ? " text-white"
                                                        : " text-black"
                                                }`
                                      } group flex w-full items-center rounded-lg px-2 py-2 text-sm`}
                                  >
                                      Chorale
                                  </NavLink>
                              )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                  <NavLink
                                      to="/about-executive-team"
                                      className={`${
                                          active
                                              ? `${
                                                    location.pathname ===
                                                    "/home"
                                                        ? "bg-calPoly/80 text-white"
                                                        : "bg-third text-white"
                                                }`
                                              : `${
                                                    location.pathname ===
                                                    "/home"
                                                        ? " text-white"
                                                        : " text-black"
                                                }`
                                      } group flex w-full items-center rounded-lg px-2 py-2 text-sm`}
                                  >
                                      Executive Team
                                  </NavLink>
                              )}
             
                                </Menu.Item>
                                
                            </Menu.Items>
                        </Menu>

                        <NavLink
                            to="/audition"
                            className={({ isActive }) =>
                                isActive ? activeNav : inactiveNav
                            }
                        >
                            Join Us
                        </NavLink>
                        {user ? (
                            <>
                                <NavLink
                                    to="/admin"
                                    className={({ isActive }) =>
                                        isActive ? activeNav : inactiveNav
                                    }
                                >
                                    Admin
                                </NavLink>
                                <LogoutButton />
                            </>
                        ) : (
                            <LoginButton className={inactiveNav} />
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
