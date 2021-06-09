import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NavLinks = () => {
    const animateFrom = { opacity: 0, y: -40 };
    const animateTo = { opacity: 1, y: 0 };

    return (
        <ul>
            <Link to="/" className="react-router__link">
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.05 }}
                >
                    <span>Catalog</span>
                </motion.li>
            </Link>
            <Link to="/delivery" className="react-router__link">
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.1 }}
                >
                    <span>Shipping</span>
                </motion.li>
            </Link>
            <Link to="/payment" className="react-router__link">
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.2 }}
                >
                    <span>Payment</span>
                </motion.li>
            </Link>
            <Link to="/contacts" className="react-router__link">
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.3 }}
                >
                    <span>Contacts</span>
                </motion.li>
            </Link>
        </ul>
    );
};
