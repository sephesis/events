import React, { useState } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";

const Form = ({}) => {

    const [currentStep, setCurrentStep] = useState(1);


    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    }

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    }
    return (
        <form>
            {currentStep === 1 && <Step1 onNext={nextStep}/>}
            {currentStep === 2 && <Step2 onBack={prevStep}/>}
        </form>
    );
}

export default Form;