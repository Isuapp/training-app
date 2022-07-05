import './inputTag.css';

const InputTag = ({name, keyword, onChange, idMuscle})=>{


    return(
        <div className='input-wraper'>
            <label htmlFor={`typology${idMuscle}`} >{keyword} </label>
            <input 
                name={name}
                type='radio'
                id={`typology${idMuscle}`}
                value={keyword}
                onChange={onChange}
            />
        </div>
    )
}

export default InputTag;