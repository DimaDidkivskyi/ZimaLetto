import React from "react";
import { Link } from "react-router-dom";

import Person from "../../assets/img/person2.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__left">
                        <div className="phones">
                            <div className="phone-item">
                                <span>Free call: </span>
                                <a href="tel:+78312826000">+1 (888) 866-6948</a>
                            </div>
                            <div className="phone-item">
                                <span>To receive orders:</span>
                                <a href="tel:+79040664685">+1 (888) 945-4632</a>
                            </div>
                        </div>
                        <div className="work-time">
                            Work schedule on weekdays from 9:00am to 18:00pm
                        </div>
                        <div className="work-email">
                            <a
                                href="https://www.google.com/intl/us/gmail/about/"
                                target="blank"
                            >
                                Email: zimaletto@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="footer__center">
                        <div className="social">
                            <a
                                href="https://www.instagram.com/?hl=us"
                                target="blank"
                            >
                                We are in Instagram
                            </a>
                            <a
                                href="https://twitter.com/?lang=us"
                                target="blank"
                            >
                                We are in Twitter
                            </a>
                        </div>
                    </div>
                    <div className="footer__right">
                        <div className="person">
                            <Link to="/contacts">
                                <img src={Person} alt="" />
                                <span>Contacts</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <span className="margin">©2021. «Zimaletto»</span>
                    <Link to="/terms-conditions">
                        <span>Terms and conditions</span>
                    </Link>

                    <Link to="/confidentiality-policy">
                        <span>Confidentiality policy</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
};
