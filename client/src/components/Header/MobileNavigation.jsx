import React, { useState } from "react";

import { NavLinks } from "./NavLinks";
import { CgMenuRound, CgCloseO } from "react-icons/cg";

export const MobileNavigation = () => {
    const [open, setOpen] = useState(false);

    const openMobileHeader = () => {
        setOpen(!open);
    };

    const hamburgerIcon = (
        <CgMenuRound
            className="hamburger"
            size="40px"
            color="black"
            onClick={openMobileHeader}
        />
    );
    const closeIcon = (
        <CgCloseO
            className="hamburger"
            size="40px"
            color="black"
            onClick={openMobileHeader}
        />
    );

    return (
        <nav className="header__menu mobile">
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks />}
        </nav>
    );
};
