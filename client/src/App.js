import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { Route } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";

import {
    Cart,
    ConfidentialityPolicy,
    Contacts,
    EditProduct,
    EditOrders,
    EditUsers,
    Home,
    Payment,
    Product,
    Profile,
    Shipping,
    ShippingMethods,
    TermsConditions,
    TestAdmin,
} from "./pages";

function App() {
    const location = useLocation();
    const items = useSelector(({ cart }) => cart);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [location]);
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(items));
    }, [items]);

    axios.interceptors.request.use(async function (config) {
        let token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwt_decode(token);
                if (decoded.exp * 1000 <= Date.now()) {
                    const result = await fetch(
                        "http://localhost:3000/api/user/refresh_token",
                        { method: "POST", credentials: "include", mode: "cors" }
                    );
                    const json = await result.json();
                    token = json.token;
                    localStorage.setItem("token", token);
                }

                config.headers.authorization = "Bearer " + token;
            } catch (e) {}
        }

        config.headers.withCredentials = true;
        config.headers.mode = "cors";

        return config;
    });

    return (
        <div className="wrapper">
            <div className="content">
                <Route path="/cart" component={Cart} exact />
                <Route
                    path="/confidentiality-policy"
                    component={ConfidentialityPolicy}
                    exact
                />
                <Route path="/contacts" component={Contacts} exact />
                <Route path="/edit-product" component={EditProduct} exact />
                <Route path="/edit-orders" component={EditOrders} exact />
                <Route path="/edit-users" component={EditUsers} exact />
                <Route path="/" component={Home} exact />
                <Route path="/payment" component={Payment} exact />
                <Route path="/product/:id" component={Product} exact />
                <Route path="/profile" component={Profile} exact />
                <Route path="/delivery" component={Shipping} exact />
                <Route
                    path="/shipping-methods"
                    component={ShippingMethods}
                    exact
                />
                <Route
                    path="/terms-conditions"
                    component={TermsConditions}
                    exact
                />
                <Route path="/test-admin" component={TestAdmin} exact />
                <Route path="/test-admin/:id" component={TestAdmin} exact />
            </div>
        </div>
    );
}

export default App;
