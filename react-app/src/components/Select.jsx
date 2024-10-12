

const Select = ({data, onChange, formData }) => {
    return (
        <div className="form-group mb-4">
            <select className="form-select city__list"
            value={formData.city}
             name="city" onChange={onChange} aria-label="Default select example">
            {data.map(item => (
                   <option key={item.id} value={item.id}> {item.text_ru} </option>
                ))}
            </select>
          
        </div>
    );
};

export default Select;