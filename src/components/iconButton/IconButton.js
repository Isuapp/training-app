import './iconButton.css';


const IconButton = ({icon, onClick})=>{

    return(
        <div className='icon-button' onClick={onClick}>
            <img src={icon} />
        </div>
    )
}


export default IconButton;