import React, { useState } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const Form = ({}) => {

    const [currentStep, setCurrentStep] = useState(1);

    const [formData, setFormData] = useState({
        city: '7700000000000',
        price: 0,
        areas: []
    });

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    }

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
    
        setFormData((prevData) => {
            if (checked) {
                return { ...prevData, areas: [...prevData.areas, value] };
            } else {
                return { ...prevData, areas: prevData.areas.filter(area => area !== value) };
            }
        });
    };

    const handleSubmit = (e) => {
        // Обработка отправки формы
        e.preventDefault();
        console.log('Данные формы:', formData);
        alert('Форма отправлена!');
    };

    return (
        <form>
            {currentStep === 1 && (<Step1 formData={formData} onChange={handleChange} onNext={nextStep}/>)}
            {currentStep === 2 && (<Step2 formData={formData} onChange={handleCheckboxChange} onNext={nextStep} onBack={prevStep}/>)}
            {currentStep === 3 && (<Step3 formData={formData} onChange={handleChange} onSubmit={handleSubmit} onBack={prevStep}/>)}
        </form>
    );
}

export default Form;