import { NavLink } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import { Menu } from "@headlessui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import React, { useState } from "react";

const activeNav =
  "bg-blue-500 text-lg m-2 mx-6 text-white px-4 py-4 rounded-full underline focus:text-white hover:text-white";
const inactiveNav =
  "bg-blue-500 text-lg text-white m-2 mx-6 px-4 py-4 rounded-full hover:bg-white no-underline hover:no-underline focus:no-underline";

const transitionActive = "text-white hover:text-gray-300";

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const closeMenu = () => {
    setIsClicked(false);
  };

  return (
    <div className="sticky top-0">
      {/* mobile nav bar */}
      <div className="lg:hidden bg-blue-500 py-2 top-0 z-10">
        {isClicked ? (
          <nav className="">
            <button
              className="sm:hidden flex h-full items-center"
              onClick={() => setIsClicked(!isClicked)}
            >
              <span className="text-2xl m-4">&#9776;</span>
            </button>
            <div className="flex items-center flex-col text-center gap-3">
              <NavLink
                to="/events"
                onClick={closeMenu} // Close the menu when the item is clicked
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 text-lg m-2 mx-6 text-white px-4 py-4 rounded-full underline focus:text-white hover:text-white"
                    : "bg-blue-500 text-lg text-white m-2 mx-6 px-4 py-4 rounded-full hover:bg-white no-underline hover:no-underline focus:no-underline"
                }
              >
                Events
              </NavLink>
              <NavLink
                to="/affiliates"
                onClick={closeMenu}
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
                  <RiArrowDropDownLine className="h-6 w-6" />
                </Menu.Button>

                <Menu.Items
                  className={`absolute right--4 w-32 origin-top-right rounded-xl divide-y bg-white divide-black/50 ring-1 ring-black ring-opacity-50 focus:outline-none`}
                >
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        to="/members"
                        onClick={closeMenu}
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
                        onClick={closeMenu}
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
                        to="/about-chorale"
                        onClick={closeMenu}
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
                </Menu.Items>
              </Menu>
              <NavLink
                to="/audition"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? activeNav : inactiveNav
                }
              >
                Join Us
              </NavLink>
            </div>
          </nav>
        ) : (
          <button
            className="sm:hidden flex h-full items-center"
            onClick={() => setIsClicked(!isClicked)}
          >
            <span className="text-2xl">&#9776;</span>
          </button>
        )}
      </div>
      {/* desktop nav bar */}
      <div className="lg:flex lg:bg-blue-500 lg:py-2 lg:top-0 lg:z-10">
          <button
            className="sm:hidden flex h-full items-center"
            onClick={() => setIsClicked(!isClicked)}
          >
          </button>
          <div className="sm:flex flex-row justify-between h-full hidden">
            <div className="flex items-center flex-row text-center gap-3">
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 text-lg m-2 mx-6 text-white px-4 py-4 rounded-full underline focus:text-white hover:text-white"
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
                  <RiArrowDropDownLine className="h-6 w-6" />
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
      </div>
    </div>
  );
};

export default NavBar;
