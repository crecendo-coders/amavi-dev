import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const activeNav =
    "bg-blue-500 text-lg m-2 text-white px-4 py-4 rounded-full underline  focus:text-white hover:text-white";
const inactiveNav =
    "bg-blue-500 text-lg m-2 text-white px-4 py-4 rounded-full hover:bg-white no-underline hover:no-underline focus:no-underline";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <NavLink
            className={({ isActive }) => (isActive ? inactiveNav : inactiveNav)}
            onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
            }
        >
            Log Out
        </NavLink>
    );
};

export default LogoutButton;
