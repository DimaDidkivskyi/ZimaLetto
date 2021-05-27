import React from "react";
import { Link } from "react-router-dom";

import { Header, Footer } from "../components";

export const ShippingMethods = () => {
    return (
        <section className="shipping">
            <Header />
            <div className="container">
                <h1 className="shipping__title">Shipping Methods & Charges</h1>

                <div className="shipping__item">
                    <h3>Free shipping</h3>
                    <p>
                        Zimaletto offers free shipping on orders of $100.00 or
                        more and free shipping on Kids’ orders of $75.00 or
                        more. This promotion applies to deliveries within the 48
                        contiguous United States via standard ground shipping.
                    </p>
                    <p>
                        For your convenience, we offer flat rate shipping which
                        is determined by your location and preferred transit
                        time. We apologize for the inconvenience, but we do not
                        ship to P.O. boxes at this time.
                    </p>
                    <p>
                        Apple Pay users will automatically receive free 2-Day
                        shipping through ShopRunner.
                    </p>
                </div>
                <div className="shipping__item">
                    <h3>Estimated shipping times</h3>
                    <ul>
                        <li>Standard Ground: 7-10 business days</li>
                        <li>Canada Ground DHL: 7-20 business days</li>
                        <li>Second Day: 2-3 business days</li>
                        <li>Overnight: 1-2 business days</li>
                        <li>USPS 1st Priority: 7-10 business days</li>
                        <li>ShopRunner: 2 business days</li>
                    </ul>
                </div>
                <div className="shipping__item">
                    <h3>Shipping charges</h3>
                    <p>Orders within the continental United States: </p>
                    <ul>
                        <li>Standard Ground: $7.95</li>
                        <li>Second Day: $13.95</li>
                        <li>Overnight: $19.95</li>
                        <div className="shipping__content">
                            <p>
                                Orders to Alaska, Hawaii, Guam, Puerto Rico and
                                the U.S. Virgin Islands:
                            </p>
                            <p>Orders to APOs, FPOs and DPOs:</p>
                        </div>
                        <li>USPS 1st Priority: $7.95</li>
                    </ul>
                </div>
                <div className="shipping__item">
                    <h3>Shipping deadlines</h3>
                    <p>
                        We strive to ensure your order arrives as quickly as
                        possible. To make sure your order ships to meet the
                        expedited shipping deadline, your order must be placed
                        and your payment must be authorized before 12PM EST. All
                        orders placed after this time will be processed the
                        following business day. Please allow up to two business
                        days processing time in addition to standard delivery
                        time based on your selected shipping method. Note that
                        certain items are excluded from overnight or Second Day
                        shipping.
                    </p>
                </div>
                <div className="shipping__item">
                    <h3>Unexpected delays</h3>
                    <p>
                        On rare occasions, such as the holiday season and
                        special sales, delays in processing may occur. Your
                        business is important to us, so if your order is
                        unexpectedly delayed, feel free to call us at
                        1-888-866-6948 or <Link to="/contacts">contact us</Link>{" "}
                        .
                    </p>
                </div>
            </div>
            <Footer />
        </section>
    );
};
