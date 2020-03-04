import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ul className="navbar">
            <div className="navbar__arrow">
                <i className="fas fa-arrow-right"></i>
            </div>
            <li>
                <Link className="nav__link" to="/">
                    <i className="fas fa-tv"></i>
                </Link>
            </li>
            <li className="arrived_items">
                <Link className="nav__link" to="/arrivedItems">
                    <i className="fas fa-truck"></i>
                </Link>
            </li>

            <li>
                <Link className="nav__link" to="/employees">
                    <i className="fas fa-users"></i>
                </Link>
            </li>

            <li>
                <Link className="nav__link" to="/employeeForm">
                    <i className="fas fa-user-plus"></i>
                </Link>
            </li>
            <li>
                <Link className="nav__link" to="/multi-sport">
                  <i className="fas fa-swimmer"></i>
                </Link>
            </li>
        </ul>
    );
};

export default Navbar;
