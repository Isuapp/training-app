import './button.css';

const Button = ({onClick, name,disabled})=>{

    return(

        <button
            className='button'
            onClick={onClick}
            disabled={disabled}
        >
            {name}
        </button>
    )
}

export default Button;