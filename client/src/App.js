import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { Route } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";

import {
    Admin,
    Cart,
    ConfidentialityPolicy,
    Contacts,
    EditProduct,
    EditOrders,
    EditUsers,
    Modal,
    Home,
    OrderRegistration,
    Payment,
    Product,
    ProductsList,
    Profile,
    Shipping,
    ShippingMethods,
    TermsConditions,
} from "./pages";
import { config } from "./utils/config";

function App() {
    const location = useLocation();
    const items = useSelector(({ cart }) => cart);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [location]);
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(items));
    }, [items]);

    axios.interceptors.request.use(async function (axiosConfig) {
        let token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwt_decode(token);
                if (decoded.exp * 1000 <= Date.now()) {
                    const result = await fetch(
                        `${config.SERVER_URL}/user/refresh_token`,
                        { method: "POST", credentials: "include", mode: "cors" }
                    );
                    const json = await result.json();
                    token = json.token;
                    localStorage.setItem("token", token);
                }

                axiosConfig.headers.authorization = "Bearer " + token;
            } catch (e) {}
        }

        axiosConfig.headers.withCredentials = true;
        axiosConfig.headers.mode = "cors";

        return axiosConfig;
    });

    return (
        <div className="wrapper">
            <div className="content">
                <Route path="/admin" component={Admin} exact />
                <Route path="/admin/:id" component={Admin} exact />
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
                <Route path="/modal" component={Modal} exact />
                <Route path="/" component={Home} exact />
                <Route
                    path="/order-registration"
                    component={OrderRegistration}
                    exact
                />
                <Route path="/payment" component={Payment} exact />
                <Route path="/product/:id" component={Product} exact />
                <Route path="/products-list" component={ProductsList} exact />
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
            </div>
        </div>
    );
}

export default App;
