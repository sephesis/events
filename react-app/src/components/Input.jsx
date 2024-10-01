import React from "react";

const Input = ({children, ...props}) => {
    return (
       <div className="form-group">
            <input {...props} type="text" value={children} />
        </div>
    );
}

export default Input;