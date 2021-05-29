import React from "react";
import { Link } from "react-router-dom";

export const HeaderAdmin = () => {
    return (
        <section className="header-admin">
            <ul>
                <li>
                    <Link to="/edit-product">Products</Link>
                </li>
                <li>
                    <Link to="/edit-orders">Orders</Link>
                </li>
                <li>
                    <Link to="/edit-users">Users</Link>
                </li>
            </ul>
        </section>
    );
};
