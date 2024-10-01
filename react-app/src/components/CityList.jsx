import React from'react';

import Select from './Select';

const CityList = ({data, onChange, formData}) => {
    return ( <Select data={data} onChange={onChange} formData={formData} defaultCity={'7700000000000'}/> );
}

export default CityList;