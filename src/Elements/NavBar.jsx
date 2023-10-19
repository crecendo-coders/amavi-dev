import { NavLink } from "react-router-dom";
import { ButtonGroup, Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";
import Admin from "../Pages/Admin";
import { Menu } from "@headlessui/react";
import {RiArrowDropDownLine} from "react-icons/ri"

const activeNav =
    "bg-blue-500 text-lg m-2 mx-6 text-white px-4 py-4 rounded-full underline  focus:text-white hover:text-white";
const inactiveNav =
    "bg-blue-500 text-lg text-white m-2 mx-6 px-4 py-4 rounded-full hover:bg-white no-underline hover:no-underline focus:no-underline";

const transitionActive =
    "text-white hover:text-gray-300 transition duration-300";

const NavBar = () => {
    const { user } = useAuth0();
    return (
        <nav className="bg-blue-500 py-2 sticky top-0 z-10">
            <div className=" flex flex-row justify-between">
                <div className=" flex items-center flex-row mx-12">
                    <NavLink
                        to="/events"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-blue-500 text-lg m-2 mx-6 text-white px-4 py-4 rounded-full underline  focus:text-white hover:text-white"
                                : "bg-blue-500 text-lg text-white m-2 mx-6 px-4 py-4 rounded-full hover:bg-white no-underline hover:no-underline focus:no-underline"
                        }
                    >
                        Events
                    </NavLink>
                    
                    <NavLink
                        to="/affiliates"
                        className={({ isActive }) =>
                            isActive ? activeNav : inactiveNav
                        }
                    >
                        Our Supporters
                    </NavLink>

                    <Menu as="div" className="relative">
                        <Menu.Button
                            className={`flex items-center
                             bg-blue-500 text-lg m-2 mx-6 px-4 py-4 rounded-full text-white hover:text-blue-500 hover:bg-white no-underline hover:no-underline focus:no-underline`}
                        >
                            About
                        

                        <RiArrowDropDownLine className='h-6 w-6'/>
                        
                        </Menu.Button>

                        <Menu.Items
                            className={`absolute right--4 w-32 origin-top-right rounded-xl divide-y bg-white divide-black/50 ring-1 ring-black ring-opacity-50 focus:outline-none`}
                        >
                            <Menu.Item>
                                {({ active }) => (
                                    <NavLink
                                        to="/members"
                                        className={`${
                                            active
                                                ? `text-black `
                                                : `text-black `
                                        } group flex w-full items-center rounded-lg px-2 py-2 text-sm`}
                                    >
                                        Members
                                    </NavLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <NavLink
                                        to="/about-conductor"
                                        className={`${
                                            active
                                                ? `text-black `
                                                : `text-black `
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
                                                ? `text-black `
                                                : `text-black `
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
                                                ? `text-black `
                                                : `text-black `
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
                                                ? `text-black `
                                                : `text-black `
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
                </div>
                
            </div>
        </nav>
    );
};

export default NavBar;
