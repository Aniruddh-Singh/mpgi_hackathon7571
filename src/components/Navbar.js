import React, { useState } from "react";
import "./CSS/navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth0, User } from "@auth0/auth0-react";
// import { NavLink } from "react-router-dom";
import kheti from "./Images/kheti.png";

function Navbar() {
    const state = useState();
    const [toggle, setToggle] = useState(true);
    const clck = () => {
        return setToggle(!toggle);
    };

    let classname;
    toggle ? (classname = "Nnavbar") : (classname = " change");

    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    return (
        <>
            <div className={classname} id="navbar">
                {toggle ? (
                    <MenuIcon
                        sx={{
                            display: {
                                color: "white",
                                xs: "block",
                                md: "none",
                            },
                        }}
                        className="menuicon"
                        onClick={clck}
                    />
                ) : (
                    <CloseIcon
                        sx={{
                            display: {
                                color: "white",
                                xs: "block",
                                md: "none",
                            },
                        }}
                        className="menuicon"
                        onClick={clck}
                    />
                )}

                <ul className="Nnav-items">
                    <li>
                        <img className="logo" src={kheti} alt="logo" />
                    </li>
                    <li>
                        <a href="#"> Home </a>
                    </li>
                    <li>
                        <a href="#about">About the</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#contact">Contact us</a>
                    </li>
                </ul>
                <div className="Btn">
                    {/* <button className="Nbtn">
                        <NavLink to="/ordernow" className="Navbtn">
                            Order Now
                        </NavLink>
                    </button> */}
                    {isAuthenticated && (
                        <button className="Nbtn">Hi, {user.name}</button>
                    )}
                    {isAuthenticated ? (
                        <button
                            onClick={() =>
                                logout({
                                    logoutParams: {
                                        returnTo: window.location.origin,
                                    },
                                })
                            }
                            className="Nbtn"
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                            onClick={() => loginWithRedirect()}
                            className="Nbtn"
                        >
                            sign in/sign up
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}

export default Navbar;
