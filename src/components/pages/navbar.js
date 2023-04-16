import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import "../css/navbar.css";
function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/home" className="nav-logo">
                        Assignment
                    </NavLink>
                    
                    <ul className={
                        click ? "nav-menu active" : "nav-menu"
                    }>
                        <li className="nav-item">
                            <NavLink exact to="/home"
                                className={
                                    ({isActive}) => (isActive ? "active" : "nav-links")
                                }
                                onClick={handleClick}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/login"
                                className={
                                    ({isActive}) => (isActive ? "active" : "nav-links")
                                }
                                onClick={handleClick}>
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/defaultlist"
                                className={
                                    ({isActive}) => (isActive ? "active" : "nav-links")
                                }
                                onClick={handleClick}>
                                Users
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon"
                        onClick={handleClick}>
                        <i className={
                            click ? "fas fa-times" : "fas fa-bars"
                        }></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;