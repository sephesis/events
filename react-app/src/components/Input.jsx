import React, {useState} from "react";

const Input = ({children, formData, placeholder, type, onChange, ...props}) => {

    const [inputText, setInputValue] = useState("");
    
    return (
       <div className="form-group">
        <label htmlFor="customRange2" className="form-label">от 300 до 5000 руб.</label>
            <input className="form-range"
             id="customRange2"
             {...props} 
             type={type} 
             value={formData.price}
             placeholder={placeholder}
              onChange={onChange}/>
        </div>
    );
}

export default Input;