import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Menu } from "@headlessui/react";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import SubscribeModal from "./SubscribeModal";

const Footer = () => {
  const { user } = useAuth0();
  const [showModal, setShowModal] = useState(false);

  return (
    <footer id="primary" className="bg-gray-900 text-white py-8">
      <section id="footer" className="wrapper">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4">
            <NavLink
              id="footerMailingList"
              className="md:w-1/2 p-4"
              onClick={() => setShowModal(true)}
            >
              <h3 className="text-xl font-semibold text-blue-500 hover:text-blue-700">Join our Mailing List</h3>
            </NavLink>
            <p>
              Subscribe to receive advance notice of concerts, and occasional
              news from the group.
            </p>
          </div>
          {showModal && <SubscribeModal setShowModal={setShowModal} />}
          <div className="md:w-1/2 p-4">
            <NavLink to="/support" id="footerDonate" className="md:w-1/2 p-4">
              <h3 className="text-xl font-semibold text-blue-500 hover:text-blue-700">Donate to Amavi</h3>
            </NavLink>
            <p>
              Please help sustain the choir's essential music education work and
              artistic output.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 py-4">
        <div className="wrapper">
          <nav
            id="secondary"
            className="menu-secondary-container text-center md:text-left"
          >
            <ul className="flex flex-col w-1/5">
              <>
                {user ? (
                  <>
                    <li className="text-white hover:text-blue-700">
                      <LogoutButton />
                    </li>

                    <div className="flex">
                      <Menu as="div" className="relative rounded-full mx-6">
                        <Menu.Button
                          className={` text-white hover:text-blue-700 no-underline hover:no-underline focus:no-underline`}
                        >
                          Admin
                        </Menu.Button>
                        <Menu.Items
                          className={`absolute bottom-0 left-14 w-32 origin-top-right rounded-xl divide-y bg-white divide-black/50 ring-1 ring-black ring-opacity-50 focus:outline-none`}
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <NavLink
                                to="/manageEvents"
                                className={`${
                                  active ? `text-black ` : `text-black `
                                } group flex w-full items-center rounded-lg px-2 py-2 text-sm`}
                              >
                                Manage Events
                              </NavLink>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <NavLink
                                to="/manageSubscribers"
                                className={`${
                                  active ? `text-black ` : `text-black `
                                } group flex w-full items-center rounded-lg px-2 py-2 text-sm`}
                              >
                                Manage Subscribers
                              </NavLink>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <NavLink
                                to="/manageMembers"
                                className={`${
                                  active ? `text-black ` : `text-black `
                                } group flex w-full items-center rounded-lg px-2 py-2 text-sm`}
                              >
                                Manage Members
                              </NavLink>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <NavLink
                                to="/newsletter"
                                className={`${
                                  active ? `text-black ` : `text-black `
                                } group flex w-full items-center rounded-lg px-2 py-2 text-sm`}
                              >
                                Newsletter
                              </NavLink>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                  </>
                ) : (
                  <li>
                    <LoginButton />
                  </li>
                )}
              </>
            </ul>
          </nav>
          <p className="text-center py-4">
            Copyright 2023 Amavi. All Rights Reserved.
          </p>

          <p className="text-center py-4">
            Amavi is a working name of The Amavi Chorale, 501(c)(3)
          </p>
          <p className="text-center py-4">Email: info@amavichorale.com</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
