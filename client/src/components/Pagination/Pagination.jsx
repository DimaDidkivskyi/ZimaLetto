import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";

import { productsPerPage } from "../../utils/config";

export const Pagination = ({ page, setPage, productCount, isPreviousData }) => {
    const pageCount = Math.ceil(productCount / productsPerPage);

    return (
        <div>
            <div>Current Page: {page}</div>
            <button
                onClick={() => setPage((old) => Math.max(old - 1, 0))}
                disabled={page === 1}
            >
                Previous Page
            </button>{" "}
            <button
                onClick={() => {
                    setPage((old) => (pageCount < old + 1 ? old : old + 1));
                }}
                disabled={isPreviousData || pageCount < page + 1}
            >
                Next Page
            </button>
            <ReactQueryDevtools initialIsOpen />
        </div>
    );
};
