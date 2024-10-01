

const Checkbox = ({text, id }) => {
    return (
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id={id}></input>
            <label class="form-check-label" htmlFor={id}>{text}</label>
        </div>
    );
};

export default Checkbox;