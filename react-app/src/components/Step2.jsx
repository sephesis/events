import React, { useState, useEffect } from "react";

import Button from "./Button";
import { json_path } from '../constants.js';
import Checkbox from './Checkbox';

const Step2 = ({ onBack }) => {

    const [checkboxData, setCheckboxData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(json_path + 'variants.json');

                const data = await response.json();

                const dataArray = Object.values(data);

                setCheckboxData(dataArray);
            } catch (err) {
                console.error(err);
            }

        };

        fetchData();

    }, []);
    return (
        <div className="form-group">
            <h1>Шаг 2</h1>
            {checkboxData.length && checkboxData.map(item => (
                <Checkbox key={item.id} id={item.id} text={item.text_ru} />
            ))}
            <Button onClick={onBack}>Далее</Button>
        </div>
    );
}

export default Step2;