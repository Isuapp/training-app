import './input.css';

const Input =({active,label,name,type,value,onChange,placeholder,error})=>{

    return(
        <div className='float-input'>
            <input 
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            <label className={active? 'active-label': null}>{label}</label>
            <p>{error}</p>
        </div>
    )
}

export default Input;