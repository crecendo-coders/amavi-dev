import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const activeNav =
    " underline  focus:text-white hover:text-white";
const inactiveNav =
    "py-2 px-4 text-white no-underline hover:underline hover:text-blue-400 focus:no-underline";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <NavLink
            className={({ isActive }) => (isActive ? inactiveNav : activeNav)}
            onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
            }
        >
            Log Out
        </NavLink>
    );
};

export default LogoutButton;
