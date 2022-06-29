import './select.css';

const Select = ({name, label, value, valueName})=>{



    return(
        <div className='select-wraper'>
            <label>{label}</label>
            <select name={name}>
                <option value={value}>{valueName}</option>
            </select>
        </div>
    )
}

export default Select;