import './textarea.css';

const TextArea =({active,label,name,type,value,onChange,placeholder,error})=>{

    return(
        <div className='float-textarea'>
            <textarea 
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder} 
                rows='10'
            />
            <label className={active? 'active-label': null}>{label}</label>
            <p>{error}</p>
        </div>
    )
}

export default TextArea;