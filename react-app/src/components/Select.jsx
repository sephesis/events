

const Select = ({data, defaultCity }) => {
    return (
        <div class="form-group mb-4">
            <select class="form-select" aria-label="Default select example">
            {data.map(item => (
                   <option value={item.id} {...item.id === defaultCity ? 'checked' : ''}> {item.text_ru} </option>
                ))}
            </select>
          
        </div>
    );
};

export default Select;