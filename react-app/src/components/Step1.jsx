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
            <h1>Выберите город</h1>
            {<CityList data={citiesData} formData={formData} onChange={onChange} />}
            <Button onClick={onNext}>Далее</Button>
        </div>
    );
}

export default Step1;