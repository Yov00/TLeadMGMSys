import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ul className="navbar">
            <li>
                <Link className="nav__link" to="/">
                    <i className="fas fa-tv"></i>
                </Link>
            </li>

            <li>
                <Link className="nav__link" to="/employees">
                    <i className="fas fa-users"></i>
                </Link>
            </li>

            <li>
                <Link className="nav__link" to="/employeeForm">
                    <i className="fas fa-terminal"></i>
                </Link>
            </li>
            <li>
                <Link className="nav__link" to="/employees">
                    <i className="fas fa-terminal"></i>
                </Link>
            </li>
        </ul>
    );
};

export default Navbar;
