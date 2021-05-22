import React from "react";
import { useEffect } from "react";
import { render } from "react-dom";
import { useLocation } from "react-router";
import { Route } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Admin, Resource } from "react-admin";
// import simpleRestProvider from "ra-data-simple-rest";

import { PostList, PostEdit, PostCreate, PostIcon } from "./utils/posts";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { Home } from "./pages/Home";
import { Shipping } from "./pages/Shipping";
import { ShippingMethods } from "./pages/ShippingMethods";
import { Payment } from "./pages/Payment";
import { Contacts } from "./pages/Contacts";
import { Cart } from "./pages/Cart";
import { TermsConditions } from "./pages/TermsConditions";
import { ConfidentialityPolicy } from "./pages/ConfidentialityPolicy";
import { Product } from "./pages/Product";
import { Profile } from "./pages/Profile";

function App() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [location]);

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
            <Header />
            <div className="content">
                <Route path="/" component={Home} exact />
                <Route path="/delivery" component={Shipping} exact />
                <Route
                    path="/shipping-methods"
                    component={ShippingMethods}
                    exact
                />
                <Route path="/payment" component={Payment} exact />
                <Route path="/contacts" component={Contacts} exact />
                <Route path="/cart" component={Cart} exact />
                <Route
                    path="/terms-conditions"
                    component={TermsConditions}
                    exact
                />
                <Route
                    path="/confidentiality-policy"
                    component={ConfidentialityPolicy}
                    exact
                />
                <Route path="/product/:id" component={Product} exact />
                <Route path="/profile" component={Profile} exact />
            </div>
            <Footer />
        </div>
    );
}

export default App;
