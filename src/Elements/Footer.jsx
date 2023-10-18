import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="primary" className="bg-gray-900 text-white py-8">
      <section id="footer" className="wrapper">
        <div className="flex flex-col md:flex-row">
          <NavLink to="/mailing-list" id="footerMailingList" className="md:w-1/2 p-4">
            <h3 className="text-xl font-semibold">Join our Mailing List</h3>
            <p>
              Subscribe to receive advance notice of concerts, and occasional
              news from the group.
            </p>
          </NavLink>

          <NavLink to="/support" id="footerDonate" className="md:w-1/2 p-4">
            <h3 className="text-xl font-semibold">Donate to Amavi</h3>
            <p>
              Please help sustain the choir's essential music education work
              and artistic output.
            </p>
          </NavLink>
        </div>
      </section>

      <section id="legal" className="bg-gray-800 py-4">
        <div className="wrapper">
          <nav
            id="secondary"
            className="menu-secondary-container text-center md:text-left"
          >
            <ul id="menu-secondary" className="flex flex-wrap">
              <li className="w-full md:w-1/2">
                <NavLink
                  to="/contact"
                  className="text-white hover:text-blue-400 py-2 px-4 block"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <p id="copyright" className="text-center md:text-left py-4">
            Copyright 2023 Amavi. All Rights Reserved.
          </p>

          <p className="text-center md:text-left py-4">
            Amavi is a working name of The Amavi Chorale, 501(c)(3)
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
