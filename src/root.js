import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <nav>
                <ul style={{display: "flex", gap: 69}}>
                    <li style={{listStyle: "none" }}>
                        <NavLink to="/">Login</NavLink>
                    </li>
                    <li style={{listStyle: "none" }}>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default Root;

