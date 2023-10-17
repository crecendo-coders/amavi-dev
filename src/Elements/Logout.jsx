import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <NavLink onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </NavLink>
  );
};

export default LogoutButton;