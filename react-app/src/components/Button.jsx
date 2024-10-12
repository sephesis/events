import React from "react";

const Button = ({ children, customClass="", ...props}) => {
    return (
        <button {...props} className={customClass + ' button'}>
            {children}
        </button>
    );
}

export default Button;