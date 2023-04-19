import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

function Body() {
    return (
        <Auth0Provider
            domain="dev-lwg87s1hofw27zst.us.auth0.com"
            clientId="vcCtnPh5O53hpwr35SC1gGucQI2dSwnp"
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
        >
            {/* <BrowserRouter> */}
            <App />
            {/* </BrowserRouter> */}
        </Auth0Provider>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);
