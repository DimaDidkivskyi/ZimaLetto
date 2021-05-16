import React from "react";

export const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className="button">
            {children}
        </button>
    );
};
