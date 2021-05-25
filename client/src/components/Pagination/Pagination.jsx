import React from "react";

import { productsPerPage } from "../../utils/config";

export const Pagination = ({ page, setPage, productCount, isPreviousData }) => {
    const pageCount = Math.ceil(productCount / productsPerPage);

    const previousPage = () => {
        setPage((old) => Math.max(old - 1, 0));
    };
    const nextPage = () => {
        setPage((old) => (pageCount < old + 1 ? old : old + 1));
    };

    return (
        <section className="pagination">
            <div className="container">
                <div className="pagination__inner">
                    <button
                        className="pagination__btn"
                        onClick={previousPage}
                        disabled={page === 1}
                    >
                        Prev
                    </button>
                    <span className="pagination__span">{page}</span>
                    <button
                        className="pagination__btn"
                        onClick={nextPage}
                        disabled={isPreviousData || pageCount < page + 1}
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};
