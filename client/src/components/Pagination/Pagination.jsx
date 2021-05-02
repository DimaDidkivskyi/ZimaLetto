import React from "react";
import { useState } from "react";

import { Navbar } from "./Navbar";
import { Planets } from "./Planets";
import { People } from "./People";

export const Pagination = () => {
    const [page, setPage] = useState("planets");

    return (
        <div>
            <Navbar setPage={setPage} />
            {page === "planets" ? <Planets /> : <People />}
        </div>
    );
};
