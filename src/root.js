import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default Root;

