import React from "react";

import Button from "./Button";
import Input from './Input';

const Step3 = ({ formData, onBack, onChange, onSubmit }) => {

    return (
        <div className="form-group">
            <h1>Выберите сумму</h1>
            <Input 
            onChange={onChange} 
            name="price" 
            formData={formData}
            type={'range'} 
            min="300" 
            max="5000" 
            step="100" 
            placeholder={'Введите сумму'} />
            <Button customClass={'button__back'} onClick={onBack}>Назад</Button>
            <Button customClass={'button__main'} onClick={onSubmit}>Найти</Button>
        </div>
    );
}

export default Step3;