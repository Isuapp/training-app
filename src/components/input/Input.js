import './input.css';

const Input =({className,label,name,type,value,onChange,placeholder,error})=>{

    return(
        <div className={className}>
            <label>{label}</label>
            <input 
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            <p>{error}</p>
        </div>
    )
}

export default Input;