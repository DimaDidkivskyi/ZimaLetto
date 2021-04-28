import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Route } from "react-router-dom";

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

function App() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [location]);

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
                <Route path="/product" component={Product} exact />
            </div>
            <Footer />
        </div>
    );
}

export default App;
