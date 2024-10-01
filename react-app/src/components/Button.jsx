import React from "react";

const Button = ({ children, ...props}) => {
    return (
        <button {...props} className="btn btn-primary">
            {children}
        </button>
    );
}

export default Button;