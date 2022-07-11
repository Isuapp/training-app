import './iconButton.css';


const IconButton = ({icon, onClick, name})=>{

    return(
        <div className='icon-button' onClick={onClick}>
            <figure>
                <img src={icon} />
            </figure>
            <p>{name}</p>
        </div>
    )
}


export default IconButton;