

const Checkbox = ({text, id, formData, onChange }) => {
    return (
        <div className="form-check">
            <input className="form-check-input" onChange={onChange} checked={formData.areas.includes(id)} value={id} type="checkbox" id={id}></input>
            <label className="form-check-label" htmlFor={id}>{text}</label>
        </div>
    );
};

export default Checkbox;