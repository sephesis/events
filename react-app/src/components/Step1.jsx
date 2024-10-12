import React, { useState, useEffect } from "react";
import Button from "./Button";
import { json_path } from '../constants.js';
import CityList from "./CityList";

const Step1 = ({ formData, onNext, onChange }) => {

    const [citiesData, setCitiesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(json_path + 'cities.json');

                const data = await response.json();

                const dataArray = Object.values(data);

                setCitiesData(dataArray);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="form-group">
            <div className="form__top">
            <h1 className="h1">Выберите город из списка</h1>
            <span className="circle"></span>
            </div>
            
            {<CityList data={citiesData} formData={formData} onChange={onChange} />}
            <Button customClass="button__main" onClick={onNext}>Далее</Button>
        </div>
    );
}

export default Step1;