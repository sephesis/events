import React, {useEffect, useState} from'react';

// import Checkbox from './components/Checkbox.jsx';
// import CityList from './components/CityList.jsx';
// import { json_path } from './constants.js';
import Form from './components/Form.jsx';

function App() {

  // const [checkboxData, setCheckboxData] = useState([]);

  // const [citiesData, setCitiesData] = useState([]);

  const [title, setTitle] = useState('Заполните форму');

  return (
    <div className="App">
     <div className='container'>
      <h1>{title}</h1>
      <Form />
      
      {/* { <CityList data={citiesData} />}
     {checkboxData.length && checkboxData.map(item => (
                    <Checkbox key={item.id} id={item.id} text={item.text_ru} />
                ))} */}
      </div>
    </div>
  );
}

export default App;
