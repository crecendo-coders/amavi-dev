import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Auth0Provider
            domain={import.meta.env.VITE_DOMAIN}
            clientId={import.meta.env.VITE_CLIENT_ID}
            authorizationParams={{
                redirect_uri: import.meta.env.VITE_HOST,
            }}
        >
            <App />
        </Auth0Provider>
    </React.StrictMode>
);
// add these to your .env
// VITE_DOMAIN=dev-d5utb7dzjctc84ng.us.auth0.com
// VITE_CLIENT_ID=woxDYBlsNThoMz7vc2FXrR7S1dxao8UB
