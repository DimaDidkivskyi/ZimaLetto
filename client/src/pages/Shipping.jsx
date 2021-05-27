import React from "react";
import { Link } from "react-router-dom";

import { Header, Footer } from "../components";

import arrow from "../assets/img/payment-arrow.svg";

export const Shipping = () => {
    return (
        <section className="shipping">
            <Header />
            <div className="container">
                <div className="shipping__inner">
                    <div className="shipping__title">
                        <h1>Shipping</h1>
                    </div>
                    <div className="shipping__item">
                        <h3>When will i receive my order?</h3>
                        <p>
                            We ship Monday through Friday excluding Ukraine
                            federal holidays. Please allow up to two business
                            days processing time in addition to standard
                            delivery time based on your selected shipping
                            method.
                        </p>
                        <p>
                            Please note, during high volume times such as
                            holidays and special sales, there may be a slight
                            delay in order processing. Your business is
                            important to us, and we’ll make every effort to
                            process your order as soon as possible.
                        </p>
                    </div>
                    <div className="shipping__item">
                        <h3>Do you offer free shipping?</h3>
                        <p>
                            We offer free UPS Ground Shipping on all orders over
                            $100 and Kids' orders over $75. By becoming a
                            ShopRunner member, you can receive free 2-day
                            shipping and free returns on all eligible orders.
                        </p>
                        <p>
                            Apple Pay users will automatically receive free
                            2-Day shipping through ShopRunner.
                        </p>
                    </div>
                    <div className="shipping__item">
                        <h3>Do you offer expedited shipping?</h3>
                        <p>
                            We offer both Overnight and Second Day shipping. All
                            orders must be received and all payments must be
                            cleared by 12:00 PM EST in order to be processed on
                            the same day. Orders placed after 12:00 PM EST, on
                            weekends and/or holidays will arrive within two
                            business days for UPS Overnight Shipping, and three
                            business days for UPS Second Day Shipping.
                        </p>
                        <p>
                            We also do not offer Overnight or Second Day
                            shipping to Canada, Alaska, Hawaii, Puerto Rico, the
                            U.S. Virgin Islands, Guam, or APO/FPO addresses.
                        </p>
                    </div>
                    <div className="shipping__item">
                        <h3>Where do you ship?</h3>
                        <p>
                            We ship to all 50 states, Puerto Rico, U.S. Virgin
                            Islands, Guam, APO/FPO addresses, and Canada.
                        </p>
                    </div>
                    <div className="shipping__item">
                        <h3>Do you ship internationally?</h3>
                        <p>
                            We only ship to Canada outside of the United States.
                        </p>
                    </div>
                    <div className="shipping__item">
                        <h3>Do you offer gift boxes?</h3>
                        <p>
                            We will carefully pack your item(s) with tissue
                            paper in a premium gift box and secure it with a
                            ribbon for $5.00. Multiple items within a gift order
                            will be presented in one gift box; however some
                            items cannot be placed in a gift box due to size and
                            weight.
                        </p>
                        <p>
                            If you would like to send gifts to different
                            addresses, please place a separate order for each
                            address.
                        </p>
                    </div>
                    <div className="shipping__item">
                        <h3>How much will i be charged for shipping?</h3>
                        <p>
                            Shipping costs are based on your chosen method.
                            Total shipping charges will be displayed at checkout
                            before order completion. Visit our{" "}
                            <Link
                                to="/shipping-methods"
                                className="shipping__link"
                            >
                                Shipping Methods & Charges
                            </Link>{" "}
                            page for more information.
                        </p>
                    </div>
                    <div className="shipping__item">
                        <h3>What is shoprunner?</h3>
                        <p>
                            ShopRunner is a membership-based program that offers
                            unlimited free 2-day shipping and free returns on
                            all eligible items from Tommy.com.
                        </p>
                        <p>
                            Items that are ShopRunner eligible are indicated by
                            the ShopRunner logo within the product listing.
                            Fragrance and luggage products are not eligible for
                            ShopRunner; however, we do provide complimentary
                            free UPS Ground Shipping on these items. To receive
                            ShopRunner benefits, you must remove any ineligible
                            items indicated in shopping bag. ShopRunner is not
                            available for shipments to Canada.
                        </p>
                        <p>
                            If you'd like to become a member, or need more
                            information, visit{" "}
                            <a
                                href="https://www.shoprunner.com/"
                                target="blank"
                            >
                                ShopRunner.com.
                            </a>
                        </p>
                    </div>
                    <div className="shipping__item">
                        <h3>What are the benefits of preordering?</h3>
                        <p>
                            Pre-ordering allows our customers to reserve
                            highly-anticipated items in advance. This is
                            particularly useful when limited-release or runway
                            collections are introduced online before inventory
                            becomes available.
                        </p>
                    </div>
                    <div className="shipping__item">
                        <h3>My package arrived damaged, what do i do?</h3>
                        <p>
                            If you receive a package that appears to have been
                            tampered with or is damaged, please contact your
                            carrier immediately so that an investigation can
                            proceed. If you need additional support from us
                            after they begin the investigation process, please{" "}
                            <Link to="/contacts" className="shipping__link">
                                contact us
                            </Link>
                            . We are here to help.
                        </p>
                    </div>

                    <div className="shipping__btn">
                        <Link to="/" className="shipping__link">
                            <span className="btn-left">To catalog</span>
                        </Link>
                        <Link to="/payment" className="shipping__link">
                            <span className="btn-right">
                                Payment <img src={arrow} alt="" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};
