import React from'react';

import Select from './Select';

const CityList = ({data }) => {
    return ( <Select data={data} defaultCity={'7700000000000'}/> );
}

export default CityList;