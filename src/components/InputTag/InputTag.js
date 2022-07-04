import './inputTag.css';

const InputTag = ({name, keyword, onChange})=>{


    return(
        <div className='input-wraper'>
            <label htmlFor={keyword} className='label'>{keyword}</label>
            <input 
                name={name}
                className='input'
                type='radio'
                id={keyword}
                value={keyword}
                onChange={onChange}
            />
        </div>
    )
}

export default InputTag;